import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/Header'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modverse',
  description: 'Innovative technology solutions for the future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
} 