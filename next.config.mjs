/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const repo = 'sclanding' // Your repository name
const assetPrefix = isGithubActions ? `/${repo}/` : '/'
const basePath = isGithubActions ? `/${repo}` : ''

const nextConfig = {
  output: 'export', // Required for static export to GitHub Pages
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    // If using static export, default image optimization might not work.
    // You might need to set unoptimized: true
    unoptimized: true,
  },
}
// if (!!process.env.PAGES_BASE_PATH && process.env.PAGES_BASE_PATH.length) {
// 		console.warn('Assuming deployment to GitHub Pages', process.env.PAGES_BASE_PATH);
//     nextConfig.output = 'export';
//     nextConfig.basePath = process.env.PAGES_BASE_PATH;
// 	} else {
//     console.warn('Regular deployments deployment to GitHub Pages', process.env.PAGES_BASE_PATH);
//   }

export default nextConfig

