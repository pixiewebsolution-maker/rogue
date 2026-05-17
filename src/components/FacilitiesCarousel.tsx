"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  "/gallery/WARRIOR CONDITIONING/IMG_0582.webp",
  "/gallery/WARRIOR CONDITIONING/IMG_0587.webp",
  "/gallery/WARRIOR CONDITIONING/IMG_0589.webp",
  "/gallery/WARRIOR CONDITIONING/IMG_0631.webp",
  "/gallery/WARRIOR CONDITIONING/IMG_1940.webp",
  "/gallery/WARRIOR CONDITIONING/IMG_3124.webp"
];

export default function FacilitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#1e0707] group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={galleryImages[currentIndex]}
            fill
            alt={`Facility image ${currentIndex + 1}`}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#060404] to-transparent opacity-80 pointer-events-none" />

      {/* Navigation Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {galleryImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-[#cc1a1a] w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
