import fs from 'node:fs/promises'
import path from 'node:path'

const args = process.argv.slice(2)

const readArgValue = (long, short) => {
  const longIndex = args.indexOf(long)
  if (longIndex !== -1 && args[longIndex + 1]) {
    return args[longIndex + 1]
  }

  if (short) {
    const shortIndex = args.indexOf(short)
    if (shortIndex !== -1 && args[shortIndex + 1]) {
      return args[shortIndex + 1]
    }
  }

  return null
}

const redirectPath = readArgValue('--path', '-p')
const destinationUrl = readArgValue('--to', '-t')

if (!redirectPath || !destinationUrl) {
  console.error('Usage: node scripts/create-redirect-page.mjs --path <path> --to <url>')
  process.exit(1)
}

const sanitizedPath = redirectPath.trim().replace(/^\/+/, '').replace(/\/+$/, '')
const normalizedPath = path.normalize(sanitizedPath)

if (!sanitizedPath || normalizedPath === '.' || normalizedPath.startsWith('..')) {
  console.error('Error: --path must be a non-empty relative path without parent traversal.')
  process.exit(1)
}

const outputDir = path.join(process.cwd(), 'public', normalizedPath)
const outputFile = path.join(outputDir, 'index.html')

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${destinationUrl}" />
    <link rel="canonical" href="${destinationUrl}" />
    <title>Redirecting...</title>
    <script>
      window.location.replace(${JSON.stringify(destinationUrl)})
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="${destinationUrl}">${destinationUrl}</a>...</p>
  </body>
</html>
`

await fs.mkdir(outputDir, { recursive: true })
await fs.writeFile(outputFile, html, 'utf8')

console.log(`Created redirect page at ${path.relative(process.cwd(), outputFile)}`)
