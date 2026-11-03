import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { ArrowLink, Eyebrow, Script, Sparkle, Tag, UnderlineLink } from "@/components/site/bits"
import { Photo } from "@/components/site/photo"
import { ProjectArt } from "@/components/site/project-art"
import { personTeaser, stats } from "@/content/about"
import { journal, offTheClock } from "@/content/life"
import { featuredProjects, projectCta, projectHref, projectMeta } from "@/content/projects"
import { portraits } from "@/content/site"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid md:h-[min(calc(100svh-5rem),820px)] md:min-h-[600px] md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-6 pt-14 pb-12 md:px-16 lg:px-24">
          <Reveal>
            <Eyebrow>Engineer · Builder · Curious Human</Eyebrow>
            <h1 className="mt-6 font-serif text-6xl leading-[0.95] font-medium tracking-tight md:text-7xl lg:text-8xl">
              More than
              <br />
              the code.
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link href="/work" className={buttonVariants({ size: "cta" })}>
              Explore my work
            </Link>
            <UnderlineLink href="/about" className="self-start sm:self-auto">
              Get to know me
            </UnderlineLink>
          </Reveal>
          <Reveal delay={0.4} className="mt-20 hidden md:block">
            <Script className="-rotate-6 text-xl">yes, there is more to me :)</Script>
            <ArrowRight className="mt-2 ml-2 size-5 text-wine" strokeWidth={1.25} />
          </Reveal>
        </div>
        <ImageReveal className="relative min-h-115 md:min-h-0">
          <Photo
            src={portraits.hero}
            alt="Portrait of Chioma"
            tone="stone"
            hint="Hero portrait"
            priority
            zoom={false}
            className="absolute inset-0"
          />
          <p className="absolute top-6 right-6 font-script text-lg text-ink/70">{portraits.heroCaption}</p>
        </ImageReveal>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <Stagger className="mx-auto grid max-w-360 grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 md:grid-cols-4 md:px-24">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <Eyebrow className="text-[10px] tracking-[0.14em]">{s.label}</Eyebrow>
              <p className="mt-2 font-serif text-2xl">{s.value}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Selected projects */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-24 md:py-32">
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
            <article
              key={project.slug}
              className="grid items-center gap-8 md:grid-cols-[1.35fr_1fr] md:gap-16"
            >
              <ImageReveal className={cn(i % 2 === 1 && "md:order-2")}>
                <Link href={projectHref(project)} aria-label={project.title}>
                  <ProjectArt project={project} />
                </Link>
              </ImageReveal>
              <Reveal delay={0.1} className={cn(i % 2 === 1 && "md:order-1")}>
                <Eyebrow className="text-[10px]">
                  {projectMeta(project)}
                </Eyebrow>
                <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">{project.title}</h3>
                {project.subtitle && (
                  <p className="mt-3 font-serif text-lg text-muted-foreground italic">{project.subtitle}</p>
                )}
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
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

      {/* The person */}
      <section className="bg-surface px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <ImageReveal className="relative mx-auto w-full max-w-sm">
            <Photo
              src={portraits.person}
              alt="Chioma smiling"
              tone="stone"
              hint="B&W portrait"
              grayscale
              className="aspect-[4/5]"
            />
            <div className="absolute -right-6 -bottom-8 flex size-28 rotate-3 items-end bg-blush p-3 md:-right-10">
              <span className="font-script text-sm leading-tight text-ink/80">Living with intention</span>
            </div>
          </ImageReveal>
          <Reveal delay={0.1}>
            <Eyebrow>The Person</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{personTeaser.heading}</h2>
            <p className="mt-8 font-serif text-lg leading-relaxed text-ink/80 italic md:not-italic md:text-base">
              {personTeaser.body[0]}
            </p>
            <p className="mt-5 hidden text-sm leading-relaxed text-muted-foreground md:block">
              {personTeaser.body[1]}
            </p>
            <div className="mt-10 border-b border-ink/30 pb-2">
              <Link
                href="/about"
                className="text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:text-wine"
              >
                My full story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Off the clock */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl italic">Off the clock</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A few things I&apos;m currently building, learning, and enjoying.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 md:gap-5">
          <ImageReveal className="group relative col-span-2 aspect-[4/3] md:col-span-1 md:row-span-2 md:aspect-auto">
            <Photo
              src={offTheClock.film.image}
              alt="Film camera and rolls"
              tone="stone"
              grayscale
              className="absolute inset-0"
            />
            <span className="absolute bottom-4 left-4 bg-surface px-2 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase">
              {offTheClock.film.caption}
            </span>
          </ImageReveal>
          <ImageReveal delay={0.1} className="group hidden aspect-square md:block">
            <Photo src={offTheClock.keyboard} alt="Mechanical keyboard" tone="cream" className="size-full" />
          </ImageReveal>
          <ImageReveal
            delay={0.2}
            className="order-first flex aspect-square rotate-2 flex-col justify-end bg-blush p-5 md:order-none md:row-span-2 md:aspect-auto"
          >
            <Script className="text-sm">Currently Reading</Script>
            <p className="mt-2 font-serif text-lg leading-snug">{offTheClock.reading}</p>
          </ImageReveal>
          <ImageReveal delay={0.15} className="group aspect-square">
            <Photo src={offTheClock.journal} alt="Journal and coffee" tone="warm" className="size-full" />
          </ImageReveal>
        </div>
        <Reveal className="mt-12 flex items-center justify-center gap-3">
          <Script className="text-ink/80">balancing the digital with the tactile</Script>
          <Sparkle className="size-3" />
        </Reveal>
      </section>

      {/* Journal */}
      <section className="border-t border-border px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] md:px-18">
          <Reveal className="flex items-end justify-between">
            <div>
              <Eyebrow className="hidden md:block">Writing</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Journal & Notes</h2>
            </div>
            <UnderlineLink href="/life-outside-syntax" className="hidden md:inline-block">
              View journal
            </UnderlineLink>
          </Reveal>
          <Stagger className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {journal.map((entry, i) => (
              <StaggerItem key={entry.title} className={cn(i === 2 && "hidden md:block")}>
                <Link href={entry.href} className="group block">
                  <Photo
                    src={entry.image}
                    alt={entry.title}
                    tone={(["stone", "warm", "blush"] as const)[i % 3]}
                    className="hidden aspect-[4/3] md:block"
                  />
                  <div className="mt-5 flex justify-between text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                    <span>{entry.category}</span>
                    <span>{entry.date}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl transition-colors duration-300 group-hover:text-wine">
                    {entry.title}
                  </h3>
                  <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground md:block">
                    {entry.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-[10px] font-semibold tracking-[0.16em] text-wine uppercase md:hidden">
                    Read more
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Link
            href="/life-outside-syntax"
            className={cn(buttonVariants({ variant: "outline", size: "cta" }), "mt-12 w-full md:hidden")}
          >
            View all notes
          </Link>
        </div>
      </section>
    </>
  )
}
