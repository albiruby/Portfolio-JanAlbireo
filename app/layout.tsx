import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'Portofolio Personal',
  description: 'Website portofolio yang dapat dipersonalisasi.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#080808] text-[#f5f5f5] selection:bg-indigo-500/30 selection:text-indigo-200`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
