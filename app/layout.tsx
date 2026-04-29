import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    default: 'Parent IA — Grandir avec l\'IA',
    template: '%s | Parent IA',
  },
  description:
    'Un père documente ses expériences pour apprendre l\'intelligence artificielle à ses enfants de 6 et 9 ans — de manière ludique, concrète, et sans écran.',
  openGraph: {
    siteName: 'Parent IA',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} font-sans antialiased bg-beige-50 text-brun`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
