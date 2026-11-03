// Scrapbook sections that are hidden for now. They're commented out in page.tsx;
// uncomment the import and the two tags there to bring them back.

import { Camera, Dumbbell, Users } from "lucide-react"
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { Eyebrow, Polaroid, Script } from "@/components/site/bits"
import { Photo } from "@/components/site/photo"
import { moments, pleasureImages, pleasures } from "@/content/life"
import { cn } from "@/lib/utils"

const pleasureIcons = { camera: Camera, users: Users, dumbbell: Dumbbell }

export function TactilePleasures() {
  return (
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
  )
}

export function EverydayMoments() {
  return (
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
  )
}
