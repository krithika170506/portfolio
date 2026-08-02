import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-accent" />
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-foreground/65 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
