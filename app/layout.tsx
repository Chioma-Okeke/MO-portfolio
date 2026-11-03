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

export const metadata: Metadata = {
  title: { default: site.title, template: `%s - ${site.name}` },
  description: site.description,
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
