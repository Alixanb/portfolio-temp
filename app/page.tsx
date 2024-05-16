import { Footer } from "@/src/components/base/Footer";
import { Header } from "@/src/components/base/Header";
import { Nav } from "@/src/components/base/Nav";
import { ProjectCard } from "@/src/components/base/ProjectCard";
import { Skills } from "@/src/components/base/Skills";
import { Container, Main } from "@/src/components/layout/Section";
import TextRevealByWord from "@/src/components/ui/text-reveal";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <Header />
      </header>
      <Main>
        <Container>
          <h2 className="text-4xl font-medium text-primary mb-8 font-mono">
            Qui-suis je <span className="text-gray-600">..?</span>
          </h2>
          <Skills />
        </Container>
        <Container>
          <TextRevealByWord text="Je suis un joueur d'équipe, motivé à développer des solutions uniques." />
        </Container>

        <Container>
          <h2 className="text-4xl font-medium text-primary mb-2 font-mono">
            Mes projets<span className="text-gray-600">...</span>
          </h2>

          <ProjectCard />
        </Container>
        <Container id="contact">
          <h2 className="text-4xl font-medium text-primary mb-8 font-mono">
            Contactez-moi<span className="text-gray-600">...</span>
          </h2>
        </Container>
        <Footer />
      </Main>
    </>
  );
}
