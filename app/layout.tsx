import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'Portofolio Personal',
  description: 'Website portofolio yang dapat dipersonalisasi.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className="scroll-smooth w-full overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#fafafa] dark:bg-slate-950 text-gray-900 dark:text-[#f5f5f5] selection:bg-sky-100 selection:text-sky-900 dark:selection:bg-sky-900/30 dark:selection:text-sky-100 w-full overflow-x-hidden min-h-[100vh]`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
