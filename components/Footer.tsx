"use client";

import { useAppContext } from "./Providers";
import { content } from "@/lib/i18n";

export function Footer() {
  const { lang } = useAppContext();
  const t = content[lang];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-[#fafafa] dark:bg-slate-950 relative z-10 transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Presentation Metadata Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="display text-xl text-slate-950 dark:text-white">
              JA<span className="text-sky-600 dark:text-sky-400">.</span>
            </span>
            <span className="w-px h-4 bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
            <p className="meta text-slate-700 dark:text-slate-300">
              PRESENTED BY: <span className="font-bold text-slate-950 dark:text-white">JAN ALBIREO</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="meta text-slate-600 dark:text-slate-400">
              📍 DEPOK, INDONESIA
            </span>
            <span className="meta text-slate-600 dark:text-slate-400">
              🎓 POLITEKNIK NEGERI JAKARTA
            </span>
            <span className="meta border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 text-sky-700 dark:text-sky-300 font-bold rounded-sm inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE 2026
            </span>
          </div>
        </div>

        {/* Links and Copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
          <p className="meta text-slate-500 dark:text-slate-400 text-[10px]">
            {t.footer.copyright} · ALL RIGHTS RESERVED
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            <a
              href="mailto:janalbireo123@gmail.com"
              className="meta text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:underline underline-offset-4 transition-colors"
            >
              EMAIL: janalbireo123@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/janalbireogd"
              target="_blank"
              rel="noreferrer"
              className="meta text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:underline underline-offset-4 transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://github.com/albiruby"
              target="_blank"
              rel="noreferrer"
              className="meta text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:underline underline-offset-4 transition-colors"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
