import { ChevronRight } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams";
import ButtonRing from "../ui/button-ring";
import { Spotlight } from "../ui/spot-light";
import { TextShimmerHeader } from "./TextShimmerHeader";

export function Header() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <BackgroundBeams />

      <div className="p-4 max-w-7xl  mx-auto relative z-10 flex flex-col gap-8 items-center w-full pt-20 md:pt-0">
        <TextShimmerHeader />
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Bienvenue sur mon&nbsp;
          <span className="bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
            portfolio
          </span>
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Je suis un développeur créatif et dynamique, passioné par les
          technologies de pointes.
        </p>
        <div className="flex gap-4 max-sm:flex-col">
          <ButtonRing
            className="bg-white text-primary-foreground"
            href="#projects"
          >
            Mes projets
            <ChevronRight size={16} />
          </ButtonRing>
          <ButtonRing href="#contact">
            Contactez moi
            <ChevronRight size={16} />
          </ButtonRing>
        </div>
      </div>
    </div>
  );
}
