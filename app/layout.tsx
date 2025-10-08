import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nadia Rafique | Senior Frontend Dev',
  description: 'Front-End Developer with expertise in HTML, CSS, JavaScript, jQuery, Bootstrap, SASS, Tailwind CSS, React.js, and responsive frameworks. Passionate about creating responsive, user-friendly web designs, with a strong mobile-first approach and focus on accessibility and performance.',
  generator: 'v0.app',
  keywords: 'Nadia Rafique, Frontend Developer, Senior Frontend Developer, Nadia Portfolio, nadiarafique1441@gmail.com',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
