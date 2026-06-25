import { ImageIcon } from "lucide-react";
import { gallery, type GalleryItem } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const spanClass: Record<GalleryItem["span"], string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

const hueClass: Record<GalleryItem["hue"], string> = {
  brand: "from-brand-600/40 to-brand-900/20",
  violet: "from-violet-600/40 to-violet-900/20",
  teal: "from-teal-600/40 to-teal-900/20",
};

export function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Campus Moments"
          title={
            <>
              Life here, <span className="text-gradient">in pictures</span>
            </>
          }
          subtitle="Placeholder tiles for now. Drop real photos into /public/gallery and set the src in src/data/gallery.ts."
        />

        <RevealGroup
          className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.05}
        >
          {gallery.map((item) => (
            <RevealItem
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10",
                spanClass[item.span]
              )}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={cn(
                    "flex h-full w-full items-center justify-center bg-gradient-to-br",
                    hueClass[item.hue]
                  )}
                >
                  <ImageIcon className="h-8 w-8 text-white/30" />
                </div>
              )}
              {/* caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-10">
                <p className="translate-y-1 text-sm font-medium text-white opacity-90 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
