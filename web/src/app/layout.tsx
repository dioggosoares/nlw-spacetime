import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/Signin'
import { Copyright } from '@/components/Copyright'

import { api } from '@/lib/api'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  const hasUsers = await api.get('/users')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <section
            className="relative flex flex-col items-start
            justify-between overflow-hidden border-r border-white/10
            bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16"
          >
            {/* Blur */}
            <div
              className="absolute right-0 top-1/2 h-[288px] w-[526px]
              -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700
              opacity-50 blur-full"
            />
            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {/* Sign In */}
            {isAuthenticated && hasUsers.data.length !== 0 ? (
              <Profile />
            ) : (
              <SignIn />
            )}
            {/* Hero */}
            <Hero />

            {/* Copyright */}
            <Copyright />
          </section>

          {/* Right */}
          <section
            className="flex max-h-screen flex-col
            overflow-y-auto bg-[url(../assets/bg-stars.svg)] bg-cover"
          >
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
