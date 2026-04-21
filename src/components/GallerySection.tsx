"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// All gallery images (excluding .HEIC — not natively supported in browsers)
const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "battle", label: "Battle Field" },
  { id: "legends", label: "Hall of Legends" },
  { id: "crew", label: "The Crew" },
  { id: "conditioning", label: "Conditioning" },
];

const GALLERIES: Record<string, { src: string; alt: string }[]> = {
  all: [
    { src: "/gallery/img1.jpeg", alt: "Rogue Ninja Training 1" },
    { src: "/gallery/img2.jpeg", alt: "Rogue Ninja Training 2" },
    { src: "/gallery/img3.jpeg", alt: "Rogue Ninja Training 3" },
    { src: "/gallery/img4.jpeg", alt: "Rogue Ninja Training 4" },
    { src: "/gallery/img6.jpeg", alt: "Rogue Ninja Training 6" },
    { src: "/gallery/7.jpeg",    alt: "Rogue Ninja Fight Club 7" },
    { src: "/gallery/21.PNG",    alt: "Rogue Ninja Fight Club 21" },
  ],
  battle: [
    { src: "/gallery/BATTLE FIELD/23cbaf83-a446-42b8-a818-f706389790ee.jpg", alt: "Sparring Session" },
    { src: "/gallery/BATTLE FIELD/3c97c1d4-63a4-4b33-89e6-1847c1159c05.jpg", alt: "Technique Drill" },
    { src: "/gallery/BATTLE FIELD/5801e596-d1ef-4d88-b9f3-6b64765aac65.jpg", alt: "Live Fight" },
    { src: "/gallery/BATTLE FIELD/IMG_0730.JPG", alt: "Battle Focus" },
  ],
  legends: [
    { src: "/gallery/HALL OF LEGENDS/43a6ba2b-7279-4aff-a06a-954f960f1472.jpg", alt: "Champion Wall" },
    { src: "/gallery/HALL OF LEGENDS/5314dcaa-c110-44e4-b551-4f24c9c86f52.jpg", alt: "Medal Ceremony" },
    { src: "/gallery/HALL OF LEGENDS/IMG_2411.JPG", alt: "Legendary Moment" },
  ],
  crew: [
    { src: "/gallery/THE CREW/IMG_0029.JPG", alt: "The Rogue Crew" },
    { src: "/gallery/THE CREW/IMG_0623.JPG", alt: "Team Training" },
    { src: "/gallery/THE CREW/IMG_3126.JPG", alt: "Dojo Gathering" },
  ],
  conditioning: [
    { src: "/gallery/WARRIOR CONDITIONING/IMG_0582.PNG", alt: "Weight Training" },
    { src: "/gallery/WARRIOR CONDITIONING/IMG_0587.PNG", alt: "Endurance Test" },
    { src: "/gallery/WARRIOR CONDITIONING/IMG_0589.PNG", alt: "Core Blast" },
  ],
};

const PAGE_SIZE = 12;

export default function GallerySection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab]       = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightbox, setLightbox]         = useState<string | null>(null);

  const currentGallery = GALLERIES[activeTab] || [];
  const visibleImages   = currentGallery.slice(0, visibleCount);
  const hasMore         = visibleCount < currentGallery.length;

  // Reset pagination when tab changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeTab]);

  // Animate newly added cards whenever visibleCount grows
  useEffect(() => {
    const animate = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll<HTMLElement>(".gallery-card:not(.animated)");
        cards.forEach((c) => c.classList.add("animated"));

        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.07,
            ease: "power3.out",
          }
        );
      } catch (_) {}
    };
    animate();
  }, [visibleCount, activeTab]);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#060404] overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#cc1a1a] opacity-[0.03] blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#7c3aed] opacity-[0.03] blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Our <span className="text-[#cc1a1a]">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-[#cc1a1a] mx-auto mb-6 shadow-[0_0_15px_rgba(204,26,26,0.5)]" />
          <p className="text-[#c4b5d4] text-sm lg:text-base tracking-[0.08em] max-w-2xl mx-auto">
            A glimpse into the sweat, discipline, and fire that defines Rogue
            Ninja Fight Club.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 border
                          ${activeTab === cat.id 
                            ? "bg-[#cc1a1a] border-[#cc1a1a] text-white shadow-[0_0_20px_rgba(204,26,26,0.3)]" 
                            : "bg-transparent border-[#1a0f2e] text-[#c4b5d4] hover:border-[#cc1a1a]/40 hover:text-white"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="columns-2 sm:columns-3 lg:columns-4 gap-3 lg:gap-4 space-y-3 lg:space-y-4"
        >
          {visibleImages.map((img, i) => (
            <div
              key={img.src}
              className="gallery-card group relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer border border-[#1a0f2e] hover:border-[#cc1a1a]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,26,26,0.2)]"
              onClick={() => setLightbox(img.src)}
            >
              <div className="relative w-full aspect-[3/4] bg-[#0b0811]">
                {/* Alternate aspect ratios for visual variety */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    paddingBottom:
                      i % 5 === 0
                        ? "133%"
                        : i % 5 === 1
                        ? "75%"
                        : i % 5 === 2
                        ? "100%"
                        : i % 5 === 3
                        ? "125%"
                        : "90%",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0811]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-4">
                    <span className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold">
                      View
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Count indicator */}
        <p className="text-center text-[#5a4a6a] text-[10px] tracking-widest uppercase mt-8">
          Showing {visibleImages.length} of {currentGallery.length} photos in {CATEGORIES.find(c => c.id === activeTab)?.label}
        </p>

        {/* See More button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + PAGE_SIZE, currentGallery.length)
                )
              }
              className="group relative px-10 py-3.5 text-[11px] tracking-[0.3em] font-bold uppercase
                         border border-[#cc1a1a]/60 text-[#cc1a1a] rounded-full overflow-hidden
                         transition-all duration-300
                         hover:border-[#cc1a1a] hover:text-white
                         hover:shadow-[0_0_30px_rgba(204,26,26,0.35)]"
            >
              <span className="absolute inset-0 bg-[#cc1a1a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              <span className="relative z-10">
                See More ({currentGallery.length - visibleCount} remaining)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white/60 hover:text-white text-3xl font-light transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
