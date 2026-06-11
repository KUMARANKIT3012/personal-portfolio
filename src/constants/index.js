import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    leetcode,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux Toolkit",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const achievements = [
    {
        title: "Research Paper — ComSIA-2026",
        organization: "University of Delhi",
        iconBg: "#1a1a1a",
        date: "March 2026",
        points: [
            "Co-authored and presented 'Strive Hive: Application for Data-Driven Health and Fitness Decision Making'.",
            "Presented at an international conference at University of Delhi.",
            "Collaborated with peers from Sathyabama Institute of Science and Technology.",
        ],
    },
    {
        title: "Luminary Award — 2x Consecutive Winner",
        organization: "Sathyabama Institute of Science and Technology",
        iconBg: "#1a1a1a",
        date: "2024–2025 & 2025–2026",
        points: [
            "Awarded consecutively in 1st and 2nd year for academic excellence, extracurriculars, and technical contributions.",
            "Recognized among top-performing students in the department both years.",
        ],
    },
    {
        title: "Former Executive Committee Member — IEEE WIE",
        organization: "IEEE Women in Engineering, Sathyabama",
        iconBg: "#1a1a1a",
        date: "Jul 2025 – Feb 2026",
        points: [
            "Spearheaded 5+ technical workshops on Web Development, Competitive Programming, and DSA — upskilling 150+ students.",
            "Directed end-to-end planning for 5+ IEEE WIE chapter events with 100+ attendees each.",
            "Mentored 20+ junior members on DSA and web development, guiding them through their first full-stack builds.",
            "Received Certificate of Recognition for outstanding contributions.",
        ],
    },
    {
        title: "650+ DSA Problems Solved",
        organization: "LeetCode, GeeksForGeeks & Codeforces",
        iconBg: "#1a1a1a",
        date: "2024 - Present",
            points: [
            "Solved 650+ algorithmic and data structure problems across LeetCode, GeeksForGeeks, and competitive programming platforms.",
            "Built strong expertise in trees, graphs, dynamic programming, backtracking, binary search, and greedy algorithms.",
            "Regularly participates in coding contests to strengthen analytical thinking, problem-solving, and coding efficiency.",
            ],
    },

    {
        title: "Google Gemini Certified Student",
        organization: "Google",
        iconBg: "#1a1a1a",
        date: "2025",
        credentialUrl: "https://edu.google.accredible.com/bfceb752-b345-4e20-a045-9d2ba287ed0d",
        points: [
            "Certified by Google as a Gemini AI student developer.",
            "Proficient in Generative AI concepts and Gemini API usage.",
        ],
    },
    {
    title: "Generative AI for Everyone — Certified",
    organization: "Coursera / DeepLearning.AI",
    iconBg: "#1a1a1a",
    date: "June 2026",
    credentialUrl: "https://coursera.org/verify/EJC8NEH9PJ1O",
    points: [
        "Completed 'Generative AI for Everyone' by Andrew Ng on Coursera.",
        "Learned practical applications, limitations, and real-world use cases of Generative AI.",
        "Understood AI project lifecycles, prompt engineering, and responsible AI adoption.",
        ],
    },
    {
        title: "AI For Everyone — Certified",
        organization: "Coursera / DeepLearning.AI",
        iconBg: "#1a1a1a",
        date: "2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VKYJOCPI33KA",
        points: [
            "Completed 'AI For Everyone' by Andrew Ng on Coursera.",
            "Foundational knowledge in AI strategy and machine learning workflows.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KUMARANKIT3012',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ankitkumarsist/',
    },
    {
        name: 'LeetCode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/ankitkumarsist/',
    }
];

export const projects = [
{
iconUrl: pricewise,
theme: 'btn-back-red',
name: 'Finance SaaS Platform',
description: 'Full-stack finance SaaS with Plaid bank integration, transaction sync, CSV bulk import, Lemon Squeezy billing, and 5+ KPI analytics.',
techStack: ['Next.js', 'Hono', 'PostgreSQL', 'Drizzle ORM', 'Clerk', 'Plaid'],
link: 'https://github.com/KUMARANKIT3012/Finance-platform',
liveLink: 'https://finance-platform-o5o2.vercel.app/sign-in',
},
{
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Project Management Platform',
    description: 'Multi-workspace platform with task boards, role-based access across 4 permission levels, Groq AI chatbot, and real-time commenting.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Clerk', 'Groq AI'],
    link: 'https://github.com/KUMARANKIT3012/Project-Management',
    liveLink: 'https://project-mgt-umber.vercel.app/',
},

{
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Jotion — Notion-Inspired Workspace',
    description: 'Real-time collaborative workspace with rich text editing, recursive document tree, Groq AI assistant, and publish/unpublish workflows.',
    techStack: ['Next.js', 'Convex', 'Clerk', 'Groq AI'],
    link: 'https://github.com/KUMARANKIT3012/Jotion',
    liveLink: 'https://note-taking-app-nine-fawn.vercel.app/',
},

{
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Strive Hive — Health Analytics',
    description: 'Health analytics platform for data-driven fitness decisions. The project was co-authored into a research paper and presented at ComSIA-2026, University of Delhi.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/KUMARANKIT3012/StriveHive-HealthAnalytics',
    liveLink: 'https://strive-hive-health-analytics-123.vercel.app/',
    paperLink: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6440618',
},

];
