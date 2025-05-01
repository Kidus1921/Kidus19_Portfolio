import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kidus Belete',
  description: 'Created by Kidus Belete',
  openGraph: {
    title: 'Kidus Belete',
    description: 'Portfolio website of Kidus Belete – Developer & Designer.',
    url: 'https://kidusbelete.onrender.com/', 
    siteName: 'Kidus Belete',
    images: [
      {
        url: 'https://ucarecdn.com/e33a0e45-cfd3-4ae1-a7c7-b5cd03d09386/previewImage.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Kidus Belete Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kidus Belete',
    description: 'Explore Kidus Belete\'s portfolio website.',
    images: ['https://ucarecdn.com/e33a0e45-cfd3-4ae1-a7c7-b5cd03d09386/previewImage.jpeg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
