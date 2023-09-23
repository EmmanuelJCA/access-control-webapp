import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { CssBaseline } from '@mui/material';

import { ThemeRegistry } from '@/components';

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight:[ '300', '400', '500', '700' ] 
})

export const metadata: Metadata = {
  title: 'Access-control-app',
  description: 'Access-control app for safety places',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeRegistry>
      <CssBaseline />
      <html lang="es">
        <body className={roboto.className}>{children}</body>
      </html>
    </ThemeRegistry>
  )
}
