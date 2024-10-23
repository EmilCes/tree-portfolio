import { socialLinks } from "../constants/socialLinks"

export const SocialLinks = () => {
  return (
    <div className="fixed flex bottom-6 gap-8 z-50 w-full justify-center md:justify-end md:right-4 md:mr-16">
        {socialLinks.map((socialLinks, index) => {
            return (
                <a key={index} href={socialLinks.href} aria-label={socialLinks.name} target="_blank"
                    className="flex items-center justify-center"
                >
                    <img src={socialLinks.darkImageSrc} alt={`${socialLinks.name} Logo`} className="dark:hidden"  />
                    <img src={socialLinks.lightImageSrc} alt={`${socialLinks.name} Logo`} className="hidden dark:block" />
                </a>
            );
        })}
    </div>
  )
}

export default SocialLinks
