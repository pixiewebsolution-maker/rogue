"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const GALLERY_IMAGES: Record<string, string[]> = {
  all: [
    "/gallery/33.webp", "/gallery/34.webp", "/gallery/img1.webp", "/gallery/img2.webp", 
    "/gallery/img3.webp", "/gallery/img4.webp", "/gallery/img5.webp", "/gallery/img6.webp",
    "/gallery/7.webp", "/gallery/8.webp", "/gallery/9.webp", "/gallery/10.webp",
    "/gallery/12.webp", "/gallery/15.webp", "/gallery/16.webp", "/gallery/17.webp",
    "/gallery/18.webp", "/gallery/19.webp", "/gallery/21.webp", "/gallery/29.webp",
    "/gallery/30.webp", "/gallery/31.webp", "/gallery/bg-image.webp",
  ],
  battle: [
    "/gallery/BATTLE FIELD/23cbaf83-a446-42b8-a818-f706389790ee.webp",
    "/gallery/BATTLE FIELD/3c97c1d4-63a4-4b33-89e6-1847c1159c05.webp",
    "/gallery/BATTLE FIELD/3f777657-1c0e-4ca3-8b78-8155e623d164.webp",
    "/gallery/BATTLE FIELD/5801e596-d1ef-4d88-b9f3-6b64765aac65.webp",
    "/gallery/BATTLE FIELD/952e4eca-e709-4274-853b-7b27705ca5cc.webp",
    "/gallery/BATTLE FIELD/IMG_0730.webp",
    "/gallery/BATTLE FIELD/IMG_4541_Original.webp",
    "/gallery/BATTLE FIELD/IMG_7314.webp",
    "/gallery/BATTLE FIELD/IMG_8864.webp",
    "/gallery/BATTLE FIELD/aa888f5b-9a9f-4481-a55d-6f69806093d1.webp",
    "/gallery/BATTLE FIELD/c5c005e6-a57d-457f-8d6c-2392ffe365c2.webp",
    "/gallery/BATTLE FIELD/e32f86ba-e57f-4f4f-8ee4-b2d40874784d.webp",
    "/gallery/BATTLE FIELD/e606a509-abd3-4714-b7c6-e777d090ecf5.webp",
    "/gallery/BATTLE FIELD/e7a0b455-df4c-4ab5-8904-24ae79fe9d1a.webp",
  ],
  legends: [
    "/gallery/HALL OF LEGENDS/43a6ba2b-7279-4aff-a06a-954f960f1472.webp",
    "/gallery/HALL OF LEGENDS/5314dcaa-c110-44e4-b551-4f24c9c86f52.webp",
    "/gallery/HALL OF LEGENDS/6bdf810d-b8b7-4184-b11c-3cc79c245bda.webp",
    "/gallery/HALL OF LEGENDS/Blue and Black Bold Dynamic Cricket Sports Instagram Post.png.webp",
    "/gallery/HALL OF LEGENDS/IMG_2411.webp",
    "/gallery/HALL OF LEGENDS/IMG_6333.webp",
    "/gallery/HALL OF LEGENDS/a64da47c-589d-4a8a-861f-ffed18c67a87.webp",
    "/gallery/HALL OF LEGENDS/c212682c-1268-4f3a-9399-ebc22722459b.webp",
    "/gallery/HALL OF LEGENDS/ca526cb8-db32-4e15-8417-7249c89f47c2.webp",
    "/gallery/HALL OF LEGENDS/d208e5b6-9e50-497e-9890-cdbe8c54c454.webp",
    "/gallery/HALL OF LEGENDS/e84a69ba-4c3b-476f-a2a8-fb6dfc972ec7.webp",
  ],
  crew: [
    "/gallery/THE CREW/IMG_0029.webp",
    "/gallery/THE CREW/35.webp",
    "/gallery/THE CREW/DSC09514.JPG.webp",
    "/gallery/THE CREW/IMG_6181.webp",
  ],
  conditioning: [
    "/gallery/WARRIOR CONDITIONING/IMG_0582.webp",
    "/gallery/WARRIOR CONDITIONING/IMG_0587.webp",
    "/gallery/WARRIOR CONDITIONING/IMG_3124.webp",
    "/gallery/WARRIOR CONDITIONING/IMG_3515.webp",
  ],
};

