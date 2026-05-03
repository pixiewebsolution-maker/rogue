"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PROGRAMS = [
  {
    id: "kickboxing",
    title: "Kickboxing",
    subtitle: "Engineered for Champions. Defined by Results.",
    desc: "Our Kickboxing program delivers a high-performance training experience built on precision, discipline, and elite coaching standards. Athletes are developed through a structured pathway—from foundational mastery to advanced fight strategy—preparing them for state, national, and international competition.\n\nWe don’t just train—we shape competitors, build resilience, and create champions who are ready to step into the ring and perform at the highest level.",
    image: "/kickboxing.jpeg",
    features: ["Precision Striking", "Fight Strategy", "Elite Coaching", "Competition Prep"],
    badge: "Most Popular",
  },
  {
    id: "wushu",
    title: "Wushu",
    subtitle: "Artistry Refined. Champions Forged.",
    desc: "Our Wushu program embodies the perfect fusion of elegance and athletic excellence. Through disciplined training and technical precision, students progress from foundational movement to competition-level performance.\n\nWith a strong focus on tournament preparation, performance quality, and medal-winning excellence, we cultivate athletes capable of representing at elite national and international stages.",
    image: "/wushu.jpeg",
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
              <div className="bg-[#7c3aed]/10 px-4 py-2 border border-[#7c3aed]/30 rounded-lg mb-4">
                <span className="text-white font-mono text-lg lg:text-xl font-bold tracking-tight">5:30AM - 8:00AM</span>
              </div>
              <a
                href="https://wa.me/919048564432?text=Hi!%20I'm%20interested%20in%20booking%20a%20session%20for%20the%20Running%20Club."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#0b0719] px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[#1ebe57] transition-all duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
              >
                <span>Book via WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
