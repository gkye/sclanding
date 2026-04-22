"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { APP_STORE_URL, IS_APP_STORE_LIVE } from "@/lib/stemlab"

/* ──────────────────────────────────────────────
   STEM DATA
   ────────────────────────────────────────────── */
type Stem = {
  id: "vox" | "drm" | "bas" | "pno" | "gtr" | "otr"
  label: string
  full: string
  color: string
}

const STEMS: Stem[] = [
  { id: "vox", label: "VOX", full: "Vocals", color: "oklch(0.78 0.12 25)" },
  { id: "drm", label: "DRM", full: "Drums",  color: "oklch(0.78 0.12 55)" },
  { id: "bas", label: "BAS", full: "Bass",   color: "oklch(0.75 0.11 280)" },
  { id: "pno", label: "PNO", full: "Piano",  color: "oklch(0.80 0.10 200)" },
  { id: "gtr", label: "GTR", full: "Guitar", color: "oklch(0.80 0.11 140)" },
  { id: "otr", label: "OTR", full: "Other",  color: "oklch(0.75 0.02 270)" },
]

/* ──────────────────────────────────────────────
   DETERMINISTIC WAVEFORM GEN — stable across SSR/CSR
   ────────────────────────────────────────────── */
function prng(seed: number): () => number {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return (s & 0xffffffff) / 0xffffffff
  }
}

function bars(count: number, seed: number, shaper: (i: number, r: number) => number): number[] {
  const rnd = prng(seed)
  const out: number[] = []
  for (let i = 0; i < count; i++) out.push(Math.max(0.05, Math.min(1, shaper(i, rnd()))))
  return out
}

const stemBarsById = {
  vox: bars(48, 11, (i, r) => 0.28 + Math.abs(Math.sin(i * 0.32 + 1.2)) * 0.55 + r * 0.12),
  drm: bars(48, 22, (i, r) => (i % 4 === 0 ? 0.92 : 0.2 + r * 0.35)),
  bas: bars(48, 33, (i, r) => 0.45 + Math.sin(i * 0.18) * 0.25 + r * 0.08),
  pno: bars(48, 44, (i, r) => 0.22 + Math.abs(Math.cos(i * 0.21 + 0.6)) * 0.5 + r * 0.18),
  gtr: bars(48, 55, (i, r) => 0.3 + Math.abs(Math.sin(i * 0.5 + r * 1.2)) * 0.55),
  otr: bars(48, 66, (i, r) => 0.18 + r * 0.45),
} as const

// hero uses longer arrays for the signature split animation
const heroBarsById = {
  vox: bars(64, 111, (i, r) => 0.25 + Math.abs(Math.sin(i * 0.28 + 1.2)) * 0.6 + r * 0.1),
  drm: bars(64, 222, (i, r) => (i % 4 === 0 ? 0.95 : 0.18 + r * 0.3)),
  bas: bars(64, 333, (i, r) => 0.5 + Math.sin(i * 0.16) * 0.3 + r * 0.08),
  pno: bars(64, 444, (i, r) => 0.22 + Math.abs(Math.cos(i * 0.19 + 0.6)) * 0.55 + r * 0.14),
  gtr: bars(64, 555, (i, r) => 0.3 + Math.abs(Math.sin(i * 0.42 + r * 1.1)) * 0.6),
  otr: bars(64, 666, (i, r) => 0.18 + r * 0.5),
} as const

/* ──────────────────────────────────────────────
   PRIMITIVE: STEM WAVEFORM (SVG, single row)
   ────────────────────────────────────────────── */
function Waveform({
  bars,
  color,
  active = true,
  height = 36,
  gap = 2,
  width = 1,
}: {
  bars: number[]
  color: string
  active?: boolean
  height?: number
  gap?: number
  width?: number
}) {
  const total = bars.length * (width + gap)
  return (
    <svg
      viewBox={`0 0 ${total} ${height}`}
      preserveAspectRatio="none"
      width="100%"
      height={height}
      style={{ display: "block", opacity: active ? 1 : 0.25, transition: "opacity .35s ease" }}
    >
      {bars.map((h, i) => {
        const barH = Math.round(Math.max(1, h * height) * 100) / 100
        const y = Math.round(((height - barH) / 2) * 100) / 100
        const x = Math.round(i * (width + gap) * 100) / 100
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={width}
            height={barH}
            rx={0.5}
            fill={color}
          />
        )
      })}
    </svg>
  )
}

/* ──────────────────────────────────────────────
   HERO: COMBINED → SPLIT WAVEFORM
   ────────────────────────────────────────────── */
