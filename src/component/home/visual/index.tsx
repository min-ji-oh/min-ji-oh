'use client'

import React, { useEffect, useState } from 'react'

const HomeVisual = () => {
  const [size, setSize] = useState(100)

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 크기 계산 (10px에서 시작하여 최대 100px까지)
      const newSize = Math.min(200, 100 + window.scrollY / 10)
      setSize(newSize)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  console.log(size)

  return (
    <section className='h-screen w-full relative'>
      {/* <div
        className='bg-gray-100 rounded-full sticky top-1/2 left-1/2 -translate-x-1/2'
        style={{ width: `${size}px`, height: `${size}px` }}
      /> */}
    </section>
  )
}

export default HomeVisual
