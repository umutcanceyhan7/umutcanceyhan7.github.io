"use client";

import { useState } from "react";

interface ShareButtonsProps {
    url: string;
    title: string;
}

function ShareButton({
    icon,
    label,
    onClick,
    color,
}: {
    icon: string;
    label: string;
    onClick: () => void;
    color: string;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm transition-all duration-200"
            style={{
                backgroundColor: isHovered ? color : "var(--light-gray)",
                color: "var(--dark-purple)",
                border: `2px solid ${isHovered ? "var(--dark-purple)" : "transparent"}`,
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isHovered ? "0 3px 0 var(--dark-purple)" : "none",
            }}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    );
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
    const handleShare = (platform: string) => {
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        const shareUrls: Record<string, string> = {
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], "_blank", "width=600,height=400");
        }
    };

    return (
        <div className="mt-10">
            <p
                className="font-body font-medium mb-4"
                style={{ color: "var(--dark-purple)" }}
            >
                Share this post:
            </p>
            <div className="flex flex-wrap gap-3">
                <ShareButton
                    icon="𝕏"
                    label="Twitter"
                    onClick={() => handleShare("twitter")}
                    color="var(--soft-blue)"
                />
                <ShareButton
                    icon="f"
                    label="Facebook"
                    onClick={() => handleShare("facebook")}
                    color="var(--soft-purple)"
                />
                <ShareButton
                    icon="in"
                    label="LinkedIn"
                    onClick={() => handleShare("linkedin")}
                    color="var(--mint-green)"
                />
            </div>
        </div>
    );
}
