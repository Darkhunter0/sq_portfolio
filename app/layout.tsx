import './globals.css';
import { IBM_Plex_Mono } from 'next/font/google';
import { LocaleProvider } from './context/LocaleContext';
import LocaleProviderWrapper from './components/LocaleProviderWrapper';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'Sebastián Quesada | Developer Portfolio',
  description: 'Personal site of Sebastián Quesada'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>
        <LocaleProvider>
          <LocaleProviderWrapper>
            {children}
          </LocaleProviderWrapper>
        </LocaleProvider>
      </body>
    </html>
  );
}
