"use client"

import { AnimatePresence, motion } from "framer-motion";

interface AnimatedModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {title: string, imageSrc: string, availableIn: string, githubLink: string};
}

const AnimatedModal = ({ isOpen, onClose, data }: AnimatedModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-2/4 h-2/4 bg-white dark:bg-darkBlack rounded-xl p-8 shadow-lg relative"
                    >
                        
                        <motion.h5>{data.title}</motion.h5>
                        <motion.h2>{data.title}</motion.h2>

                        <button
                            onClick={onClose}
                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedModal;
