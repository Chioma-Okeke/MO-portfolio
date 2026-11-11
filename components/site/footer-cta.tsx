"use client"

import { usePathname } from "next/navigation"
import { site } from "@/content/site"
import { Reveal } from "@/components/motion/reveal"

export function FooterCta() {
  // The contact page already *is* the "say hello" CTA
  if (usePathname() === "/contact") return null

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-center text-surface md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full border border-white/5"
      />
      <Reveal>
        <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
          Good things start
          <br />
          with hello.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <a
          href={`mailto:${site.email}`}
          className="mt-12 inline-block border-b border-wine pb-1 font-serif text-2xl transition-colors duration-300 hover:text-blush md:text-3xl"
        >
          {site.email}
        </a>
        <ul className="mt-8 flex justify-center gap-8">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw pb-0.5 text-[11px] font-medium tracking-[0.18em] uppercase opacity-80 transition-opacity hover:opacity-100"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
