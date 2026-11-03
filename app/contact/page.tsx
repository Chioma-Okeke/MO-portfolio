import type { Metadata } from "next"
import { Heart, MailOpen } from "lucide-react"
import { ImageReveal, Reveal } from "@/components/motion/reveal"
import { Eyebrow, Script, Sparkle } from "@/components/site/bits"
import { site } from "@/content/site"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Collaboration, advisory, or just a hello.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface px-6 py-16 md:px-24 md:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Get in touch</Eyebrow>
            <h1 className="mt-6 font-serif text-6xl leading-[1] font-medium tracking-tight md:text-8xl">
              Good things
              <br />
              start with
              <br />
              hello.
            </h1>
            <a
              href={`mailto:${site.email}`}
              className="mt-12 inline-block border-b border-wine pb-1 font-serif text-2xl transition-colors duration-300 hover:text-wine md:text-3xl"
            >
              {site.email}
            </a>
            <ul className="mt-6 flex gap-7">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw pb-0.5 text-[10px] font-medium tracking-[0.18em] uppercase"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <ImageReveal delay={0.15} className="relative hidden md:block">
            <div className="ml-auto flex aspect-[4/5] max-w-lg rotate-2 flex-col items-center justify-center border border-blush/60 bg-background shadow-[0_40px_60px_-30px_rgba(31,29,29,0.3)] transition-transform duration-1000 ease-soft hover:rotate-0">
              <MailOpen className="size-24 text-ink/10" strokeWidth={1.25} />
              <p className="mt-4 font-serif text-lg text-ink/15 italic">Let&apos;s connect</p>
            </div>
            <div className="absolute -bottom-6 left-0 flex -rotate-12 items-center gap-1 lg:left-4">
              <Script className="text-2xl">don&apos;t be a stranger</Script>
              <Heart className="size-5 text-wine" strokeWidth={1.25} />
            </div>
          </ImageReveal>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-border px-6 py-20 md:px-24 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <h2 className="font-serif text-3xl">Roles &amp; Collaboration</h2>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              Whether it&apos;s a security or software engineering role, a research collaboration, or you just want to chat
              about film photography, my inbox is always open.
            </p>
            <div className="mt-8 max-w-xs border-t border-border pt-8">
              <Eyebrow className="text-[10px]">Location</Eyebrow>
              <p className="mt-3 font-serif text-xl">{site.location}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border px-6 py-24 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <Sparkle className="mx-auto size-6" />
          <p className="mt-8 font-serif text-3xl leading-snug italic md:text-4xl">
            &ldquo;Soft Power is the ability to influence through excellence.&rdquo;
          </p>
          <p className="mt-8 font-script text-xl text-ink/70">looking forward to connecting</p>
        </Reveal>
      </section>
    </>
  )
}
