// "Life outside syntax" - scrapbook page, plus the home page "Off the clock" and journal sections.

export const currentlyEnjoying = [
  { label: "Reading", value: "On Earth We're Briefly Gorgeous" },
  { label: "Listening", value: "NPR Tiny Desk Concerts" },
  { label: "Sipping", value: "Hojicha Oat Lattes" },
  { label: "Watching", value: "Succession (Rewatch)" },
  { label: "Building", value: "Analog Film Library" },
]

export const explorations = {
  landscape: { image: undefined as string | undefined, caption: "Amalfi Coast, 2023" },
  polaroid: { image: undefined as string | undefined, caption: "Morning walks in Lisbon" },
  note: "Traveling reminds me that systems are universal, but cultures are unique.",
}

export const pleasures = [
  {
    icon: "camera" as const,
    title: "Film Photography",
    body: "I find deep satisfaction in the 24-frame limit. It forces intentionality in a world of infinite digital noise.",
  },
  {
    icon: "users" as const,
    title: "Community Building",
    body: "Mentoring junior engineers and hosting technical dinners are my favorite ways to give back.",
  },
  {
    icon: "dumbbell" as const,
    title: "Physical Resilience",
    body: "Strength training and climbing keep me grounded when the code gets too abstract.",
  },
]

export const pleasureImages = {
  main: undefined as string | undefined,
  secondary: undefined as string | undefined,
  polaroid: undefined as string | undefined,
}

export const moments = [
  {
    date: "Oct 12, 2024",
    title: "Sunday Mornings & Stationery.",
    body: "There is something meditative about a fountain pen meeting textured paper. No ctrl+z, just commitment.",
    note: "the ink flows where it must",
    image: undefined as string | undefined,
  },
  {
    date: "Sep 28, 2024",
    title: "Golden Hour in the Studio.",
    body: "Finding the perfect light is like finding the perfect abstraction. It just clicks.",
    note: "chasing the shadows",
    image: undefined as string | undefined,
  },
  {
    date: "Aug 15, 2024",
    title: "Community technical dinner.",
    body: "Breaking bread while breaking down complex systems. The best kind of night.",
    note: "food for thought",
    image: undefined as string | undefined,
  },
]

export const closingQuote = "May your life be as elegant as your code, and as expressive as your heart."

// Home page "Off the clock" collage
export const offTheClock = {
  film: { image: undefined as string | undefined, caption: "Analog Photography" },
  keyboard: undefined as string | undefined,
  journal: undefined as string | undefined,
  reading: "“The Architecture of Happiness” - Alain de Botton",
}

// Home page "Journal & Notes"
export const journal = [
  {
    category: "Security",
    date: "Oct 12, 2024",
    title: "The Aesthetics of Secure Systems",
    excerpt:
      "Why minimalism isn't just a design choice; it's a security imperative. Exploring the relationship between complexity and vulnerability.",
    image: undefined as string | undefined,
    href: "/life-outside-syntax",
  },
  {
    category: "Process",
    date: "Sep 28, 2024",
    title: "Building in Public, Quietly",
    excerpt:
      "How to share your work and journey without the noise. Finding a sustainable rhythm for personal growth.",
    image: undefined as string | undefined,
    href: "/life-outside-syntax",
  },
  {
    category: "Life",
    date: "Aug 15, 2024",
    title: "Finding “Soft Power” in Code",
    excerpt:
      "Reflections on a decade in engineering and the evolution of my personal philosophy.",
    image: undefined as string | undefined,
    href: "/life-outside-syntax",
  },
]
