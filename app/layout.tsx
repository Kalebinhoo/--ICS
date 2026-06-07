import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'I Can Say - O Melhor Servidor de Scripts Escolar!',
  description: 'Entre no nosso servidor e nos ajude a se tornar uma comunidade conhecida por todas as pessoas do Brasil! Scripts exclusivos, ajuda com automação e muito mais.',
  icons: {
    icon: '/ics.png',
    shortcut: '/ics.png',
    apple: '/ics.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
