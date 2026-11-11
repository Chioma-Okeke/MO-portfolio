"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { nav, site } from "@/content/site"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  // On the home page the header melts into the hero's background until the hero
  // (one screen tall) has scrolled away, then switches to the regular cream header
  const [pastHero, setPastHero] = useState(false)
  useEffect(() => {
    if (pathname !== "/") return
    const update = () => setPastHero(window.scrollY > window.innerHeight - 160)
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [pathname])
  const overHero = pathname === "/" && !pastHero

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-500",
        overHero ? "border-transparent bg-blush" : "border-border bg-background/90 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-16">
        <Link href="/" className="font-serif text-xl tracking-tight md:text-2xl">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "link-draw pb-1 text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-300 hover:text-wine",
                    isActive(item.href) && "text-wine"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="-mr-2 p-2 md:hidden" aria-label="Open menu">
            <Menu className="size-6" strokeWidth={1.5} />
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background px-8 pt-24 sm:max-w-sm">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-6">
                {[{ label: "Home", href: "/" }, ...nav].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "font-serif text-4xl transition-colors hover:text-wine",
                        (item.href === "/" ? pathname === "/" : isActive(item.href)) && "text-wine"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mt-auto pb-10 font-script text-xl text-wine">{site.email}</p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
