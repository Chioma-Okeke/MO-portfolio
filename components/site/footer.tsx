import Link from "next/link"
import { site } from "@/content/site"
import { FooterCta } from "./footer-cta"

async function CurrentYear() {
  "use cache"
  return new Date().getFullYear()
}

export function Footer() {
  return (
    <footer>
      <FooterCta />
      <div className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-360 flex-col items-center gap-3 px-6 py-8 text-[10px] tracking-[0.16em] uppercase md:flex-row md:justify-between md:px-16">
          <p>
            &copy; <CurrentYear /> {site.name}
          </p>
          <p className="text-muted-foreground italic">Made with intention.</p>
          <Link href="#top" className="link-draw hidden pb-0.5 md:inline">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  )
}
