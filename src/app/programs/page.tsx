import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Kickboxing, Muay Thai, MMA & Strength Programs | Rogue Ninja",
  description:
    "Explore our elite combat sports training programs in Thiruvananthapuram. Specialized classes in Kickboxing, Muay Thai, Mixed Martial Arts, Wushu, and high-performance Strength & Conditioning blocks.",
  keywords: [
    "kickboxing curriculum Trivandrum",
    "Muay Thai training Kerala",
    "mixed martial arts classes TVM",
    "Wushu training Thiruvananthapuram",
    "fight camp Trivandrum",
    "strength and conditioning for fighters",
  ],
  alternates: {
    canonical: "https://rogueninja.in/programs",
  },
};

export default function Page() {
  return <ProgramsClient />;
}
