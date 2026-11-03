import Image from "next/image"
import { cn } from "@/lib/utils"

type Tone = "cream" | "blush" | "stone" | "dark" | "warm"

const tones: Record<Tone, string> = {
  cream: "bg-[#efe8df] text-[#b5aaa1]",
  blush: "bg-[#e9dbd3] text-[#b29b91]",
  stone: "bg-[#d9d4ce] text-[#9b938c]",
  dark: "bg-[#2a2727] text-[#6e6765]",
  warm: "bg-[#c9a585] text-[#8c6a4f]",
}

type PhotoProps = {
  src?: string
  alt: string
  className?: string
  tone?: Tone
  /** Hint shown on the placeholder until a real image is supplied */
  hint?: string
  priority?: boolean
  sizes?: string
  grayscale?: boolean
  zoom?: boolean
  /** Extra classes for the <img>, e.g. "object-left-top" for screenshots */
  imageClassName?: string
}

/**
 * Fills its parent. Renders the image when `src` is set, otherwise a quiet
 * tinted placeholder so layouts hold their shape before photos are added.
 */
export function Photo({
  src,
  alt,
  className,
  tone = "cream",
  hint,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  grayscale,
  zoom = true,
  imageClassName,
}: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden", !src && tones[tone], className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover",
            grayscale && "grayscale",
            zoom && "transition-transform duration-1400 ease-soft group-hover:scale-[1.03]",
            imageClassName
          )}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]"
        >
          {hint && <span className="px-4 text-center font-serif text-sm italic">{hint}</span>}
        </div>
      )}
    </div>
  )
}
