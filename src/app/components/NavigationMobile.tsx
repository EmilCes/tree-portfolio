"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useRef, useState } from "react"
import { useClickAway } from "react-use";
import { routes } from "../constants/routes";

const NavigationMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      setOpen(false);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div ref={ref} className="md:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[4.5rem] p-5 pt-0 bg-background-light dark:bg-background-dark border-b border-customGray dark:border-customWhite"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-background-light dark:bg-background-dark "
                  >
                    <button
                      onClick={() => handleScroll(route.href)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-background-light dark:bg-background-dark"
                      }
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationMobile