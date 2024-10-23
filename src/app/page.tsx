import About from "./components/About";
import { Card } from "./components/Card";
import { CardMobile } from "./components/CardMobile";
import Footer from "./components/Footer";
import FractalTree from "./components/FractalTree";
import SectionTitle from "./components/SectionTitle";
import SocialLinks from "./components/SocialLinks";
import { projects } from "./constants/projects";

export default function Home() {
  return (
    <>
      <main className="font-ntr light m-auto p-4 w-5/6 max-w-full px-8 snap-y snap-mandatory min-h-screen">

        <section id="home" className="snap-center h-screen flex flex-col justify-center 
                                      items-center text-center p-5">
          <h1 className="font-normal text-[2.5rem] md:text-[3rem] lg:text-[3rem]">
            Emiliano Lezama
          </h1>
          <h2 className="font-normal text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] mt-0">
            Software Engineering Student
          </h2>

          <FractalTree />
        </section>

        <About />

        <section id="projects" className="snap-start lg:snap-center min-h-screen flex flex-col text-center md:p-5">
          <SectionTitle sectionName="Projects" />

          <div className="w-full h-full flex justify-center items-center mt-24">
            <ul
              role="list"
              className="flex overflow-x-auto snap-x snap-mandatory max-w-full mx-auto md:p-5 scrollbar-hidden gap-2"
            >
              {projects.map((project, index) => (
                <li key={index} className="flex-shrink-0 snap-center w-full max-w-xs mx-2">
                  <div className="block md:hidden">
                    <CardMobile
                      cardId={index}
                      title={project.title}
                      availableIn={project.availableIn}
                      githubLink={project.githubLink}
                      imageSrc={project.imgSrc}
                      description={project.description}
                      stack={project.stack}
                    />
                  </div>

                  <div className="hidden md:block">
                    <Card
                      cardId={index}
                      title={project.title}
                      availableIn={project.availableIn}
                      githubLink={project.githubLink}
                      imageSrc={project.imgSrc}
                      description={project.description}
                      stack={project.stack}
                      className="hidden md:block"
                    />
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </section>


      </main>

      <SocialLinks />

      <Footer />
    </>

  );
}

/*

        <section id="projects" className="snap-center h-screen flex flex-col text-center p-5">
         <SectionTitle sectionName="/ Projects"/> 

          <div className="w-full h-full flex justify-center items-center">
            <ul
              role="list"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 
                         max-w-full mx-auto p-5 scroll-smooth justify-center items-center"
              style={{ height: 'calc(100vh / 2)' }}
            >
              {projects.map((project, index) => (
                <li key={index} className="flex-shrink-0">
                  <Card
                    cardId={index}
                    title={project.title}
                    availableIn={project.availableIn}
                    githubLink={project.githubLink}
                    imageSrc={project.imgSrc}
                    description={project.description}
                    stack={project.stack}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

*/