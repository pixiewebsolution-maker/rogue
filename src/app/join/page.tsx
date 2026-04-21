"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PLANS = [
  {
    id: "warrior",
    label: "Warrior",
    price: "3,500",
    period: "/month",
    badge: null,
    desc: "Your entry into the dojo. Build the fundamentals of combat sports with guided classes and open mat.",
    features: [
      "Access to 2 disciplines",
      "4 group classes / week",
      "Open mat sessions",
      "Basic strength program",
      "Community access",
    ],
    cta: "Start as Warrior",
    highlight: false,
  },
  {
    id: "fighter",
    label: "Fighter",
    price: "5,500",
    period: "/month",
    badge: "Most Popular",
    desc: "The complete fight training experience. Compete, evolve, and dominate at every level.",
    features: [
      "Access to all disciplines",
      "Unlimited group classes",
      "Sparring sessions included",
      "Full S&C program",
      "Performance tracking",
      "Priority camp access",
    ],
    cta: "Train as a Fighter",
    highlight: true,
  },
  {
    id: "champion",
    label: "Champion",
    price: "9,999",
    period: "/month",
    badge: "Elite Track",
    desc: "Private coaching, personalized programming, and championship competition preparation.",
    features: [
      "Everything in Fighter",
      "2× private sessions / week",
      "Custom fight camp planning",
      "Nutrition consulting",
      "Competition support",
      "Direct coach line",
    ],
    cta: "Go Champion",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "Do I need prior experience to join?",
    a: "No. Every champion started at zero. Our Root-Level Training program is specifically built for beginners. We assess your current level in the first session and build from there.",
  },
  {
    q: "What is included in the free first class?",
    a: "Your first class is completely free — no strings, no sign-up required first. You'll participate in a full group session with access to our coaching team before making any commitment.",
  },
  {
    q: "How many people are in a typical class?",
    a: "We cap group classes at 16 members to ensure every athlete receives quality coaching attention. Elite and Champion members receive additional private time.",
  },
  {
    q: "What disciplines do you offer?",
    a: "Kickboxing, Muay Thai, Mixed Martial Arts, Brazilian Jiu Jitsu, and Strength & Conditioning. Each discipline has dedicated sessions throughout the week.",
  },
  {
    q: "Is there a joining / registration fee?",
    a: "No hidden fees. The listed monthly rates are all-inclusive. There is a one-time ₹500 registration charge for gear kit allocation — waived for Champion members.",
  },
];

