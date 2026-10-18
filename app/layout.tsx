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
  title: 'Jan Albireo Portfolio | Interactive Media & Digital Multimedia',
  description: 'Project-based experience in Roblox interactive media, UI/UX, web prototypes, Android app development, testing, and documentation.',
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
