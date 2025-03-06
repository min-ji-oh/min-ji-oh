'use client'

import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-start pt-40'>
      <h1 className='text-xl font-bold'>찾을 수 없는 페이지입니다</h1>
      <Link href='/' className='text-sm'>
        홈으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFoundPage
