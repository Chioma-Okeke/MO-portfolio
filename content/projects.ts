// All projects live here. Order in this array = order on the home page "Selected Projects".
//
// - `featured: true`  → also shown in "Selected Projects" on the home page.
// - `caseStudy`       → gives the project its own page at /work/<slug>.
//                       Without it, the card links to `link.href` instead.
// - `link`            → with a case study, shown as a button under the title.
// - `icon`            → placeholder glyph shown until you add an `image`.

export type ProjectCategory = "ai" | "product" | "beyond"

export type CaseStudy = {
  tagline?: string // handwritten note next to the title
  showcaseCaption?: string
  facts: { label: string; value: string }[]
  overview: { heading: string; pullQuote?: string; body: string[] }
  features?: { heading: string; items: { title: string; body: string }[] }
  // Screenshots shown after the features. width/height are the file's pixel size.
  gallery?: {
    heading: string
    // wide: spans both columns. natural: small image, centered at its own size (never stretched)
    items: {
      src: string
      alt: string
      caption: string
      width: number
      height: number
      wide?: boolean
      natural?: boolean
    }[]
  }
  techList?: string[] // full "Built with" list, shown after the features
  architecture?: {
    heading: string
    tags?: string[]
    diagram?: string // image path
    decisions: { title: string; body: string }[]
    code?: { label: string; note?: string; snippet: string }
  }
  challenge?: {
    label?: string // eyebrow text; defaults to "Challenges" (with impact) or "Outcome"
    heading: string
    body: string[]
    impact?: { label: string; value: string; caption: string; footnote?: string }
  }
  lessons?: { title: string; body: string }[]
}

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  label: string // small caps line, e.g. "Product Management"
  year?: string
  summary: string
  subtitle?: string // italic line under the title (home page)
  stack: string[]
  icon?: "shield-check" | "lightbulb" | "graduation-cap" | "store" | "scale" | "megaphone" | "code"
  image?: string
  // Which part of `image` stays visible when a card crops it (default "left-top")
  imagePosition?: "left-top" | "right-top" | "top"
  // The image's pixel size. When set, the case study shows it uncropped.
  imageSize?: { width: number; height: number }
  imageTone?: "light" | "blush" | "dark"
  featured?: boolean
  link?: { label: string; href: string }
  caseStudy?: CaseStudy
}

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "ai", label: "AI Products" },
  { value: "product", label: "Product Management" },
  { value: "beyond", label: "Legal & Creator" },
]

