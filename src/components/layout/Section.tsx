import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-8", className)}>{children}</div>
  );
};

const Main: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <main className={cn("flex flex-col gap-32", className)}>{children}</main>
  );
};

export { Container, Main };
