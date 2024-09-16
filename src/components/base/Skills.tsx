import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function Skills() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Dynamique",
    description:
      "Je suis toujours à la recherche de nouveaux défis et opportunités pour me surpasser.",
    icon: "🚀",
  },
  {
    title: "Curieux",
    description:
      "Ma curiosité me pousse à explorer de nouvelles idées et technologies.",
    icon: "🤔",
  },
  {
    title: "Créatif",
    description:
      "Je sais créer des maquettes originales et des expériences utilisateur uniques.",
    icon: "🎨",
  },
  {
    title: "Collaboratif",
    description:
      "Je communique clairement et ouvertement avec mes collègues pour favoriser la synergie et l'atteinte d'objectifs communs.",
    icon: "👪",
  },
  {
    title: "Persévérant",
    description:
      "Ma persévérance me permet de surmonter les obstacles et de mener à bien les projets.",
    icon: "💪",
  },
];
