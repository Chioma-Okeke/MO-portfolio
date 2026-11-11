// Everything on the About page, plus the home page stats and bio teaser.

export const stats = [
    { label: "Focus", value: "AI & E-commerce Products" },
    { label: "Background", value: "Law → Product" },
    { label: "Based In", value: "Ottawa, Canada" },
    { label: "Building", value: "ClaimCheck" },
];

export const intro = {
    heading:
        "A product manager with a lawyer's eye for risk and a creator's feel for what people actually click.",
    quote: "I build products that are useful and safe to use. Legal training taught me to read the fine print; product work taught me to make sure people never have to.",
    body: [
        "I started my career in law. As Head of Contract and Insurance at Lekki Gardens Real Estate, I redesigned the letter-of-award workflow and cut contract turnaround time by 40%. That was my first product: a broken process, a clear problem, and a better way through it.",
        "Since then I've moved fully into product. I led delivery of Syncventory, a multi-store inventory and POS platform, as a volunteer PM at Nugi Technologies, and I was one of 450 finalists out of 12,362 interns in HNG's 10-stage elimination internship, shipping products with engineers, designers, DevOps and marketers.",
        "Alongside that, I partner with e-commerce brands, including Shopify merchants, as a creator with 29K followers on Instagram. Most recently, I built ClaimCheck, an AI-assisted prototype that helps small brands spot potentially risky product claims before they publish, inspired by family-run cosmetic brands back home.",
    ],
};

// Short version used on the home page
export const personTeaser = {
    heading: "Building products people can trust.",
    body: [
        "I believe the best products are the ones people never have to second-guess. My approach blends legal training, hands-on product delivery, and first-hand experience of what drives clicks, trust and purchases in social commerce.",
        "When I'm not writing PRDs or testing prompts, you'll find me creating content and partnering with the brands my followers love.",
    ],
};

export const engineer = {
    heading: "Shipping with Clarity.",
    items: [
        {
            title: "Problem First",
            body: "Every feature starts with a clearly defined problem, real user research, and a reason it matters now.",
        },
        {
            title: "Clear Requirements",
            body: "PRDs, user stories and acceptance criteria that engineers, designers and QA can build and test against.",
        },
        {
            title: "Safe by Design",
            body: "Trust guardrails, QA/UAT scenarios and test suites, so products behave the way people expect.",
        },
    ],
};

export const human = {
    heading: "Living with Intention.",
    items: [
        {
            title: "Creator",
            body: "I share and partner with brands on Instagram, where 29K people follow along.",
        },
        {
            title: "Constant Student",
            body: "From health and social care to AI literacy, my curiosity never rests.",
        },
        {
            title: "Community Builder",
            body: "As Chamber Head in law school, I ran 40+ moot court trials and debates.",
        },
    ],
    currently: "Building ClaimCheck, an AI-assisted prototype for reviewing marketing claims.",
};

export const principles = [
    {
        title: "Useful and Safe",
        body: "A product has to solve a real problem, and it has to be safe to use. I won't trade one for the other.",
    },
    {
        title: "Plain Language",
        body: "Whether it's a risk explanation or a requirement, if people can't understand it, it hasn't done its job.",
    },
    {
        title: "Close to the User",
        body: "I learn from the people I build for, from merchants and creators to the teams shipping alongside me.",
    },
];

// Experience timeline - newest first
export const experience = [
    {
        period: "Nov 2026 - Present",
        role: "Founder and Builder, ClaimCheck",
        body: "Built an AI-assisted prototype that helps small brands spot potentially risky product claims before they publish, with single-claim review, bulk CSV screening, and a creator-brief generator.",
        current: true,
    },
    {
        period: "Ongoing",
        role: "Content Creator and Brand Partner",
        body: "Partner with e-commerce brands, including Shopify merchants, on sponsored Instagram campaigns for 29K followers, promoting exclusive discount codes (up to 20% off) that turned followers into paying customers.",
        current: true,
    },
    {
        period: "Oct - Dec 2025",
        role: "Product Manager Intern, HNG Internship",
        body: "One of 450 finalists from 12,362 interns (top 4%). Defined requirements for Zedu, an AI learning platform, and took ContentQ, a creator productivity app, from idea to launch in 8 weeks.",
    },
    {
        period: "Jan - Aug 2025",
        role: "Product Manager (Volunteer), Nugi Technologies",
        body: "Led product delivery for Syncventory, a multi-store inventory and POS platform: PRDs, user stories, acceptance criteria, backlog planning, and QA/UAT with engineering, design and data teams.",
    },
    {
        period: "2022 - 2023",
        role: "MSc Health and Social Care, University of Wolverhampton",
        body: "Postgraduate study in the UK.",
    },
    {
        period: "2021 - 2022",
        role: "Head of Contract and Insurance, Lekki Gardens Real Estate",
        body: "Redesigned the letter-of-award workflow, cutting contract turnaround time by 40%, and introduced a contract review checklist that reduced drafting errors and strengthened legal compliance.",
    },
    {
        period: "2014 - 2021",
        role: "LL.B. Law, Anambra State University & B.L., Nigerian Law School",
        body: "Called to the Nigerian Bar in 2021. As Chamber Head of the Law Faculty, ran 40+ moot court trials and debate events averaging 150 attendees.",
    },
];

// Certifications - shown under the timeline
export const training = [
    {
        period: "2026",
        title: "AI Literacy for Legal Professionals",
        body: "Harvey, Level 1: Foundations. AI risk, data privacy, and prompting.",
    },
    {
        period: "2024",
        title: "Product Management Certification",
        body: "Product School. Capstone: tiered hospitality bundles and three product features.",
    },
    {
        period: "Toolkit",
        title: "How I Work",
        body: "ClickUp, Jira, Notion, Confluence, Figma, GitHub and Vercel; v0, Claude, ChatGPT, Gemini and Lovable for building.",
    },
];

export const advisory = {
    eyebrow: "The Next Chapter",
    heading: "Products & Trust",
    lead: "I want to build products that small businesses and everyday people can rely on, where AI makes work easier without making it riskier.",
    body: "I'm open to product management roles, especially in AI, e-commerce, and legal or compliance tech, and always happy to talk products.",
    cta: "Let's talk",
};

// Photos for the about-page scrapbook collage, shown left to right.
// The section is hidden while this list is empty.
export const aboutGallery = {
    note: "",
    photos: [] as { image: string; alt: string }[],
};
