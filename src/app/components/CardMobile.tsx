"use client";

import TechSkill from "./TechSkill";
import { motion } from "framer-motion";

export const CardMobile = ({
    cardId,
    title,
    imageSrc,
    availableIn,
    githubLink,
    description,
    stack,
    className
}: CardMobileProps) => {
    const strCardId = `card-${cardId}`;

    return (
        <motion.div
            className={`relative flex flex-col border-2 border-customGray rounded-2xl 
                        p-0 min-w-64 overflow-hidden group bg-customWhite dark:bg-darkBlack
                        ${className}}`}
            layoutId={strCardId}
            whileHover={{ scale: 1.05 }}
        >
            <motion.img
                src={imageSrc}
                alt="Project Image"
                className="w-full h-48 object-cover"
            />

            <motion.div className="p-4">
                
                <div className="flex justify-between">
                    <h3 className="text-left text-xl font-bold mb-2">
                        {title}
                    </h3>

                    <a
                        href={githubLink}
                        target="_blank"
                    >
                        <img src="/images/github-dark-logo.svg" alt="GitHub Dark Logo" className="dark:hidden w-4 h-4" />
                        <img src="/images/github-light-logo.svg" alt="GitHub Light Logo" className="hidden dark:block w-4 h-4" />
                    </a>
                </div>


                <p className="text-md text-left mb-4">{description}</p>

                <motion.div className="flex flex-wrap gap-2 mb-4">
                    {stack.map((skill, index) => (
                        <TechSkill key={index} skillName={skill.name} color={skill.color} />
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

interface CardMobileProps {
    cardId: number;
    title: string;
    imageSrc: string;
    availableIn: string;
    githubLink: string;
    description: string;
    stack: { name: string; color: string }[];
    className?: string;
}
