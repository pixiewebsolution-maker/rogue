"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const featuredAthletes = [
  {
    id: "athlete-featured-1",
    name: "ABHIJITH KRISHNAN",
    subtitle: "Head Coach & Founder",
    image: "/head_coach.PNG",
    imagePosition: "center 30%",
    badge: "★ HEAD COACH",
    achievements: [
      "Kickboxing World Cup – 5th Position (International)",
      "National Kickboxing Champion",
      "12-Time Wushu National Player",
      "State Champion – Kickboxing, Wushu & Muay Thai",
      "2-Time Kickboxing Title Belt Winner",
    ],
    description:
      "A world-class martial artist with achievements spanning Kickboxing, Wushu, and Muay Thai at state, national, and international levels. His championship excellence drives every fighter at Rogue Ninja.",
  },
  {
    id: "athlete-featured-2",
    name: "ANANDHA KRISHNAN G S",
    subtitle: "Manager / Founder",
    image: "/founder.jpeg",
    imagePosition: "center 15%",
    badge: "★ MANAGER",
    achievements: ["Kickboxing State Champion", "Wushu University Champion"],
    description:
      "A champion athlete and strategic leader driving the vision of Rogue Ninja Fight Club from the helm with discipline and excellence.",
  },
];

const athletes = [
  {
    id: "athlete-1",
    name: "ABHIRAMI GS",
    subtitle: "National-Level Kickboxing Champion",
    image: "/athlete1.jpg",
    imagePosition: "center 25%",
    achievements: [
      "WAKO India Kickboxing National Championship 2025 – Gold Medal",
      "WAKO India Kickboxing National Championship 2024 – Bronze Medal",
      "KHELO India Kickboxing South Championship – Silver Medal",
      "Open National Pro Kickboxing Championship 2025 – Silver Medal",
      "3× Inter-University Wushu National Participant",
    ],
    description:
      "A dedicated and accomplished martial artist with consistent national-level performance, representing discipline, strength, and competitive excellence.",
  },
  {
    id: "athlete-2",
    name: "JIBIN BABU TV",
    subtitle: "Striking MMA & Muay Thai Champion",
    image: "/athlete2.jpg",
    imagePosition: "center 15%",
    achievements: [
      "2× Striking MMA State Championship – Gold Medal",
      "Muay Thai State Championship – Gold Medal",
      "School Games & University Games Wushu Champion",
    ],
    description:
      "A versatile fighter excelling in MMA, Muay Thai, and Wushu, known for powerful striking and competitive dominance.",
  },
  {
    id: "athlete-3",
    name: "SACHIN BS",
    subtitle: "Kickboxing & Wushu Champion",
    image: "/athlete3.jpg",
    imagePosition: "center 70%",
    achievements: [
      "Kickboxing National Medalist",
      "All India Wushu Player",
      "4× Intercollege Wushu Champion",
      "State Wushu & Kickboxing Champion",
    ],
    description:
      "A dynamic athlete with multiple championship titles, showcasing consistency, strength, and high-level competitive experience.",
  },
];

