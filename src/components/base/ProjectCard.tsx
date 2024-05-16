import { HoverEffect } from "../ui/card-hover-effect";

export function ProjectCard() {
  return (
    <div id="projects">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "🪩 Mōde Entertainment",
    description:
      "Mōde est une agence de divertissement spécialisée dans des solutions de divertissement événementiel à fort impact à travers toute l'Australie.",
    link: "https://mode-three.vercel.app/",
    tags: ["Next.JS", "Shadcn/ui", "Framer motion"],
  },
  {
    title: "🏙️ Agglo Haguenau",
    description:
      "Agglo-Haguenau est une application exclusivement mobile, développée avec Next.js. ⚠️ Elle n'est pas conçue pour être consultée sur un ordinateur de bureau",
    link: "https://agglo-haguenau.vercel.app/",
    tags: ["Next.JS", "Capacitor"],
  },
  {
    title: "🍺 Chiirz",
    description:
      'Ma première application complète, nous avions décidé de partir sur quelque chose de "fun" réalise il y a de ça un an.',
    link: "https://chiirz.joly.etu.mmi-unistra.fr/",
    tags: ["Symfony", "PHP"],
  },
];
