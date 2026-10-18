"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useAppContext } from "./Providers";
import { content } from "@/lib/i18n";

const NAV = [
  { id: "home", labelKey: "home" },
  { id: "work", labelKey: "work" },
  { id: "about", labelKey: "about" },
  { id: "skills", labelKey: "skills" },
  { id: "education", labelKey: "education" },
  { id: "contact", labelKey: "contact" },
] as const;

export function Header() {
  const { lang, theme, toggleLang, toggleTheme } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  const hrefFor = (id: string) =>
    id === "home" ? "/#home" : id === "work" ? "/#projects" : `/#${id}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fafafa]/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Top Presentation Meta Strip (Style from Image 2 with Color) */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60 text-[10px] sm:text-[11px] py-1.5 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1440px] flex items-center justify-between tracking-[0.16em] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="meta text-sky-700 dark:text-sky-400 font-bold">
              CREATIVE PRESENTATION // JAN ALBIREO
            </span>
          </div>
          <span className="meta text-slate-500 dark:text-slate-400 hidden sm:inline">
            POLITEKNIK NEGERI JAKARTA · 2026
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group"
          title="Jan Albireo Portfolio"
        >
          <span className="display text-3xl md:text-4xl leading-none text-slate-950 dark:text-white tracking-tighter group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            JA<span className="text-sky-600 dark:text-sky-400">.</span>
          </span>
          <div className="hidden sm:flex flex-col border-l border-slate-300 dark:border-slate-700 pl-3">
            <span className="meta text-[11px] font-bold text-slate-950 dark:text-white leading-tight">
              JAN ALBIREO
            </span>
            <span className="meta text-[9px] text-sky-700 dark:text-sky-400 font-bold leading-tight">
              INTERACTIVE MEDIA
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              className="meta px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-900 rounded-md transition-colors"
            >
              {t.nav[item.labelKey]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language toggle */}
          <div className="flex items-center border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-md overflow-hidden">
            <button
              onClick={() => toggleLang("en")}
              aria-label="Switch to English"
              className={`meta px-2.5 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-sky-600 text-white font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              EN
            </button>
            <span className="w-px self-stretch bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
            <button
              onClick={() => toggleLang("id")}
              aria-label="Switch to Indonesia"
              className={`meta px-2.5 py-1.5 transition-colors ${
                lang === "id"
                  ? "bg-sky-600 text-white font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              ID
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded-md shrink-0"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Download CV - Desktop */}
          <a
            href="https://drive.google.com/file/d/1sBHN8_QaZRGmizCfE9HebSMYU1p-yPzo/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex btn btn-solid"
          >
            {t.nav.downloadCV} <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-white hover:border-sky-500 transition-colors rounded-md shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-[#fafafa] dark:bg-slate-950 px-5 py-5 flex flex-col gap-4">
          <nav className="grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={hrefFor(item.id)}
                onClick={() => setMenuOpen(false)}
                className="chip"
              >
                {t.nav[item.labelKey]}
              </a>
            ))}
          </nav>
          <a
            href="https://drive.google.com/file/d/1sBHN8_QaZRGmizCfE9HebSMYU1p-yPzo/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid w-full"
          >
            {t.nav.downloadCV} <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      )}
    </header>
  );
}
