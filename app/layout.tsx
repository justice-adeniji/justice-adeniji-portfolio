import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Justice Adeniji - Portfolio",
  description: "Portfolio of Justice Adeniji, AI Engineer, Machine Learning Expert, and Full-Stack Developer",
  icons: {
    icon: '/favicons/web-favicon.png',
    apple: '/favicons/apple-icon.png',   
  },
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
