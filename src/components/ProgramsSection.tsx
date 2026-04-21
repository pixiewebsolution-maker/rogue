"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PROGRAMS = [
  {
    id: "kickboxing",
    title: "Kickboxing",
    subtitle: "Engineered for Champions. Defined by Results.",
    desc: "Our Kickboxing program delivers a high-performance training experience built on precision, discipline, and elite coaching standards. Athletes are developed through a structured pathway—from foundational mastery to advanced fight strategy—preparing them for state, national, and international competition.\n\nWe don’t just train—we shape competitors, build resilience, and create champions who are ready to step into the ring and perform at the highest level.",
    image: "/ai_kickboxing.png",
    features: ["Precision Striking", "Fight Strategy", "Elite Coaching", "Competition Prep"],
    badge: "Most Popular",
  },
  {
    id: "wushu",
    title: "Wushu",
    subtitle: "Artistry Refined. Champions Forged.",
    desc: "Our Wushu program embodies the perfect fusion of elegance and athletic excellence. Through disciplined training and technical precision, students progress from foundational movement to competition-level performance.\n\nWith a strong focus on tournament preparation, performance quality, and medal-winning excellence, we cultivate athletes capable of representing at elite national and international stages.",
    image: "/wushu.jpg",
    features: ["Technical Precision", "Foundational Movement", "Tournament Prep", "Medal Excellence"],
    badge: "Art & Combat",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
          gsap.fromTo(headingRef.current, { y: 40, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: headingRef.current, start: "top 85%" }
            });
          const cards = cardsRef.current?.querySelectorAll(".program-card");
          if (cards)
            gsap.fromTo(cards, { y: 70, opacity: 0, scale: 0.97 },
              {
                y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.14, ease: "power3.out",
                scrollTrigger: { trigger: cardsRef.current, start: "top 85%" }
              });
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
          <p className="mt-4 text-sm lg:text-[15px] text-[#c4b5d4] max-w-4xl leading-relaxed" style={{ textAlign: "center" }}>
            Choose your discipline and begin the transformation.
          </p>
        </div>

        {/* Programs Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="program-card group relative bg-[#0a0505] border border-[#1a0f2e] overflow-hidden hover:border-[#cc1a1a]/50 transition-colors duration-500 flex flex-col h-full">
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] to-transparent opacity-90" />
                {program.badge && (
                  <div className="absolute top-4 right-4 bg-[#cc1a1a] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(204,26,26,0.6)]">
                    {program.badge}
                  </div>
                )}
              </div>
              <div className="p-8 relative z-10 flex flex-col flex-grow">
                <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider mb-2">{program.title}</h3>
                <p className="text-[#cc1a1a] text-[12px] font-bold uppercase tracking-widest mb-6">{program.subtitle}</p>
                <div className="text-[#a07070] text-[14px] leading-relaxed mb-8 flex-grow space-y-4">
                  {program.desc.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <div className="w-full h-px bg-[#2a0f0f] mb-6" />
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mt-auto">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] text-[#b89090] uppercase tracking-wide font-semibold">
                      <div className="w-1.5 h-1.5 rounded-sm bg-[#cc1a1a] flex-shrink-0 transform rotate-45" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Excellence Beyond Training Box */}
        <div className="relative group max-w-4xl mx-auto p-1 bg-gradient-to-r from-transparent via-[#cc1a1a]/30 to-transparent mt-12 mb-12">
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-8 lg:p-10 bg-[#0b0719] border border-[#1a0f2e] overflow-hidden shadow-[0_0_30px_rgba(204,26,26,0.05)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#cc1a1a]/5 blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#cc1a1a]/10 border border-[#cc1a1a]/20 text-[#cc1a1a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl lg:text-3xl text-white uppercase tracking-widest mb-4">Excellence Beyond Training</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Professional coaching with competition-focused programs",
                  "Pathways to district, state, national & international championships",
                  "Performance-driven training with a focus on medals and results",
                  "A culture of discipline, prestige, and excellence"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#b09cc0] text-left">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#cc1a1a] mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(204,26,26,0.8)]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Running Club Box */}
        <div className="relative group max-w-4xl mx-auto p-1 bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent">
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 lg:p-8 bg-[#0b0719] border border-[#1a0f2e] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a78bda]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 8-4 4 4 4" /><path d="M2 12h12" /><path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Z" /><path d="M7 12h.01" /><path d="M10 12h.01" /><path d="M4 12h.01" />
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
