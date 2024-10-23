import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 ml-2 md:ml-10 lg:ml-10">
        <Image src="/images/logo-dark.svg" alt="Emiliano's Light Logo" className="hidden dark:block" />
        <Image src="/images/logo-light.svg" alt="Emiliano's Dark Logo" className="dark:hidden"/>
        <span>Emiliano Lezama</span>
      </div>
  )
}

export default Logo;