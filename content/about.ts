// Everything on the About page, plus the home page stats and bio teaser.

export const stats = [
    { label: "Focus", value: "Secured Software Engineering" },
    { label: "Experience", value: "2 Years, 8 Months" },
    { label: "Studying", value: "M.S. CS, ASU" },
    { label: "Philosophy", value: "Quiet Power" },
];

export const intro = {
    heading:
        "A Software Engineer with a designer's eye and a security-first mindset.",
    quote: "I've always believed that technology should be as elegant as it is robust. Studying security has taught me that the most secure systems are the ones that respect the human at the center.",
    body: [
        "I spent 2 years and 8 months as a software engineer building healthcare software at Cavista Technologies, shipping features in TypeScript and helping trace production failures through Kibana and the codebase.",
        "Today I'm pursuing an M.S. in Computer Science at Arizona State University as a Mastercard Foundation Scholar, focused on cybersecurity and understanding how security really works, from web exploitation and binary analysis to threat hunting and incident response. Alongside my studies, I build AI-assisted code review tooling at EdPlus that brings security checks into everyday developer workflows.",
        "I call my philosophy “Soft Power”, the ability to drive impact through precision, reliability, and an understated presence that prioritizes the solution over the spotlight.",
    ],
};

// Short version used on the home page
export const personTeaser = {
    heading: "Engineering a life of “Soft Power”.",
    body: [
        "I believe that the most robust systems aren't just built with code; they're built with empathy, curiosity, and a deep understanding of the human element. My approach to software and security is rooted in “Soft Power”: the ability to influence through excellence, elegance, and understated authority.",
        "When I'm not building software or working through a CTF challenge, you'll find me exploring the intersection of design and data, or finding the perfect light for a film photograph.",
    ],
};

export const engineer = {
    heading: "Architecting for Resilience.",
    items: [
        {
            title: "Security as Foundation",
            body: "I treat security not as a feature to be added, but as the bedrock upon which every line of code is written.",
        },
        {
            title: "Full-Stack Fluency",
            body: "TypeScript, React and Next.js on the front; Node.js, FastAPI, PostgreSQL and MongoDB behind it.",
        },
        {
            title: "Security That Helps",
            body: "Good security should be invisible. I build review automation that flags risk early without slowing developers down.",
        },
    ],
};

// Personal details - these came from the design copy, edit freely
export const human = {
    heading: "Living with Intention.",
    items: [
        {
            title: "Analog Collector",
            body: "I find balance in the tactile, like film photography, fountain pens, and the texture of heavy-weight paper.",
        },
        {
            title: "Constant Student",
            body: "Whether it's a new security tool or a new hobby, my curiosity never rests.",
        },
        {
            title: "Quiet Advocate",
            body: "I'm passionate about mentorship and creating space for underrepresented voices in tech.",
        },
    ],
    currently:
        "Training as a junior web app pentester and working through pwn.college challenges.",
};

export const principles = [
    {
        title: "Quiet Excellence",
        body: "The work should speak for itself. I prioritize depth over noise, focusing on outcomes that leave a lasting, silent impact on the system's integrity.",
    },
    {
        title: "Human-First Security",
        body: "Technology serves people. I design with user privacy and accessibility in mind, ensuring safety doesn't come at the cost of dignity.",
    },
    {
        title: "Endless Curiosity",
        body: "The landscape is always shifting. I remain an active student of both the craft and the world, constantly refining my perspective through diverse inputs.",
    },
];

// Experience timeline - newest first
export const experience = [
    {
        period: "2025 - May 2027",
        role: "M.S. Computer Science, Arizona State University",
        body: "Mastercard Foundation Scholar focused on cybersecurity. Coursework includes Advanced Operating Systems and Software Security.",
        current: true,
    },
    {
        period: "2025 - Present",
        role: "Software Development Assistant, EdPlus at ASU",
        body: "Building an AI-assisted Salesforce code review workflow with seven quality and security gates, integrated into Bitbucket pull requests. Expanded Apex test optimization to ~60% of the suite, raising coverage to 85%.",
        current: true,
    },
    {
        period: "2023 - 2025",
        role: "Software Engineer I, Cavista Technologies",
        body: "Built healthcare software in Aurelia and TypeScript: a form-to-model workflow for print-ready clinical documents and a permissions feature surfacing mobile-access impact. Cut production investigation time by 35% using Kibana.",
    },
    {
        period: "Class of 2022",
        role: "B.Eng. Computer Engineering, Covenant University",
        body: "Graduated with a 4.67/5.0 CGPA. Coursework included Neural Networks and Data Structures & Algorithms.",
    },
];

// Hands-on security training - shown under the timeline
export const training = [
    {
        period: "Oct 2026 - Present",
        title: "WiCyS × Just Hacking",
        body: "Web app pentesting, Jr Analyst track: reconnaissance, attack-surface mapping, authentication and session security.",
    },
    {
        period: "Feb - Apr 2026",
        title: "CodePath Blue Team",
        body: "Intrusion detection with Snort, threat hunting on SolarWinds and Scattered Spider, and NIST incident response.",
    },
    {
        period: "Jan 2026 - Present",
        title: "ASU CTFs, pwn.college, Tracer FIRE",
        body: "Web exploitation, binary analysis with GDB and Ghidra, and digital forensics with Velociraptor and Elastic.",
    },
];

export const advisory = {
    eyebrow: "The Next Chapter",
    heading: "Security & Impact",
    lead: "My vision for the future is one where technology is not a black box, but a transparent tool for human flourishing. I'm deepening my security practice so the software I build is safe by design, not by afterthought.",
    body: "I'm open to security engineering, application security, and software engineering opportunities, and always happy to talk research.",
    cta: "Let's talk",
};

// Photos for the about-page scrapbook collage, shown left to right
export const aboutGallery = {
    note: "The beauty of the physical world.",
    photos: [
        {
            image: "/me/about-scrap1.jpg",
            alt: "Chioma looking out over city lights at dusk from a hilltop railing",
        },
        {
            image: "/me/about-scrap2.jpg",
            alt: "Chioma taking a selfie in glasses and a fuzzy jacket in front of a lit-up carousel",
        },
        {
            image: "/me/about-scrap3.jpg",
            alt: "Chioma standing on a boat deck by an American flag with a lake and mountains behind her",
        },
        {
            image: "/me/about-scrap4.jpg",
            alt: "Chioma taking a mirror photo in a gym lined with dumbbell racks",
        },
    ],
};
