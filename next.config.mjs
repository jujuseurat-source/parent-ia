/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    // Les OG images lisent polices, articles et photos via fs au moment du build
    outputFileTracingIncludes: {
      '/blog/[slug]/opengraph-image': [
        './assets/**/*',
        './content/articles/**/*',
        './public/images/**/*',
      ],
    },
  },
};

export default nextConfig;
