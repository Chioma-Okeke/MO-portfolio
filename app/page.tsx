import type { CSSProperties } from "react"
import { ImageReveal, Reveal } from "@/components/motion/reveal"
import { ArrowLink, Eyebrow } from "@/components/site/bits"
import { site } from "@/content/site"

// Fine vertical pinstripes, drawn in pairs like the reference layout
const stripes: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(90deg, var(--surface) 0 1px, transparent 1px 7px, var(--surface) 7px 8px, transparent 8px 34px)",
}

/** Mottled rose disc with a fine grain, built from SVG noise so no image is needed */
function TexturedDisc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <clipPath id="disc">
          <circle cx="200" cy="200" r="200" />
        </clipPath>
        {/* Large soft blotches of wine */}
        <filter id="blotch" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="4" seed="7" />
          <feColorMatrix values="0 0 0 0 0.49  0 0 0 0 0.15  0 0 0 0 0.27  3.2 0 0 0 -1.45" />
        </filter>
        {/* Paler patches of blush */}
        <filter id="patch" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="3" seed="23" />
          <feColorMatrix values="0 0 0 0 0.86  0 0 0 0 0.66  0 0 0 0 0.7  3 0 0 0 -1.6" />
        </filter>
        {/* Light speckle */}
        <filter id="grain-light" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" />
          <feColorMatrix values="0 0 0 0 0.93  0 0 0 0 0.8  0 0 0 0 0.82  3 0 0 0 -1.7" />
        </filter>
        {/* Dark speckle */}
        <filter id="grain-dark" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="11" />
          <feColorMatrix values="0 0 0 0 0.36  0 0 0 0 0.1  0 0 0 0 0.19  3 0 0 0 -1.5" />
        </filter>
      </defs>
      <g clipPath="url(#disc)">
        <rect width="400" height="400" fill="#a95a72" />
        <rect width="400" height="400" filter="url(#patch)" />
        <rect width="400" height="400" filter="url(#blotch)" />
        <rect width="400" height="400" filter="url(#grain-dark)" />
        <rect width="400" height="400" filter="url(#grain-light)" opacity="0.7" />
      </g>
    </svg>
  )
}

// One line per name, each stepping further right (0, 0.75em, 1.5em) like a cascade
const nameLines = site.name.split(" ")
const indents = ["pl-0", "pl-[0.75em]", "pl-[1.5em]"]

export default function Home() {
  return (
    <section
      // --d: the disc's diameter. Name size and position are derived from it.
      // On md+ it's capped at 55vw so "Onuorah" (which reaches ~0.82d right of centre) stays on screen.
      className="relative h-[calc(100svh-4rem)] min-h-[560px] overflow-hidden bg-blush [--d:min(86vw,calc((100svh-4rem)*0.51))] md:h-[calc(100svh-5rem)] md:min-h-[640px] md:[--d:min(55vw,calc((100svh-5rem)*0.51))]"
    >
      {/* Pinstripe panels */}
      <div aria-hidden className="absolute top-0 bottom-[14%] left-[4%] w-[22%] opacity-70 md:left-[11%] md:w-[19.5%]" style={stripes} />
      <div aria-hidden className="absolute top-0 right-[4%] bottom-[14%] w-[22%] opacity-70 md:right-[11%] md:w-[19.5%]" style={stripes} />

      {/* Cream bowl rising from the bottom */}
      <div
        aria-hidden
        className="absolute top-[86%] right-[3%] left-[3%] h-[40%] bg-background md:right-[5.5%] md:left-[5.7%]"
        style={{ borderRadius: "0 0 50% 50% / 0 0 100% 100%" }}
      />

      {/* Disc */}
      <ImageReveal
        delay={0.1}
        className="absolute bottom-[4.4%] left-1/2 aspect-square w-(--d) -translate-x-1/2"
      >
        <TexturedDisc className="size-full" />
      </ImageReveal>

      {/* Name, cascading down onto the disc - the last line overlaps its top edge */}
      <h1
        className="absolute bottom-[calc(4.4%+var(--d)*0.68)] left-[6vw] font-serif text-[15vw] leading-[0.88] font-medium tracking-tight text-ink md:left-[calc(50%-var(--d)*0.6)] md:text-[calc(var(--d)*0.27)]"
      >
        {nameLines.map((line, i) => (
          <Reveal key={line} onLoad delay={i * 0.12} className={`block ${indents[i] ?? indents.at(-1)}`}>
            {line}
          </Reveal>
        ))}
      </h1>

      {/* Quiet details resting on the bowl */}
      <Reveal
        onLoad
        delay={0.4}
        className="absolute bottom-[4%] left-[9%] hidden whitespace-nowrap lg:block"
      >
        <Eyebrow>Product Manager · Ottawa</Eyebrow>
      </Reveal>
      <Reveal
        onLoad
        delay={0.4}
        className="absolute right-[9%] bottom-[4%] hidden whitespace-nowrap lg:block"
      >
        <ArrowLink href="/work">Explore my work</ArrowLink>
      </Reveal>
    </section>
  )
}
