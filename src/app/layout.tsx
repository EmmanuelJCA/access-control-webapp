import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { CssBaseline} from '@mui/material';

import { ReduxProvider, ThemeRegistry, Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'Access-control-app',
  description: 'Access-control, una aplicación para el control de acceso a lugares seguros',
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
        <ReduxProvider>
          <ThemeRegistry isDarkMode={prefersDarkMode?.value.toLowerCase() === 'true'}>
            <CssBaseline />
            <Navbar />
            { children }
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  )
}
