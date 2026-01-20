// Key accomplishments data with photo galleries
export interface AccomplishmentPhoto {
    id: string;
    alt: string;
    src: string;
}

export interface Accomplishment {
    id: string;
    title: string;
    description: string;
    photos: AccomplishmentPhoto[];
    color: string;
}

export const accomplishments: Accomplishment[] = [
    {
        id: "innovation-challenge",
        title: "Innovation Challenge Winner",
        description: "First place in multiple innovation and coding challenges, demonstrating technical excellence and creative problem-solving.",
        photos: [
            { id: "1", alt: "Innovation Challenge Winner - Photo 1", src: "/images/accomplishments/innovation-1.jpg" },
            { id: "2", alt: "Innovation Challenge Winner - Photo 2", src: "/images/accomplishments/innovation-2.jpg" },
            { id: "3", alt: "Innovation Challenge Winner - Photo 3", src: "/images/accomplishments/innovation-3.jpg" },
        ],
        color: "var(--soft-purple)",
    },
    {
        id: "blockchain-training",
        title: "Blockchain Training Leadership",
        description: "Successfully conducted comprehensive blockchain technology training for over 150 employees across the organization.",
        photos: [
            { id: "1", alt: "Blockchain Training Leadership - Photo 1", src: "/images/accomplishments/blockchain-1.jpg" },
            { id: "2", alt: "Blockchain Training Leadership - Photo 2", src: "/images/accomplishments/blockchain-2.jpg" },
            { id: "3", alt: "Blockchain Training Leadership - Photo 3", src: "/images/accomplishments/blockchain-3.jpg" },
        ],
        color: "var(--mint-green)",
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship Program Success",
        description: "Led and secured $30K funding for entrepreneurship program, showcasing business development and leadership skills.",
        photos: [
            { id: "1", alt: "Entrepreneurship Program Success - Photo 1", src: "/images/accomplishments/entrepreneurship-1.jpg" },
            { id: "2", alt: "Entrepreneurship Program Success - Photo 2", src: "/images/accomplishments/entrepreneurship-2.jpg" },
            { id: "3", alt: "Entrepreneurship Program Success - Photo 3", src: "/images/accomplishments/entrepreneurship-3.jpg" },
        ],
        color: "var(--dusty-pink)",
    },
    {
        id: "executive-presentations",
        title: "Executive Presentations",
        description: "Delivered strategic presentations and demos to C-level executives, driving key business decisions and digital transformation.",
        photos: [
            { id: "1", alt: "Executive Presentations - Photo 1", src: "/images/accomplishments/executive-1.jpg" },
            { id: "2", alt: "Executive Presentations - Photo 2", src: "/images/accomplishments/executive-2.jpg" },
            { id: "3", alt: "Executive Presentations - Photo 3", src: "/images/accomplishments/executive-3.jpg" },
        ],
        color: "var(--peach)",
    },
];
