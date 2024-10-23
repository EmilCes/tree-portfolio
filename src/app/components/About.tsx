import { techStack } from "../constants/techStack";
import SectionTitle from "./SectionTitle";
import Skill from "./Skill";

const About = () => {
    return (
        <section id="about" className="snap-start lg:snap-center min-h-screen flex flex-col text-center p-5">
            <SectionTitle sectionName="About me" />

            <div className="flex flex-col lg:flex-row mt-5">
                <div className="w-full lg:w-1/2 p-2 text-center md:text-left lg:mr-10">
                    <p className="text-xl sm:text-2xl dark:text-platinum text-customGray">
                        I'm a software engineering student, expected to graduate in August 2025.
                        My focus is on the development of both <span className="font-black">frontend</span> and
                        <span className="font-black"> backend</span> systems,
                        with an emphasis on software design.
                    </p>

                    <br />

                    <p className="text-xl sm:text-2xl dark:text-platinum text-customGray">
                        I am currently seeking opportunities for an <span className="font-black">internship</span>.
                    </p>

                    <br />

                    <p className="text-xl sm:text-2xl dark:text-platinum text-customGray">
                        Here are some technologies I have been working with:
                    </p>

                    <div className="mt-4 grid grid-cols-3 md:grid-cols-4 gap-2 w-full justify-items-center mx-auto">
                        {techStack.map((skill, index) => {
                            return (
                                <Skill key={index} skillName={skill.name} imageSrc={skill.imageUrl} />
                            )
                        })}
                    </div>

                </div>

                <div className="w-full lg:w-1/2 p-2 flex justify-center items-center mt-5 lg:mt-0">
                    <img
                        alt="Emiliano Lezama"
                        src="/images/me.jpg"
                        className="shadow-custom border-none rounded-xl max-h-[20rem] lg:max-h-[28rem] object-contain"
                    />
                </div>
            </div>

        </section>
    )

}

export default About;