import { Code, Cpu, FileCheck, Fingerprint, Handshake, Leaf, Shirt } from "lucide-react"
import type { Project } from "@/content/projects"
import { Photo } from "@/components/site/photo"
import { cn } from "@/lib/utils"

const icons = {
  shirt: Shirt,
  "file-check": FileCheck,
  handshake: Handshake,
  cpu: Cpu,
  leaf: Leaf,
  fingerprint: Fingerprint,
  code: Code,
}

const tones = {
  light: "bg-[#f3f0ec] border-[#e6e0da] text-[#d9d3cc]",
  blush: "bg-[#f6efee] border-[#ebdfdc] text-[#ddd2cf]",
  dark: "bg-ink border-ink text-[#4a4545]",
}

/**
 * The framed artwork for a project card. Shows `project.image` if set,
 * otherwise the design's inset panel with a large glyph.
 */
export function ProjectArt({ project, className }: { project: Project; className?: string }) {
  // Fall back to a generic glyph if `icon` is missing or not in the map
  const Icon = (project.icon && icons[project.icon]) || Code
  const tone = tones[project.imageTone ?? "light"]

  return (
    <div
      className={cn(
        "group relative aspect-[16/10] overflow-hidden border border-border bg-surface",
        className
      )}
    >
      {project.image ? (
        <Photo src={project.image} alt={project.title} className="absolute inset-0" />
      ) : (
        <div className="absolute inset-[13%] flex items-center justify-center">
          <div
            className={cn(
              "flex size-full items-center justify-center border transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.03]",
              tone
            )}
          >
            <Icon className="size-1/4 max-h-24" strokeWidth={1.75} aria-hidden />
          </div>
        </div>
      )}
    </div>
  )
}
