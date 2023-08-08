import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import app from './firebaseConfig.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cinebrief',
  description: 'Movie background information with AI insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
