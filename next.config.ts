import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  // MDX 옵션 설정
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

export default withMDX(nextConfig)
