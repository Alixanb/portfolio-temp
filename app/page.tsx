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
          <TextRevealByWord text="Je suis un joueur d'équipe, motivé à développer des solutions uniques." />
        </Container>

        <Container id="projects">
          <div className="flex w-ful justify-between items-center">
            <h2 className="text-4xl font-medium text-primary mb-2 font-mono">
              Mes projets<span className="text-gray-600">...</span>
            </h2>
            <ButtonRing>
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
