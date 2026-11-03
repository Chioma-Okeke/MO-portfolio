"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { ArrowLink, Tag } from "@/components/site/bits"
import { ProjectArt } from "@/components/site/project-art"
import {
  categories,
  projectCta,
  projectHref,
  type Project,
  type ProjectCategory,
} from "@/content/projects"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

export function WorkList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <div className="border-b border-border bg-background">
        <div
          role="tablist"
          aria-label="Filter projects"
          className="mx-auto flex max-w-4xl gap-8 overflow-x-auto px-6 py-6 [scrollbar-width:none] md:justify-center md:gap-14 md:py-8"
        >
          {categories.map((c) => (
            <button
              key={c.value}
              role="tab"
              aria-selected={filter === c.value}
              onClick={() => setFilter(c.value)}
              className={cn(
                "relative shrink-0 pb-2 text-[11px] tracking-[0.12em] whitespace-nowrap text-muted-foreground transition-colors duration-300 hover:text-ink",
                filter === c.value && "font-semibold text-ink"
              )}
            >
              {c.label}
              {filter === c.value && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-x-0 bottom-0 h-px bg-wine"
                  transition={{ duration: 0.5, ease }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-24 md:py-28">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.9, ease }}
              className="grid items-center gap-8 pb-24 md:grid-cols-2 md:gap-20 md:pb-36 last:pb-0"
            >
              <Link
                href={projectHref(project)}
                aria-label={project.title}
                className={cn(i % 2 === 1 && "md:order-2")}
              >
                <ProjectArt project={project} />
              </Link>
              <div className={cn(i % 2 === 1 && "md:order-1")}>
                <div className="flex items-center gap-4 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                  <span className="font-serif text-xl tracking-normal text-ink/25 italic normal-case">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden h-px w-10 bg-border md:block" />
                  {project.label}
                </div>
                <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight">{project.title}</h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <div className="mt-6 hidden flex-wrap gap-2 md:flex">
                  {project.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <ArrowLink href={projectHref(project)} className="mt-8">
                  {projectCta(project)}
                </ArrowLink>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
