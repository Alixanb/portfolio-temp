import { Footer } from "@/src/components/base/Footer";
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
          <h2 className="text-4xl text-primary mb-8 font-bold">
            Qui-suis je
          </h2>
          <Skills />
        </Container>
        <Container>
          <TextRevealByWord text="Je suis un développeur web créatif à la recherche de défis !" />
        </Container>

        <Container id="projects">
          <div className="flex p-2 w-ful gap-8 justify-between items-center max-sm:flex-col max-sm:items-start">
            <h2 className="text-4xl text-primary mb-2 font-bold ">
              Mes projets
            </h2>
            <ButtonRing href="https://github.com/Alixanb?tab=repositories">
              Voir sur GitHub <Globe />
            </ButtonRing>
          </div>
          <ProjectCard />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
