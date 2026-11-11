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
  overview: {
    heading: string
    pullQuote?: string
    body: string[]
    sources?: { label: string; href: string }[] // research links listed under the body
  }
  audience?: { heading: string; items: { title: string; body: string }[] } // "who it's for" cards
  features?: {
    heading: string
    note?: string // short line under the heading, e.g. what's built vs designed
    // status: optional tag such as "Built" or "Designed"
    items: { title: string; body: string; status?: string }[]
  }
  // Step-by-step user journeys, shown side by side after the features
  flows?: {
    heading: string
    note?: string
    items: { title: string; users: string; steps: string[] }[]
  }
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
  // A future phase on the roadmap, shown after the flows with a status tag (e.g. "Planned")
  nextPhase?: {
    heading: string
    status: string
    body: string
    items: { title: string; body: string; control?: string }[] // control: what stays in the user's hands
    principle?: { title: string; body: string }
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
  icon?:
    | "shield-check"
    | "lightbulb"
    | "graduation-cap"
    | "store"
    | "scale"
    | "megaphone"
    | "notebook-pen"
    | "code"
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
    label: "AI Product · Independent Prototype",
    year: "2026",
    subtitle: "A quick gut-check before a product claim goes live.",
    summary:
      "An AI-assisted tool that helps DTC brands, Shopify merchants, and copywriters spot potentially risky product claims before they publish.",
    stack: ["v0", "Next.js", "Vercel AI SDK"],
    icon: "shield-check",
    image: "/claimcheck/landing.png", // real screen from the live prototype
    imageSize: { width: 1424, height: 900 },
    featured: true,
    link: { label: "View prototype", href: "https://build-claimcheck-app.vercel.app" },
    caseStudy: {
      tagline: "Catch it before it's live.",
      showcaseCaption: "The single-claim review screen",
      facts: [
        { label: "Role", value: "Founder and Builder" },
        { label: "Built For", value: "DTC Brands, Shopify Sellers, Copywriters" },
        { label: "Core Jobs", value: "Claim Review, CSV Screening, Creator Briefs" },
        { label: "Stage", value: "Independent Prototype" },
      ],
      overview: {
        heading: "How does a small brand spot a risky claim without a compliance team?",
        pullQuote:
          "Before I publish this listing or send this copy to a creator, help me spot the wording I should double-check, without making me read an entire regulatory guide.",
        body: [
          "ClaimCheck grew from a personal observation. Two of my uncles in Nigeria run cosmetic brands, Veet Gold and Pastel Perfection Beauty, and in conversations with them I realized they weren't fully aware of the regulatory risks certain marketing claims can create.",
          "That raised a bigger question: how does a small brand recognize a questionable claim without a dedicated compliance team? Secondary research into U.S. FTC advertising guidance and FDA cosmetic-labeling guidance, as research context, reinforced that factual product claims may need substantiation and that misleading wording can have consequences.",
          "So I explored the gap between writing persuasive product copy and understanding what may need backing up, and built an AI-assisted prototype to make that first pass of claim review more approachable. It's a decision-support tool: it flags language that may need attention, and it doesn't replace legal advice.",
        ],
        sources: [
          {
            label: "FTC: Health products compliance guidance",
            href: "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance",
          },
          {
            label: "FDA: Cosmetics labeling claims",
            href: "https://www.fda.gov/cosmetics/cosmetics-labeling/cosmetics-labeling-claims",
          },
        ],
      },
      audience: {
        heading: "Who it's for",
        items: [
          {
            title: "Small brand owner",
            body: "Wants to catch issues in product pages and promotions without a legal or compliance department.",
          },
          {
            title: "Shopify merchant",
            body: "Wants a practical quality check while preparing or updating product listings.",
          },
          {
            title: "Freelance copywriter",
            body: "Wants to sense-check claims before handing copy to a client.",
          },
          {
            title: "Merchant with creators",
            body: "Wants a clearer brief for the influencers and creator partners promoting a product.",
          },
        ],
      },
      features: {
        heading: "What ClaimCheck does",
        items: [
          {
            title: "Single-claim review",
            body: "Paste a line of product or advertising copy. ClaimCheck identifies potentially risky wording, points to the exact phrase, and explains in plain language why it deserves a closer look.",
          },
          {
            title: "Bulk CSV review",
            body: "Upload a CSV of product listings or marketing copy to check many entries in one workflow, instead of pasting each one by hand.",
          },
          {
            title: "Creator-brief generator",
            body: "Draft a product brief a merchant can share with a content creator, so product information and messaging are communicated more clearly.",
          },
        ],
      },
      flows: {
        heading: "How someone uses it",
        items: [
          {
            title: "Check one marketing claim",
            users: "Merchants and copywriters",
            steps: [
              "Paste marketing copy or a product claim.",
              "Submit it for an AI-assisted review.",
              "Read the exact phrase flagged and why it may be a concern.",
              "Decide whether to verify evidence, revise the wording, or seek expert advice.",
              "Update the copy before publishing, and check again if needed.",
            ],
          },
          {
            title: "Review multiple listings",
            users: "Merchants managing a catalog",
            steps: [
              "Prepare a CSV of product or promotional copy.",
              "Upload it with the bulk-check feature.",
              "Review the findings for each entry.",
              "Flag the listings that need human review or edits, then update the source copy.",
            ],
          },
          {
            title: "Prepare a creator brief",
            users: "Merchants working with creators",
            steps: [
              "Enter the product or campaign details.",
              "Generate a draft brief for the partnership.",
              "Review it for accuracy, appropriate language, and disclosure expectations.",
              "Use the reviewed brief when coordinating with the creator.",
            ],
          },
        ],
      },
      gallery: {
        heading: "Inside the prototype",
        items: [
          {
            src: "/claimcheck/faulty-claim-check.png",
            alt: "ClaimCheck reviewing a sample serum description: an overall high-risk verdict, risky phrases highlighted by severity, and the first of seven issues explained",
            caption: "A single-claim review: risky phrases highlighted by severity, each with a plain-language explanation.",
            width: 2330,
            height: 1426,
            wide: true,
          },
          {
            src: "/claimcheck/selected-claim-to-be-copied.png",
            alt: "ClaimCheck's What you did well list above an Improved copy panel with Apply all suggestions and Copy to clipboard buttons",
            caption: "Suggestions are applied one by one, with a reminder to give it a final read before publishing.",
            width: 1258,
            height: 996,
            natural: true,
          },
          {
            src: "/claimcheck/creator-brief-generation.png",
            alt: "ClaimCheck's creator brief generator: a product details form beside a generated brief with key messages for a vitamin C serum",
            caption: "The creator brief: the merchant enters what's true about the product, and gets a brief to share with a creator.",
            width: 2846,
            height: 1460,
            wide: true,
          },
        ],
      },
      techList: ["v0", "Next.js", "Vercel AI SDK", "Structured outputs", "Prompt design", "Vercel"],
      architecture: {
        heading: "Product decisions",
        tags: ["Human oversight", "Trust by design"],
        decisions: [
          {
            title: "Plain language over legal jargon",
            body: "Call out the precise wording that needs a second look, and explain it the way a merchant would, not the way a regulation does.",
          },
          {
            title: "Early warning, before publishing",
            body: "The check happens while copy is still a draft, when changing a word is cheap and nothing has gone live yet.",
          },
          {
            title: "Useful at two scales",
            body: "The same review works for a single sentence or a whole CSV of product descriptions.",
          },
          {
            title: "Human oversight stays",
            body: "Users remain responsible for checking facts and approving final copy. ClaimCheck supports the decision; it doesn't make it.",
          },
          {
            title: "Trust by design",
            body: "No invented laws, no definitive legal verdicts, and never a “guaranteed compliant” stamp. A compliance tool that overstates itself does more harm than good.",
          },
          {
            title: "Tested against tricky input",
            body: "I tested how it handled potentially misleading claims, French text, and attempts to manipulate its instructions. These were test scenarios, not a claim of full multilingual or security coverage.",
          },
        ],
      },
      challenge: {
        label: "Reflection",
        heading: "What's built, and what's next.",
        body: [
          "I owned this end to end: problem discovery, secondary research, product scoping, AI-assisted prototyping, prompt design, and testing. The result is a working prototype covering single-claim review, CSV screening, and creator briefs.",
          "What remains is validation with real merchants: learning where it genuinely saves effort, where its flags are too cautious or not cautious enough, and what would make a merchant trust it as part of their publishing routine.",
        ],
      },
    },
  },
  {
    slug: "mo-content-space",
    title: "MO Content Space",
    category: "product",
    label: "Product Management · Creator Productivity",
    subtitle: "A connected home for content ideas, notes, and creative momentum.",
    summary:
      "A creative home for your notes, ideas and next big piece of content. Capture inspiration, stay organized and turn thoughts into action, with an AI brainstorming partner coming in Phase 2.",
    stack: ["Mobile-first", "Two-Phase Roadmap", "Creator Productivity"],
    icon: "notebook-pen",
    image: "/mo-contnet-space/authpage.png",
    imageSize: { width: 2846, height: 1322 },
    imagePosition: "top", // centred crop on cards: the screen is much wider than 16:10
    featured: true,
    caseStudy: {
      tagline: "Capture it now. Find it later.",
      showcaseCaption: "From the Phase 1 build",
      facts: [
        { label: "Audience", value: "Short- & Long-form Creators" },
        { label: "Category", value: "Creator Productivity" },
        { label: "Platforms", value: "Mobile-first: iOS & Android" },
        { label: "Status", value: "Phase 1 In Progress · Phase 2 Planned" },
      ],
      overview: {
        heading: "Great content ideas are easy to have, and surprisingly easy to lose.",
        pullQuote: "Your notes and your creative AI assistant should live in one place, not in separate apps.",
        body: [
          "Creators often collect inspiration in different places: screenshots in the camera roll, thoughts in messaging apps, voice notes on the phone, and deadlines in a separate task manager. When it's time to create, finding and developing those ideas takes unnecessary effort.",
          "MO Content Space is a creator-focused workspace built around that insight. The first phase brings notes, voice recordings, images, saved links, and lightweight task planning into one organized space. The second phase will introduce an optional AI assistant for brainstorming and developing those saved ideas without leaving the platform.",
          "The challenge was to make capturing an idea immediate while keeping the next step close at hand, and to do it without turning a creator's notes into a company project.",
        ],
      },
      audience: {
        heading: "Who it's for",
        items: [
          {
            title: "Short-form creators",
            body: "Planning TikToks, Reels, Shorts and similar content.",
          },
          {
            title: "Long-form video creators",
            body: "Developing topics, outlines and supporting material.",
          },
          {
            title: "Inspiration collectors",
            body: "Gathering ideas across many channels and needing one reliable place to revisit them.",
          },
          {
            title: "Simple planners",
            body: "Wanting light planning and optional AI support, without a complex production-management system.",
          },
        ],
      },
      features: {
        heading: "Phase 1: Capture, organize and act",
        note: "Creating and updating ideas works today. Other parts of Phase 1 are in development or designed, and labeled that way below.",
        items: [
          {
            title: "Create and update ideas",
            status: "Built",
            body: "Save a thought, come back to it, and keep updating it as it grows. The heart of the workspace, and working today.",
          },
          {
            title: "Quick Capture",
            status: "Designed",
            body: "Capture text, record audio, attach photos or screenshots, and store links. Saving doesn't require a title or category, and a voice recording stays available even without transcription.",
          },
          {
            title: "Ideas Library",
            status: "In progress",
            body: "Search and revisit saved ideas, add notes and attachments, optionally classify them, and manually set New, In Progress or Completed.",
          },
          {
            title: "One idea, many platform plans",
            status: "In progress",
            body: "One master idea can hold lightweight plans for TikTok, Instagram, LinkedIn, X, YouTube, Facebook or Other, instead of being cloned for every platform.",
          },
          {
            title: "Tasks and reminders",
            status: "In progress",
            body: "Create a standalone task or connect one to an idea. Due dates and reminders are optional, and reminders support Snooze and Mark Complete.",
          },
          {
            title: "Home and calendar",
            status: "Designed",
            body: "Home surfaces Quick Capture, Today's Tasks, Upcoming Reminders and Recent Ideas, with a simple calendar of tasks and reminders by date.",
          },
        ],
      },
      flows: {
        heading: "From a passing thought to a next step",
        note: "Flows A and B describe the designed Phase 1 experience. Flow C is the planned Phase 2 journey.",
        items: [
          {
            title: "Capture to action",
            users: "Phase 1 · Designed",
            steps: [
              "Capture: type, record, add a photo or share a link.",
              "Save: no title needed, and the original media is kept.",
              "Revisit: search, edit, categorize and expand.",
              "Take action: add a task and schedule a reminder.",
            ],
          },
          {
            title: "Save inspiration from another app",
            users: "Phase 1 · Designed",
            steps: [
              "Find a link or screenshot in another app.",
              "Use the phone's Share menu and choose MO Content Space.",
              "Save it as a new idea, or add it to an existing one.",
              "Revisit it later in the Ideas Library.",
            ],
          },
          {
            title: "An idea, then AI, then back to the idea",
            users: "Phase 2 · Planned",
            steps: [
              "Open an existing idea, or start from a new topic.",
              "Ask for help: brainstorm, develop, titles and hooks, or a simple script.",
              "Review the options: edit, compare or discard suggestions.",
              "Save only the results you want beside the idea. The original note stays intact.",
            ],
          },
        ],
      },
      gallery: {
        heading: "Inside the Phase 1 build",
        items: [
          {
            src: "/mo-contnet-space/onboarding-flow.png",
            alt: "MO Content Space onboarding card asking 'Flash of brilliance?', with steps Capture, Curate and Execute and a 'No title needed' badge",
            caption: "Onboarding sets the promise: capture, curate, execute, and no title needed.",
            width: 2260,
            height: 1250,
            wide: true,
          },
          {
            src: "/mo-contnet-space/idea-library-page.png",
            alt: "Ideas Library with a search bar, New, In Progress and Completed filters, and an idea card titled AfroTech marked In Progress",
            caption: "The Ideas Library: search, filter by status, and pick up where you left off.",
            width: 2872,
            height: 1330,
            wide: true,
          },
          {
            src: "/mo-contnet-space/idea-details-page.png",
            alt: "Idea detail page for AfroTech with a manual status selector, optional category, linked tasks with an Add Task button, and optional TikTok and Instagram platform plans",
            caption: "One idea holds its status, linked tasks and platform plans. Status only changes when you change it.",
            width: 2846,
            height: 1332,
            wide: true,
          },
          {
            src: "/mo-contnet-space/reminders-list.png",
            alt: "Reminders page showing an upcoming reminder to edit outfit videos linked to the AfroTech idea, with Snooze and Mark Complete buttons",
            caption: "Reminders link back to their idea, with Snooze and Mark Complete right on the card.",
            width: 2868,
            height: 1330,
            wide: true,
          },
        ],
      },
      nextPhase: {
        heading: "Phase 2: Creative AI inside the notes workspace",
        status: "Planned",
        body: "Phase 2 adds an optional AI assistant to the same workspace, rather than sending creators to a separate tool. It works from a creator's prompt or a saved idea, proposes improvements, and lets the creator decide what becomes part of their notes.",
        items: [
          {
            title: "Brainstorm",
            body: "Propose ideas from a topic, angle or platform.",
            control: "Save promising suggestions as new or linked ideas.",
          },
          {
            title: "Develop an idea",
            body: "Expand a rough thought into a fuller concept or structure.",
            control: "Accept selected material without replacing the source note.",
          },
          {
            title: "Titles and hooks",
            body: "Generate alternative titles and opening lines.",
            control: "Copy, edit, save or discard individual options.",
          },
          {
            title: "Simple scripts",
            body: "Draft a short script or talking points for a content idea.",
            control: "Review and revise before storing it with the idea.",
          },
        ],
        principle: {
          title: "Notes first. AI as a collaborator, not the owner.",
          body: "A creator must always be able to use MO Content Space without AI. AI-generated content is proposed, never silently applied, and nothing rewrites the original notes.",
        },
      },
      architecture: {
        heading: "Key design decisions",
        tags: ["Low friction", "Creator in control"],
        decisions: [
          {
            title: "No required titles",
            body: "An idea can be saved in seconds as a sentence, a recording, a photo or a link. Naming and sorting can wait.",
          },
          {
            title: "Tasks stand on their own",
            body: "A task can link to an idea or exist without one, and due dates and reminders are optional.",
          },
          {
            title: "Manual idea status",
            body: "Completing a linked task never marks an idea Completed. The creator decides when an idea is done.",
          },
          {
            title: "Transcription on demand",
            body: "Voice notes are saved as original audio. Transcription happens only when requested, and the recording is always preserved.",
          },
          {
            title: "One idea, not copies",
            body: "Platform plans live inside a single master idea, so the thinking stays in one place across TikTok, YouTube and the rest.",
          },
          {
            title: "Useful before AI",
            body: "Phase 1 builds the creator's own idea library first. That keeps the product useful without AI, and makes AI more valuable later because it works with real notes.",
          },
        ],
      },
      challenge: {
        label: "Next steps",
        heading: "What comes next.",
        body: [
          "The goal isn't to replace creators' thinking with AI. It's to give their ideas a reliable home, then make creative assistance available exactly where those ideas already live.",
          "Next comes completing and validating the Phase 1 workspace with creators, the work toward a mobile launch, and then bringing the contextual AI assistant into the same space.",
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
          "It's taught me first-hand what drives clicks, trust and purchases for small merchants in social commerce, and it informs how I think about the creator side of ClaimCheck.",
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
