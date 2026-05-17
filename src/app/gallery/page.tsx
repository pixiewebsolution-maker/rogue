import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Rogue Ninja Gallery | Training & Championship Action Photos",
  description:
    "Explore the Rogue Ninja Fight Club gallery. High-intensity combat sports training, Sanda sparring, strength conditioning, and championship action photos from Kerala's premier martial arts academy.",
  keywords: [
    "Rogue Ninja photos",
    "kickboxing sparring images",
    "Muay Thai training Trivandrum",
    "Sanda fight team Kerala",
    "amateur kickboxing championship 2026",
    "martial arts action photos",
  ],
  alternates: {
    canonical: "https://rogueninja.in/gallery",
  },
};

export default function Page() {
  return <GalleryClient />;
}
