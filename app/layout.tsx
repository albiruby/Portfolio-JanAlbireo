import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'Jan Albireo Portfolio',
  description: 'Project-based experience in Roblox interactive media, UI/UX, web prototypes, Android app development, testing, and documentation.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth w-full overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#fafafa] dark:bg-slate-950 text-gray-900 dark:text-[#f5f5f5] selection:bg-sky-100 selection:text-sky-900 dark:selection:bg-sky-900/30 dark:selection:text-sky-100 w-full overflow-x-hidden min-h-[100vh]`} suppressHydrationWarning>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
