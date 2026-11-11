import type { CSSProperties } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ImageReveal, Reveal } from "@/components/motion/reveal"
import { ArrowLink, Eyebrow, Tag, UnderlineLink } from "@/components/site/bits"
import { ProjectArt } from "@/components/site/project-art"
import { featuredProjects, projectCta, projectHref, projectMeta } from "@/content/projects"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

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

// The hero shows just first name and surname (middle names are left out):
// first name on top, surname stepped in to the right
const names = site.name.split(" ")
const nameLines = [names[0], names.at(-1)!]
const indents = ["pl-0", "pl-[0.9em] md:pl-[1.15em]"]

export default function Home() {
  return (
    <>
      {/* Hero: exactly one screen tall. Sized against its own box (cq units); --d is the disc's
          diameter, capped at 55% width on md+ so "Onuorah" (reaching ~0.82d right of centre) fits. */}
      <section className="relative h-[calc(100svh-4rem)] min-h-140 overflow-hidden bg-blush [container-type:size] [--d:min(86cqw,51cqh)] md:h-[calc(100svh-5rem)] md:min-h-160 md:[--d:min(55cqw,51cqh)]">
        {/* Pinstripe panels */}
        <div aria-hidden className="absolute top-0 bottom-[14%] left-[4%] w-[22%] opacity-70 md:left-[11%] md:w-[19.5%]" style={stripes} />
        <div aria-hidden className="absolute top-0 right-[4%] bottom-[14%] w-[22%] opacity-70 md:right-[11%] md:w-[19.5%]" style={stripes} />

        {/* Cream bowl rising from the bottom */}
        <div
          aria-hidden
          className="absolute top-[86%] right-[3%] left-[3%] h-[40%] bg-background md:right-[5.5%] md:left-[5.7%]"
          style={{ borderRadius: "0 0 50% 50% / 0 0 100% 100%" }}
        />

        {/* Disc, resting in the bowl */}
        <ImageReveal
          delay={0.1}
          className="absolute bottom-[4.4%] left-1/2 aspect-square w-(--d) -translate-x-1/2"
        >
          <TexturedDisc className="size-full" />
        </ImageReveal>

        {/* Name: the first line sits on the disc's top edge (its baseline is 1em above the h1's
            bottom), and the surname overlaps the disc */}
        <h1
          className="absolute bottom-[calc(4.4%+var(--d)-1em)] left-[6vw] font-serif text-[min(17vw,calc(var(--d)*0.3))] leading-[0.88] font-medium tracking-tight text-ink md:left-[calc(50%-var(--d)*0.65)] md:text-[calc(var(--d)*0.32)]"
        >
          {nameLines.map((line, i) => (
            <Reveal key={line} onLoad delay={i * 0.12} className={`block ${indents[i] ?? indents.at(-1)}`}>
              {line}
            </Reveal>
          ))}
        </h1>

        {/* Quiet details resting on the bowl */}
        <Reveal onLoad delay={0.4} className="absolute bottom-[4%] left-[9%] hidden whitespace-nowrap lg:block">
          <Eyebrow>Product Manager · Ottawa</Eyebrow>
        </Reveal>
        <Reveal onLoad delay={0.4} className="absolute right-[9%] bottom-[4%] hidden whitespace-nowrap lg:block">
          <ArrowLink href="#selected-projects">Selected projects</ArrowLink>
        </Reveal>
      </section>

      {/* Selected projects - the projects marked `featured` in content/projects.ts */}
      <section id="selected-projects" className="mx-auto max-w-360 scroll-mt-20 px-6 py-24 md:px-24 md:py-32">
        <Reveal className="flex items-end justify-between">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Selected Projects</h2>
          </div>
          <UnderlineLink href="/work" className="hidden md:inline-block">
            View all work
          </UnderlineLink>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 md:gap-36">
          {featuredProjects.map((project, i) => (
            <article key={project.slug} className="grid items-center gap-8 md:grid-cols-[1.35fr_1fr] md:gap-16">
              <ImageReveal className={cn(i % 2 === 1 && "md:order-2")}>
                <Link href={projectHref(project)} aria-label={project.title}>
                  <ProjectArt project={project} />
                </Link>
              </ImageReveal>
              <Reveal delay={0.1} className={cn(i % 2 === 1 && "md:order-1")}>
                <Eyebrow className="text-[10px]">{projectMeta(project)}</Eyebrow>
                <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">{project.title}</h3>
                {project.subtitle && (
                  <p className="mt-3 font-serif text-lg text-muted-foreground italic">{project.subtitle}</p>
                )}
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <div className="mt-6 hidden flex-wrap gap-2 md:flex">
                  {project.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <ArrowLink href={projectHref(project)} className="mt-8">
                  {projectCta(project)}
                </ArrowLink>
              </Reveal>
            </article>
          ))}
        </div>

        <Link
          href="/work"
          className={cn(buttonVariants({ variant: "outline", size: "cta" }), "mt-16 w-full md:hidden")}
        >
          View all work
        </Link>
      </section>
    </>
  )
}
