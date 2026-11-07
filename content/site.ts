// Global site details - name, contact links, navigation.

export const site = {
  name: "Chisom Monica Onuorah",
  // Browser tab, search results, and link previews
  title: "Chisom Monica Onuorah - Product Manager",
  // Kept under ~160 characters so search engines don't cut it off
  description:
    "Chisom Monica Onuorah is a lawyer-turned product manager in Ottawa building AI and e-commerce products that are useful and safe to use.",
  keywords: [
    "Chisom Monica Onuorah",
    "Chisom Onuorah",
    "product manager",
    "AI product manager",
    "e-commerce",
    "Shopify",
    "creator marketing",
    "legal and compliance",
    "AI risk",
    "ClaimCheck",
    "PRDs",
    "user research",
    "Ottawa",
  ],
  email: "chisomonuorah20@gmail.com",
  location: "Ottawa, Canada / Open to Remote",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chisom-onuorah-355668247/" },
    { label: "ClaimCheck", href: "https://build-claimcheck-app.vercel.app" },
    { label: "Resume", href: "/resume.pdf" }, // file lives at public/resume.pdf
  ],
}

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  // Scrapbook page still holds the previous owner's content - re-enable once it's rewritten
  // { label: "Scrapbook", href: "/life-outside-syntax" },
  { label: "Contact", href: "/contact" },
]

/*
 * Images: drop files into /public/me and reference them as "/me/<file>".
 * Any image left undefined renders as a soft placeholder until you add one.
 */
export const portraits = {
  hero: undefined as string | undefined, // home hero
  heroCaption: "", // handwritten note on the home hero photo (hidden when empty)
  person: undefined as string | undefined, // home "The Person" B&W portrait
  about: undefined as string | undefined, // about hero
  contact: undefined as string | undefined, // contact page hero card
}
