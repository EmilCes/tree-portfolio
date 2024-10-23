"use client"

import { useState } from "react";
import TechSkill from "./TechSkill";
import { AnimatePresence, motion } from "framer-motion";
import { CircleX } from "lucide-react";
import Image from "next/image";

export const Card = ({ cardId, title, imageSrc, githubLink, description, stack, className }: CardProps) => {

    const [selectedId, setSelectedId] = useState<null | string>(null);
    const strCardId = `card-${cardId}`;

    return (
        <>
            <motion.div
                className={`relative flex flex-col border-2 border-customGray rounded-2xl p-0 
                            min-w-64 overflow-hidden group bg-customWhite dark:bg-darkBlack cursor-pointer
                            ${className}`}
                layoutId={strCardId}
                onClick={() => setSelectedId(strCardId)}
                whileHover={{ scale: 1.05 }}
            >
                <Image
                    src={imageSrc}
                    alt="Project Image"
                    className="w-full h-48 object-cover"
                />

                <motion.div className="p-4">

                    <motion.h3 className="text-left text-xl font-bold mb-2">
                        {title}
                    </motion.h3>

                    <motion.div className="flex flex-wrap gap-2">
                        {stack.map((skill, index) => {
                            return (
                                <TechSkill
                                    key={index}
                                    skillName={skill.name}
                                    color={skill.color}
                                />
                            );
                        })}
                    </motion.div>

                </motion.div>

            </motion.div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50"
                    >
                        <motion.div
                            layoutId={selectedId}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-2/4 h-2/4 bg-background-light dark:bg-background-dark rounded-xl p-8 shadow-lg relative"
                        >
                            <motion.button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 text-customGray dark:text-white p-2 rounded"
                            >
                                <CircleX />
                            </motion.button>

                            <div className="flex justify-between gap-x-8 p-5">

                                <div className="flex flex-col w-1/2">
                                    <Image src={imageSrc} alt="Project Image" className="rounded-2xl w-full object-cover" />

                                    <h1 className="text-left text-xl mt-4">
                                        {title}
                                    </h1>

                                    <div>
                                        <div className="mt-4 text-left text-sm flex items-center gap-2">
                                            <Image src="/images/github-dark-logo.svg" alt="GitHub Dark Logo" className="dark:hidden w-4 h-4" />
                                            <Image src="/images/github-light-logo.svg" alt="GitHub Light Logo" className="hidden dark:block w-4 h-4" />
                                            <a
                                                href={githubLink}
                                                target="_blank"
                                                className="hover:text-black dark:hover:text-black transition-colors duration-300 px-2 py-1 rounded"
                                            >
                                                {githubLink}
                                            </a>
                                        </div>
{/*
                                        <div className="mt-2 text-left text-sm flex items-center gap-2">
                                            <img src="/images/link-dark-logo.svg" alt="Link Dark Logo" className="dark:hidden w-4 h-4" />
                                            <img src="/images/link-light-logo.svg" alt="Link Light Logo" className="hidden dark:block w-4 h-4" />
                                            <a
                                                href={availableIn}
                                                target="_blank"
                                                className="hover:text-black dark:hover:text-black transition-colors duration-300 px-2 py-1 rounded"
                                            >
                                                {availableIn}
                                            </a>
                                        </div>
                                        */}
                                    </div>

                                </div>

                                <div className="border-l border-gray-500 border-opacity-60"></div>

                                <div className="flex flex-col w-1/2">
                                    <h1 className="text-left text-2xl mb-2">Description</h1>
                                    <div className="mb-4">
                                        <p className="text-md text-left">
                                            {description}
                                        </p>
                                    </div>

                                    <h1 className="text-left text-2xl mb-2">Stack</h1>
                                    <div>
                                        <motion.div className="flex flex-wrap gap-2">
                                            {stack.map((skill, index) => {
                                                return (
                                                    <TechSkill
                                                        key={index}
                                                        skillName={skill.name}
                                                        color={skill.color}
                                                    />
                                                );
                                            })}
                                        </motion.div>
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}

interface CardProps {
    cardId: number;
    title: string;
    imageSrc: string;
    availableIn: string;
    githubLink: string;
    description: string;
    stack: { name: string, color: string }[];
    className?: string;
}