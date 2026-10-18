"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Download, ArrowDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { content } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAppContext } from "@/components/Providers";
import { projectsData } from "@/lib/projects-data";

export default function PortfolioPage() {
  const { lang } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950" />;
  }

  const t = content[lang];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafafa] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-sky-500 selection:text-white scroll-smooth relative transition-colors duration-300">
      <Header />

      <main>
        {/* ========================================================
            01. HERO SECTION (Fusion of Edison Palmer & Francois Mercer WITH Vibrant Colors)
           ======================================================== */}
        <section
          id="home"
          className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-16 md:pb-24 border-b border-slate-200 dark:border-slate-800"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-sky-200/40 dark:bg-sky-900/15 rounded-full blur-[120px] pointer-events-none -z-10" />

          {/* Top Presentation Meta (Image 2 style with Color) */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
            <span className="meta text-sky-700 dark:text-sky-400 font-bold">
              {t.hero.intro}
            </span>
            <span className="meta text-slate-500 dark:text-slate-400 hidden sm:inline">
              2026 DIGITAL MULTIMEDIA ARCHIVE
            </span>
            <span className="meta border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-1 text-sky-700 dark:text-sky-300 font-bold rounded-full inline-flex items-center gap-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {t.hero.badge}
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
            {/* Left Column: Huge Stacked Name + Dual Specs (Image 1 & 2 style) */}
            <div className="space-y-8">
              <div>
                <h1 className="display text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] leading-[0.84] text-slate-950 dark:text-white tracking-tight">
                  Jan
                  <br />
                  Albireo
                </h1>
              </div>

              {/* Sub-spec columns (Directly inspired by Edison Palmer: "Digital Designer | Based in New York") */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <p className="meta text-sky-700 dark:text-sky-400 font-bold mb-1">
                    DISCIPLINE
                  </p>
                  <p className="display-sm text-lg sm:text-xl text-slate-950 dark:text-white leading-tight">
                    {t.hero.role2}
                  </p>
                </div>
                <div>
                  <p className="meta text-sky-700 dark:text-sky-400 font-bold mb-1">
                    LOCATION & INSTITUTION
                  </p>
                  <p className="display-sm text-lg sm:text-xl text-slate-950 dark:text-white leading-tight">
                    PNJ Jakarta, ID
                  </p>
                </div>
              </div>

              {/* Bio Statement with colorful accent border */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl border-l-2 border-sky-500 dark:border-sky-400 pl-4 sm:pl-5">
                {t.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#projects" className="btn btn-solid">
                  {t.hero.primaryCta} <ArrowDown className="w-3.5 h-3.5 text-sky-400" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1sBHN8_QaZRGmizCfE9HebSMYU1p-yPzo/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  {t.hero.secondaryCta} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Focus Pills in subtle colors */}
              <div className="flex flex-wrap gap-2 pt-2">
                {t.hero.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="meta text-[10px] py-1.5 px-3 bg-sky-50/80 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/80 rounded-sm font-semibold tracking-wider"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Full-Color Framed Portrait Plate (Image 1 & 2 style) */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-md mx-auto group">
              <div className="relative w-full aspect-[4/5] border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-xl shadow-sky-950/5">
                <Image
                  src="/fotodiri2.png"
                  alt="Jan Albireo"
                  fill
                  priority
                  className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between mt-3 text-slate-500 dark:text-slate-400 text-xs">
                <span className="meta text-sky-700 dark:text-sky-400 font-bold">
                  PRESENTED BY: JAN ALBIREO
                </span>
                <span className="meta">{t.hero.portfolioYear}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            02. EDITORIAL STATEMENT (Edison Palmer Mid-Section WITH Color)
           ======================================================== */}
        <section className="relative border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-sky-950/20 dark:to-transparent py-16 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 text-center space-y-6">
            <span className="meta text-sky-700 dark:text-sky-400 block tracking-[0.2em] font-bold">
              CORE PHILOSOPHY // 06TH SEMESTER
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed sm:leading-snug">
              {lang === "en" ? (
                <>
                  A sixth-semester Multimedia Digital student at{" "}
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">
                    Politeknik Negeri Jakarta
                  </span>
                  , blending technical Lua scripting, UI/UX systems, and interactive media. Focused on creating immersive{" "}
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">
                    3D virtual environments
                  </span>
                  , educational gameplay, and high-performance digital prototypes.
                </>
              ) : (
                <>
                  Mahasiswa semester 6 Teknik Multimedia Digital di{" "}
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">
                    Politeknik Negeri Jakarta
                  </span>{" "}
                  dengan pengalaman berbasis proyek dalam{" "}
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">
                    Roblox interactive media
                  </span>
                  , UI/UX, web prototype, Android app development, testing skenario, dan dokumentasi riset akademik.
                </>
              )}
            </p>
            <div className="w-16 h-1 bg-sky-500 dark:bg-sky-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* ========================================================
            03. TABLE OF CONTENTS / DIRECTORY MATRIX (Image 2 Layout with Color)
           ======================================================== */}
        <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
          {/* Presentation Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-slate-200 dark:border-slate-800">
            <span className="meta text-sky-700 dark:text-sky-400 font-bold">
              CREATIVE PRESENTATION
            </span>
            <span className="meta text-slate-500 dark:text-slate-400">
              TABLE OF CONTENTS
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
            {/* Left: Headline & Subtext */}
            <div>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white leading-[0.88] mb-4">
                TABLE OF
                <br />
                CONTENTS
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                {lang === "en"
                  ? "Structured directory of selected projects, background narrative, technical proficiencies, education, and direct contact channels."
                  : "Daftar navigasi terstruktur untuk karya terpilih, latar belakang, keahlian teknis, rekam jejak akademik, dan kanal kontak langsung."}
              </p>
            </div>

            {/* Right: Tactile Alternating Button Matrix with Color */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { num: "01", label: lang === "en" ? "RECENT PROJECTS" : "KARYA TERPILIH", href: "#projects", solid: true },
                { num: "02", label: lang === "en" ? "ABOUT ME" : "TENTANG SAYA", href: "#about", solid: false },
                { num: "03", label: lang === "en" ? "TECHNICAL SKILLS" : "KEAHLIAN TEKNIS", href: "#skills", solid: false },
                { num: "04", label: lang === "en" ? "EDUCATION & EXP" : "PENDIDIKAN & EXP", href: "#education", solid: true },
                { num: "05", label: lang === "en" ? "INTERNSHIP ROLES" : "MINAT MAGANG", href: "#internship", solid: true },
                { num: "06", label: lang === "en" ? "CONTACT DIRECT" : "HUBUNGI SAYA", href: "#contact", solid: false },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`btn ${
                    item.solid ? "btn-solid" : "btn-outline"
                  } w-full justify-between py-4 px-5 text-[11px] group`}
                >
                  <span className="group-hover:text-sky-400 transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-sky-400 font-bold">
                    [{item.num}]
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            04. RECENT PROJECTS (Edison Palmer 2-Column Showcase in FULL COLOR)
           ======================================================== */}
        <section
          id="projects"
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800"
        >
          {/* Top Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="meta text-sky-700 dark:text-sky-400 block tracking-[0.2em] font-bold">
              {t.work.section}
            </span>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white leading-[0.88]">
              {lang === "en" ? "Recent Projects" : "Karya Terkini"}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.work.subtitle}
            </p>
          </div>

          {/* 2-Column Grid in Full Color (No monochrome / grayscale!) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {projectsData.map((project, idx) => {
              const projectContent = project.content[lang];
              const projectTags = project.tags[lang];
              const displayTags = projectTags.slice(0, 3).join(" · ");

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: (idx % 2) * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col h-full cursor-pointer"
                  >
                    <article className="flex flex-col h-full">
                      {/* Image Frame Plate - Full Vivid Color */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md transition-shadow group-hover:shadow-xl group-hover:border-sky-500/80">
                        <Image
                          src={project.image}
                          alt={projectContent.title}
                          fill
                          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                            [
                              "trackstudio-tracklabid",
                              "university-website-redesign-android-app",
                              "runcard-studio",
                            ].includes(project.slug)
                              ? "object-left"
                              : project.slug === "iot-simulation-arduino-esp32"
                              ? "object-[15%_center]"
                              : "object-center"
                          }`}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3 meta border border-sky-300 dark:border-sky-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-sky-800 dark:text-sky-300 rounded-sm shadow-xs">
                          {projectContent.status}
                        </div>
                      </div>

                      {/* Project Meta Below Image (Edison Palmer style: Title on left, Tags on right) */}
                      <div className="pt-4 flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
                        <div>
                          <h3 className="display-sm text-xl lg:text-2xl text-slate-950 dark:text-white leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:underline decoration-1 underline-offset-4 transition-colors">
                            {projectContent.title}
                          </h3>
                          <p className="meta text-slate-500 dark:text-slate-400 text-[10px] mt-1">
                            {projectContent.category} · {projectContent.period}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="meta text-slate-500 dark:text-slate-400 text-[10px] block font-medium">
                            {displayTags}
                          </span>
                          <span className="meta text-sky-600 dark:text-sky-400 group-hover:underline text-[10px] font-bold mt-1 inline-flex items-center gap-1">
                            CASE STUDY <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {/* Overview & Contribution */}
                      <div className="pt-3 space-y-2 flex-1">
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                          {projectContent.overview}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          <span className="meta text-[10px] text-sky-700 dark:text-sky-400 font-bold mr-1.5">
                            {t.work.contributionLabel}
                          </span>
                          <span className="line-clamp-1">{projectContent.contribution}</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            05. ABOUT SECTION / "INTRO-DUCTION" (Image 2 Split Layout with Full Color Photo)
           ======================================================== */}
        <section
          id="about"
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800"
        >
          {/* Presentation Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-slate-200 dark:border-slate-800">
            <span className="meta text-sky-700 dark:text-sky-400 font-bold">
              CREATIVE PRESENTATION
            </span>
            <span className="meta text-slate-500 dark:text-slate-400">
              03 // BIOGRAPHY
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            {/* Left: Giant "INTRO-DUCTION" + Full-Color Framed Photo */}
            <div className="space-y-6">
              <h2 className="display text-5xl sm:text-6xl md:text-7xl text-slate-950 dark:text-white leading-[0.84]">
                INTRO-
                <br />
                DUCTION
              </h2>

              <div className="relative w-full aspect-[4/5] border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-xl shadow-sky-950/5 group">
                <Image
                  src="/fotodiri2.png"
                  alt="Jan Albireo"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="meta text-sky-700 dark:text-sky-400 font-bold text-center">
                PRESENTED BY: JAN ALBIREO
              </p>
            </div>

            {/* Right: "HELLO, I'M JAN ALBIREO!" + Narrative */}
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <span className="meta text-sky-700 dark:text-sky-400 font-bold">
                  ABOUT THE DEVELOPER
                </span>
                <h3 className="display-sm text-3xl sm:text-4xl text-slate-950 dark:text-white leading-tight">
                  HELLO, I&apos;M JAN ALBIREO!
                </h3>
              </div>

              <div className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 pt-2">
                {t.about.paragraphs &&
                  t.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              {/* Snapshot pillars in tactile grid */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className="meta text-sky-700 dark:text-sky-400 font-bold mb-4">
                  CORE FOCUS AREAS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.snapshot.map((snap, i) => (
                    <div
                      key={i}
                      className="border border-slate-200 dark:border-slate-800 p-4 bg-white/70 dark:bg-slate-900/70 hover:border-sky-500 transition-colors shadow-xs"
                    >
                      <span className="meta text-sky-600 dark:text-sky-400 text-[10px] block mb-1 font-bold">
                        PILLAR 0{i + 1}
                      </span>
                      <h4 className="display-sm text-sm text-slate-950 dark:text-white mb-1">
                        {snap.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {snap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="meta text-slate-500 dark:text-slate-400 normal-case tracking-normal italic text-xs leading-relaxed">
                  {t.about.aiNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            06. INTERNSHIP INTEREST SECTION WITH COLOR
           ======================================================== */}
        <section
          id="internship"
          className="border-b border-slate-200 dark:border-slate-800 bg-sky-50/40 dark:bg-sky-950/20 py-16 md:py-20"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-4">
              <span className="meta text-sky-700 dark:text-sky-400 font-bold block">
                {t.internship.section} // 2026 OPPORTUNITIES
              </span>
              <h2 className="display text-3xl md:text-4xl text-slate-950 dark:text-white leading-tight">
                {t.internship.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800">
                {t.internship.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {t.internship.roles.map((role, idx) => (
                <span
                  key={idx}
                  className={`chip ${
                    idx % 2 === 0
                      ? "border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/40 text-sky-900 dark:text-sky-200 font-bold hover:bg-sky-600 hover:text-white"
                      : "hover:border-sky-500 hover:text-sky-600"
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            07. SKILLS & EDUCATION WITH RICH COLORS
           ======================================================== */}
        <section
          id="skills"
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20"
        >
          {/* Left: Skills Categories */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="meta text-sky-700 dark:text-sky-400 font-bold">
                {t.skills.section}
              </span>
              <span className="meta text-slate-500 dark:text-slate-400">
                TECHNICAL MATRIX
              </span>
            </div>

            <h2 className="display text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white leading-tight pb-4 border-b border-slate-200 dark:border-slate-800 mb-8">
              {t.skills.title}
            </h2>

            <div className="space-y-6">
              {t.skills.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-sky-500 transition-colors"
                >
                  <span className="meta text-sky-600 dark:text-sky-400 font-bold block mb-2">
                    0{idx + 1} // {cat.name.toUpperCase()}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cat.items.map((s, i) => (
                      <span
                        key={i}
                        className={`meta px-3 py-1.5 border text-[11px] rounded-xs transition-colors ${
                          i % 3 === 0
                            ? "bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-800 font-bold"
                            : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-sky-500 hover:text-sky-600"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Language & Soft Skills Table */}
              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <span className="meta text-sky-700 dark:text-sky-400 font-bold text-[11px] sm:w-1/3 shrink-0">
                    {t.skills.languagesLbl}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 sm:w-2/3 leading-relaxed">
                    {t.skills.languagesVal}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <span className="meta text-sky-700 dark:text-sky-400 font-bold text-[11px] sm:w-1/3 shrink-0">
                    {t.skills.softSkillsLbl}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 sm:w-2/3 leading-relaxed">
                    {t.skills.softSkillsVal}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <span className="meta text-sky-700 dark:text-sky-400 font-bold text-[11px] sm:w-1/3 shrink-0">
                    {t.skills.relevantInterestsLbl}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 sm:w-2/3 leading-relaxed">
                    {t.skills.relevantInterestsVal}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education, Certifications & Experience */}
          <div id="education">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="meta text-sky-700 dark:text-sky-400 font-bold">
                {t.education.section}
              </span>
              <span className="meta text-slate-500 dark:text-slate-400">
                ACADEMIC & CERTIFIED
              </span>
            </div>

            <h2 className="display text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white leading-tight pb-4 border-b border-slate-200 dark:border-slate-800 mb-8">
              {t.education.title}
            </h2>

            <div className="space-y-6 mb-12">
              {t.education.items.map((ed, i) => (
                <article
                  key={i}
                  className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs hover:border-sky-500 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="meta text-sky-700 dark:text-sky-400 font-bold">{ed.period}</span>
                    {ed.badge && (
                      <span className="meta border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 text-[10px] text-sky-800 dark:text-sky-300 font-bold rounded-xs">
                        {ed.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="display-sm text-xl sm:text-2xl text-slate-950 dark:text-white mb-1">
                    {ed.school}
                  </h3>
                  <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    {ed.degree}
                  </h4>
                  <p className="meta text-slate-500 dark:text-slate-400 normal-case tracking-wider text-xs mb-4">
                    {ed.location}
                  </p>

                  {ed.relevantCourseworkText && (
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3 mt-3">
                      <span className="meta text-sky-700 dark:text-sky-400 font-bold block mb-1">
                        {ed.relevantCourseworkText}
                      </span>
                      {ed.relevantCourseworkValue}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="display-sm text-2xl text-slate-950 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 mb-6 mt-10">
              {t.certification.title}
            </h3>
            <div className="space-y-4 mb-12">
              {t.certification.items.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-slate-200 dark:border-slate-800 border-l-4 border-l-sky-500 bg-white dark:bg-slate-900 shadow-xs"
                >
                  <span className="meta text-sky-700 dark:text-sky-400 font-bold block mb-1">
                    {cert.period}
                  </span>
                  <h4 className="display-sm text-base sm:text-lg text-slate-950 dark:text-white mb-1">
                    {cert.program}
                  </h4>
                  <p className="meta text-slate-500 dark:text-slate-400 normal-case tracking-wider text-xs mb-2">
                    {cert.organizer} · {cert.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Experience */}
            <h3 className="display-sm text-2xl text-slate-950 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 mb-6 mt-10">
              {t.academicExperience.title}
            </h3>
            <div className="space-y-4">
              {t.academicExperience.items.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-slate-200 dark:border-slate-800 border-l-4 border-l-slate-400 dark:border-l-slate-600 bg-white dark:bg-slate-900 shadow-xs"
                >
                  <span className="meta text-sky-700 dark:text-sky-400 font-bold block mb-1">
                    {exp.period}
                  </span>
                  <h4 className="display-sm text-base sm:text-lg text-slate-950 dark:text-white mb-1">
                    {exp.title}
                  </h4>
                  <p className="meta text-slate-500 dark:text-slate-400 normal-case tracking-wider text-xs mb-2">
                    {exp.role} · {exp.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-sky-500 mt-1.5 shrink-0 rounded-full" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            08. CONTACT SECTION
           ======================================================== */}
        <section
          id="contact"
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start"
        >
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
                <span className="meta text-sky-700 dark:text-sky-400 font-bold">
                  {t.contact.section}
                </span>
                <span className="meta text-slate-500 dark:text-slate-400">
                  OPEN FOR INQUIRIES
                </span>
              </div>
              <h2 className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-950 dark:text-white leading-[0.88] mb-6">
                {t.contact.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mb-3">
                {t.contact.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                {t.contact.microcopy}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="meta text-sky-700 dark:text-sky-400 font-bold mb-1">
                  {t.contact.directEmail}
                </p>
                <a
                  href="mailto:janalbireo123@gmail.com"
                  className="display-sm text-xl sm:text-2xl text-slate-950 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 hover:underline decoration-1 underline-offset-4 break-all transition-colors"
                >
                  janalbireo123@gmail.com
                </a>
              </div>
              <div>
                <p className="meta text-sky-700 dark:text-sky-400 font-bold mb-1">
                  {t.contact.location}
                </p>
                <p className="display-sm text-xl sm:text-2xl text-slate-950 dark:text-white">
                  {t.contact.locationValue}
                </p>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-center">
            <h3 className="display-sm text-xl sm:text-2xl text-slate-950 dark:text-white mb-6">
              {t.contact.connectTitle}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:janalbireo123@gmail.com"
                className="btn btn-solid w-full text-center"
              >
                {t.contact.buttons.email}
              </a>
              <a
                href="https://linkedin.com/in/janalbireogd"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline w-full text-center"
              >
                {t.contact.buttons.linkedin}
              </a>
              <a
                href="https://github.com/albiruby"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline w-full text-center"
              >
                {t.contact.buttons.github}
              </a>
              <a
                href="https://drive.google.com/file/d/1sBHN8_QaZRGmizCfE9HebSMYU1p-yPzo/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="btn btn-solid w-full text-center mt-2"
              >
                <Download className="w-4 h-4 text-sky-400" /> {t.contact.buttons.download}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
