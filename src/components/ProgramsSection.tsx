"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PROGRAMS = [
  {
    id: "kickboxing",
    title: "Kickboxing & Striking",
    subtitle: "Strike. Power. Precision.",
    desc: "High-octane striking combinations blending boxing and Muay Thai. Fast, powerful, and devastating — perfect for beginners through elite fighters. Train under the red neon glow.",
    image: "/ai_kickboxing.png",
    features: ["Striking Technique", "Pad Work", "Sparring Sessions", "Cardio Conditioning"],
    badge: "Most Popular",
  },
  {
    id: "mma",
    title: "Mixed Martial Arts",
    subtitle: "Forged. Not Born.",
    desc: "Elite MMA training. Seamlessly blend striking, wrestling, and ground game. Train in our cinematic, atmospheric dojo to build explosive power, endurance, and an unbreakable body.",
    image: "/forge.jpeg",
    features: ["Caging Drills", "Takedowns", "Combat Conditioning", "Ground & Pound"],
    badge: "Fighter Track",
  },
  {
    id: "bjj",
    title: "Brazilian Jiu Jitsu",
    subtitle: "The Gentle Art. Lethal Outcome.",
    desc: "Master the art of leverage and submissions on the mats. Our black belt instructors will guide you through gi and no-gi grappling in an intense, beautifully lit environment.",
    image: "/ai_bjj.png",
    features: ["Gi & No-Gi", "Submission Wrestling", "Sweeps & Escapes", "Live Rolling"],
    badge: "Essential",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
          gsap.fromTo(headingRef.current, { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: headingRef.current, start: "top 85%" } });
          const cards = cardsRef.current?.querySelectorAll(".program-card");
          if (cards)
            gsap.fromTo(cards, { y: 70, opacity: 0, scale: 0.97 },
              { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.14, ease: "power3.out",
                scrollTrigger: { trigger: cardsRef.current, start: "top 85%" } });
        }, sectionRef.current);
        return () => ctx.revert();
      } catch { /* silent */ }
    };
    init();
  }, []);

  return (
    <section id="programs" ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 xl:py-36 bg-[#0b0719] overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 h-px red-sep" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Heading – centred via flex column */}
        <div ref={headingRef} className="flex flex-col items-center text-center w-full mb-14 lg:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#7c3aed]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#a78bda]">Disciplines</span>
            <div className="w-8 h-px bg-[#7c3aed]" />
          </div>
          <h2 className="font-display text-white leading-none"
            style={{ fontSize: "clamp(2.8rem,6vw,5rem)", textAlign: "center" }}>
            MASTER EVERY<br />
            <span className="text-gradient-red">ART OF COMBAT</span>
          </h2>
          <p className="mt-4 text-sm lg:text-[15px] text-[#c4b5d4] max-w-4xl leading-relaxed" style={{ textAlign:"center" }}>
            Choose your discipline and begin the transformation.
          </p>
        </div>

        {/* Running Club Box */}
        <div className="relative group max-w-4xl mx-auto p-1 bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent">
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 lg:p-8 bg-[#0b0719] border border-[#1a0f2e] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a78bda]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 8-4 4 4 4"/><path d="M2 12h12"/><path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Z"/><path d="M7 12h.01"/><path d="M10 12h.01"/><path d="M4 12h.01"/>
                <path d="M15 4l-2 2 2 2" /><path d="M15 20l-2-2 2-2" />
                <circle cx="12" cy="12" r="10" strokeOpacity="0.1" />
              </svg>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl lg:text-3xl text-white uppercase tracking-widest mb-2">Running Club</h3>
              <p className="text-[#b09cc0] text-sm lg:text-[15px] leading-relaxed max-w-2xl">
                Elevate your cardiovascular performance with our elite endurance training. Specifically designed for fighters to build the &quot;iron lungs&quot; needed for high-intensity competition.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end flex-shrink-0">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#7c3aed] font-bold mb-1">Morning Schedule</span>
              <div className="bg-[#7c3aed]/10 px-4 py-2 border border-[#7c3aed]/30 rounded-lg">
                <span className="text-white font-mono text-lg lg:text-xl font-bold tracking-tight">5:30AM - 8:00AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
