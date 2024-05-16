import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface ButtonRingProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

const ButtonRing: React.FC<ButtonRingProps> = ({
  href = "#",
  className,
  children,
  ...props
}) => {
  return (
    <a
      className={cn(
        "gap-2 hover:gap-3 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary shadow  h-10 px-8 whitespace-pre md:flex group relative overflow-hidden rounded-full text-base font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2  hover:ring-offset-4",
        className
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default ButtonRing;
