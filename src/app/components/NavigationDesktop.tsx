"use client"

import { routes } from "../constants/routes"

const NavigationDesktop = () => {

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <nav className="gap-16 mr-12 hidden md:flex">
      {routes.map((route, index) => {
        return (
          <button
            key={index}
            onClick={() => handleScroll(route.href)}
            className="cursor-pointer hover:text-customDarkGray transition-colors"
          >
            { route.title }
          </button>
        )
      })}
    </nav>

  )
}

export default NavigationDesktop