import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <GridPattern
      width={30}
      height={30}
      x={-1}
      y={-1}
      className={cn(
        "[mask-image:radial-gradient(circle_at_center,white_55%,transparent)]",
      )}
    />
  );
}
