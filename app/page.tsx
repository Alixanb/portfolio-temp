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
        <Header />
      </header>
      <Main>
        <Nav />
        <Container>
          <h1 className="text-3xl font-bold text-primary ml-2">Mes projets</h1>
          <ProjectCard />
        </Container>
        <Container>
          <TextRevealByWord text="Je suis un joueur d'équipe, motivé à développer des solutions uniques." />
        </Container>
        <Container>
          <h1 className="text-3xl font-bold text-primary mb-4">
            Atouts professionnels
          </h1>
          <Skills />
        </Container>
      </Main>
    </>
  );
}
