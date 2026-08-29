"use client";

import { useState } from "react";
import { portfolio } from "./data";

function Arrow() { return <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="text-sm font-bold tracking-tight">{portfolio.initials}<span className="ml-1 text-[#c86843]">.</span></a>
        <button className="rounded-full border border-[#d9ddd4] px-4 py-2 text-xs font-bold md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nav-links">Menu</button>
        <div id="nav-links" className={`${menuOpen ? "flex" : "hidden"} absolute left-6 right-6 top-20 z-10 flex-col gap-4 rounded-2xl border border-[#d9ddd4] bg-[#f6f4ef] p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {[["About", "about"], ["Projects", "projects"], ["Writing", "writing"], ["Contact", "contact"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-sm text-[#657069] transition-colors hover:text-[#17241f]">{label}</a>)}
          <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#c86843]">LinkedIn <Arrow /></a>
        </div>
      </nav>

      <div id="top" className="mx-auto max-w-6xl px-6 lg:px-10">
        <section className="reveal grid min-h-[calc(100vh-88px)] content-center gap-12 py-20 md:grid-cols-[1.35fr_.65fr] md:gap-20">
          <div><p className="eyebrow mb-7">Hello, I&apos;m Ashwin · {portfolio.location}</p><h1 className="display max-w-4xl text-6xl leading-[.93] md:text-8xl">{portfolio.intro}</h1><p className="mt-9 max-w-xl text-lg leading-8 text-[#657069]">{portfolio.role}. I&apos;m interested in the space between thoughtful design and working technology.</p><div className="mt-10 flex flex-wrap gap-3"><a href="#projects" className="group rounded-full bg-[#17241f] px-6 py-3 text-sm font-bold text-[#f6f4ef] transition-transform hover:-translate-y-0.5">See my work <Arrow /></a><a href="#contact" className="rounded-full border border-[#bfc7bd] px-6 py-3 text-sm font-bold transition-colors hover:border-[#17241f]">Get in touch</a></div></div>
          <div className="flex items-end md:pb-10"><div className="relative w-full border-l-2 border-[#c86843] pl-6"><p className="text-sm font-bold">Currently learning</p><p className="mt-3 leading-7 text-[#657069]">How computer vision, interfaces, and small details can make technology easier to understand.</p><span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[#c86843]" /></div></div>
        </section>

        <section id="about" className="grid scroll-mt-10 gap-10 border-t border-[#d9ddd4] py-24 md:grid-cols-[.35fr_.65fr] md:py-32"><div><p className="eyebrow">01 / About</p></div><div className="max-w-3xl"><h2 className="display text-4xl leading-tight md:text-5xl">I&apos;m still early in my career, which is exactly why I like trying different sides of a project.</h2><div className="mt-8 grid gap-6 text-[1.05rem] leading-8 text-[#657069] md:grid-cols-2">{portfolio.about.map((text) => <p key={text}>{text}</p>)}</div><p className="mt-10 text-sm font-bold">{portfolio.education}</p></div></section>

        <section id="projects" className="scroll-mt-10 border-t border-[#d9ddd4] py-24 md:py-32"><div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">02 / Selected work</p><h2 className="display mt-4 text-5xl md:text-6xl">Things I&apos;ve made</h2></div><span className="hidden text-sm text-[#657069] md:block">A small, growing archive</span></div><div className="grid gap-5 md:grid-cols-2">{portfolio.projects.map((project) => <article key={project.name} className="group flex flex-col rounded-3xl border border-[#d9ddd4] bg-[#eeece5] p-7 transition-colors hover:border-[#c86843] md:p-9"><div className="flex items-start justify-between"><span className="text-sm font-bold text-[#c86843]">{project.number}</span><span className="text-xs uppercase tracking-widest text-[#657069]">{project.type}</span></div><h3 className="display mt-14 text-3xl">{project.name}</h3><dl className="mt-8 space-y-5 text-sm leading-6"><div><dt className="font-bold">What I built</dt><dd className="mt-1 text-[#657069]">{project.built}</dd></div><div><dt className="font-bold">Why I built it</dt><dd className="mt-1 text-[#657069]">{project.why}</dd></div></dl><div className="mt-8 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full border border-[#cfd5cc] px-3 py-1 text-xs text-[#657069]">{tool}</span>)}</div><a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-[#c86843] pb-1 text-sm font-bold">{project.linkLabel} <Arrow /></a></article>)}</div></section>

        <section id="writing" className="grid scroll-mt-10 gap-10 border-t border-[#d9ddd4] py-24 md:grid-cols-[.35fr_.65fr] md:py-32"><div><p className="eyebrow">03 / Writing</p></div><div><h2 className="display text-4xl md:text-5xl">Notes as I go.</h2><div className="mt-10">{portfolio.writing.map((post) => <a key={post.title} href={post.link} target="_blank" rel="noreferrer" className="group block border-t border-[#d9ddd4] py-6"><div className="flex items-center justify-between"><span className="eyebrow">{post.label}</span><Arrow /></div><h3 className="mt-3 text-xl font-bold">{post.title}</h3><p className="mt-2 max-w-lg leading-7 text-[#657069]">{post.note}</p></a>)}</div></div></section>

        <section id="experience" className="grid scroll-mt-10 gap-10 border-t border-[#d9ddd4] py-24 md:grid-cols-[.35fr_.65fr] md:py-32"><div><p className="eyebrow">04 / Experience</p></div><div>{portfolio.experience.map((item) => <div key={item.company} className="grid gap-2 border-t border-[#d9ddd4] py-6 md:grid-cols-[.35fr_.65fr]"><p className="text-sm text-[#657069]">{item.date}</p><div><h3 className="font-bold">{item.role} <span className="font-normal text-[#657069]">at {item.company}</span></h3><p className="mt-2 text-sm leading-6 text-[#657069]">{item.note}</p></div></div>)}</div></section>

        <section id="contact" className="scroll-mt-10 border-t border-[#d9ddd4] py-24 md:py-32"><p className="eyebrow">05 / Contact</p><div className="mt-5 flex flex-col justify-between gap-10 md:flex-row md:items-end"><h2 className="display max-w-2xl text-5xl leading-[.95] md:text-7xl">Have a question or a good project in mind?</h2><div className="flex flex-col items-start gap-3 text-sm"><a className="border-b border-[#c86843] pb-1 font-bold" href={portfolio.links.email}>Email me <Arrow /></a><a className="border-b border-[#c86843] pb-1 font-bold" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">Find me on LinkedIn <Arrow /></a></div></div></section>
      </div>
      <footer className="border-t border-[#d9ddd4] px-6 py-7 lg:px-10"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-[#657069] sm:flex-row"><span>© {new Date().getFullYear()} Ashwin Kumar S</span><span>Made with care in Chennai</span></div></footer>
    </main>
  );
}
