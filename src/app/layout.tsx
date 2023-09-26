import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Roboto } from 'next/font/google';
import { CssBaseline} from '@mui/material';

import { ThemeRegistry, Navbar } from '@/components';

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight:[ '300', '400', '500', '700' ] 
});

export const metadata: Metadata = {
  title: 'Access-control-app',
  description: 'Access-control app for safety places',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const cookieStore = cookies();
  let prefersDarkMode = cookieStore.get('prefersDarkMode');
  
  return (
    <ThemeRegistry isDarkMode={ prefersDarkMode?.value.toLowerCase() === 'true' }>
      <CssBaseline />
      <html lang="es">
        <body className={roboto.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeRegistry>
  )
}
