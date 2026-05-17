import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Our Fight Club | Elite Kickboxing & MMA Gym",
  description:
    "Learn about Rogue Ninja Fight Club in Thiruvananthapuram. Discover our legacy of forging national kickboxing and MMA champions, our elite coaching standard, and premium dojo facilities.",
  keywords: [
    "About Rogue Ninja",
    "Rogue Ninja coaches",
    "martial arts Trivandrum",
    "kickboxing champions Kerala",
    "Greenfield Stadium gym",
    "overall championship TVM district kickboxing",
  ],
  alternates: {
    canonical: "https://rogueninja.in/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
