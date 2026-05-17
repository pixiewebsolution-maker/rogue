"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
          gsap.fromTo(textRef.current,  { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: textRef.current, start: "top 80%" } });
          gsap.fromTo(imageRef.current, { x:  60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: imageRef.current, start: "top 80%" } });
          const statEls = statsRef.current?.querySelectorAll(".stat-item");
          if (statEls)
            gsap.fromTo(statEls, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: statsRef.current, start: "top 85%" } });
          gsap.to(imageRef.current, { yPercent: -10, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.5 } });
        }, sectionRef.current);
        return () => ctx.revert();
      } catch { /* silent */ }
    };
    init();
  }, []);

  return (
    <section id="about" ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 xl:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px red-sep" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">

          {/* TEXT */}
          <div ref={textRef} className="flex flex-col gap-5 lg:gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#7c3aed]" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#a78bda]">About Us</span>
            </div>

            <h2 className="font-display leading-none text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", textAlign: "left" }}>
              WHERE<br />
              <span className="text-gradient-red">WARRIORS</span><br />
              ARE MADE
            </h2>

            <div className="flex flex-col gap-4 text-[#c4b5d4] text-sm lg:text-[15px] leading-relaxed">
              <p>
                ROGUENINJA FC is a combat sports fight club specializing in kickboxing, Muay Thai, and strength training. We focus on developing powerful, disciplined fighters through elite-level striking and functional strength.
              </p>
              <p>
                Within just 1½ years, RogueNinja FC has produced multiple national champions, national players, and state champions, and proudly secured the Overall Championship Trophy at the TVM District Kickboxing Championship.
              </p>
              <p className="uppercase text-[#a78bda] text-xs tracking-wider font-semibold mt-2 border-l-2 border-[#7c3aed] pl-4">
                Our trainers are champions themselves and highly experienced competitors, ensuring world-class coaching rooted in real fight experience. Built on respect, resilience, and intensity, RogueNinja FC is where champions are forged.
              </p>
            </div>

            <div ref={statsRef} className="flex flex-col gap-4 mt-6">
              {[
                { title: "Elite Striking",     desc: "Specialized training in Kickboxing and Muay Thai disciplines." },
                { title: "Real Experience",        desc: "World-class coaching from highly experienced competitors." },
                { title: "Champion Forged", desc: "Built on strict respect, resilience, and pure intensity." },
              ].map(item => (
                <div key={item.title} className="stat-item flex items-start gap-4 pb-4 border-b border-[#1a0f2e]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-white font-semibold">{item.title}</span>
                    <p className="text-[12px] text-[#8b7aa0] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div ref={imageRef} className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[#1a0f2e]">
              <Image
                src="/newImg.webp" alt="Training at Rogue Ninja Dojo"
                fill className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom,transparent 60%,rgba(8,5,15,.85) 100%)" }} />
              <div className="absolute bottom-6 left-6">
                <div className="text-[9px] tracking-[0.4em] uppercase text-[#a78bda] mb-1">Champions Forged Here</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-[#c4b5d4]">Respect · Resilience · Intensity</div>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#7c3aed]" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#7c3aed]" />
            {/* Floating badge */}
            <div className="absolute -right-4 sm:-right-6 xl:-right-10 top-1/4
                            bg-[#0e0818] border border-[#1a0f2e] p-4 lg:p-5"
              style={{ boxShadow: "0 0 40px rgba(0,0,0,.6)" }}>
              <div className="text-3xl lg:text-4xl font-display text-[#9333ea]">1.5<span className="text-xl">yrs</span></div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#8b7aa0] mt-1">
                To Overall<br />Trophy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
