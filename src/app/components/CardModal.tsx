import Skill from "./Skill";

const CardModal = ({ isOpen, onClose, title, imageSrc, description, skills, availableIn, githubLink }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-customWhite dark:bg-customGray p-12 rounded-lg relative w-4/5 h-3/5 max-w-5xl grid grid-cols-[1fr_0.05fr_2fr] gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-4 right-6 text-2xl cursor-pointer text-black dark:text-customWhite"
          onClick={onClose}
        >
          &times;
        </span>

        <div className="modal-left flex flex-col items-center justify-evenly">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          <img src={imageSrc} alt="Project Image" className="w-full h-auto" />

          <div className="align-top">
            <div className="mt-4 text-left text-sm flex items-center gap-2">
              <img src="/images/github-dark-logo.svg" alt="GitHub Dark Logo" className="dark:hidden w-4 h-4" />
              <img src="/images/github-light-logo.svg" alt="GitHub Light Logo" className="hidden dark:block w-4 h-4" />
              <a
                href={githubLink}
                className="hover:text-black dark:hover:text-black transition-colors duration-300 px-2 py-1 rounded"
              >
                {githubLink}
              </a>
            </div>

            <div className="mt-2 text-left text-sm flex items-center gap-2">
              <img src="/images/link-dark-logo.svg" alt="Link Dark Logo" className="dark:hidden w-4 h-4" />
              <img src="/images/link-light-logo.svg" alt="Link Light Logo" className="hidden dark:block w-4 h-4" />
              <a
                href={availableIn}
                className="hover:text-black dark:hover:text-black transition-colors duration-300 px-2 py-1 rounded"
              >
                {availableIn}
              </a>
            </div>
          </div>

        </div>

        <div className="w-[2px] bg-customGray dark:bg-customWhite opacity-40"></div>

        <div className="modal-right flex flex-col overflow-hidden justify-evenly">
          <h2 className="text-lg font-semibold text-left">Description</h2>
          <p className="text-left min-h-28">{description}</p>

          <h2 className="text-lg font-semibold text-left">Stack</h2>
          <div className="skills-container flex gap-4 overflow-x-auto">
            {skills.map((skill, index) => (
              <Skill key={index} skillName={skill.skillName} imageSrc={skill.imageSrc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  description: string;
  skills: { skillName: string; imageSrc: string }[];
  availableIn: string;
  githubLink: string;
}

export default CardModal;
