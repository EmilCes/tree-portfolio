import Logo from "./Logo"
import NavigationDesktop from "./NavigationDesktop"
import NavigationMobile from "./NavigationMobile"

export const Topbar = () => {
  return (
    <header className="fixed top-0 w-full max-w-[100vw] z-50 justify-between 
                        mt-4 py-2.5 px-8 flex">
        <Logo />
        <NavigationMobile />
        <NavigationDesktop />
    </header>
  )
}
