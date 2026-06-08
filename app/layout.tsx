import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'I Can Say - A Maior Comunidade de Scripts Escolares do Brasil',
  description: 'Mais de 74 mil estudantes brasileiros já descobriram o segredo: scripts prontos, comunidade ativa e ajuda 24/7 para todas suas tarefas escolares. Entre grátis agora!',
  keywords: [
    'scripts escolares',
    'discord educação',
    'ajuda escolar',
    'lição de casa',
    'alura scripts',
    'khan academy',
    'matific',
    'comunidade estudantes',
    'I Can Say',
    'ICS',
  ],
  authors: [{ name: 'I Can Say Team' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://icansay.com.br',
    title: 'I Can Say - Scripts Escolares Grátis',
    description: 'A maior comunidade brasileira de scripts escolares no Discord. +74 mil membros, scripts prontos e ajuda 24/7.',
    siteName: 'I Can Say',
    images: [
      {
        url: '/ics_banner.png',
        width: 1200,
        height: 630,
        alt: 'I Can Say - Comunidade de Scripts Escolares',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Can Say - Scripts Escolares Grátis',
    description: 'A maior comunidade brasileira de scripts escolares. +74 mil membros!',
    images: ['/ics_banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#120302" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
