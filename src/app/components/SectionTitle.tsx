
const SectionTitle = ({sectionName}: SectionTitleProps) => {
        return (
            <div className="flex flex-col sm:flex-row items-center sm:gap-2 text-lg align-top mt-24">
              <h1 className="font-normal text-[1.8rem] md:text-[2.5rem] text-center sm:text-left">
                {sectionName}
              </h1>
              {/* Este div se oculta en pantallas pequeñas y aparece en pantallas medianas */}
              <div className="hidden sm:block h-[0.5px] w-[300px] ml-4 bg-customDarkGray"></div>
            </div>
          );
}

export default SectionTitle;

interface SectionTitleProps {
    sectionName: string;
}