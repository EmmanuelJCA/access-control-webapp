import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { CssBaseline} from '@mui/material';

import { Providers } from '@/redux/Providers';
import { Navbar, ThemeRegistry } from '@/components';

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
    <html lang="es">
      <body>
        <Providers>
          <ThemeRegistry isDarkMode={prefersDarkMode?.value.toLowerCase() === 'true'}>
            <CssBaseline />
            <Navbar />
            { children }
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  )
}
