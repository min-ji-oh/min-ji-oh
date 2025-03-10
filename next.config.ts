import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

const repoName = '/min-ji-oh.github.io'

const nextConfig: NextConfig = {
  output: 'export', // Generates static HTML files
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  basePath: repoName,
  assetPrefix: repoName,
  images: {
    unoptimized: true
  }
}

export default withMDX(nextConfig)
