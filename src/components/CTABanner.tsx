"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
          gsap.fromTo(".cta-banner-content", { y: 40, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
        }, sectionRef.current);
        return () => ctx.revert();
      } catch { /* silent */ }
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 lg:py-28 px-5 overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 blur-[2px] transition-transform duration-1000 scale-105 hover:scale-100" 
          style={{ backgroundImage: "url('/ctaBg.webp')" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none glow-pulse z-[1]"
        style={{ background:"radial-gradient(ellipse 80% 80% at 50% 50%,rgba(6,4,4,0.3) 0%,rgba(6,4,4,0.95) 70%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px red-sep z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-px red-sep z-[1]" />

      <div className="cta-banner-content relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-[#7c3aed]" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#a78bda]">Ready to Begin?</span>
          <div className="w-8 h-px bg-[#7c3aed]" />
        </div>

        <h2 className="font-display text-white leading-none mb-6 w-full"
          style={{ fontSize:"clamp(2.8rem,6vw,5rem)", textAlign:"center" }}>
          CLAIM YOUR<br />
          <span className="text-gradient-red">FREE TRIAL CLASS</span>
        </h2>

        <div className="flex flex-col gap-4 text-sm lg:text-[15px] text-[#c4b5d4] mb-10 max-w-2xl leading-relaxed text-center">
          <p>
            First class is on us. No commitment, no pressure. Just pure training in our state-of-the-art facility. Experience exactly what it feels like to train alongside professional athletes and elite combat artists.
          </p>
          <p>
            Whether you&apos;re looking to step into the cage, learn self-defense, or simply get in the best shape of your life, Rogue Ninja Fight Club is your ultimate training ground. Walk in a beginner. Leave as a warrior.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => window.open("https://wa.me/919048564432?text=Can%20I%20get%20more%20info%20on%20Free%20Trial%3F", "_blank")}
            id="cta-banner-btn"
            className="px-12 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold
                       bg-[#cc1a1a] text-white hover:bg-[#dd2222] transition-all duration-300
                       hover:shadow-[0_0_60px_rgba(200,20,20,.5)]">
            Claim Free Trial
          </button>
          <button
            onClick={() => router.push('/programs')}
            className="px-12 py-4 text-[11px] tracking-[0.25em] uppercase font-medium
                       text-[#c4b5d4] border border-[#1a0f2e]
                       hover:border-[#7c3aed] hover:text-white transition-all duration-300">
            View Programs
          </button>
        </div>
      </div>
    </section>
  );
}
