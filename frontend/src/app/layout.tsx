import { Providers } from '@/components/layout/Providers'
import '@/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <Providers>
        {/* Redux Provider, etc. yahan rahenge agar hain */}
        {children}
        </Providers>
      </body>
    </html>
  )
}