// Technical skills data organized by categories
export interface SkillCategory {
    id: string;
    title: string;
    skills: string[];
    color: string;
}

export const technicalSkills: SkillCategory[] = [
    {
        id: "backend",
        title: "Backend Technologies",
        skills: [".NET Core", "C#", "PHP 7.0/8.0", "Node.js"],
        color: "var(--soft-purple)",
    },
    {
        id: "frontend",
        title: "Frontend Frameworks",
        skills: ["Vue.js", "Nuxt.js", "Laravel", "Statamic", "HTML/CSS", "Vue Native"],
        color: "var(--mint-green)",
    },
    {
        id: "databases",
        title: "Databases & Tools",
        skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Elasticsearch"],
        color: "var(--dusty-pink)",
    },
    {
        id: "architecture",
        title: "Architecture & Patterns",
        skills: ["Vertical Slice", "DDD", "Microservices", "CQRS", "Mediator", "BFF"],
        color: "var(--peach)",
    },
    {
        id: "methodologies",
        title: "Methodologies",
        skills: ["Agile", "Scrum", "Design Thinking", "Sprint Development"],
        color: "var(--lavender)",
    },
    {
        id: "languages",
        title: "Languages & Certifications",
        skills: ["English (Advanced)", "German (Elementary)", "Google Project Management", "21st Century Competency"],
        color: "var(--butter-yellow)",
    },
];
