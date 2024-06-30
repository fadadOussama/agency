import { cn } from "@/lib/utils";
import GridPattern from "./magicui/grid-pattern";
import Image from "next/image";
import logo from "../../public/logo.png";
import { links } from "@/constants/links";

export default function Hero() {
  return (
    <div className="container h-screen max-w-[1300px] pt-10 relative ">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(circle_at_center,white_55%,transparent)]",
        )}
      />

      <div className="relative z-50 h-full">
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            alt="agyweb logo"
            quality={100}
            className={"size-10"}
          />

          <div className="flex items-center gap-x-7">
            {links.map((link, i) => (
              <a
                key={`${link}${i}`}
                href={`/${link.href}`}
                className="text-black hover:opacity-95"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full mt-32 ">
          <p className="text-[83px] font-bold leading-normal">
            Transforming ideas into{" "}
            <span className="hero_text bg-clip-text font-swearDisplay text-transparent">
              Websites
            </span>
            <br />
            that drive results, build trust
          </p>
        </div>

        
      </div>

    </div>
  );
}
