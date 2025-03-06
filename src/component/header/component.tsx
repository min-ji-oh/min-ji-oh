'use client'

import Gnb from '@/component/header/gnb/component'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const dotClass = clsx('block w-2 h-2 rounded-full bg-gray-800')
  const [isGnbOpen, setIsGnbOpen] = useState(false)

  const handleGnbToggle = () => {
    setIsGnbOpen(!isGnbOpen)
  }
  return (
    <div className='px-10 h-20 flex items-center justify-between sticky top-0 left-0 right-0 z-10 bg-white'>
      <Link href='/'>.</Link>
      <button
        className={clsx(
          'w-8 h-8 flex justify-center items-center gap-1 transition',
          isGnbOpen && 'rotate-90'
        )}
        onClick={handleGnbToggle}
      >
        {Array.from({ length: 2 }).map((_, index) => {
          return <i key={index} className={dotClass} />
        })}
      </button>
      {isGnbOpen && <Gnb />}
    </div>
  )
}

export default Header
