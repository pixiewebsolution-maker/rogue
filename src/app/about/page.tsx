"use client";

import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FacilitiesCarousel from "@/components/FacilitiesCarousel";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#060404] text-white min-h-screen overflow-x-hidden pt-[68px]">
      <AboutSection />

      {/* Extended History / Coaches Section */}
      <section className="relative py-20 pb-24 lg:pb-32 px-5 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#cc1a1a]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#cc6666]">Our Legacy</span>
            <div className="w-8 h-px bg-[#cc1a1a]" />
          </div>
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider">
            Built by <span className="text-gradient-red">Blood & Sweat</span>
          </h2>
          <p className="mt-6 text-[#b89090] max-w-2xl text-sm lg:text-[15px] leading-relaxed mx-auto">
            Within just 1½ years, RogueNinja FC has fundamentally disrupted the combat sports scene. 
            By forging multiple national champions, elite national players, and state champions sequentially, 
            we proudly secured the Overall Championship Trophy at the TVM District Kickboxing Championship. 
            We are not just participants; we are a dominant force.
          </p>
        </div>

        {/* Gallery / Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <h3 className="text-2xl lg:text-3xl font-display text-white uppercase tracking-wide">
              The Coaching Standard
            </h3>
            <p className="text-[#a07070] text-sm lg:text-[15px] leading-relaxed">
              Our trainers are champions themselves and highly experienced competitors, ensuring world-class coaching rooted in real fight experience. Built on respect, resilience, and intensity, RogueNinja FC is where champions are forged.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Elite Kickboxing & Muay Thai Coaching",
                "Functional Strength & Conditioning",
                "Proven Combat Fight Applications",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[13px] text-[#b89090]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#cc1a1a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] rounded-sm overflow-hidden border border-[#1e0707]">
            <Image src="/exclusive.jpeg" fill alt="Head Coach" className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060404] to-transparent opacity-80" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <FacilitiesCarousel />
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl lg:text-3xl font-display text-white uppercase tracking-wide">
              World-Class Facilities
            </h3>
            <p className="text-[#a07070] text-sm lg:text-[15px] leading-relaxed">
              Step onto competition-grade Zebra mats and utilize premium heavy bags, cage walls, and specialized strength & conditioning equipment. Our dark, neon-lit dojo provides the perfect atmosphere to focus entirely on your craft without distractions.
            </p>
          </div>
        </div>

        {/* Final Wide Image */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] rounded-sm overflow-hidden mt-20 border border-[#1e0707]">
          <Image src="/brotherhood.jpeg" fill alt="The Team" className="object-cover transition-transform duration-700 hover:scale-110" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(6,4,4,0.3)] to-[#060404]" />
          <div className="absolute bottom-6 sm:bottom-10 left-0 w-full text-center px-4">
            <h3 className="text-xl sm:text-3xl font-display text-white uppercase tracking-widest">
              Join the Brotherhood
            </h3>
          </div>
        </div>

      </section>

      {/* Why Choose Us */}
      <WhyChooseSection />

    </main>
  );
}
