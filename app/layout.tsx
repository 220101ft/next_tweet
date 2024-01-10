import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/component/Navbar'

export const metadata: Metadata = {
  title: 'Next Tweet',
  description: 'This is tweet app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex min-h-screen flex-col p-2">
          {children}
        </main>
      </body>
    </html>
  )
}
