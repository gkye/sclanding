/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
   output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/SCLanding",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  }
}
// if (!!process.env.PAGES_BASE_PATH && process.env.PAGES_BASE_PATH.length) {
// 		console.warn('Assuming deployment to GitHub Pages', process.env.PAGES_BASE_PATH);
//     nextConfig.output = 'export';
//     nextConfig.basePath = process.env.PAGES_BASE_PATH;
// 	} else {
//     console.warn('Regular deployments deployment to GitHub Pages', process.env.PAGES_BASE_PATH);
//   }

export default nextConfig

