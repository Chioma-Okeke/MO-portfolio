import type { Metadata } from "next"
import { Camera, Dumbbell, Plane, Users } from "lucide-react"
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { Eyebrow, Polaroid, Script, Sparkle } from "@/components/site/bits"
import { Photo } from "@/components/site/photo"
import {
  closingQuote,
  currentlyEnjoying,
  explorations,
  moments,
  pleasureImages,
  pleasures,
} from "@/content/life"
import { portraits } from "@/content/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Life Outside Syntax",
  description: "A personal scrapbook of travel, film, community, and everyday moments.",
}

const pleasureIcons = { camera: Camera, users: Users, dumbbell: Dumbbell }

export default function LifePage() {
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
            <Polaroid caption="Venice, Summer '24" className="w-72 rotate-3 md:w-80">
              <Photo
                src={portraits.scrapbook}
                alt="Chioma in Venice at golden hour"
                tone="warm"
                priority
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
        <div className="mt-12 grid gap-8 md:grid-cols-[2fr_1fr]">
          <ImageReveal className="group relative aspect-[4/3] md:aspect-auto">
            <Photo
              src={explorations.landscape.image}
              alt={explorations.landscape.caption}
              tone="stone"
              grayscale
              className="absolute inset-0"
            />
            <span className="absolute bottom-5 left-5 bg-ink px-2.5 py-1 text-[9px] font-semibold tracking-[0.14em] text-surface uppercase">
              {explorations.landscape.caption}
            </span>
          </ImageReveal>
          <div className="flex flex-col gap-8">
            <ImageReveal delay={0.1} className="self-center md:self-auto">
              <Polaroid caption={explorations.polaroid.caption} className="w-64 rotate-2 md:w-full">
                <Photo src={explorations.polaroid.image} alt={explorations.polaroid.caption} tone="warm" className="aspect-square" />
              </Polaroid>
            </ImageReveal>
            <Reveal delay={0.2} className="hidden flex-1 flex-col items-center justify-center bg-blush-soft p-8 text-center md:flex">
              <Plane className="size-4 text-wine" fill="currentColor" strokeWidth={1} />
              <p className="mt-4 font-serif text-base leading-relaxed">{explorations.note}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tactile pleasures */}
      <section className="border-t border-border bg-surface px-6 py-24 md:px-24 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <Eyebrow className="text-[10px]">Tactile Pleasures</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              Creativity, Community, and
              <br />
              Calisthenics.
            </h2>
            <Stagger className="mt-10 space-y-8">
              {pleasures.map((p) => {
                const Icon = pleasureIcons[p.icon]
                return (
                  <StaggerItem key={p.title} className="flex gap-5">
                    <Icon className="mt-1 size-4 shrink-0" strokeWidth={1.75} />
                    <div>
                      <h3 className="font-serif text-xl">{p.title}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </Reveal>
          <div className="relative pb-16 md:pb-24">
            <ImageReveal className="group aspect-[16/10]">
              <Photo src={pleasureImages.main} alt="Vintage camera on a table" tone="warm" className="size-full" />
            </ImageReveal>
            <ImageReveal delay={0.15} className="absolute bottom-0 left-[-4%] w-[42%]">
              <Polaroid className="-rotate-3">
                <Photo src={pleasureImages.secondary} alt="Film camera with rolls" tone="warm" className="aspect-[4/3]" />
              </Polaroid>
            </ImageReveal>
            <ImageReveal delay={0.25} className="absolute right-0 bottom-4 w-[38%]">
              <Polaroid className="rotate-3">
                <Photo src={pleasureImages.polaroid} alt="Mechanical keyboard" tone="cream" className="aspect-[4/3]" />
              </Polaroid>
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Everyday moments */}
      <section className="border-t border-border px-6 py-24 md:px-24 md:py-32">
        <Reveal className="text-center">
          <Eyebrow className="text-[10px]">The Diary</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Everyday Moments.</h2>
        </Reveal>
        <div className="mx-auto mt-16 max-w-6xl space-y-20 md:space-y-28">
          {moments.map((m, i) => (
            <article key={m.title} className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <Reveal className={cn(i % 2 === 1 && "md:order-2")}>
                <p className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase">{m.date}</p>
                <h3 className="mt-3 font-serif text-2xl">{m.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                <Script className="mt-4 text-sm">{m.note}</Script>
              </Reveal>
              <ImageReveal delay={0.1} className={cn("group aspect-[16/10]", i % 2 === 1 && "md:order-1")}>
                <Photo src={m.image} alt={m.title} tone="warm" className="size-full" />
              </ImageReveal>
            </article>
          ))}
        </div>
      </section>

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
