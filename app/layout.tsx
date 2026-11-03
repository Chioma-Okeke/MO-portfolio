import type { Metadata } from "next"
import { Caveat, Cormorant_Garamond, Manrope } from "next/font/google"
import { MotionProvider } from "@/components/motion/reveal"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { site } from "@/content/site"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
})

// Vercel sets this to the production domain at build time; fall back to local dev
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s - ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.socials.find((s) => s.label === "LinkedIn")?.href }],
  creator: site.name,
  keywords: site.keywords,
  // How the site looks when the link is shared on LinkedIn, Slack, iMessage, etc.
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary", // switch to "summary_large_image" once a share image exists
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      id="top"
      className={`${cormorant.variable} ${manrope.variable} ${caveat.variable} h-full`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
