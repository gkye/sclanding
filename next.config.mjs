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
		merge(nextConfig, {
			output: 'export',
			basePath: process.env.PAGES_BASE_PATH,
		});
	} else {
    console.warn('Regular deployments deployment to GitHub Pages', process.env.PAGES_BASE_PATH);
  }

export default nextConfig
