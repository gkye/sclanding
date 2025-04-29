/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}
if (!!process.env.PAGES_BASE_PATH && process.env.PAGES_BASE_PATH.length) {
		console.warn('Assuming deployment to GitHub Pages', process.env.PAGES_BASE_PATH);
    nextConfig.output = 'export';
    nextConfig.basePath = process.env.PAGES_BASE_PATH;
	} else {
    console.warn('Regular deployments deployment to GitHub Pages', process.env.PAGES_BASE_PATH);
  }

export default nextConfig
