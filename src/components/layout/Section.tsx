import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-8", className)} {...props}>
      {children}
    </div>
  );
};

const Main: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <main className={cn("flex flex-col gap-32", className)} {...props}>
      {children}
    </main>
  );
};

export { Container, Main };
