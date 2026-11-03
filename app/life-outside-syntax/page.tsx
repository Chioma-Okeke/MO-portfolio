import type { Metadata } from "next"
import { Plane } from "lucide-react"
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { Eyebrow, Polaroid, Script, Sparkle } from "@/components/site/bits"
import { Photo } from "@/components/site/photo"
import { closingQuote, currentlyEnjoying, explorations, scrapbookHero } from "@/content/life"
import { cn } from "@/lib/utils"
// Hidden for now. To bring them back, uncomment this import and the two tags further down.
// import { EverydayMoments, TactilePleasures } from "./hidden-sections"

export const metadata: Metadata = {
  title: "Life Outside Syntax",
  description: "A personal scrapbook of travel, film, community, and everyday moments.",
}

export default function LifePage() {
  const [firstPolaroid, secondPolaroid] = explorations.polaroids

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-24 md:py-24">
        <Reveal>
          <Eyebrow className="text-[10px]">Personal Scrapbook</Eyebrow>
          <h1 className="mt-6 font-serif text-6xl leading-[0.98] font-medium tracking-tight md:text-8xl">
            Life is not
            <br />
            all syntax.
          </h1>
          <Script className="mt-6 -rotate-2 text-xl">finding beauty in the messy stuff</Script>
        </Reveal>
        <div className="relative flex justify-center md:justify-end">
          <Sparkle className="absolute -top-6 left-1/3 hidden size-4 fill-ink/30 md:block" />
          <ImageReveal delay={0.15}>
            <Polaroid caption={scrapbookHero.caption} className="w-72 rotate-3 md:w-80">
              <Photo
                src={scrapbookHero.image}
                alt={scrapbookHero.alt}
                tone="warm"
                priority
                sizes="320px"
                className="aspect-[4/5]"
              />
            </Polaroid>
          </ImageReveal>
        </div>
      </section>

      {/* Currently enjoying */}
      <section className="border-y border-border bg-surface px-6 py-14 md:px-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-6">
            <span className="h-px flex-1 bg-border" />
            <Eyebrow className="text-[10px] tracking-[0.24em]">Currently Enjoying</Eyebrow>
            <span className="h-px flex-1 bg-border" />
          </div>
          <Stagger className="mt-10 grid grid-cols-2 gap-y-8 text-center md:grid-cols-5">
            {currentlyEnjoying.map((c, i) => (
              <StaggerItem key={c.label} className={cn(i === 4 && "col-span-2 md:col-span-1")}>
                <p className="text-[9px] tracking-[0.16em] text-muted-foreground uppercase">{c.label}</p>
                <p className="mx-auto mt-2 max-w-40 font-serif text-base italic">{c.value}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Explorations */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-24 md:py-28">
        <Reveal className="flex items-end justify-between">
          <div>
            <Eyebrow className="text-[10px]">Explorations</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">The world beyond the screen.</h2>
          </div>
          <Script className="hidden text-base md:block">collecting stamps and memories</Script>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr] md:gap-8">
          <ImageReveal className="group relative aspect-[4/3]">
            <Photo
              src={explorations.landscape.image}
              alt={explorations.landscape.alt}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="absolute inset-0"
            />
            <span className="absolute bottom-5 left-5 bg-ink px-2.5 py-1 text-[9px] font-semibold tracking-[0.14em] text-surface uppercase">
              {explorations.landscape.caption}
            </span>
          </ImageReveal>
          {/* Two overlapping polaroids: side by side on phones, stacked collage from md up */}
          <div className="relative flex justify-center gap-4 md:block">
            <ImageReveal delay={0.1} className="w-1/2 md:absolute md:top-0 md:right-0 md:w-[78%]">
              <Polaroid caption={firstPolaroid.caption} className="rotate-2">
                <Photo
                  src={firstPolaroid.image}
                  alt={firstPolaroid.alt}
                  tone="warm"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="aspect-square"
                />
              </Polaroid>
            </ImageReveal>
            <ImageReveal delay={0.2} className="z-10 w-1/2 md:absolute md:bottom-0 md:left-0 md:w-[70%]">
              <Polaroid caption={secondPolaroid.caption} className="-rotate-3">
                <Photo
                  src={secondPolaroid.image}
                  alt={secondPolaroid.alt}
                  tone="stone"
                  sizes="(min-width: 768px) 22vw, 50vw"
                  className="aspect-square"
                />
              </Polaroid>
            </ImageReveal>
          </div>
        </div>
        <Reveal className="mx-auto mt-16 flex max-w-xl flex-col items-center text-center">
          <Plane className="size-4 text-wine" fill="currentColor" strokeWidth={1} />
          <p className="mt-4 font-serif text-lg leading-relaxed italic">{explorations.note}</p>
        </Reveal>
      </section>

      {/* Tactile pleasures and The Diary are hidden for now (see hidden-sections.tsx) */}
      {/* <TactilePleasures /> */}
      {/* <EverydayMoments /> */}

      {/* Closing quote */}
      <section className="px-6 pb-28 text-center">
        <Reveal className="mx-auto max-w-2xl border-t border-border pt-20">
          <p className="font-script text-3xl leading-snug text-ink/85 md:text-4xl">&ldquo;{closingQuote}&rdquo;</p>
          <Sparkle className="mx-auto mt-8" />
        </Reveal>
      </section>
    </>
  )
}
