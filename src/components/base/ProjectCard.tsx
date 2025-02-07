import { ProjectCardContainer } from "../ui/card-hover-effect";

export interface ProjectsProps {
  title: string;
  description: string;
  link: string;
  tags: Array<string>;
  role?: string | undefined;
  date: string;
}

export const projects: ProjectsProps[] = [
  {
    title: "🏒 Étoile noire",
    description:
      "À l'occasion d'un hackathon au sein de mon école Ynov, nous avons développé un MVP de la boutique e-commerce de l'équipe de hockey de Strasbourg",
    link: "https://hackathon-ynov.vercel.app/",
    tags: ["Next.JS", "Stripe"],
    role: "Dev & Designer",
    date: "Jan. 2025"
  },
  {
    title: "🪩 Mōde Entertainment",
    description:
      "Mōde est une agence de divertissement spécialisée dans des solutions de divertissement événementiel à fort impact à travers toute l'Australie.",
    link: "https://mode-three.vercel.app/",
    tags: ["Next.JS", "Shadcn/ui", "Framer motion"],
    role: "Dev & Designer",
    date: "Fev. 2024"
  },
  {
    title: "🏙️ Agglo Haguenau",
    description:
      "Agglo-Haguenau est une application exclusivement mobile, développée avec Next.js. ⚠️ Elle n'est pas conçue pour être consultée sur un ordinateur de bureau",
    link: "https://agglo-haguenau.vercel.app/",
    tags: ["Next.JS", "Capacitor"],
    role: "Projet individuel",
    date: "Fev. - Mai. 2024"
  },
  {
    title: "📸 Trombino-scope",
    description:
      "Mōde est une agence de divertissement spécialisée dans des solutions de divertissement événementiel à fort impact à travers toute l'Australie.",
    link: "https://github.com/Alixanb/trombino-scope",
    tags: ["Github-only", "Docker", "✨ IA", "Express.js"],
    role: "Projet individuel",
    date: "Dec. 2023"
  },
  {
    title: "🫂 Emmaüs Mundolsheim",
    description:
      "Emmaüs Mundo est une association dont l’objectif principal est l’insertion sociale, j'ai été l'UX/UI Designer sur le nouveau site web.",
    link: "https://emmausmundo.com/",
    tags: ["Design Figma", "Wordpress"],
    role: "Designer UI/UX",
    date: "Dec. 2022"
  },
  {
    title: "💧 Notre eau",
    description:
      "Ce site infographique offre un aperçu instructif sur les enjeux cruciaux liés à la consommation de viande et son impact sur l’eau.",
    link: "https://eau.huot.etu.mmi-unistra.fr/",
    tags: ["Symfony", "PHP"],
    role: "Dev & Designer",
    date: "Fev. 2023"
  },
];

export function ProjectCard() {
  return <ProjectCardContainer items={projects} />;
}