"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

/* ────────────────────────────────────────────
   FILTER DATA
   ──────────────────────────────────────────── */
const filters = [
  {
    id: "filmEmulation",
    label: "Film Emulation",
    tagline: "Photos & Video",
    desc: "Pro film emulation tools for photos and video.",
    image: "/peeklut/Group 34.jpg",
    mood: "warm",
  },
  {
    id: "colorGrading",
    label: "Precision Color Grading",
    tagline: "",
    desc: "Reach inside individual color channels. Dial in exactly the right feel with professional-grade controls.",
    image: "/peeklut/Group 35.jpg",
    mood: "cool",
  },
  {
    id: "halation",
    label: "Halation",
    tagline: "",
    desc: "Real film bleeds. Highlights bloom outward into the shadows with that unmistakable analog warmth.",
    image: "/peeklut/Group 39.jpg",
    mood: "warm",
  },
  {
    id: "exportLut",
    label: "Export .cube LUTs",
    tagline: "",
    desc: "Convert your adjustments to .cube LUT files. Drop into DaVinci Resolve, Premiere, or share with collaborators.",
    image: "/peeklut/Group 38.jpg",
    mood: "neutral",
  },
  {
    id: "masks",
    label: "Image Masks",
    tagline: "",
    desc: "Apply grades only where you want them. Linear and shape masks with feather control.",
    image: "/promo_masks_linear.png",
    mood: "cool",
  },
  {
    id: "presets",
    label: "Cinematic Film Presets",
    tagline: "",
    desc: "One-tap cinematic looks. From Kodak to Fuji, vintage to modern — built for photos and video.",
    image: "/peeklut/Group 46.jpg",
    mood: "warm",
  },
  {
    id: "combineLuts",
    label: "Combine LUTs",
    tagline: "",
    desc: "Stack LUTs non-destructively. Layer creative and technical looks with live preview.",
    image: "/peeklut/Group 48.jpg",
    mood: "neutral",
  },
]

/* ──────────────────────────────────────────────
   MOOD → ACCENT COLOUR MAP  (warm WA palette)
   ────────────────────────────────────────────── */
const moodColor: Record<string, string> = {
  warm:    "#9B3A2E", // burgundy-red
  cool:    "#3A5C7A", // dusty navy
  neutral: "#7A6B52", // warm brown
}

/* ────────────────────────────────────────────
   DECORATIVE HELPERS
   ──────────────────────────────────────────── */
