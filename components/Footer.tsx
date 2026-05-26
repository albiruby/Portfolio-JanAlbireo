"use client";

import { useAppContext } from "./Providers";
import { content } from "@/lib/i18n";

export function Footer() {
  const { lang } = useAppContext();
  const t = content[lang];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 relative z-10 transition-colors duration-300">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-[11px] font-bold text-slate-950 dark:text-white tracking-[0.2em] uppercase">
          JAN ALBIREO
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 tracking-wide">
          {t.footer.copyright}
        </p>
        <div className="flex gap-6 items-center">
            <a href="mailto:janalbireo123@gmail.com" className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:text-sky-700 dark:hover:text-sky-400 transition-colors">{t.footer.email}</a>
            <a href="https://linkedin.com/in/janalbireogd" target="_blank" rel="noreferrer" className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:text-sky-700 dark:hover:text-sky-400 transition-colors">{t.footer.linkedin}</a>
            <a href="https://github.com/albiruby" target="_blank" rel="noreferrer" className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:text-sky-700 dark:hover:text-sky-400 transition-colors">{t.footer.github}</a>
        </div>
      </div>
    </footer>
  );
}
