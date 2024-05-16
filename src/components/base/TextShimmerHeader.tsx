import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import AnimatedShinyText from "../ui/animated-shiny-text";

export async function TextShimmerHeader() {
  return (
    <Link href="#projects" className="flex justify-center">
      <AnimatedShinyText className="cursor-pointer inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>🚀 Découvrir mes projets</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </Link>
  );
}
