"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Skill = ({ imageSrc, skillName }: SkillProps) => {

    const constraintsRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={constraintsRef}
            className="relative w-24 h-24 overflow-hidden rounded-2xl flex items-center justify-center 
                       hover:border-2 hover:border-customGray hover:dark:border-customWhite transition duration-300 "
                        >
            <motion.div 
                drag
                dragConstraints={constraintsRef}
                className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
            >
                <Image
                    className="w-8 h-8 mb-0 transition duration-300 dark:invert"
                    src={imageSrc}
                    alt={`${skillName} Icon`} />

                <p className="text-center text-sm mt-2 dark:text-white text-black transition duration-300">
                    {skillName}
                </p>
            </motion.div>
        </motion.div>
    )
}

interface SkillProps {
    imageSrc: string;
    skillName: string;
}


export default Skill


/*

            /*className="min-w-16 min-h-20 max-w-16 max-h-20 p-2 rounded-2xl hover:border-2 hover:border-customGray 
                     hover:dark:border-customWhite transition duration-300 
                       flex flex-col items-center justify-center"}
*/