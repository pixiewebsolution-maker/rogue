import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Sasthamangalam, Greenfield & Perumkadavila Branches",
  description:
    "Get in touch with Rogue Ninja Fight Club. Apply for membership or book your FREE first class at our Sasthamangalam, Greenfield Stadium, or Perumkadavila combat sports branches.",
  keywords: [
    "contact Rogue Ninja",
    "martial arts Sasthamangalam",
    "gym near Greenfield Stadium",
    "kickboxing Perumkadavila",
    "book free trial kickboxing Trivandrum",
    "Trivandrum fight club contact",
  ],
  alternates: {
    canonical: "https://rogueninja.in/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