export const projects: Project[] = [
  {
    slug: "claimcheck",
    title: "ClaimCheck",
    category: "ai",
    label: "AI Product · Founder",
    year: "2026",
    subtitle: "Catch risky marketing claims before they publish.",
    summary:
      "An AI web app that flags risky claims in product listings and influencer captions, explains each risk in plain language, and suggests compliant rewrites for Canada and the US.",
    stack: ["v0", "Next.js", "Vercel AI SDK"],
    icon: "shield-check",
    imageTone: "dark",
    featured: true,
    link: { label: "Try the live app", href: "https://build-claimcheck-app.vercel.app" },
    caseStudy: {
      tagline: "Useful, and safe to use.",
      showcaseCaption: "Built and shipped, solo",
      facts: [
        { label: "Role", value: "Founder and Builder" },
        { label: "Stack", value: "v0, Next.js, Vercel AI SDK" },
        { label: "Markets", value: "Canada & US" },
        { label: "Test Suite", value: "10 Scenarios" },
      ],
      overview: {
        heading: "Small merchants don't have a legal team.",
        pullQuote:
          "One overconfident line in a caption or product listing can put a small merchant at risk, and most of them never see it coming.",
        body: [
          "Working with e-commerce brands as a creator, including Shopify merchants, I saw how much marketing copy gets written fast, by people without legal support. Claims slip through that a lawyer would catch immediately.",
          "ClaimCheck brings that review to the merchant. Paste in a product listing or an influencer caption, and it flags the risky claims, explains why each one is a risk in plain language, and suggests a compliant rewrite.",
        ],
      },
      features: {
        heading: "What it does",
        items: [
          {
            title: "Flags risky claims",
            body: "Scans product listings and influencer captions and highlights the specific claims that could cause trouble.",
          },
          {
            title: "Explains in plain language",
            body: "Every flag comes with a short, jargon-free explanation of why it's a risk, written for merchants rather than lawyers.",
          },
          {
            title: "Suggests compliant rewrites",
            body: "Offers a safer version of the copy, so merchants can fix the problem and publish, instead of just being told no.",
          },
        ],
      },
      techList: ["v0", "Next.js", "Vercel AI SDK", "Structured outputs", "Vercel"],
      architecture: {
        heading: "Designing for trust",
        tags: ["Trust guardrails", "Structured output"],
        decisions: [
          {
            title: "Exact quotes only",
            body: "Every flag must quote the merchant's copy exactly, so it's always clear what was flagged and nothing is paraphrased into something it isn't.",
          },
          {
            title: "No invented laws",
            body: "The model is instructed never to make up regulations. A compliance tool that hallucinates rules does more harm than good.",
          },
          {
            title: "Injection protection",
            body: "Merchant copy is treated as data, not instructions, so text pasted into ClaimCheck can't take over the review.",
          },
          {
            title: "Structured output schema",
            body: "Responses follow a defined schema, so every result has the same shape: the claim, the risk, the explanation, and the rewrite.",
          },
          {
            title: "Grounded in legal training",
            body: "I designed the system prompt and guardrails myself, drawing on my background in law and contract review.",
          },
          {
            title: "Real-world test cases",
            body: "A 10-scenario test suite covers clean copy, emoji-heavy captions, French text, and prompt injection attempts.",
          },
        ],
      },
      challenge: {
        heading: "What's next.",
        body: [
          "ClaimCheck is live, and I'm now validating it with Shopify merchants from my creator network, learning where it saves them time and where it needs to be sharper.",
          "Success looks like merchants publishing with confidence: fewer risky claims going live, and rewrites they actually use.",
        ],
      },
    },
  },
  {
    slug: "syncventory",
    title: "Syncventory",
    category: "product",
    label: "Product Management · Nugi Technologies",
    year: "2025",
    subtitle: "Stock and sales, across every store.",
    summary:
      "A multi-store inventory and POS platform for retailers. I led product delivery end to end, from problem definition and prioritization to release.",
    stack: ["PRDs", "User Stories", "QA/UAT", "Backlog"],
    icon: "store",
    imageTone: "blush",
    featured: true,
    caseStudy: {
      tagline: "One view of every store.",
      facts: [
        { label: "Role", value: "Product Manager (Volunteer)" },
        { label: "Company", value: "Nugi Technologies, London (Remote)" },
        { label: "Timeline", value: "Jan - Aug 2025" },
        { label: "Scope", value: "Sales, Inventory, Multi-store Stock" },
      ],
      overview: {
        heading: "Retailers with more than one store need one source of truth.",
        body: [
          "Syncventory helps retailers manage stock and sales across multiple stores from a single inventory and point-of-sale platform.",
          "I led product delivery as a volunteer PM, planning features end to end and refining the backlog through stakeholder feedback.",
        ],
      },
      features: {
        heading: "How I led it",
        items: [
          {
            title: "Requirements",
            body: "Wrote PRDs, user stories and acceptance criteria for the core sales, inventory and multi-store stock features.",
          },
          {
            title: "Planning",
            body: "Led feature planning from problem definition and prioritization through to release, refining the backlog as stakeholder feedback came in.",
          },
          {
            title: "Quality",
            body: "Defined QA and UAT scenarios with engineering, design and data teams, verifying fixes before each release.",
          },
        ],
      },
    },
  },
  {
    slug: "contentq",
    title: "ContentQ",
    category: "product",
    label: "Product Management · HNG Internship",
    year: "2025",
    subtitle: "A productivity app for creators.",
    summary:
      "A creator productivity app for capturing ideas, managing tasks and staying on schedule. I defined the requirements and user flows and took the MVP from idea to launch in 8 weeks.",
    stack: ["Requirements", "User Flows", "ClickUp", "QA"],
    icon: "lightbulb",
    featured: true,
    caseStudy: {
      tagline: "From idea to launch in 8 weeks.",
      facts: [
        { label: "Role", value: "Product Manager Intern" },
        { label: "Program", value: "HNG Internship (Top 4%)" },
        { label: "Timeline", value: "8 Weeks" },
        { label: "Team", value: "Engineering, Design, DevOps, Marketing" },
      ],
      overview: {
        heading: "Creators have more ideas than systems.",
        body: [
          "As a creator myself, I know ideas show up at the worst times and slip away just as fast. ContentQ gives creators one place to capture ideas, turn them into tasks, and get reminded to follow through.",
          "I built it during HNG's 10-stage elimination internship, where I was one of 450 finalists out of 12,362 interns.",
        ],
      },
      features: {
        heading: "What I owned",
        items: [
          {
            title: "Idea capture",
            body: "Defined the requirements and user flow for quickly saving an idea before it's lost.",
          },
          {
            title: "Tasks",
            body: "Mapped how ideas become tasks, so creators can move from inspiration to a finished post.",
          },
          {
            title: "Notifications",
            body: "Specified the reminders that keep creators on schedule without overwhelming them.",
          },
        ],
      },
      challenge: {
        heading: "Shipping on an internship clock.",
        body: [
          "HNG moves fast and cuts teams at every stage. I turned requirements into ClickUp tickets, assigned and tracked them through to release, and defined QA test cases, tracking issues to resolution across the backend, mobile and data tracks.",
        ],
        impact: {
          label: "Idea to launch",
          value: "8 wks",
          caption: "From first requirement to a launched MVP.",
        },
      },
    },
  },
  {
    slug: "zedu",
    title: "Zedu",
    category: "ai",
    label: "AI Product · HNG Internship",
    year: "2025",
    subtitle: "An AI learning platform for bootcamps and schools.",
    summary:
      "An AI learning platform for bootcamps and schools. I researched competing tools to define what would set the MVP apart and wrote requirements for its core features.",
    stack: ["Competitive Research", "Requirements", "ClickUp"],
    icon: "graduation-cap",
    caseStudy: {
      facts: [
        { label: "Role", value: "Product Manager Intern" },
        { label: "Program", value: "HNG Internship" },
        { label: "Timeline", value: "Oct - Dec 2025" },
        { label: "Users", value: "Bootcamps & Schools" },
      ],
      overview: {
        heading: "Standing out in a crowded space.",
        body: [
          "There's no shortage of learning tools, so Zedu needed a clear reason to exist. I researched competing tools to define what would set the MVP apart.",
          "From there, I wrote requirements for the core MVP features and turned them into ClickUp tickets for developers, assigning and tracking them through to release.",
        ],
      },
    },
  },
  {
    slug: "letter-of-award-workflow",
    title: "Letter-of-Award Workflow",
    category: "beyond",
    label: "Legal & Operations · Lekki Gardens",
    year: "2021",
    subtitle: "My first product, before I called it one.",
    summary:
      "Redesigned the letter-of-award workflow at a Lagos real estate developer, cutting contract turnaround time by 40%, and introduced a review checklist that reduced drafting errors.",
    stack: ["Process Design", "Contracts", "Compliance"],
    icon: "scale",
    imageTone: "blush",
    caseStudy: {
      facts: [
        { label: "Role", value: "Head of Contract and Insurance" },
        { label: "Where", value: "Lekki Gardens Real Estate, Lagos" },
        { label: "Timeline", value: "Jun 2021 - Jun 2022" },
        { label: "Turnaround", value: "−40%" },
      ],
      overview: {
        heading: "When paperwork holds up the project.",
        body: [
          "Projects couldn't start until contracts and insurance documents were in order, and the letter-of-award process was slow.",
          "I redesigned the workflow, introduced a review checklist for contract documents, and streamlined all-risk insurance and change-of-ownership documents so projects started on schedule.",
        ],
      },
      challenge: {
        heading: "Faster, and fewer errors.",
        body: [
          "The checklist reduced drafting errors and strengthened legal compliance, while the new workflow got contracts out the door faster.",
        ],
        impact: {
          label: "Measured impact",
          value: "40%",
          caption: "Faster contract turnaround.",
        },
      },
    },
  },
  {
    slug: "creator-brand-partnerships",
    title: "Creator Brand Partnerships",
    category: "beyond",
    label: "Social Commerce · Instagram",
    subtitle: "29K followers, and a front-row seat to what makes people buy.",
    summary:
      "Partnered with e-commerce brands, including Shopify merchants, on sponsored Instagram campaigns, promoting exclusive discount codes (up to 20% off) that turned followers into paying customers.",
    stack: ["Instagram", "Brand Partnerships", "Shopify"],
    icon: "megaphone",
    caseStudy: {
      facts: [
        { label: "Role", value: "Content Creator & Brand Partner" },
        { label: "Platform", value: "Instagram" },
        { label: "Audience", value: "29K Followers" },
        { label: "Partners", value: "E-commerce Brands, incl. Shopify" },
      ],
      overview: {
        heading: "Learning commerce from the other side of the screen.",
        body: [
          "I partner with e-commerce brands, including Shopify merchants, on sponsored Instagram campaigns, promoting exclusive discount codes of up to 20% off that turn followers into paying customers.",
          "It's taught me first-hand what drives clicks, trust and purchases for small merchants in social commerce, and it's where I first saw the problem ClaimCheck now solves.",
        ],
      },
    },
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const caseStudies = projects.filter((p) => p.caseStudy)

export const featuredProjects = projects.filter((p) => p.featured)

export function projectHref(project: Project) {
  return project.caseStudy ? `/work/${project.slug}` : (project.link?.href ?? "/work")
}

export function projectCta(project: Project) {
  return project.caseStudy ? "Read Case Study" : (project.link?.label ?? "Learn more")
}

export function projectMeta(project: Project) {
  return [project.label, project.year].filter(Boolean).join(" · ")
}
