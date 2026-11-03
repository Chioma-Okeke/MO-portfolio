"use client"

import { useActionState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkle } from "@/components/site/bits"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"
import { sendMessage, type ContactState } from "./actions"

const initialState: ContactState = { status: "idle" }

// Underline-only fields, as in the design
const fieldClass =
  "h-auto rounded-none border-0 border-b border-input bg-transparent px-0 py-3 text-base shadow-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus-visible:border-wine focus-visible:ring-0 aria-invalid:border-destructive aria-invalid:ring-0 md:text-[15px]"

const labelClass = "text-[10px] font-semibold tracking-[0.14em] text-ink/80 uppercase"

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null
  return (
    <p id={id} className="mt-2 text-xs text-destructive">
      {errors[0]}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState)
  const v = state.values ?? {}
  const e = state.errors ?? {}

  return (
    <AnimatePresence mode="wait" initial={false}>
      {state.status === "success" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-80 flex-col items-start justify-center"
          role="status"
        >
          <Sparkle className="size-5" />
          <h3 className="mt-6 font-serif text-4xl">Thank you, message received.</h3>
          <p className="mt-4 font-script text-xl text-wine">I&apos;ll be in touch within 24 hours.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          action={formAction}
          exit={{ opacity: 0, y: -8, transition: { duration: 0.3 } }}
          className="grid gap-10 md:grid-cols-2 md:gap-x-10"
          noValidate
        >
          <div>
            <Label htmlFor="name" className={labelClass}>
              Your name
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Enter your name"
              defaultValue={v.name}
              aria-invalid={!!e.name}
              aria-describedby={e.name ? "name-error" : undefined}
              required
              className={fieldClass}
            />
            <FieldError id="name-error" errors={e.name} />
          </div>
          <div>
            <Label htmlFor="email" className={labelClass}>
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              defaultValue={v.email}
              aria-invalid={!!e.email}
              aria-describedby={e.email ? "email-error" : undefined}
              required
              className={fieldClass}
            />
            <FieldError id="email-error" errors={e.email} />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="subject" className={labelClass}>
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What are we talking about?"
              defaultValue={v.subject}
              className={fieldClass}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="message" className={labelClass}>
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me more..."
              defaultValue={v.message}
              aria-invalid={!!e.message}
              aria-describedby={e.message ? "message-error" : undefined}
              required
              className={cn(fieldClass, "min-h-28 resize-none")}
            />
            <FieldError id="message-error" errors={e.message} />
          </div>

          {/* Honeypot: hidden from people, tempting to bots */}
          <div aria-hidden className="absolute -left-[9999px]">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-col-reverse gap-6 md:col-span-2 md:mt-6 md:flex-row md:items-center md:justify-between">
            <p aria-live="polite" className={cn("font-script text-lg", state.message ? "text-destructive" : "text-muted-foreground/70")}>
              {state.message ? (
                <>
                  {state.message}{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                </>
              ) : (
                "I usually respond within 24 hours."
              )}
            </p>
            <Button type="submit" variant="ink" size="cta" disabled={pending} className="h-14 px-10">
              {pending ? "Sending…" : "Send message"}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
