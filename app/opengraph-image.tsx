// The share image people see when a link to this site is posted on LinkedIn,
// Slack, iMessage, X, etc. Next.js renders this JSX into a 1200 x 630 PNG at
// build time and adds the <meta property="og:image"> tags to every page.
//
// It's not a normal web page: only inline `style` works (no Tailwind), and any
// element with more than one child needs `display: "flex"`.

import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { portraits, site } from "@/content/site"

export const alt = `${site.name}, product manager building AI and e-commerce products`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Same palette as app/globals.css
const colors = {
  cream: "#faf6f0",
  ink: "#1f1d1d",
  wine: "#7d2745",
  muted: "#6e6662",
}

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file))

// Uses the link-preview photo (portraits.linkPreview in content/site.ts). Photos in
// /public/me are git-ignored, so fall back to a plain panel if it isn't on disk.
async function loadPhoto() {
  const src = portraits.linkPreview
  if (!src) return null
  try {
    const file = await readFile(join(process.cwd(), "public", src))
    const type = /\.jpe?g$/i.test(src) ? "jpeg" : "png"
    return `data:image/${type};base64,${file.toString("base64")}`
  } catch {
    return null
  }
}

export default async function Image() {
  const [cormorant, manrope500, manrope600, caveat, photo] = await Promise.all([
    font("cormorant-garamond-500.ttf"),
    font("manrope-500.ttf"),
    font("manrope-600.ttf"),
    font("caveat-500.ttf"),
    loadPhoto(),
  ])

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: colors.cream }}>
        {/* Left: who you are */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 720,
            padding: "0 72px",
          }}
        >
          <div
            style={{
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: 4,
              color: colors.muted,
            }}
          >
            PRODUCT MANAGER · BUILDER · LAWYER
          </div>
          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 80,
              lineHeight: 1,
              color: colors.ink,
              marginTop: 28,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div style={{ fontFamily: "Cormorant", fontSize: 40, color: colors.ink, marginTop: 18 }}>
            AI &amp; E-commerce Products
          </div>
          <div style={{ width: 72, height: 2, background: colors.wine, marginTop: 36 }} />
          <div
            style={{
              fontFamily: "Manrope",
              fontWeight: 500,
              fontSize: 20,
              color: colors.muted,
              marginTop: 28,
            }}
          >
            Lawyer-turned product manager · Ottawa, Canada
          </div>
          <div style={{ fontFamily: "Caveat", fontSize: 34, color: colors.wine, marginTop: 30 }}>
            useful, and safe to use :)
          </div>
        </div>

        {/* Right: photo, or a wine panel if it's missing */}
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain <img>
          <img src={photo} width={480} height={630} style={{ objectFit: "cover" }} alt="" />
        ) : (
          <div style={{ width: 480, height: 630, background: colors.wine }} />
        )}
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: cormorant, weight: 500, style: "normal" },
        { name: "Manrope", data: manrope500, weight: 500, style: "normal" },
        { name: "Manrope", data: manrope600, weight: 600, style: "normal" },
        { name: "Caveat", data: caveat, weight: 500, style: "normal" },
      ],
    }
  )
}
