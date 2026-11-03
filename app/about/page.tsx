import type { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { Eyebrow, Script, Sparkle } from "@/components/site/bits"
import { Photo } from "@/components/site/photo"
import {
  aboutGallery,
  advisory,
  engineer,
  experience,
  human,
  intro,
  principles,
  training,
} from "@/content/about"
import { portraits } from "@/content/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description: "Engineering a life of soft power, the engineer and the human.",
}

function NumberedList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <Stagger className="mt-8 space-y-6">
      {items.map((item, i) => (
        <StaggerItem key={item.title} className="flex gap-4 text-sm leading-relaxed">
          <span className="font-serif text-wine">{String(i + 1).padStart(2, "0")}</span>
          <p className="text-muted-foreground">
            <strong className="font-semibold text-ink">{item.title}:</strong> {item.body}
          </p>
        </StaggerItem>
      ))}
    </Stagger>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid border-b border-border md:h-[min(78svh,760px)] md:min-h-[560px] md:grid-cols-[1fr_1.25fr]">
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24">
          <Reveal>
            <Eyebrow>Editorial Bio</Eyebrow>
            <h1 className="mt-6 font-serif text-6xl leading-[0.98] font-medium tracking-tight md:text-7xl">
              Engineering
              <br />a life of
              <br />
              Soft Power.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <Script className="mt-10 -rotate-3 text-xl">Professional first, personal always.</Script>
          </Reveal>
        </div>
        <ImageReveal className="relative min-h-[480px] md:min-h-0">
          <Photo
            src={portraits.about}
            alt="Chioma in a charcoal blazer and headphones, smiling and glancing to the side"
            tone="stone"
            hint="Editorial portrait"
            priority
            zoom={false}
            sizes="(min-width: 768px) 55vw, 100vw"
            className="absolute inset-0"
          />
          <p className="absolute bottom-5 left-5 font-script text-base text-surface/90">The Quiet Force.</p>
        </ImageReveal>
      </section>

      {/* Intro */}
      <section className="bg-surface px-6 py-24 md:px-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <h2 className="max-w-md font-serif text-3xl leading-snug">{intro.heading}</h2>
            <div className="my-8 h-px w-16 bg-border" />
            <p className="max-w-md font-serif text-lg leading-relaxed text-muted-foreground italic">
              &ldquo;{intro.quote}&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            {intro.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Engineer / Human */}
      {/* <section className="border-y border-border px-6 py-20 md:px-24 md:py-24">
        <Reveal className="mx-auto grid max-w-[1440px] border border-border md:grid-cols-2">
          <div className="p-8 md:p-14">
            <Eyebrow className="text-[10px]">The Engineer</Eyebrow>
            <h3 className="mt-4 font-serif text-3xl">{engineer.heading}</h3>
            <NumberedList items={engineer.items} />
          </div>
          <div className="border-t border-border bg-surface p-8 md:border-t-0 md:border-l md:p-14">
            <Eyebrow className="text-[10px]">The Human</Eyebrow>
            <h3 className="mt-4 font-serif text-3xl">{human.heading}</h3>
            <NumberedList items={human.items} />
            <div className="mt-10 border-t border-border pt-6">
              <Eyebrow className="text-[10px]">Currently</Eyebrow>
              <Script className="mt-3 text-base text-muted-foreground">{human.currently}</Script>
            </div>
          </div>
        </Reveal>
      </section> */}

      {/* Principles */}
      <section className="bg-surface px-6 py-24 md:py-32">
        <Reveal className="text-center">
          <Eyebrow className="text-[10px]">Core Principles</Eyebrow>
          <h2 className="relative mt-4 inline-block font-serif text-4xl md:text-5xl">
            A Value-Driven Approach
            <Sparkle className="absolute -top-3 -right-6 size-3" />
          </h2>
        </Reveal>
        <Stagger className="mx-auto mt-16 grid max-w-5xl gap-14 text-center md:grid-cols-3 md:gap-12">
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <Sparkle className="mx-auto size-3.5" />
              <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Timeline */}
      <section className="border-t border-border px-6 py-24 md:px-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Eyebrow className="text-[10px]">Timeline</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">A Journey in Chapters</h2>
          </Reveal>
          <ol className="mt-16 space-y-14">
            {experience.map((e) => (
              <li key={e.role}>
                <Reveal className="grid gap-3 border-l border-border pl-8 md:grid-cols-[180px_1fr] md:gap-10">
                  <p className={cn("relative font-serif text-base", e.current ? "text-wine" : "text-muted-foreground")}>
                    <span
                      className={cn(
                        "absolute top-2 -left-[35px] size-1.5 rounded-full",
                        e.current ? "bg-wine" : "bg-border"
                      )}
                    />
                    {e.period}
                  </p>
                  <div>
                    <h3 className="font-serif text-xl">{e.role}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-24">
            <Eyebrow className="text-[10px]">Security Training &amp; Hands-On Practice</Eyebrow>
          </Reveal>
          <Stagger className="mt-8 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-12">
            {training.map((t) => (
              <StaggerItem key={t.title}>
                <p className="font-serif text-sm text-muted-foreground italic">{t.period}</p>
                <h3 className="mt-2 font-serif text-xl">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Collage */}
      <section className="bg-surface px-6 py-24 md:px-16">
        {/* Four portrait photos, gently tilted and staggered like prints on a table */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {aboutGallery.photos.map((p, i) => (
            <ImageReveal
              key={p.image}
              delay={i * 0.08}
              className={cn(
                "group aspect-[3/4] bg-background p-2 shadow-[0_18px_40px_-20px_rgba(31,29,29,0.35)] transition-transform duration-700 ease-soft hover:rotate-0",
                ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"][i % 4],
                i % 2 === 1 && "md:mt-10"
              )}
            >
              <Photo src={p.image} alt={p.alt} tone="warm" sizes="(min-width: 768px) 25vw, 50vw" className="size-full" />
            </ImageReveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Script className="text-xl">{aboutGallery.note}</Script>
        </Reveal>
      </section>

      {/* Advisory */}
      <section className="bg-blush-soft px-6 py-24 text-center md:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <Eyebrow className="text-[10px]">{advisory.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{advisory.heading}</h2>
          <p className="mt-8 font-serif text-lg leading-relaxed text-ink/80">{advisory.lead}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{advisory.body}</p>
          <Link href="/contact" className={cn(buttonVariants({ size: "cta" }), "mt-10")}>
            {advisory.cta}
          </Link>
        </Reveal>
      </section>
    </>
  )
}
