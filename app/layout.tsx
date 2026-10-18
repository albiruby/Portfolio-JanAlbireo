import type {Metadata} from 'next';
import { Inter, Archivo } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['wdth'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-jan-albireo.vercel.app'),
  title: 'Jan Albireo Portfolio | Interactive Media & Digital Multimedia',
  description: 'Portfolio of Jan Albireo — Teknik Multimedia Digital student at Politeknik Negeri Jakarta. Project-based experience in interactive media, Roblox development, UI/UX, Next.js web platforms, and digital multimedia production.',
  openGraph: {
    title: 'Jan Albireo Portfolio | Interactive Media & Digital Multimedia',
    description: 'Project-based experience in interactive media, Roblox development, UI/UX, Next.js web platforms, and digital multimedia production.',
    url: '/',
    siteName: 'Jan Albireo Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jan Albireo — Interactive Media & Digital Multimedia Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jan Albireo Portfolio | Interactive Media & Digital Multimedia',
    description: 'Project-based experience in interactive media, Roblox development, UI/UX, Next.js web platforms, and digital multimedia production.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth w-full overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.variable} ${archivo.variable} font-sans antialiased bg-[#fafafa] dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-sky-500 selection:text-white w-full overflow-x-hidden min-h-[100vh]`} suppressHydrationWarning>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
