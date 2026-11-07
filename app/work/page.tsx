import type { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { Eyebrow } from "@/components/site/bits"
import { projects } from "@/content/projects"

// Work page lists projects A to Z by title, regardless of their order in the data file
const sortedProjects = [...projects].sort((a, b) =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" })
)
import { WorkList } from "./work-list"

export const metadata: Metadata = {
  title: "Work",
  description: "AI products, product management work, and lessons from law and social commerce.",
}

export default function WorkPage() {
  return (
    <>
      <section className="bg-surface px-6 py-20 text-center md:py-28">
        <Reveal>
          <Eyebrow className="tracking-[0.24em]">Portfolio</Eyebrow>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-medium tracking-tight md:text-7xl">
            Thoughtfully built.
            <br />
            Purposefully made.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl font-serif text-lg leading-relaxed text-muted-foreground italic">
            &ldquo;A selection of AI products and product work, shaped by law and social commerce, and focused on
            building things people can trust.&rdquo;
          </p>
        </Reveal>
      </section>

      <WorkList projects={sortedProjects} />

      <section className="border-t border-border px-6 py-20 md:py-28">
        <Reveal className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 text-center md:flex-row md:justify-between md:px-18 md:text-left">
          <div>
            <h2 className="font-serif text-4xl leading-tight">
              Have a project
              <br />
              in mind?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing product management roles, or collaborations on AI and
              e-commerce products that people can trust.
            </p>
          </div>
          <Link href="/contact" className={buttonVariants({ size: "cta" })}>
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </>
  )
}
