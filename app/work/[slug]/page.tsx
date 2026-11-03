import type { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { Eyebrow, Script, Sparkle, Tag } from "@/components/site/bits"
import { Photo } from "@/components/site/photo"
import { ProjectArt, imagePositions } from "@/components/site/project-art"
import { diagrams } from "@/components/diagrams"
import { caseStudies, getProject, projectMeta } from "@/content/projects"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug)
  return project ? { title: project.title, description: project.summary } : {}
}

// Reading `params` happens inside <Suspense> so navigations into a case study
// show the shell instantly instead of blocking (Cache Components guidance).
export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-[80svh]" aria-busy="true" />}>
      <CaseStudy params={params} />
    </Suspense>
  )
}

async function CaseStudy({ params }: { params: PageProps<"/work/[slug]">["params"] }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project?.caseStudy) notFound()

  const cs = project.caseStudy
  const index = caseStudies.indexOf(project)
  const next = caseStudies[(index + 1) % caseStudies.length]
  const Diagram = diagrams[project.slug]
  // Many decisions and no diagram → spread them across a full-width grid
  const wideDecisions =
    !!cs.architecture && !cs.architecture.diagram && cs.architecture.decisions.length > 3
  let section = 0
  const num = () => String(++section).padStart(2, "0")

  return (
    <article>
      {/* Title + showcase */}
      <section className="mx-auto max-w-[1440px] px-6 pt-16 pb-20 md:px-24 md:pt-24">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <Eyebrow className="text-[10px]">
              {projectMeta(project)}
            </Eyebrow>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] font-medium tracking-tight md:text-7xl">
              {project.title}
            </h1>
          </Reveal>
          {cs.tagline && (
            <Reveal delay={0.3} className="hidden shrink-0 md:block">
              <Script className="max-w-32 rotate-6 text-xl">{cs.tagline}</Script>
            </Reveal>
          )}
        </div>
        <ImageReveal delay={0.1} className="relative mt-14 border border-border bg-surface p-6 md:p-16">
          {project.image && project.imageSize ? (
            <Image
              src={project.image}
              alt={`${project.title} interface`}
              width={project.imageSize.width}
              height={project.imageSize.height}
              priority
              sizes="(min-width: 1440px) 1200px, 100vw"
              className="h-auto w-full shadow-2xl shadow-ink/15"
            />
          ) : project.image ? (
            <Photo
              src={project.image}
              alt={`${project.title} interface`}
              priority
              sizes="(min-width: 1440px) 1200px, 100vw"
              className="aspect-[16/10] shadow-2xl shadow-ink/15"
              imageClassName={imagePositions[project.imagePosition ?? "left-top"]}
              zoom={false}
            />
          ) : (
            <ProjectArt project={project} className="border-0 shadow-2xl shadow-ink/10" />
          )}
          {cs.showcaseCaption && (
            <Script className="absolute right-6 bottom-3 text-sm text-ink/70 md:right-8 md:bottom-5">
              {cs.showcaseCaption}
            </Script>
          )}
        </ImageReveal>
      </section>

      {/* Facts */}
      <section className="border-y border-border bg-surface">
        <Stagger className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 md:grid-cols-4 md:px-24">
          {cs.facts.map((f) => (
            <StaggerItem key={f.label}>
              <Eyebrow className="text-[10px]">{f.label}</Eyebrow>
              <p className="mt-2 font-serif text-xl leading-snug">{f.value}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Overview */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-24 md:py-32">
        <Reveal>
          <Eyebrow className="text-[10px]">{num()} / Overview</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight">{cs.overview.heading}</h2>
          {cs.overview.pullQuote && (
            <>
              <p className="mt-8 font-serif text-lg leading-relaxed text-muted-foreground italic">
                &ldquo;{cs.overview.pullQuote}&rdquo;
              </p>
              <div className="mt-8 h-px w-20 bg-wine/40" />
            </>
          )}
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-sm leading-relaxed text-muted-foreground md:pt-8">
          {cs.overview.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </section>

      {/* Features */}
      {cs.features && (
        <section className="border-t border-border px-6 py-24 md:px-24 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <Reveal>
              <Eyebrow className="text-[10px]">{num()} / Product</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl">{cs.features.heading}</h2>
            </Reveal>
            <Stagger className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
              {cs.features.items.map((f, i) => (
                <StaggerItem key={f.title}>
                  <span className="font-serif text-wine">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-serif text-xl">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
            {cs.techList && (
              <Reveal className="mt-20 border-t border-border pt-10">
                <Eyebrow className="text-[10px]">Built with</Eyebrow>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.techList.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      {cs.gallery && (
        <section className="border-t border-border px-6 py-24 md:px-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Eyebrow className="text-[10px]">{num()} / Screens</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl">{cs.gallery.heading}</h2>
            </Reveal>
            <div className="mt-14 grid items-start gap-x-10 gap-y-16 md:grid-cols-2">
              {cs.gallery.items.map((shot, i) => (
                <ImageReveal
                  key={shot.src}
                  delay={(i % 2) * 0.1}
                  className={cn((shot.wide || shot.natural) && "md:col-span-2")}
                >
                  <figure
                    className={cn(shot.natural && "mx-auto text-center")}
                    style={shot.natural ? { maxWidth: shot.width / 1.5 } : undefined}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes={shot.wide ? "(min-width: 1152px) 1152px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                      className="h-auto w-full border border-border shadow-2xl shadow-ink/15"
                    />
                    <figcaption className="mt-4 font-script text-lg text-ink/70">{shot.caption}</figcaption>
                  </figure>
                </ImageReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Architecture */}
      {cs.architecture && (
        <section className="border-t border-border bg-surface px-6 py-24 md:px-24 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <Reveal>
              <Eyebrow className="text-[10px]">{num()} / Engineering</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl">{cs.architecture.heading}</h2>
            </Reveal>
            {wideDecisions || Diagram ? (
              <>
                {cs.architecture.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cs.architecture.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
                {Diagram && (
                  // Scrolls sideways on small screens so labels stay readable
                  <ImageReveal className="mt-14 overflow-x-auto border border-border bg-background">
                    <Diagram className="block w-full min-w-[720px] p-4 md:p-8" />
                  </ImageReveal>
                )}
                <Stagger
                  className={cn(
                    "mt-14 grid gap-x-12 gap-y-12 border-t border-border pt-12",
                    cs.architecture.decisions.length % 2 === 0 && cs.architecture.decisions.length < 6
                      ? "md:grid-cols-2"
                      : "md:grid-cols-3"
                  )}
                >
                  {cs.architecture.decisions.map((d) => (
                    <StaggerItem key={d.title}>
                      <h3 className="font-serif text-xl">{d.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              </>
            ) : (
            <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]">
              <ImageReveal className="relative aspect-[16/10] border border-border bg-background">
                {cs.architecture.diagram ? (
                  <Photo src={cs.architecture.diagram} alt="System architecture diagram" className="absolute inset-0" />
                ) : (
                  <p className="absolute inset-0 flex items-center justify-center font-serif text-lg text-ink/20 italic">
                    System Architecture Diagram
                  </p>
                )}
                {cs.architecture.tags && (
                  <div className="absolute top-5 left-5 flex gap-2 bg-background">
                    {cs.architecture.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </ImageReveal>
              <Stagger className="space-y-10">
                {cs.architecture.decisions.map((d) => (
                  <StaggerItem key={d.title}>
                    <h3 className="font-serif text-xl">{d.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            )}

            {cs.architecture.code && (
              <Reveal className="mt-20">
                <div className="flex items-end justify-between">
                  <Eyebrow className="text-[10px]">{cs.architecture.code.label}</Eyebrow>
                  {cs.architecture.code.note && (
                    <Script className="text-base">{cs.architecture.code.note}</Script>
                  )}
                </div>
                <pre className="mt-4 overflow-x-auto bg-ink p-6 font-mono text-[13px] leading-relaxed text-surface/90 md:p-8">
                  <code>{cs.architecture.code.snippet}</code>
                </pre>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Challenge + lessons */}
      {(cs.challenge || cs.lessons) && (
        <section className="border-t border-border px-6 py-24 md:px-24 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            {cs.challenge && (
              <div className={cn("grid items-center gap-14 md:gap-20", cs.challenge.impact ? "md:grid-cols-2" : "max-w-3xl")}>
                <Reveal>
                  <Eyebrow className="text-[10px]">{num()} / {cs.challenge.label ?? (cs.challenge.impact ? "Challenges" : "Outcome")}</Eyebrow>
                  <h2 className="mt-5 font-serif text-4xl">{cs.challenge.heading}</h2>
                  <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
                    {cs.challenge.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </Reveal>
                {cs.challenge.impact && (
                  <ImageReveal className="relative overflow-hidden bg-blush px-8 py-16 text-center">
                    <Sparkle className="absolute -top-8 -right-8 size-40 fill-white/25" />
                    <p className="text-[10px] tracking-[0.16em] text-wine uppercase">
                      {cs.challenge.impact.label}
                    </p>
                    <p className="mt-6 font-serif text-7xl">{cs.challenge.impact.value}</p>
                    <p className="mx-auto mt-4 max-w-56 font-serif text-xl leading-snug">
                      {cs.challenge.impact.caption}
                    </p>
                    {cs.challenge.impact.footnote && (
                      <>
                        <div className="mx-auto mt-8 h-px w-12 bg-ink/30" />
                        <p className="mt-4 text-[10px] text-ink/60">{cs.challenge.impact.footnote}</p>
                      </>
                    )}
                  </ImageReveal>
                )}
              </div>
            )}

            {cs.lessons && (
              <Reveal className="mt-24">
                <h3 className="font-serif text-2xl">Lessons Learned</h3>
                <ul className="mt-8 max-w-2xl space-y-5">
                  {cs.lessons.map((l) => (
                    <li key={l.title} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                      <Sparkle className="mt-1 size-3 shrink-0" />
                      <p>
                        <strong className="font-semibold text-ink">{l.title}:</strong> {l.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Next case study */}
      {next && next.slug !== project.slug && (
        <Link
          href={`/work/${next.slug}`}
          className="group block border-t border-border bg-surface px-6 py-20 md:px-24"
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
            <div>
              <Eyebrow className="text-[10px]">Next case study</Eyebrow>
              <p className="mt-4 font-serif text-4xl transition-colors duration-500 group-hover:text-wine md:text-6xl">
                {next.title}
              </p>
            </div>
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ease-soft group-hover:border-wine group-hover:bg-wine group-hover:text-surface">
              <ArrowRight className="size-5 transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      )}
    </article>
  )
}
