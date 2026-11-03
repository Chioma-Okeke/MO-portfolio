// Global site details - name, contact links, navigation.

export const site = {
  name: "Chioma Okeke",
  // Browser tab, search results, and link previews
  title: "Chioma Okeke - Software Engineer & Cybersecurity",
  // Kept under ~160 characters so search engines don't cut it off
  description:
    "Chioma Okeke is a software engineer and ASU computer science grad student focused on cybersecurity and building secure, human-centered software.",
  keywords: [
    "Chioma Okeke",
    "software engineer",
    "cybersecurity",
    "application security",
    "LLM security",
    "prompt injection",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Arizona State University",
    "Mastercard Foundation Scholar",
  ],
  email: "okekegeraldenne@gmail.com",
  location: "Tempe, AZ / Open to Remote",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/okeke-chioma" },
    { label: "GitHub", href: "https://github.com/Chioma-Okeke" },
    { label: "Resume", href: "/resume.pdf" }, // file lives at public/resume.pdf
  ],
}

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Scrapbook", href: "/life-outside-syntax" },
  { label: "Contact", href: "/contact" },
]

/*
 * Images: drop files into /public/images and reference them as "/images/<file>".
 * Any image left undefined renders as a soft placeholder until you add one.
 */
export const portraits = {
  hero: "/me/home-hero.png" as string | undefined, // home hero
  heroCaption: "Antelope Canyon, Arizona", // handwritten note on the home hero photo
  person: undefined as string | undefined, // home "The Person" B&W portrait
  about: "/me/about-hero.png" as string | undefined, // about hero - "The Quiet Force"
  contact: "/me/contact-page.jpg" as string | undefined, // contact page hero card
}
