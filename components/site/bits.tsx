import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>
}

/** Handwritten accent note */
export function Script({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("font-script text-lg leading-snug text-wine", className)}>{children}</p>
}

/** Four-point star used as a divider ornament */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-4 fill-wine", className)}>
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-input px-2 py-1 text-[9px] font-semibold tracking-[0.12em] text-ink/80 uppercase">
      {children}
    </span>
  )
}

/** Small uppercase wine link with an arrow that nudges on hover */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const external = href.startsWith("http")
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group/arrow inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-wine uppercase",
        className
      )}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-500 ease-soft group-hover/arrow:translate-x-1" />
    </Link>
  )
}

/** Underlined uppercase text link, e.g. "View all work" */
export function UnderlineLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block border-b border-ink pb-1 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 hover:border-wine hover:text-wine",
        className
      )}
    >
      {children}
    </Link>
  )
}

/** White-bordered photo print with a handwritten caption */
export function Polaroid({
  children,
  caption,
  className,
}: {
  children: React.ReactNode
  caption?: string
  className?: string
}) {
  return (
    <figure
      className={cn(
        "bg-surface p-3 pb-2 shadow-[0_18px_40px_-18px_rgba(31,29,29,0.35)] transition-transform duration-700 ease-soft hover:rotate-0",
        className
      )}
    >
      {children}
      {caption && (
        <figcaption className="pt-2 pb-1 font-script text-base text-ink/80">{caption}</figcaption>
      )}
    </figure>
  )
}
