import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Considered',
  description: 'Pause before you buy. Track avoided purchases toward a goal.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body>
        <div className="min-h-screen">
          <header className="max-w-3xl mx-auto py-6 px-6 flex items-center justify-between">
            <div className="font-serif text-2xl">Considered</div>
            <nav className="text-sm text-muted">
              <a className="mr-4 text-muted" href="/dashboard">Dashboard</a>
              <a className="mr-4 text-muted" href="/pause">Pause</a>
              <a className="mr-4 text-muted" href="/waiting-list">Waiting List</a>
            </nav>
          </header>
          <main className="px-6 pb-16">
            {children}
          </main>
          <footer className="max-w-3xl mx-auto px-6 py-8 text-sm text-muted">
            <div className="flex justify-between">
              <div>Not a bank. This app tracks avoided spend as progress.</div>
              <div>
                <a className="underline" href="/onboarding">Reset Demo / Onboarding</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
