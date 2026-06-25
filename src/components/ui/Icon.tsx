import { icons, type LucideProps } from "lucide-react";

type IconProps = LucideProps & {
  /** Any icon name from lucide-react, e.g. "Music", "Cpu", "Trophy". */
  name: string;
};

/**
 * Renders a lucide icon by string name so our data files can stay plain JSON.
 * Falls back to a neutral "Sparkles" icon if the name isn't found.
 */
export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = (icons as Record<string, React.ComponentType<LucideProps>>)[name] ?? icons.Sparkles;
  return <LucideIcon {...props} />;
}
