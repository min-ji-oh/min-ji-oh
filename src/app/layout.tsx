import './globals.css'

import { Header } from '@/component/header'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'test',
  description: 'test!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={roboto.className}>
        <Header />
        <main className='px-10'>{children}</main>
      </body>
    </html>
  )
}