export default function JoinPage() {
  const heroRef    = useRef<HTMLElement>(null);
  const plansRef   = useRef<HTMLDivElement>(null);
  const formRef    = useRef<HTMLFormElement>(null);

  const [openFaq,    setOpenFaq]    = useState<number | null>(null);
  const [submitted,  setSubmitted]  = useState(false);
  const [focused,    setFocused]    = useState<string | null>(null);
  const [chosenPlan, setChosenPlan] = useState<string>("fighter");

  useEffect(() => {
    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // hero entrance
        gsap.fromTo(".join-hero-content > *",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: "power3.out", delay: 0.3 });

        // plan cards
        if (plansRef.current) {
          gsap.fromTo(".plan-card",
            { y: 60, opacity: 0, scale: 0.97 },
            { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.13, ease: "power3.out",
              scrollTrigger: { trigger: plansRef.current, start: "top 80%" } });
        }

        // form
        if (formRef.current) {
          gsap.fromTo(formRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: formRef.current, start: "top 85%" } });
        }
      } catch { /* silent */ }
    };
    init();
  }, []);

  const inputCls = (name: string) =>
    `bg-transparent border px-5 py-4 text-sm text-white w-full outline-none transition-all duration-300 ${
      focused === name
        ? "border-[#cc1a1a] shadow-[0_0_16px_rgba(204,26,26,.15)]"
        : "border-[#1e0707]"
    }`;

  return (
    <main className="bg-[#060404] text-white min-h-screen overflow-x-hidden pt-[68px]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ai_boxing_ring.png" fill
            alt="Step into the ring"
            className="object-cover object-center opacity-35"
            sizes="100vw" priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060404] via-[rgba(6,4,4,.45)] to-[#060404]" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(130,0,0,.25) 0%,transparent 70%)" }} />
        </div>

        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] z-10"
          style={{ background: "linear-gradient(90deg,transparent,#cc1a1a 40%,#cc1a1a 60%,transparent)", boxShadow: "0 0 40px 8px rgba(200,20,20,.18)" }} />
        <div className="noise-layer absolute inset-0 z-[2]" />
        <div className="scanline z-[3]" />

        <div className="join-hero-content relative z-10 flex flex-col items-center text-center px-5 gap-5">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#cc1a1a]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#cc6666]">Membership</span>
            <div className="w-8 h-px bg-[#cc1a1a]" />
          </div>
          <h1 className="font-display text-white leading-none"
            style={{ fontSize: "clamp(3rem,7vw,5.5rem)", textAlign: "center" }}>
            JOIN THE<br />
            <span className="text-gradient-red">BROTHERHOOD</span>
          </h1>
          <p className="text-sm lg:text-[15px] text-[#b89090] max-w-lg leading-relaxed">
            Choose your path. Train with champions. Forge your legacy inside the dojo.
            First class is always free — no commitment required.
          </p>
          <a href="#plans"
            className="mt-2 px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold
                       bg-[#cc1a1a] text-white hover:bg-[#dd2222] transition-all duration-300
                       hover:shadow-[0_0_50px_rgba(200,20,20,.5)]">
            View Plans
          </a>
        </div>
      </section>

      {/* ── FREE TRIAL RIBBON ──────────────────────────────────────── */}
      <div className="relative z-10 border-y border-[#1e0707] bg-[#0a0202]/70 py-5 px-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: "rgba(204,26,26,.1)", border: "1px solid rgba(204,26,26,.25)" }}>
              🥊
            </div>
            <div>
              <p className="text-white text-sm font-semibold tracking-wider uppercase">Free First Class — No Strings Attached</p>
              <p className="text-[#8a6060] text-xs mt-0.5">Walk in today. No registration needed for trial. Just show up.</p>
            </div>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-semibold
                       border border-[#cc1a1a] text-white hover:bg-[#cc1a1a] transition-all duration-300">
            Book Free Trial
          </Link>
        </div>
      </div>

      {/* ── PRICING PLANS ─────────────────────────────────────────── */}
      <section id="plans" className="relative py-20 sm:py-28 lg:py-32 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14 lg:mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#cc1a1a]" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#cc6666]">Plans</span>
              <div className="w-8 h-px bg-[#cc1a1a]" />
            </div>
            <h2 className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.8rem,6vw,5rem)", textAlign: "center" }}>
              CHOOSE YOUR <span className="text-gradient-red">LEVEL</span>
            </h2>
            <p className="mt-4 text-sm lg:text-[15px] text-[#b89090] max-w-xl leading-relaxed">
              Every plan includes access to our elite coaching staff, structured curriculum, and the RogueNinja community.
            </p>
          </div>

          <div ref={plansRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-8">
            {PLANS.map(plan => (
              <div
                key={plan.id}
                className={`plan-card group relative flex flex-col border transition-all duration-500
                            ${plan.highlight
                              ? "border-[#cc1a1a]/60 bg-gradient-to-b from-[#160404] to-[#0d0202] shadow-[0_0_60px_rgba(204,26,26,.15)]"
                              : "border-[#1e0707] bg-[#0a0202]/80 hover:border-[#cc1a1a]/40"}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="text-[8px] tracking-[0.2em] uppercase px-3 py-1
                                     bg-[#cc1a1a] text-white font-semibold whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8 flex flex-col gap-6 flex-1">
                  {/* Header */}
                  <div>
                    <span className="text-[9px] tracking-[0.4em] uppercase text-[#cc6666]">{plan.label}</span>
                    <div className="flex items-end gap-1 mt-2">
                      <span className="text-[10px] text-[#8a6060] mt-1 self-start pt-1">₹</span>
                      <span className="font-display text-4xl lg:text-5xl text-white leading-none">{plan.price}</span>
                      <span className="text-[11px] text-[#8a6060] mb-1">{plan.period}</span>
                    </div>
                    <p className="mt-3 text-[12px] text-[#8a6060] leading-relaxed">{plan.desc}</p>
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-px ${plan.highlight ? "bg-[#cc1a1a]/30" : "bg-[#1e0707]"}`} />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-[13px] text-[#a07070]">
                        <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[9px]
                                         ${plan.highlight ? "bg-[#cc1a1a]/20 text-[#ff5555]" : "bg-[#1e0707] text-[#cc6666]"}`}>
                          ✓
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      setChosenPlan(plan.id);
                      document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`mt-4 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300
                                ${plan.highlight
                                  ? "bg-[#cc1a1a] text-white hover:bg-[#dd2222] hover:shadow-[0_0_40px_rgba(200,20,20,.45)]"
                                  : "border border-[#1e0707] text-[#b08080] group-hover:border-[#cc1a1a] group-hover:text-white group-hover:bg-[#cc1a1a]/10"}`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Bottom accent */}
                <div className={`h-[2px] transition-transform duration-500 origin-left
                                 ${plan.highlight ? "bg-[#cc1a1a] scale-x-100" : "bg-[#cc1a1a] scale-x-0 group-hover:scale-x-100"}`} />
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-[9px] tracking-[0.3em] uppercase text-[#4a3030]">
            All prices in INR · First class free for all plans · Cancel anytime with 30-day notice
          </p>
        </div>
      </section>

      {/* ── WHAT YOU GET ──────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 border-y border-[#1e0707] bg-[#080101]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: "🥊", title: "Elite Coaching", desc: "Champions coaching champions. Every trainer has real competition experience." },
              { icon: "📅", title: "Flexible Schedule", desc: "Morning, afternoon, and evening sessions across all disciplines." },
              { icon: "🏆", title: "Competition Pathways", desc: "Structured programs and fight camp support for those who want to compete." },
              { icon: "💪", title: "Strength & Conditioning", desc: "Full S&C integration designed specifically for combat sports athletes." },
            ].map((item, i) => (
              <div key={i}
                className="flex flex-col gap-4 p-5 border border-[#1e0707] hover:border-[#cc1a1a]/30 transition-colors duration-500">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="text-[12px] tracking-[0.15em] uppercase text-white font-semibold">{item.title}</h3>
                <p className="text-[12px] text-[#7a5555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ──────────────────────────────────────── */}
      <section id="join-form" className="relative py-20 sm:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#cc1a1a]" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#cc6666]">Apply Now</span>
              <div className="w-8 h-px bg-[#cc1a1a]" />
            </div>
            <h2 className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.4rem,5vw,4rem)", textAlign: "center" }}>
              CLAIM YOUR <span className="text-gradient-red">MEMBERSHIP</span>
            </h2>
            <p className="mt-4 text-sm text-[#b89090] max-w-md leading-relaxed">
              Fill out the form and our team will reach out within 24 hours to confirm your first session.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center gap-6 py-20
                            border border-[#1e0707] bg-[#090202]">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl text-[#cc1a1a]"
                style={{ background: "rgba(204,26,26,.1)", border: "1px solid rgba(204,26,26,.3)", boxShadow: "0 0 40px rgba(204,26,26,.2)" }}>
                ✓
              </div>
              <div>
                <h3 className="font-display text-4xl text-white mb-2">APPLICATION RECEIVED</h3>
                <p className="text-sm text-[#a07070] max-w-sm">
                  Welcome to the brotherhood. We&apos;ll reach out within 24 hours. Get ready, warrior.
                </p>
              </div>
              <button onClick={() => setSubmitted(false)}
                className="text-[10px] tracking-[0.2em] uppercase text-[#7a5555] hover:text-white transition-colors">
                Submit another application
              </button>
            </div>
          ) : (
            <form ref={formRef} id="membership-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col gap-5 border border-[#1e0707] bg-[#080101] p-6 sm:p-10">

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="join-name" className="text-[10px] tracking-[0.3em] uppercase text-[#a07070]">
                    Full Name <span className="text-[#cc1a1a]">*</span>
                  </label>
                  <input id="join-name" type="text" required placeholder="Your name"
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    className={inputCls("name")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="join-age" className="text-[10px] tracking-[0.3em] uppercase text-[#a07070]">
                    Age <span className="text-[#cc1a1a]">*</span>
                  </label>
                  <input id="join-age" type="number" required placeholder="e.g. 24" min={10} max={70}
                    onFocus={() => setFocused("age")} onBlur={() => setFocused(null)}
                    className={inputCls("age")} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="join-phone" className="text-[10px] tracking-[0.3em] uppercase text-[#a07070]">
                    Phone <span className="text-[#cc1a1a]">*</span>
                  </label>
                  <input id="join-phone" type="tel" required placeholder="+91 00000 00000"
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                    className={inputCls("phone")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="join-email" className="text-[10px] tracking-[0.3em] uppercase text-[#a07070]">
                    Email
                  </label>
                  <input id="join-email" type="email" placeholder="your@email.com"
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    className={inputCls("email")} />
                </div>
              </div>

              {/* Plan selector */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#a07070]">
                  Membership Plan <span className="text-[#cc1a1a]">*</span>
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {PLANS.map(plan => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setChosenPlan(plan.id)}
                      className={`py-3 px-2 text-[10px] tracking-[0.15em] uppercase transition-all duration-300
                                  ${chosenPlan === plan.id
                                    ? "bg-[#cc1a1a] text-white border border-[#cc1a1a]"
                                    : "border border-[#1e0707] text-[#8a6060] hover:border-[#cc1a1a]/40 hover:text-white"}`}
                    >
                      {plan.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="flex flex-col gap-2">
                <label htmlFor="join-experience" className="text-[10px] tracking-[0.3em] uppercase text-[#a07070]">
                  Combat Sports Experience
                </label>
                <select id="join-experience"
                  onFocus={() => setFocused("exp")} onBlur={() => setFocused(null)}
                  className={inputCls("exp") + " appearance-none"}
                  style={{ backgroundImage: "none" }}
                >
                  <option value="" className="bg-[#0d0202]">Select your level</option>
                  <option value="none" className="bg-[#0d0202]">No experience — complete beginner</option>
                  <option value="some" className="bg-[#0d0202]">Some hobby training (1–2 years)</option>
                  <option value="intermediate" className="bg-[#0d0202]">Intermediate (2–5 years)</option>
                  <option value="advanced" className="bg-[#0d0202]">Advanced / competition experience</option>
                </select>
              </div>

              {/* Goal */}
              <div className="flex flex-col gap-2">
                <label htmlFor="join-goals" className="text-[10px] tracking-[0.3em] uppercase text-[#a07070]">
                  Your Goals
                </label>
                <textarea id="join-goals" rows={4} placeholder="Tell us what you want to achieve…"
                  onFocus={() => setFocused("goals")} onBlur={() => setFocused(null)}
                  className={inputCls("goals") + " resize-none"} />
              </div>

              <button type="submit" id="join-submit"
                className="mt-2 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold
                           bg-[#cc1a1a] text-white hover:bg-[#dd2222] transition-all duration-300
                           hover:shadow-[0_0_40px_rgba(200,20,20,.4)]">
                Submit Application
              </button>
              <p className="text-[9px] text-[#4a3030] tracking-[0.15em] text-center">
                Your information is private. We only contact you about your training.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 px-5 border-t border-[#1e0707]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#cc1a1a]" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#cc6666]">FAQ</span>
              <div className="w-8 h-px bg-[#cc1a1a]" />
            </div>
            <h2 className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", textAlign: "center" }}>
              COMMON QUESTIONS
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-[#1e0707]">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[13px] lg:text-sm tracking-wider text-white group-hover:text-[#ffaaaa] transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 border border-[#1e0707] flex items-center justify-center
                                text-[#cc1a1a] text-xs transition-all duration-300
                                ${openFaq === i ? "bg-[#cc1a1a]/10 border-[#cc1a1a]/30 rotate-45" : "group-hover:border-[#cc1a1a]/30"}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-[13px] text-[#8a6060] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ──────────────────────────────────────── */}
      <section className="relative py-14 px-5 border-t border-[#1e0707] bg-[#080101] overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%,rgba(120,0,0,.18) 0%,transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-display text-white text-2xl sm:text-3xl uppercase tracking-wider">
              Still deciding? <span className="text-gradient-red">Walk in first.</span>
            </p>
            <p className="text-[#8a6060] text-xs mt-1 tracking-wider">First class free. No registration needed.</p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold
                       border border-[#cc1a1a] text-white hover:bg-[#cc1a1a] transition-all duration-300
                       hover:shadow-[0_0_40px_rgba(200,20,20,.4)]">
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
