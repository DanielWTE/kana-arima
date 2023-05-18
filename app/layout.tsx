import './globals.css'
import { Inter } from 'next/font/google'

import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kana Arima - Portfolio',
  description: 'This is an Fan-Made Portfolio for Kana Arima',
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