function HeroWaveform() {
  return (
    <div className="stemlab-hero-wave">
      {STEMS.map((s, idx) => (
        <div
          key={s.id}
          className="stemlab-hero-lane"
          style={
            {
              "--lane-idx": idx,
              "--lane-color": s.color,
              animationDelay: `${400 + idx * 100}ms`,
            } as React.CSSProperties
          }
        >
          <div className="stemlab-hero-chip">{s.label}</div>
          <div className="stemlab-hero-lane-wave">
            <Waveform
              bars={heroBarsById[s.id]}
              color={s.color}
              height={28}
              gap={3}
              width={1.4}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ──────────────────────────────────────────────
   VERTICAL FADER (mini, DAW-style)
   ────────────────────────────────────────────── */
function VerticalFader({
  value,
  onChange,
  color,
  muted = false,
}: {
  value: number
  onChange: (v: number) => void
  color: string
  muted?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const drag = (clientY: number) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const v = Math.max(0, Math.min(1, 1 - (clientY - r.top) / r.height))
    onChange(v)
  }
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    drag(e.clientY)
    const move = (ev: MouseEvent) => drag(ev.clientY)
    const up = () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseup", up)
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", up)
  }
  const onTouchStart = (e: React.TouchEvent) => drag(e.touches[0].clientY)
  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    drag(e.touches[0].clientY)
  }
  const handleTop = Math.round((1 - value) * 100)
  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      className="stemlab-fader-v"
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value * 100)}
    >
      <div
        className="stemlab-fader-fill"
        style={{ height: `${Math.round(value * 100)}%`, background: muted ? "var(--faint)" : color }}
      />
      <div className="stemlab-fader-center" />
      <div className="stemlab-fader-handle" style={{ top: `calc(${handleTop}% - 5px)` }}>
        <div className="stemlab-fader-handle-line" />
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   INTERACTIVE STEM MIXER (player-v1 layout)
   ────────────────────────────────────────────── */
function StemMixer() {
  type Mix = { vol: number; mute: boolean; solo: boolean }
  const initial = useMemo<Record<string, Mix>>(
    () =>
      Object.fromEntries(
        STEMS.map((s, i) => [s.id, { vol: [0.85, 0.72, 0.78, 0.58, 0.65, 0.5][i] ?? 0.75, mute: i === 4, solo: false }])
      ),
    []
  )
  const [mix, setMix] = useState<Record<string, Mix>>(initial)
  const [master, setMaster] = useState(0.8)
  const [playing, setPlaying] = useState(false)
  const [pos, setPos] = useState(24)
  const dur = 128
  const fired = useRef(false)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setPos((p) => (p + 0.2) % dur), 100)
    return () => clearInterval(id)
  }, [playing])

  const emit = useCallback(() => {
    if (fired.current) return
    fired.current = true
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "stem_demo_interact")
    }
  }, [])

  const toggleMute = (id: string) => {
    emit()
    setMix((prev) => ({ ...prev, [id]: { ...prev[id], mute: !prev[id].mute } }))
  }
  const toggleSolo = (id: string) => {
    emit()
    setMix((prev) => ({ ...prev, [id]: { ...prev[id], solo: !prev[id].solo } }))
  }
  const setVol = (id: string, v: number) => {
    emit()
    setMix((prev) => ({ ...prev, [id]: { ...prev[id], vol: v } }))
  }

  const anySolo = STEMS.some((s) => mix[s.id].solo)
  const progress = pos / dur
  const tc = (t: number) =>
    `${String(Math.floor(t / 60)).padStart(1, "0")}:${String(Math.floor(t % 60)).padStart(2, "0")}`

  return (
    <div className="stemlab-lanes">
      {/* ── MASTER LANE ── */}
      <div className="stemlab-lane stemlab-lane-master">
        <div className="stemlab-lane-accent" aria-hidden="true" />
        <div className="stemlab-lane-row">
          <div className="stemlab-lane-label">
            <div className="stemlab-lane-chip stemlab-chip-mix">MIX</div>
            <div className="stemlab-lane-volnum">{tc(pos)}</div>
          </div>
          <div className="stemlab-lane-wave">
            <Waveform
              bars={stemBarsById.vox}
              color="rgba(244,244,245,0.42)"
              active
              height={36}
              width={1.6}
              gap={1.4}
            />
            <div className="stemlab-playhead" style={{ left: `${progress * 100}%` }} />
          </div>
          <button
            className="stemlab-fx-btn has-fx"
            type="button"
            aria-label="Master bus FX"
          >
            <span>FX</span>
            <span className="stemlab-fx-dots">
              <i style={{ background: "var(--accent)" }} />
              <i style={{ background: "var(--accent)" }} />
            </span>
          </button>
          <div className="stemlab-lane-controls">
            <VerticalFader
              value={master}
              onChange={(v) => {
                emit()
                setMaster(v)
              }}
              color="var(--accent)"
            />
            <div className="stemlab-lane-ms">
              <div className="stemlab-mini-btn bus" aria-hidden="true">BUS</div>
              <button
                type="button"
                onClick={() => {
                  emit()
                  setPlaying((p) => !p)
                }}
                className={`stemlab-mini-btn play ${playing ? "on" : ""}`}
                aria-label={playing ? "Pause demo" : "Play demo"}
              >
                {playing ? "●" : "▶"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── STEM LANES ── */}
      {STEMS.map((s) => {
        const m = mix[s.id]
        const effMuted = m.mute || (anySolo && !m.solo)
        return (
          <div key={s.id} className="stemlab-lane" data-audible={!effMuted}>
            <div className="stemlab-lane-row">
              <div className="stemlab-lane-label">
                <button
                  type="button"
                  className="stemlab-lane-chip"
                  style={{
                    background: effMuted ? "transparent" : s.color,
                    borderColor: s.color,
                    color: effMuted ? s.color : "#0A0A0B",
                  }}
                  onClick={() => toggleMute(s.id)}
                  aria-label={`Toggle ${s.full}`}
                >
                  {s.label}
                </button>
                <div className="stemlab-lane-volnum">{Math.round(m.vol * 100)}</div>
              </div>
              <div className="stemlab-lane-wave">
                <Waveform
                  bars={stemBarsById[s.id]}
                  color={s.color}
                  active={!effMuted}
                  height={36}
                  width={1.6}
                  gap={1.4}
                />
                <div
                  className="stemlab-playhead"
                  style={{ left: `${progress * 100}%`, opacity: effMuted ? 0.25 : 0.55 }}
                />
              </div>
              <button
                className="stemlab-fx-btn"
                type="button"
                aria-label={`${s.full} FX chain`}
              >
                FX
              </button>
              <div className="stemlab-lane-controls">
                <VerticalFader
                  value={m.vol}
                  onChange={(v) => setVol(s.id, v)}
                  color={s.color}
                  muted={effMuted}
                />
                <div className="stemlab-lane-ms">
                  <button
                    type="button"
                    onClick={() => toggleMute(s.id)}
                    className={`stemlab-mini-btn m ${m.mute ? "on" : ""}`}
                    aria-pressed={m.mute}
                    aria-label={`Mute ${s.full}`}
                  >
                    M
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSolo(s.id)}
                    className={`stemlab-mini-btn s ${m.solo ? "on" : ""}`}
                    aria-pressed={m.solo}
                    aria-label={`Solo ${s.full}`}
                  >
                    S
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* ── TIMECODE STRIP ── */}
      <div className="stemlab-lane-footer">
        <span className="mono">{tc(pos)}</span>
        <span className="mono faint">128 BPM · Cm · {dur}S</span>
        <span className="mono faint">{tc(dur)}</span>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   APP STORE BADGE — inert w/ placeholder eyebrow
   ────────────────────────────────────────────── */
function DownloadBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const emit = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "download_click", { placeholder: !IS_APP_STORE_LIVE })
    }
  }
  const h = size === "sm" ? 32 : 40
  const w = size === "sm" ? 108 : 136
  if (!IS_APP_STORE_LIVE) {
    return (
      <div className="stemlab-badge-wrap" aria-disabled="true">
        <span className="mono eyebrow accent">· Coming soon</span>
        <span
          className="stemlab-badge stemlab-badge-disabled"
          onClick={emit}
          role="button"
          tabIndex={-1}
        >
          <Image
            src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            alt="Download on the App Store (coming soon)"
            width={w}
            height={h}
            className="invert"
            style={{ height: h, width: "auto" }}
          />
        </span>
      </div>
    )
  }
  return (
    <Link href={APP_STORE_URL} onClick={emit} className="stemlab-badge">
      <Image
        src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
        alt="Download StemLab on the App Store"
        width={w}
        height={h}
        className="invert"
        style={{ height: h, width: "auto" }}
      />
    </Link>
  )
}

