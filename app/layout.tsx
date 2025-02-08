import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import PageTransition from '@/components/ui/PageTransition'
import StairTransition from '@/components/ui/StairTransition'

const ubuntuFont = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: "MGHM's Portfolio",
  description: "MGHM's Portfolio created using Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntuFont.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
