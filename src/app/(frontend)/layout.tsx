import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Kitimoto - Steak & Grill',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
