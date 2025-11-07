import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition  shadow-input dark:shadow-none p-8 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className=" transition flex flex-col justify-between grow  ">
        <span className="text-2xl group-hover/bento:scale-150 transition-transform w-fit">
          <span>{icon}</span>
        </span>
        <div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg mb-1 mt-2">
            {title}
          </div>
          <div className="font-sans font-medium text-neutral-300 text-sm">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
