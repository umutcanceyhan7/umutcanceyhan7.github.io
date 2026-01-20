// Professional experience data
export interface ExperienceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

export const experiences: ExperienceItem[] = [
    {
        id: "procurement",
        title: "Global E-Procurement Platforms",
        description: "Delivered scalable solutions for enterprise-level procurement systems, handling complex business logic and high-volume transactions.",
        icon: "🌐",
        color: "var(--soft-purple)",
    },
    {
        id: "training",
        title: "Training & Leadership",
        description: "Led in-house training sessions for 150+ employees on Blockchain technologies and served as Scrum Master for cross-functional teams.",
        icon: "👨‍🏫",
        color: "var(--mint-green)",
    },
    {
        id: "executive",
        title: "Executive Presentations",
        description: "Delivered high-impact demos and strategic presentations to C-level executives, driving digital transformation initiatives.",
        icon: "📊",
        color: "var(--dusty-pink)",
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship Program",
        description: "Led an entrepreneurship program that was awarded $30K in funding, demonstrating innovation and business acumen.",
        icon: "🚀",
        color: "var(--peach)",
    },
];