export default function AthletesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Featured Cards Animation
        const featuredCards = document.querySelectorAll(".featured-card");
        if (featuredCards.length > 0) {
          gsap.fromTo(
            featuredCards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: featuredCards[0],
                start: "top 80%",
              },
            }
          );
        }

        if (!containerRef.current) return;
        const cards = containerRef.current.querySelectorAll(".athlete-card");

        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      } catch (err) {
        // silent
      }
    };
    init();
  }, []);

  return (
    <section
      id="athletes"
      className="relative py-24 lg:py-32 bg-[#060404] overflow-hidden"
    >
      {/* Background Textures */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#cc1a1a] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#7c3aed] opacity-[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Elite <span className="text-[#cc1a1a]">Warriors</span>
          </h2>
          <div className="w-16 h-1 bg-[#cc1a1a] mx-auto mb-6 shadow-[0_0_15px_rgba(204,26,26,0.5)]" />
          <p className="text-[#c4b5d4] text-sm lg:text-base tracking-[0.08em] max-w-2xl mx-auto">
            Meet the coaches who shape fighters, sharpen skills, and build
            winning mindsets.
          </p>
        </div>

        {/* ── FEATURED CARDS (FOUNDERS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24 max-w-6xl mx-auto">
          {featuredAthletes.map((athlete) => (
            <div
              key={athlete.id}
              className="featured-card relative rounded-2xl overflow-hidden border border-[#cc1a1a]/40
                         shadow-[0_0_60px_rgba(204,26,26,0.18)] bg-[#0e0608]
                         flex flex-col transition-all duration-500
                         hover:shadow-[0_0_90px_rgba(204,26,26,0.3)] hover:border-[#cc1a1a]/70"
            >
              {/* Red glow accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cc1a1a] to-transparent z-20" />

              {/* FEATURED badge */}
              <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                <span
                  className="px-3 py-1 text-[9px] tracking-[0.3em] font-bold uppercase
                                bg-[#cc1a1a] text-white rounded-full shadow-[0_0_12px_rgba(204,26,26,0.7)]"
                >
                  {athlete.badge}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: athlete.imagePosition || "center" }}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0608] via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-6 lg:p-8 flex-grow">
                {/* Name */}
                <div className="mb-5">
                  <h3 className="font-display text-2xl lg:text-3xl text-white tracking-widest uppercase mb-1 drop-shadow-md">
                    {athlete.name}
                  </h3>
                  <p className="text-[#cc1a1a] text-[10px] tracking-[0.3em] font-bold uppercase">
                    {athlete.subtitle}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#cc1a1a] to-transparent mb-5" />

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-[#ffffff] text-[8.5px] tracking-[0.2em] uppercase border-b border-[#2a1010] pb-1.5 mb-3">
                    Elite Credentials
                  </h4>
                  <ul className="space-y-2">
                    {athlete.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#cc1a1a] mt-[2px] leading-none text-xs">
                          ✦
                        </span>
                        <span className="text-[#c4b5d4] text-sm leading-relaxed font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="border-t border-[#2a1010] pt-5 mt-auto">
                  <p className="text-[#9b8aaa] text-sm leading-relaxed italic font-light">
                    &quot;{athlete.description}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── THREE ATHLETE CARDS ── */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {athletes.map((athlete) => (
            <div
              key={athlete.id}
              className="athlete-card group flex flex-col bg-[#0b0811] border border-[#1a0f2e] overflow-hidden rounded-2xl transition-all duration-500 hover:border-[#4a2e8c] hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] w-full max-w-[340px] mx-auto"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#110b1a]">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                  style={{ objectPosition: athlete.imagePosition || "center" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0811] via-transparent to-transparent opacity-90" />
              </div>

              {/* Content Container */}
              <div className="p-5 flex flex-col flex-grow relative">
                {/* Name & Subtitle */}
                <div className="mb-4">
                  <h3 className="font-display text-xl lg:text-2xl text-white tracking-widest uppercase mb-0.5 drop-shadow-md">
                    {athlete.name}
                  </h3>
                  <p className="text-[#cc1a1a] text-[9.5px] tracking-[0.2em] font-semibold uppercase">
                    {athlete.subtitle}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-4 flex-grow">
                  <h4 className="text-[#ffffff] text-[8.5px] tracking-[0.15em] uppercase border-b border-[#1a0f2e] pb-1.5 mb-2.5">
                    Career Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {athlete.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#cc1a1a] mt-[2px] leading-none text-xs">
                          ✦
                        </span>
                        <span className="text-[#c4b5d4] text-xs leading-relaxed font-light">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="border-t border-[#1a0f2e] pt-5 mt-auto">
                  <p className="text-[#8b79a5] text-sm leading-relaxed italic font-light">
                    &quot;{athlete.description}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
