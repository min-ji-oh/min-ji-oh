import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

const nextConfig: NextConfig = {
  output: 'export', // 정적 파일로 변환
  basePath: '/min-ji-oh.github.io', // GitHub Pages에서 사용할 리포지토리 이름
  trailingSlash: true // 경로 끝에 슬래시 추가
}

export default withMDX(nextConfig)