const CATEGORIES = [
  { id: "all", label: "ALL ACCESS" },
  { id: "battle", label: "BATTLE FIELD" },
  { id: "legends", label: "HALL OF LEGENDS" },
  { id: "crew", label: "THE CREW" },
  { id: "conditioning", label: "CONDITIONING" },
];

const PAGE_SIZE = 12;

function GalleryCard({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden group rounded-sm border border-[#1e0a0a] cursor-pointer break-inside-avoid mb-4`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      }}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
    >
      <div className="relative w-full overflow-hidden" style={{ minHeight: '200px' }}>
         <Image
          src={src}
          alt="Rogue Ninja Gallery"
          width={800}
          height={1000}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
        />
        
        <motion.div
          className="absolute inset-0 bg-[#cc1a1a]/5 backdrop-blur-[1px]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function Lightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      <motion.div 
        className="relative z-10 max-w-6xl w-full h-full flex flex-col items-center justify-center"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 p-4 text-white hover:text-[#cc1a1a] transition-colors z-20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="relative w-full h-[85vh]">
          <Image src={src} alt="Gallery" fill className="object-contain" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Combine categories for "all" tab if needed, but here we already have a root list + subfolders.
  // Actually, let's make "all" show EVERY image from all categories + root.
  const allImages = useMemo(() => {
    const combined = [...GALLERY_IMAGES.all];
    Object.keys(GALLERY_IMAGES).forEach(key => {
        if (key !== 'all') {
            combined.push(...GALLERY_IMAGES[key]);
        }
    });
    return Array.from(new Set(combined)); // unique
  }, []);

  const currentImages = activeTab === 'all' ? allImages : GALLERY_IMAGES[activeTab] || [];

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeTab]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + PAGE_SIZE, currentImages.length));
  };

  return (
    <main className="bg-[#060404] text-white min-h-screen overflow-x-hidden pt-[68px]">
      {/* Hero Header */}
      <section className="relative py-20 px-5 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-[#cc1a1a]/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="font-display text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            THE <span className="text-[#cc1a1a]">ROGUE</span> GALLERY
          </motion.h1>
        </div>
      </section>

      {/* Tabs Navigation */}
      <nav className="sticky top-[68px] z-40 bg-[#060404]/80 backdrop-blur-md border-b border-[#cc1a1a]/10 mb-12">
        <div className="max-w-7xl mx-auto px-5 overflow-x-auto scroller-hide">
          <div className="flex items-center justify-center min-w-max gap-4 sm:gap-8 py-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group relative py-2 px-1 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-300
                            ${activeTab === cat.id ? 'text-[#cc1a1a]' : 'text-[#c4b5d4] hover:text-white'}`}
              >
                {cat.label}
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cc1a1a]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Gallery Grid */}
      <section className="px-5 sm:px-8 lg:px-12 pb-24 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {currentImages.slice(0, visibleCount).map((src, index) => (
              <GalleryCard 
                key={src} 
                src={src} 
                onClick={() => setSelectedImage(src)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {visibleCount < currentImages.length && (
          <div className="mt-20 flex flex-col items-center gap-6">
            <button
              onClick={loadMore}
              className="group relative px-14 py-4 border border-[#cc1a1a]/40 overflow-hidden transition-all duration-300 hover:border-[#cc1a1a]"
            >
              <span className="absolute inset-0 bg-[#cc1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-[11px] tracking-[0.5em] font-bold uppercase group-hover:text-white transition-colors">
                Load More
              </span>
            </button>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#4a3063] mt-2">
              Showing {visibleCount} / {currentImages.length}
            </p>
          </div>
        )}

        {visibleCount >= currentImages.length && currentImages.length > 0 && (
          <div className="mt-20 text-center">
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#4a3063]">
              End of {CATEGORIES.find(c => c.id === activeTab)?.label}
            </p>
          </div>
        )}

        {currentImages.length === 0 && (
          <div className="mt-20 text-center py-20 border border-dashed border-[#cc1a1a]/20">
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#4a3063]">
              No images found in this category
            </p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <Lightbox 
            src={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}
