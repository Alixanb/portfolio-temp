import Contact from "@/src/components/base/Contact";
import { Header } from "@/src/components/base/Header";
import { Nav } from "@/src/components/base/Nav";
import { ProjectCard } from "@/src/components/base/ProjectCard";
import { Skills } from "@/src/components/base/Skills";
import { Container, Main } from "@/src/components/layout/Section";
import ButtonRing from "@/src/components/ui/button-ring";
import TextRevealByWord from "@/src/components/ui/text-reveal";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <Header />
      </header>
      <Main>
        <Container id="whoami">
          <h2 className="text-4xl font-medium text-primary mb-8 font-mono">
            Qui-suis je <span className="text-gray-600">..?</span>
          </h2>
          <Skills />
        </Container>
        <Container>
        <TextRevealByWord text="Je suis un développeur web créatif à la recherche de défis !" />
        </Container>

        <Container id="projects">
          <div className="flex p-2 w-ful gap-8 justify-between items-center max-sm:flex-col max-sm:items-start">
            <h2 className="text-4xl font-medium text-primary mb-2 font-mono ">
              Mes projets<span className="text-gray-600">...</span>
            </h2>
            <ButtonRing href="https://github.com/Alixanb?tab=repositories">
              Voir sur GitHub <Globe />
            </ButtonRing>
          </div>
          <ProjectCard />
        </Container>
        <Container id="contact">
          <h2 className="text-4xl font-medium text-primary mb-8 font-mono">
            Contactez-moi<span className="text-gray-600">...</span>
          </h2>
          <Contact />
        </Container>
        {/* <Footer /> */}
      </Main>
    </>
  );
}
