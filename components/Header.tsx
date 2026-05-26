"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useAppContext } from "./Providers";
import { content } from "@/lib/i18n";

export function Header() {
  const { lang, theme, toggleLang, toggleTheme } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fafafa]/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tighter text-slate-950 dark:text-white flex items-center shrink-0" title="Jan Albireo">
          STUDIO<span className="text-sky-600 dark:text-sky-400 ml-0.5 text-3xl leading-none">.</span>
        </Link>
        
        <nav className="hidden lg:flex gap-8">
          {[
            { id: 'home', label: t.nav.home },
            { id: 'work', label: t.nav.work },
            { id: 'about', label: t.nav.about },
            { id: 'skills', label: t.nav.skills },
            { id: 'education', label: t.nav.education },
            { id: 'contact', label: t.nav.contact }
          ].map((item) => {
            const isActive = item.id === 'home';
            const href = item.id === 'home' ? '/#home' : item.id === 'work' ? '/#projects' : `/#${item.id}`;
            return (
              <a key={item.id} href={href} className="text-[13px] font-semibold tracking-wide transition-colors pb-1 border-b-2 items-center flex text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border-transparent">
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Language Toggle */}
          <div className="flex items-center bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-full">
            <button 
              onClick={() => toggleLang("en")} 
              aria-label="Switch to English"
              className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-slate-950 text-white dark:bg-slate-100 dark:text-slate-950 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              EN
            </button>
            <button 
              onClick={() => toggleLang("id")} 
              aria-label="Switch to Indonesia"
              className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-all ${lang === 'id' ? 'bg-slate-950 text-white dark:bg-slate-100 dark:text-slate-950 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              ID
            </button>
          </div>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0" 
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Download CV - Desktop */}
          <a href="https://drive.google.com/file/d/1sBHN8_QaZRGmizCfE9HebSMYU1p-yPzo/view?usp=drive_link" target="_blank" rel="noreferrer" className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 bg-slate-950 dark:bg-slate-100 text-white dark:text-slate-950 text-[13px] font-bold rounded-full shadow-sm hover:bg-slate-800 dark:hover:bg-white transition-colors">
            {t.nav.downloadCV}
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden w-9 h-9 flex items-center justify-center text-slate-950 dark:text-white shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fafafa] dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl py-6 px-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {[
              { id: 'home', label: t.nav.home },
              { id: 'work', label: t.nav.work },
              { id: 'about', label: t.nav.about },
              { id: 'skills', label: t.nav.skills },
              { id: 'education', label: t.nav.education },
              { id: 'contact', label: t.nav.contact }
            ].map((item) => {
              const href = item.id === 'home' ? '/#home' : item.id === 'work' ? '/#projects' : `/#${item.id}`;
              return (
                <a 
                  key={item.id} 
                  href={href} 
                  onClick={() => setMenuOpen(false)}
                  className="text-[15px] font-bold tracking-wide text-slate-950 dark:text-white p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a href="https://drive.google.com/file/d/1sBHN8_QaZRGmizCfE9HebSMYU1p-yPzo/view?usp=drive_link" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-md transition-colors text-[14px]">
            {t.nav.downloadCV}
          </a>
        </div>
      )}
    </header>
  );
}
