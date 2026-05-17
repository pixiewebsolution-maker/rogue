import type { Metadata } from "next";
import JoinClient from "./JoinClient";

export const metadata: Metadata = {
  title: "Join Rogue Ninja Fight Club | Select Your Membership Plan",
  description:
    "Take your first step. Join Kerala's premier combat sports academy. View our transparent Warrior, Fighter, and Champion membership packages. First class is always FREE — apply today!",
  keywords: [
    "join Rogue Ninja",
    "martial arts membership Trivandrum",
    "kickboxing class fees Kerala",
    "Muay Thai price Trivandrum",
    "free trial martial arts Kerala",
    "MMA gym registration Thiruvananthapuram",
  ],
  alternates: {
    canonical: "https://rogueninja.in/join",
  },
};

export default function Page() {
  return <JoinClient />;
}