function CornerFrame({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative ${className}`} style={style}>
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-current opacity-30" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-current opacity-30" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-current opacity-30" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-current opacity-30" />
      {children}
    </div>
  )
}

function Diamond({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="currentColor" className={className}>
      <rect x="5" y="0" width="7.07" height="7.07" rx="0.5" transform="rotate(45 5 5)" />
    </svg>
  )
}

function RegMark({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className={className}>
      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.6" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  )
}

function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-current opacity-15" />
      <Diamond size={7} className="opacity-25" />
      <div className="flex-1 h-px bg-current opacity-15" />
    </div>
  )
}

/* ────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────── */
export default function PeekLUTFilmPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <div
      className="min-h-screen wa-body"
      style={{
        "--bg":      "#F2EAE0",
        "--paper":   "#F9F5EF",
        "--ink":     "#1E1710",
        "--faint":   "rgba(30,23,16,0.06)",
        "--accent":  "#3A5C7A",
        background:  "var(--bg)",
        color:       "var(--ink)",
      } as React.CSSProperties}
    >
      {/* ── FONTS & GLOBALS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        .wa-body    { font-family: 'Josefin Sans', 'Futura', sans-serif; letter-spacing: 0.01em; }
        .wa-display { font-family: 'EB Garamond', Georgia, serif; }
        .wa-serif   { font-family: 'Libre Baskerville', Georgia, serif; }

        @keyframes revealUp   { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:none } }
        @keyframes revealFade { from { opacity:0 } to { opacity:1 } }
        @keyframes popIn      { from { opacity:0; transform:scale(0.94) } to { opacity:1; transform:none } }

        .anim-up   { animation: revealUp   0.75s cubic-bezier(.22,1,.36,1) both }
        .anim-fade { animation: revealFade 0.6s  ease-out both }
        .anim-pop  { animation: popIn      0.65s cubic-bezier(.22,1,.36,1) both }

        .filter-pop  { animation: popIn 0.35s cubic-bezier(.22,1,.36,1) both }
        .filter-fade { opacity:0; transform:scale(0.97); transition: opacity 0.28s ease, transform 0.28s ease }

        /* Film-grain texture fixed overlay */
        .grain {
          position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:.04;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:220px 220px;
        }

        .thumb-active { outline: 2px solid var(--accent); outline-offset: 2px; }

        /* Filter pill underline */
        .pill { position:relative; transition: color .25s, opacity .25s }
        .pill::after {
          content:''; position:absolute; bottom:-3px; left:0; right:0;
          height:1.5px; background:var(--accent);
          transform: scaleX(0); transform-origin: center;
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        .pill.on::after  { transform: scaleX(1) }
        .pill:hover::after { transform: scaleX(0.5) }

        /* Subtle horizontal rule pattern for bg sections */
        .lined-bg {
          background-image: repeating-linear-gradient(
            0deg, rgba(30,23,16,.04) 0px, rgba(30,23,16,.04) 1px,
            transparent 1px, transparent 32px
          );
        }
      `}</style>

      <div className="grain" />

      {/* ───────────────── NAV ───────────────── */}
      <header style={{ borderBottom: '1px solid var(--faint)' }} className="sticky top-0 z-40 backdrop-blur-sm" >
        <div
          className="mx-auto max-w-5xl px-4 md:px-6 flex items-center justify-between gap-3"
          style={{ height: 56 }}
        >
          <div className="flex items-center gap-2.5 flex-shrink-0 min-w-0">
            <Image src="/peeklut_app_icon.png" alt="PeekLUT" width={26} height={26} className="rounded-md flex-shrink-0" />
            <span className="wa-display text-lg font-semibold whitespace-nowrap">PeekLUT</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[.18em] uppercase font-semibold opacity-45">
            <a href="#featuring" className="hover:opacity-100 transition-opacity">Featuring</a>
            <a href="#technical-specs" className="hover:opacity-100 transition-opacity">Technical Specifications</a>
          </nav>

          <Link href="https://apps.apple.com/us/app/color-grade-video-peeklut/id6473661560?ppid=b90399d4-838d-4963-ae56-6b2ae5112476" className="flex-shrink-0">
            <Image
              src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              alt="Download on the App Store"
              width={110} height={36}
              className="h-7 w-auto md:h-[30px] opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
      </header>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative lined-bg overflow-hidden">
        {/* Registration marks */}
        <RegMark className="absolute top-7 left-7 opacity-15 hidden lg:block" />
        <RegMark className="absolute top-7 right-7 opacity-15 hidden lg:block" />
        <RegMark className="absolute bottom-7 left-7 opacity-10 hidden lg:block" />
        <RegMark className="absolute bottom-7 right-7 opacity-10 hidden lg:block" />

        <div className="mx-auto max-w-3xl px-6 pt-20 pb-10 md:pt-28 md:pb-14 lg:pt-36 lg:pb-18 text-center relative">

          {/* Presented-by label */}
          <div className={`flex items-center justify-center gap-4 mb-10 ${mounted ? 'anim-fade' : 'opacity-0'}`}
               style={{ animationDelay: '.05s' }}>
            <div className="flex-1 max-w-[80px] h-px bg-current opacity-15" />
            <span className="text-[9px] tracking-[.4em] uppercase font-semibold opacity-35 whitespace-nowrap">
              Lauper Labs
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-current opacity-15" />
          </div>

          {/* Title */}
          <h1
            className={`wa-display font-bold leading-[.88] tracking-tight ${mounted ? 'anim-up' : 'opacity-0'}`}
            style={{ fontSize: 'clamp(4rem, 14vw, 9rem)', animationDelay: '.2s' }}
          >
            Peek
            <em className="not-italic" style={{ color: '#3B82F6', fontStyle:'italic', fontWeight:400 }}>LUT</em>
          </h1>

          {/* Rule */}
          <Rule className="my-8 max-w-xs mx-auto" />

          {/* Tagline */}
          <p
            className={`wa-display italic text-2xl md:text-3xl leading-snug opacity-70 max-w-sm mx-auto ${mounted ? 'anim-up' : 'opacity-0'}`}
            style={{ animationDelay: '.4s' }}
          >
            The colour lab<br />in your pocket.
          </p>

          {/* Sub-tagline */}
          <p
            className={`mt-4 text-sm leading-relaxed opacity-50 max-w-xs mx-auto ${mounted ? 'anim-fade' : 'opacity-0'}`}
            style={{ animationDelay: '.55s' }}
          >
            Professional color grading on iPhone.<br />Photos, video, LUTs, and film emulation — all in one app.
          </p>

          {/* Tags */}
          <div
            className={`flex flex-wrap items-center justify-center gap-2 mt-8 ${mounted ? 'anim-fade' : 'opacity-0'}`}
            style={{ animationDelay: '.7s' }}
          >
            {["Photo", "Video", "LUTs", "Film Looks", "iOS"].map(t => (
              <span key={t}
                className="text-[9px] tracking-[.22em] uppercase px-3 py-1 border font-semibold rounded-sm opacity-50"
                style={{ borderColor: 'var(--faint)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ─────────── FEATURING (Carousel) ─────────── */}
      <section id="featuring" className="lined-bg overflow-hidden border-y border-[var(--faint)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-6 py-4">
            <h2 className="wa-display text-4xl md:text-5xl font-bold tracking-tight">Featuring</h2>
          </div>
        </div>

        {/* Horizontal scroll carousel */}
        <div 
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-10"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex-shrink-0 w-4 md:w-8" />
          {filters.map((f, idx) => {
            const cardAccent = moodColor[f.mood]
            const showText = f.id === "masks"
            return (
              <div
                key={f.id}
                className="flex-shrink-0 snap-center"
                style={{ width: 'min(260px, 72vw)' }}
              >
                <div 
                  className="relative overflow-hidden rounded-3xl shadow-lg"
                  style={{ aspectRatio: '9/19' }}
                >
                  <Image
                    src={f.image}
                    alt={f.label}
                    fill
                    className="object-cover object-top"
                    sizes="260px"
                  />
                  {showText && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-28">
                      {f.tagline ? (
                        <span 
                          className="text-[9px] tracking-[.22em] uppercase font-semibold block mb-1.5"
                          style={{ color: cardAccent, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                        >
                          {f.tagline}
                        </span>
                      ) : null}
                      <h3 
                        className="wa-display text-xl font-bold text-white mb-1.5"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
                      >
                        {f.label}
                      </h3>
                      <p 
                        className="text-[12px] leading-relaxed text-white/85 line-clamp-3"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                      >
                        {f.desc}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <div className="flex-shrink-0 w-4 md:w-8" />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-3"><Rule /></div>

      {/* ─────────── TECHNICAL SPECS ─────────── */}
      <section id="technical-specs" className="py-20 md:py-28 bg-[var(--paper)]">
        <div className="mx-auto max-w-5xl px-6">
          
          <div className="text-center mb-16">
            <span className="text-[9px] tracking-[.38em] uppercase font-semibold opacity-35 block mb-3">Production Notes</span>
            <h2 className="wa-display text-3xl md:text-4xl font-bold tracking-tight">Technical Specifications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Column 1 */}
            <div className="space-y-12">
              <div>
                <h3 className="wa-display text-xl font-bold mb-4 opacity-80">Core Workflow</h3>
                <ul className="space-y-2 text-[13px] font-medium opacity-60 leading-relaxed">
                  <li>Photo and video editing in one app</li>
                  <li>Real-time preview while adjusting</li>
                  <li>Batch editing/export flows (up to 10 items)</li>
                  <li>Compact & regular editor layouts</li>
                </ul>
              </div>
              
              <div>
                <h3 className="wa-display text-xl font-bold mb-4 opacity-80">LUT Workflow</h3>
                <ul className="space-y-2 text-[13px] font-medium opacity-60 leading-relaxed">
                  <li>Import LUTs from Files and Photos</li>
                  <li>Support for .cube & HaldCLUT images</li>
                  <li>Import entire LUT folders</li>
                  <li>Linked LUT folder sync</li>
                  <li>LUT favorites & gallery layouts</li>
                  <li>LUT stacking & opacity control</li>
                  <li>Export look as .cube LUT</li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-12">
              <div>
                <h3 className="wa-display text-xl font-bold mb-4 opacity-80">Editing Controls</h3>
                <ul className="space-y-2 text-[13px] font-medium opacity-60 leading-relaxed">
                  <li>Balance: Temperature, Tint</li>
                  <li>Light: Exposure, Contrast, Highlights, Shadows, Blacks, Whites</li>
                  <li>Film Density: RGB Weights, Saturation/Luma Limiters</li>
                  <li>Color Grade: Shadows, Midtones, Highlights</li>
                  <li>Saturate: Global + Per-channel (RGB/CMY)</li>
                  <li>Tetra Color Mix: 12-axis cross-channel control</li>
                  <li>Foliage: Saturation, Tone, Range</li>
                  <li>Technicolor 3-Strip & Bleach Bypass</li>
                  <li>Tone Curves & HSV Color Shift</li>
                  <li>Details: Clarity, Sharpness, Dehaze, Fade</li>
                  <li>Grain, Halation, Bloom, Textures</li>
                </ul>
              </div>

              <div>
                <h3 className="wa-display text-xl font-bold mb-4 opacity-80">Masks & Tools</h3>
                <ul className="space-y-2 text-[13px] font-medium opacity-60 leading-relaxed">
                  <li>Linear & Radial masks</li>
                  <li>Layer stack management</li>
                  <li>Split before/after comparison</li>
                  <li>Smart/Auto Crop & Manual framing</li>
                  <li>Fullscreen preview modes</li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-12">
              <div>
                <h3 className="wa-display text-xl font-bold mb-4 opacity-80">Presets & History</h3>
                <ul className="space-y-2 text-[13px] font-medium opacity-60 leading-relaxed">
                  <li>Create, rename, duplicate presets</li>
                  <li>Multi-select delete mode</li>
                  <li>Full Undo/Redo/Reset history</li>
                </ul>
              </div>

              <div>
                <h3 className="wa-display text-xl font-bold mb-4 opacity-80">Export</h3>
                <ul className="space-y-2 text-[13px] font-medium opacity-60 leading-relaxed">
                  <li>Video: MP4, MOV (HEVC, H.264, ProRes)</li>
                  <li>Res: 480p to 4K, Custom Bitrates</li>
                  <li>HDR-aware & Apple Log handling</li>
                  <li>Image: HEIC, JPEG, PNG, TIFF (8/16-bit)</li>
                  <li>Metadata preservation</li>
                </ul>
              </div>

              <div>
                <h3 className="wa-display text-xl font-bold mb-4 opacity-80">Built-in Packs</h3>
                <ul className="space-y-2 text-[13px] font-medium opacity-60 leading-relaxed">
                  <li>Creative Film Looks</li>
                  <li>Cineon Log Conversions</li>
                  <li>Color Space Transforms (Rec709)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────── TICKET CTA ─────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-xl px-6">
          <div
            className="relative text-center px-8 md:px-14 py-14"
            style={{ background: 'var(--paper)', border: '1.5px solid var(--faint)' }}
          >
            {/* Corner ornaments */}
            {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
              <div
                key={i}
                className={`absolute w-5 h-5 ${pos} ${
                  i < 2 ? (i === 0 ? 'border-t border-l' : 'border-t border-r') : (i === 2 ? 'border-b border-l' : 'border-b border-r')
                }`}
                style={{ borderColor: 'rgba(30,23,16,.15)' }}
              />
            ))}

            <span className="text-[9px] tracking-[.4em] uppercase font-semibold opacity-30 block mb-5">
              Admit One · Free
            </span>

            <h2 className="wa-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Now Showing
            </h2>
            <p className="wa-display italic text-lg opacity-55 mb-8 max-w-xs mx-auto leading-snug">
              PeekLUT — available free on the App Store for iPhone.
            </p>

            <Link href="https://apps.apple.com/us/app/color-grade-video-peeklut/id6473661560?ppid=b90399d4-838d-4963-ae56-6b2ae5112476"
              className="inline-flex items-center justify-center"
            >
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                width={160} height={54}
                className="h-[44px] w-auto"
              />
            </Link>

            <Rule className="mt-8 max-w-[160px] mx-auto" />
            <span className="text-[8px] tracking-[.3em] uppercase opacity-25 font-semibold">Requires iOS 17</span>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer style={{ borderTop: '1px solid var(--faint)' }} className="py-7">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Image src="/peeklut_app_icon.png" alt="PeekLUT" width={18} height={18} className="rounded-md" />
            <span className="text-[11px] font-semibold opacity-35 tracking-wide">
              © {new Date().getFullYear()} PeekLUT by Lauper Labs
            </span>
          </div>
          <nav className="flex gap-5">
            <Link href="/peeklut/privacy" className="text-[11px] font-semibold opacity-30 hover:opacity-60 transition-opacity tracking-wide">
              Privacy
            </Link>
            <Link href="/peeklut/terms" className="text-[11px] font-semibold opacity-30 hover:opacity-60 transition-opacity tracking-wide">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