/* ──────────────────────────────────────────────
   PILLAR SECTION
   ────────────────────────────────────────────── */
function Pillar({
  num,
  kicker,
  title,
  body,
  spec,
  children,
}: {
  num: string
  kicker: string
  title: string
  body: string
  spec?: string
  children?: React.ReactNode
}) {
  return (
    <section className="stemlab-pillar">
      <div className="stemlab-pillar-meta">
        <span className="mono eyebrow">§ {num}</span>
        <span className="mono eyebrow accent">— {kicker}</span>
      </div>
      <h2 className="stemlab-pillar-title">{title}</h2>
      <p className="stemlab-pillar-body">{body}</p>
      {spec && <div className="stemlab-pillar-spec mono">{spec}</div>}
      {children}
    </section>
  )
}

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
export default function StemLabLandingPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className={`stemlab-root ${mounted ? "is-mounted" : ""}`}>
      {/* ─── FONTS + TOKENS + ANIMATIONS ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .stemlab-root {
          --bg:        #0A0A0B;
          --surface:   #141416;
          --surface2:  #1C1C1F;
          --surface3:  #26262A;
          --hair:      rgba(255,255,255,0.07);
          --hair-str:  rgba(255,255,255,0.14);
          --text:      #F4F4F5;
          --dim:       rgba(244,244,245,0.62);
          --mute:      rgba(244,244,245,0.38);
          --faint:     rgba(244,244,245,0.22);
          --accent:    oklch(0.85 0.18 145);
          --accent-dim: oklch(0.85 0.18 145 / 0.18);
          --accent-glow: oklch(0.85 0.18 145 / 0.4);

          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, "SF Pro Text", "SF Pro", system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .stemlab-root .display {
          font-family: "Archivo", -apple-system, system-ui, sans-serif;
          font-stretch: 100%;
          letter-spacing: -0.03em;
          line-height: 0.92;
        }
        .stemlab-root .mono {
          font-family: "JetBrains Mono", "SF Mono", ui-monospace, Menlo, monospace;
          font-variant-numeric: tabular-nums;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .stemlab-root .eyebrow { color: var(--dim); font-weight: 600; }
        .stemlab-root .faint { color: var(--mute); }
        .stemlab-root .accent { color: var(--accent); }

        /* noise / grain overlay — barely there */
        .stemlab-root::before {
          content: '';
          position: fixed; inset: 0; pointer-events: none; z-index: 60; opacity: .05;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        /* page reveal */
        @keyframes stemlab-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes stemlab-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* hero split lanes */
        @keyframes stemlab-lane-settle {
          0%   { transform: translateY(calc(var(--lane-idx) * -36px)) scale(0.98); opacity: 0; filter: saturate(0); }
          35%  { opacity: 0.6; filter: saturate(0.8); }
          100% { transform: translateY(0) scale(1); opacity: 1; filter: saturate(1); }
        }

        /* scrolling tickers */
        @keyframes stemlab-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* heading reveal (sequential letter-ish) */
        @keyframes stemlab-slice-in {
          from { clip-path: inset(100% 0 0 0); opacity: 0; }
          to   { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .stemlab-root *,
          .stemlab-root *::before,
          .stemlab-root *::after {
            animation: none !important;
            transition: none !important;
          }
        }

        /* ─── HEADER ─── */
        .stemlab-header {
          position: sticky; top: 0; z-index: 40;
          background: rgba(10,10,11,0.75);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border-bottom: 1px solid var(--hair);
        }
        .stemlab-header-inner {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; padding: 14px 20px;
          max-width: 1280px; margin: 0 auto;
        }
        .stemlab-wordmark {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: var(--text);
        }
        .stemlab-wordmark img {
          width: 26px; height: 26px; border-radius: 6px;
          outline: 1px solid var(--hair-str);
        }
        .stemlab-wordmark-text {
          font-family: "Archivo", system-ui, sans-serif;
          font-weight: 800; letter-spacing: -0.04em; font-size: 19px;
          text-transform: uppercase;
        }
        .stemlab-nav {
          display: none; gap: 24px;
        }
        @media (min-width: 768px) {
          .stemlab-nav { display: inline-flex; }
        }
        .stemlab-nav a {
          color: var(--dim); text-decoration: none;
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          position: relative; padding: 4px 0; transition: color .2s;
        }
        .stemlab-nav a:hover { color: var(--text); }
        .stemlab-nav a::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -2px;
          height: 1px; background: var(--accent);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        .stemlab-nav a:hover::after { transform: scaleX(1); }

        /* ─── SECTION FRAME ─── */
        .stemlab-section {
          max-width: 1120px; margin: 0 auto;
          padding: 72px 20px;
          position: relative;
        }
        @media (min-width: 768px) {
          .stemlab-section { padding: 120px 40px; }
        }
        .stemlab-section + .stemlab-section {
          border-top: 1px solid var(--hair);
        }

        /* ─── TICKER ─── */
        .stemlab-ticker {
          border-top: 1px solid var(--hair);
          border-bottom: 1px solid var(--hair);
          overflow: hidden;
          padding: 10px 0;
          background: var(--surface);
        }
        .stemlab-ticker-track {
          display: inline-flex; gap: 40px; white-space: nowrap;
          animation: stemlab-marquee 50s linear infinite;
        }
        .stemlab-ticker-track > span {
          color: var(--dim);
          display: inline-flex; align-items: center; gap: 40px;
        }
        .stemlab-ticker-track > span::after {
          content: "●"; color: var(--accent); font-size: 6px;
        }

        /* ─── HERO ─── */
        .stemlab-hero {
          padding-top: 56px; padding-bottom: 40px;
          position: relative;
        }
        @media (min-width: 768px) {
          .stemlab-hero { padding-top: 96px; padding-bottom: 64px; }
        }
        .stemlab-hero-meta {
          display: flex; justify-content: space-between; align-items: center;
          padding-bottom: 40px; border-bottom: 1px solid var(--hair);
          gap: 16px;
        }
        .stemlab-hero-meta .serial {
          font-family: "JetBrains Mono", monospace; font-size: 10px;
          letter-spacing: 0.14em; color: var(--mute); text-transform: uppercase;
        }
        .stemlab-hero-title {
          font-family: "Archivo", system-ui, sans-serif;
          font-weight: 900;
          font-size: clamp(3rem, 15.5vw, 14rem);
          line-height: 0.86;
          letter-spacing: -0.05em;
          margin: 56px 0 0;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .stemlab-hero-title .split {
          color: var(--accent);
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.04em;
          padding: 0 0.02em;
        }
        .stemlab-hero-title .slash {
          color: var(--mute); font-weight: 300; font-style: normal;
          margin: 0 -0.02em;
        }
        .stemlab-hero-sub {
          display: grid; grid-template-columns: 1fr;
          gap: 24px; margin-top: 48px;
          align-items: end;
        }
        @media (min-width: 768px) {
          .stemlab-hero-sub {
            grid-template-columns: 1.1fr 1fr;
            gap: 48px;
          }
        }
        .stemlab-hero-tag {
          font-family: "Archivo", system-ui, sans-serif;
          font-weight: 500; font-size: clamp(1.25rem, 3.6vw, 1.85rem);
          line-height: 1.15; letter-spacing: -0.025em;
          color: var(--text);
          max-width: 34ch;
        }
        .stemlab-hero-tag .em {
          color: var(--accent); font-style: italic; font-weight: 400;
        }
        .stemlab-hero-cta {
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 10px;
        }
        .stemlab-hero-cta .ctx {
          color: var(--mute); font-size: 12px;
        }

        /* ─── HERO WAVEFORM (split) ─── */
        .stemlab-hero-wave {
          margin-top: 56px;
          border: 1px solid var(--hair);
          border-radius: 10px;
          background: linear-gradient(180deg, var(--surface) 0%, #0E0E10 100%);
          padding: 8px 4px;
          display: flex; flex-direction: column; gap: 2px;
          position: relative;
          overflow: hidden;
        }
        .stemlab-hero-wave::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0;
          height: 1px; background: linear-gradient(90deg, transparent, var(--accent-glow), transparent);
          animation: stemlab-marquee 6s linear infinite;
        }
        .stemlab-hero-lane {
          display: grid;
          grid-template-columns: 44px 1fr;
          align-items: center;
          gap: 8px;
          padding: 4px 10px;
          opacity: 0;
          animation: stemlab-lane-settle 900ms cubic-bezier(.22,1,.36,1) both;
        }
        .stemlab-hero-chip {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
          color: var(--lane-color);
          padding: 3px 6px;
          border: 1px solid var(--lane-color);
          border-radius: 3px;
          text-align: center;
          opacity: 0.9;
        }
        .stemlab-hero-lane-wave { min-width: 0; }

        /* ─── LANES (player-v1 layout) ─── */
        .stemlab-lanes { display: flex; flex-direction: column; gap: 4px; }
        .stemlab-lane {
          background: var(--surface);
          border: 1px solid var(--hair);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          transition: border-color .15s ease;
        }
        .stemlab-lane-master {
          border-color: var(--hair-str);
          box-shadow: inset 0 0 0 1px rgba(140,226,110,0.03);
        }
        .stemlab-lane-accent {
          position: absolute; top: 0; bottom: 0; left: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--accent), var(--accent-dim));
          pointer-events: none;
        }
        .stemlab-lane-row {
          display: flex; align-items: stretch; gap: 8px;
          padding: 8px 8px 8px 10px;
        }
        .stemlab-lane-label {
          width: 42px; flex-shrink: 0;
          display: flex; flex-direction: column; gap: 4px;
          justify-content: center;
        }
        .stemlab-lane-chip {
          width: 26px; height: 22px;
          border-radius: 5px;
          border: 1px solid;
          font-family: "JetBrains Mono", monospace;
          font-weight: 700; font-size: 9px; letter-spacing: 0.06em;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; user-select: none; padding: 0;
          transition: all .18s ease;
        }
        .stemlab-chip-mix {
          background: var(--text); color: var(--bg); border-color: var(--text);
          cursor: default;
        }
        .stemlab-lane-volnum {
          font-family: "JetBrains Mono", monospace;
          font-size: 9px; letter-spacing: 0.04em;
          color: var(--mute); text-transform: uppercase;
          font-variant-numeric: tabular-nums;
        }
        .stemlab-lane-wave {
          flex: 1; min-width: 0; position: relative;
          display: flex; align-items: center;
        }
        .stemlab-playhead {
          position: absolute; top: 2px; bottom: 2px; width: 1.5px;
          background: var(--text); opacity: 0.55;
          box-shadow: 0 0 6px var(--accent-glow);
          pointer-events: none;
          transition: left .12s linear;
        }
        .stemlab-fx-btn {
          position: relative;
          width: 30px; height: 44px;
          border-radius: 6px;
          background: var(--surface2);
          border: 1px solid var(--hair);
          color: var(--dim);
          font-family: "JetBrains Mono", monospace;
          font-weight: 700; font-size: 9px; letter-spacing: 0.05em;
          cursor: pointer; padding: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 2px;
          flex-shrink: 0;
          transition: background .15s, color .15s, border-color .15s;
        }
        .stemlab-fx-btn.has-fx {
          background: var(--surface3); color: var(--text);
        }
        .stemlab-fx-btn:hover { color: var(--text); border-color: var(--hair-str); }
        .stemlab-fx-dots {
          display: flex; gap: 2px;
        }
        .stemlab-fx-dots i {
          width: 3px; height: 3px; border-radius: 1.5px;
          display: block;
        }
        .stemlab-lane-controls {
          display: flex; gap: 4px; align-items: center; flex-shrink: 0;
        }
        .stemlab-fader-v {
          width: 20px; height: 44px;
          background: var(--surface2);
          border: 1px solid var(--hair);
          border-radius: 5px;
          position: relative;
          cursor: ns-resize;
          flex-shrink: 0;
          touch-action: none;
          user-select: none;
        }
        .stemlab-fader-fill {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          opacity: 0.32;
          border-radius: 4px;
          pointer-events: none;
        }
        .stemlab-fader-center {
          position: absolute;
          top: 50%; left: 2px; right: 2px;
          height: 0.5px;
          background: var(--hair-str);
          pointer-events: none;
        }
        .stemlab-fader-handle {
          position: absolute;
          left: -2px; right: -2px;
          height: 10px; border-radius: 3px;
          background: var(--text);
          box-shadow: 0 1px 2px rgba(0,0,0,0.5);
          border-top: 1px solid rgba(255,255,255,0.4);
          pointer-events: none;
        }
        .stemlab-fader-handle-line {
          position: absolute;
          top: 50%; left: 2px; right: 2px; height: 1px;
          background: var(--faint);
          transform: translateY(-50%);
        }
        .stemlab-lane-ms {
          display: flex; flex-direction: column; gap: 3px;
          flex-shrink: 0;
        }
        .stemlab-mini-btn {
          width: 20px; height: 20px;
          border-radius: 4px;
          background: var(--surface2);
          border: 1px solid var(--hair);
          font-family: "JetBrains Mono", monospace;
          font-weight: 700; font-size: 9px; letter-spacing: 0.04em;
          color: var(--dim);
          cursor: pointer; padding: 0; line-height: 1;
          display: flex; align-items: center; justify-content: center;
          transition: all .15s ease;
        }
        .stemlab-mini-btn:hover { color: var(--text); border-color: var(--hair-str); }
        .stemlab-mini-btn.bus {
          color: var(--faint); cursor: default;
        }
        .stemlab-mini-btn.m.on {
          background: oklch(0.7 0.2 25); color: var(--bg); border-color: transparent;
        }
        .stemlab-mini-btn.s.on {
          background: oklch(0.8 0.15 70); color: var(--bg); border-color: transparent;
        }
        .stemlab-mini-btn.play.on {
          background: var(--accent-dim); color: var(--accent); border-color: var(--accent);
        }
        .stemlab-lane-footer {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 12px;
          margin-top: 4px;
        }

        /* ─── PILLARS ─── */
        .stemlab-pillars {
          display: grid; grid-template-columns: 1fr; gap: 0;
        }
        .stemlab-pillar {
          padding: 56px 0;
          border-bottom: 1px solid var(--hair);
          display: grid; gap: 14px;
        }
        .stemlab-pillar:last-child { border-bottom: none; }
        @media (min-width: 900px) {
          .stemlab-pillar {
            grid-template-columns: 180px 1fr;
            column-gap: 40px;
            align-items: start;
          }
          .stemlab-pillar-meta { position: sticky; top: 100px; }
        }
        .stemlab-pillar-meta {
          display: flex; flex-direction: column; gap: 4px;
          padding-top: 6px;
        }
        .stemlab-pillar-title {
          font-family: "Archivo", sans-serif;
          font-weight: 800; font-size: clamp(2rem, 6vw, 3.4rem);
          letter-spacing: -0.04em; line-height: 1;
          text-transform: uppercase;
          margin: 0;
        }
        .stemlab-pillar-body {
          color: var(--dim);
          font-size: 16px; line-height: 1.55; max-width: 62ch;
          margin: 0;
        }
        @media (min-width: 768px) {
          .stemlab-pillar-body { font-size: 18px; }
        }
        .stemlab-pillar-spec {
          color: var(--accent);
          padding: 10px 14px;
          border: 1px dashed var(--accent-dim);
          border-radius: 6px;
          background: rgba(140,226,110,0.03);
          display: inline-flex;
          max-width: max-content;
        }

        /* ─── TECH SPECS ─── */
        .stemlab-specs {
          border: 1px solid var(--hair);
          border-radius: 12px;
          background: var(--surface);
          overflow: hidden;
        }
        .stemlab-specs-grid {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .stemlab-specs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 960px) {
          .stemlab-specs-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .stemlab-spec-cell {
          padding: 24px;
          border-right: 1px solid var(--hair);
          border-bottom: 1px solid var(--hair);
          display: flex; flex-direction: column; gap: 10px;
        }
        .stemlab-spec-cell > .label {
          font-family: "JetBrains Mono", monospace;
          font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--mute);
        }
        .stemlab-spec-cell > .value {
          font-family: "Archivo", sans-serif;
          font-size: 20px; font-weight: 600; letter-spacing: -0.02em;
          color: var(--text);
        }
        .stemlab-spec-cell > .detail {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px; letter-spacing: 0.08em;
          color: var(--dim); text-transform: uppercase;
        }

        /* ─── PRIVACY CALLOUT ─── */
        .stemlab-privacy {
          padding: 96px 20px;
          background: radial-gradient(ellipse at center, rgba(140,226,110,0.05) 0%, transparent 60%);
          text-align: center;
          border-top: 1px solid var(--hair);
          border-bottom: 1px solid var(--hair);
        }
        .stemlab-privacy h2 {
          font-family: "Archivo", sans-serif;
          font-weight: 800; letter-spacing: -0.04em;
          font-size: clamp(2.2rem, 7vw, 4.4rem);
          margin: 16px 0 18px;
          line-height: 0.95;
        }
        .stemlab-privacy h2 em {
          color: var(--accent); font-style: italic; font-weight: 500;
        }
        .stemlab-privacy p {
          color: var(--dim); font-size: 16px; line-height: 1.6;
          max-width: 48ch; margin: 0 auto;
        }
        .stemlab-privacy a {
          display: inline-block; margin-top: 24px;
          color: var(--accent); text-decoration: none;
          border-bottom: 1px solid var(--accent-dim);
          padding-bottom: 3px;
          font-family: "JetBrains Mono", monospace;
          font-size: 12px; letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ─── FOOTER ─── */
        .stemlab-footer {
          max-width: 1280px; margin: 0 auto;
          padding: 48px 20px 56px;
          display: flex; flex-direction: column; gap: 24px;
        }
        @media (min-width: 768px) {
          .stemlab-footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        .stemlab-footer-left {
          display: flex; align-items: center; gap: 12px;
          color: var(--mute); font-family: "JetBrains Mono", monospace;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
        }
        .stemlab-footer-left img {
          width: 22px; height: 22px; border-radius: 5px;
          outline: 1px solid var(--hair-str);
        }
        .stemlab-footer nav {
          display: flex; flex-wrap: wrap; gap: 24px;
        }
        .stemlab-footer nav a {
          color: var(--dim); text-decoration: none;
          font-family: "JetBrains Mono", monospace;
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          transition: color .2s;
        }
        .stemlab-footer nav a:hover { color: var(--text); }

        /* ─── BADGE ─── */
        .stemlab-badge-wrap {
          display: inline-flex; flex-direction: column; align-items: flex-start; gap: 4px;
        }
        .stemlab-badge {
          display: inline-flex; align-items: center;
          text-decoration: none;
          transition: transform .2s, opacity .2s;
        }
        .stemlab-badge:hover { transform: translateY(-1px); }
        .stemlab-badge-disabled {
          cursor: default; opacity: 0.8;
        }
        .stemlab-badge-disabled:hover { transform: none; }

        /* mounted-state sequential fade */
        .stemlab-root.is-mounted .reveal-1 { animation: stemlab-fade-up .7s cubic-bezier(.22,1,.36,1) both; animation-delay: .05s; }
        .stemlab-root.is-mounted .reveal-2 { animation: stemlab-fade-up .7s cubic-bezier(.22,1,.36,1) both; animation-delay: .18s; }
        .stemlab-root.is-mounted .reveal-3 { animation: stemlab-fade-up .75s cubic-bezier(.22,1,.36,1) both; animation-delay: .28s; }
        .stemlab-root.is-mounted .reveal-4 { animation: stemlab-fade-up .75s cubic-bezier(.22,1,.36,1) both; animation-delay: .38s; }
        .stemlab-root:not(.is-mounted) .reveal-1,
        .stemlab-root:not(.is-mounted) .reveal-2,
        .stemlab-root:not(.is-mounted) .reveal-3,
        .stemlab-root:not(.is-mounted) .reveal-4 { opacity: 0; }
      `}</style>

      {/* ─── HEADER ─── */}
      <header className="stemlab-header">
        <div className="stemlab-header-inner">
          <Link href="/stemlab" className="stemlab-wordmark">
            <Image src="/stemlab_app_icon.png" alt="StemLab" width={26} height={26} />
            <span className="stemlab-wordmark-text">Stem<span style={{ color: "var(--accent)" }}>/</span>Lab</span>
          </Link>
          <nav className="stemlab-nav">
            <a href="#features">Features</a>
            <a href="#specs">Specs</a>
            <a href="#privacy">Privacy</a>
          </nav>
          <DownloadBadge size="sm" />
        </div>
      </header>

      {/* ─── TICKER ─── */}
      <div className="stemlab-ticker" aria-hidden="true">
        <div className="stemlab-ticker-track">
          <span className="mono">VOX · DRM · BAS · PNO · GTR · OTR</span>
          <span className="mono">ON-DEVICE AI</span>
          <span className="mono">500 MB MAX</span>
          <span className="mono">WAV · FLAC · M4A</span>
          <span className="mono">44.1 / 48 / 96 KHZ</span>
          <span className="mono">16 / 24 / 32 BIT</span>
          <span className="mono">NOTHING UPLOADED</span>
          <span className="mono">VOX · DRM · BAS · PNO · GTR · OTR</span>
          <span className="mono">ON-DEVICE AI</span>
          <span className="mono">500 MB MAX</span>
          <span className="mono">WAV · FLAC · M4A</span>
          <span className="mono">44.1 / 48 / 96 KHZ</span>
          <span className="mono">16 / 24 / 32 BIT</span>
          <span className="mono">NOTHING UPLOADED</span>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="stemlab-section stemlab-hero">
        <div className="stemlab-hero-meta reveal-1">
          <span className="serial">SN · SL-001 · LAUPER LABS</span>
          <span className="serial">iPHONE · {new Date().getFullYear()}</span>
        </div>

        <h1 className="stemlab-hero-title reveal-2">
          STEM<span className="slash">/</span><span className="split">LAB</span>
        </h1>

        <div className="stemlab-hero-sub">
          <p className="stemlab-hero-tag reveal-3">
            Separate any song into <span className="em">six isolated stems.</span> Vocals, drums, bass, guitar, piano, and the rest. On your iPhone. <span style={{ color: "var(--mute)" }}>Nothing uploaded.</span>
          </p>
          <div className="stemlab-hero-cta reveal-4">
            <DownloadBadge />
            <span className="ctx mono">iPhone · 4-stem & 6-stem AI</span>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE MIXER ─── */}
      <section id="features" className="stemlab-section">
        <StemMixer />
      </section>

      {/* ─── FOUR PILLARS ─── */}
      <section id="pillars" className="stemlab-section">
        <div className="stemlab-pillars">
          <Pillar
            num="01"
            kicker="SEPARATE"
            title="On-device AI."
            body="Import any MP3, WAV, FLAC, M4A, MP4, or MOV file up to 500 MB. Choose a 4-stem or 6-stem model to extract vocals, drums, bass, guitar, piano, and more. All processing happens on your iPhone — nothing is uploaded."
            spec="ON-DEVICE AI · 4 or 6 STEMS · 500 MB MAX"
          />
          <Pillar
            num="02"
            kicker="MIX"
            title="Sounds like a DAW."
            body="Control each stem's volume independently. Solo or mute any track. Scrub the timeline with centisecond precision and watch live waveforms update in real time."
            spec="CENTISECOND TIMELINE · LIVE WAVEFORMS"
          />
          <Pillar
            num="03"
            kicker="ADD EFFECTS"
            title="Six-effect chain per stem."
            body="Shape each stem with Pitch Shift, Reverb, Delay, Compressor, 4-band EQ, and Saturation. Apply Bus FX to your full mix. Bypass effects without removing them. Save your settings as reusable presets."
            spec="PITCH · REVERB · DELAY · COMP · EQ · SAT"
          />
          <Pillar
            num="04"
            kicker="EXPORT"
            title="Studio-grade out."
            body="Export individual stems or a new stereo mixdown in WAV, FLAC, or M4A. Choose your sample rate and bit depth. Share directly to your DAW, sampler, or any other app."
            spec="WAV · FLAC · M4A · 44.1 / 48 / 96 KHZ · 16 / 24 / 32 BIT"
          />
        </div>
      </section>

      {/* ─── TECH SPECS ─── */}
      <section id="specs" className="stemlab-section">
        <header style={{ marginBottom: 32 }}>
          <span className="mono eyebrow">§ SPECIFICATIONS</span>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 800, margin: "8px 0 0", textTransform: "uppercase" }}>
            The fine print.
          </h2>
        </header>
        <div className="stemlab-specs">
          <div className="stemlab-specs-grid">
            <div className="stemlab-spec-cell">
              <div className="label">Formats in</div>
              <div className="value">MP3 · WAV · FLAC</div>
              <div className="detail">M4A · MP4 · MOV · up to 500 MB</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Formats out</div>
              <div className="value">WAV · FLAC · M4A</div>
              <div className="detail">Stems or stereo mixdown</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Sample rate</div>
              <div className="value">44.1 / 48 / 96</div>
              <div className="detail">kHz · selectable on export</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Bit depth</div>
              <div className="value">16 / 24 / 32</div>
              <div className="detail">bit · pcm · floating point</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Processing</div>
              <div className="value">On-device AI</div>
              <div className="detail">Apple Silicon · Nothing uploaded</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Effects per stem</div>
              <div className="value">Six-effect chain</div>
              <div className="detail">Pitch · Reverb · Delay · Comp · EQ · Sat</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Stem models</div>
              <div className="value">4 or 6 stems</div>
              <div className="detail">Vox · Drm · Bas · Gtr · Pno · Other</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Platform</div>
              <div className="value">iPhone</div>
              <div className="detail">Universal · optimized for Apple Silicon</div>
            </div>
            <div className="stemlab-spec-cell">
              <div className="label">Pricing</div>
              <div className="value">Free · Pro</div>
              <div className="detail">Yearly or one-time lifetime</div>
            </div>
          </div>
        </div>
        <p style={{ color: "var(--mute)", fontSize: 13, marginTop: 20, fontFamily: '"JetBrains Mono", monospace', letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Built for musicians, producers, beatmakers, and DJs.
        </p>
      </section>

      {/* ─── PRIVACY ─── */}
      <section id="privacy" className="stemlab-privacy">
        <span className="mono eyebrow">§ PRIVACY</span>
        <h2>
          Nothing leaves<br />your <em>device.</em>
        </h2>
        <p>
          All separation, mixing, and rendering runs locally on your iPhone using Apple-silicon ML. No cloud. No account. No uploads. Your audio is yours.
        </p>
        <Link href="/stemlab/privacy">Read the privacy policy →</Link>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="stemlab-section" style={{ textAlign: "center", paddingTop: 96, paddingBottom: 120 }}>
        <span className="mono eyebrow">§ DOWNLOAD</span>
        <h2 className="display" style={{ fontSize: "clamp(2.4rem, 8vw, 5rem)", fontWeight: 900, margin: "16px 0 24px", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
          Get the <span style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>lab</span>.
        </h2>
        <p style={{ color: "var(--dim)", fontSize: 16, maxWidth: "42ch", margin: "0 auto 32px", lineHeight: 1.55 }}>
          StemLab Pro unlocks unlimited separations, individual stem export, full FX chains, and unlimited presets — yearly or one-time lifetime.
        </p>
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <DownloadBadge />
          <span className="mono faint">iPhone</span>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: "1px solid var(--hair)" }}>
        <div className="stemlab-footer">
          <div className="stemlab-footer-left">
            <Image src="/stemlab_app_icon.png" alt="StemLab" width={22} height={22} />
            <span>© {new Date().getFullYear()} Lauper Labs</span>
          </div>
          <nav>
            <Link href="/">Lauper Labs</Link>
            <Link href="/stemlab/privacy">Privacy</Link>
            <Link href="/stemlab/terms">Terms</Link>
            <a href="mailto:lauperlabs@gmail.com">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
