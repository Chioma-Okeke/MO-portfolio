"use server"

import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  name: z.string().trim().min(1, "Please tell me your name.").max(100),
  email: z.email("That email doesn't look quite right."),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, "A little more detail, please (10+ characters).").max(5000),
})

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>
  values?: Record<string, string>
}

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  }

  // Honeypot: real visitors never see or fill this field
  if (formData.get("company")) return { status: "success" }

  const parsed = schema.safeParse(values)
  if (!parsed.success) {
    return { status: "error", errors: z.flattenError(parsed.error).fieldErrors, values }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set")
    return {
      status: "error",
      message: "The form isn't configured yet; please email me directly.",
      values,
    }
  }

  const { name, email, subject, message } = parsed.data
  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    console.error("Contact form: Resend error", error)
    return { status: "error", message: "Something went wrong sending that. Please try again.", values }
  }

  return { status: "success" }
}
