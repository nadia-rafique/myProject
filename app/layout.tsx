import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nadia Rafique | Senior Frontend Dev',
  description:
    'Front-End Developer with expertise in HTML, CSS, JavaScript, jQuery, Bootstrap, SASS, Tailwind CSS, React.js, and responsive frameworks. Passionate about creating responsive, user-friendly web designs, with a strong mobile-first approach and focus on accessibility and performance.',
  keywords:
    'Nadia Rafique, Frontend Developer, Senior Frontend Developer, Nadia Portfolio, nadiarafique1441@gmail.com',

  // 👇 Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Nadia Rafique | Senior Frontend Developer',
    description:
      'Frontend Developer skilled in React, Tailwind, and modern UI/UX practices. Building fast, accessible, and responsive web apps.',
    url: 'https://nadia-rafique.vercel.app/',
    siteName: 'Nadia Rafique Portfolio',
    images: [
      {
        url: '/Nadia_Portfolio.png', // ✅ path inside public folder
        width: 1200,
        height: 630,
        alt: 'Nadia Rafique - Senior Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 👇 Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Nadia Rafique | Senior Frontend Developer',
    description:
      'Frontend Developer skilled in React, Tailwind, and modern UI/UX practices. Building fast, accessible, and responsive web apps.',
    images: ['/Nadia_Portfolio.png'],
  },

  authors: [{ name: 'Nadia Rafique', url: 'https://nadia-rafique.vercel.app' }],
  metadataBase: new URL('https://nadia-rafique.vercel.app'),
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
