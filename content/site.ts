// Global site details - name, contact links, navigation.

export const site = {
  name: "Chioma Okeke",
  title: "Chioma Okeke - Engineer, Builder, Curious Human",
  description:
    "Software engineer and M.S. Computer Science student at Arizona State University, focused on cybersecurity.",
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
  hero: undefined as string | undefined, // home hero
  heroCaption: "Tempe, Arizona", // handwritten note on the home hero photo
  person: undefined as string | undefined, // home "The Person" B&W portrait
  about: undefined as string | undefined, // about hero - "The Quiet Force"
  scrapbook: undefined as string | undefined, // scrapbook polaroid - "Venice, Summer '24"
}
