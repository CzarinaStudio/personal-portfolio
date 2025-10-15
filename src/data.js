// src/data.js - FINAL, CLEAN, AND CORRECTED VERSION

// --- 1. BIO DATA ---
export const bioData = {
    // Used in the Header and Bio section heading
    name: "Czarina Fombuena",
    
    // Main paragraph summary
    summary: "Hi, I'm Czarina Fombuena, a 22-year-old from Navotas City. I'm deeply passionate about all forms of art—both traditional and digital—and I specialize in creating captivating pixel art. As a dedicated learner, I am currently studying and enjoying user interface and experience (UI/UX) design, where I combine my creative skills with problem-solving to build intuitive and beautiful experiences.",
    
    // Additional roles for the header (optional, can be used in Header.jsx)
    roles: "UI/UX Designer | Problem Solver | Creative",

    // Education section
    education: [
        { 
            degree: "Associate in Computer Technology", 
            institution: "La Verdad Christian College", // Filled from resume details
            year: "Year of Completion" // Update this with your actual year
        }
    ],

    // Hobbies/Interests section
    hobbies: [
        "Traditional & Digital Art", 
        "Pixel Art Specialization", 
        "UI/UX Design",
        "Spending time with my dog, Luna (my best friend and daily inspiration!)" 
    ]
};

// --- 2. CONTACT DATA (Used by the resume button, email link, and social icons in Footer) ---
export const contact = {
    email: "czarinafombuena@student.laverdad.edu.ph", 
    // FIX: Corrected the path to be a public URL, which is required for the download attribute
    resumePDF: "/assets/documents/Czarina_Jane_Resume.pdf", 
    social: {
        github: "https://github.com/CzarinaStudio",
        linkedin: "https://www.linkedin.com/in/shoto-shoto-8bb573346/",
        // Add other social links (Twitter, Instagram, etc.)
    }
};

// --- 3. PROJECTS DATA ---
export const projectsData = [
    {
        title: "Truth Shelf (UI/UX Concept)",
        // Path starts with / to access images in the public folder
        image: "/assets/images/ts1.png", 
        description: "A conceptual UI/UX project focused on modern, intuitive design principles. Designed entirely using Figma and Canva.",
        tags: ["Figma", "Canva", "UI/UX Design", "Wireframing"],
        liveLink: "https://www.canva.com/design/DAGncQiHbEE/b19eQt6wak5G0t71bCZGaw/edit?ui=eyJEIjp7IlAiOnsiQiI6ZmFsc2V9fX0", 
        repoLink: "https://github.com/CzarinaStudio/appdev1", 
    },
    {
        title: "Portfolio Template Migration",
        // The image property is intentionally missing here.
        description: "Successfully migrated an HTML5 UP static template to a dynamic, multi-page React application.",
        tags: ["React", "Vite", "React Router", "CSS"],
        repoLink: "https://github.com/CzarinaStudio/appdev1",
    },
];

// --- 4. SKILLS DATA ---
export const skillsData = [
    {
        category: "Technical Skills",
        icon: "fa-code", 
        description: "Programming languages and specialized tools I use.",
        list: [
            "Figma (UI/UX Design)",
            "Canva (Graphic Design)",
            "HTML & CSS",
            "JavaScript (Basic)",
            "React (Basic/App Development)",
            "Microsoft Office Suite"
        ]
    },
    {
        category: "Core Competencies",
        icon: "fa-users", 
        description: "My professional strengths and soft skills.",
        list: [
            "Communication & Documentation",
            "Creative Design Acumen",
            "Data Management & Privacy",
            "Time Management & Organization",
            "Working Under Pressure / Resilience"
        ]
    }
];