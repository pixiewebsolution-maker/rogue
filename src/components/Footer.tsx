"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a0f2e] py-10 px-5 sm:px-8 lg:px-12 overflow-hidden bg-[#08050f]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image
          src="/logo.png"
          alt="Rogue Ninja Fight Club"
          width={110}
          height={30}
          className="h-7 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
        />
        <div className="flex flex-col items-center gap-1">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#6b5a8e]">
            © 2024 Rogue Ninja Fight Club · All rights reserved
          </p>
          <p className="text-[8px] tracking-[0.2em] uppercase text-[#3d2862]">
            Train Like a Fighter. Live Like a Warrior.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/rogueninjafc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-[0.2em] uppercase text-[#5b4a80] hover:text-[#9333ea] transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@rogueninjafc?si=u2U6WndizWEIhHuk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-[0.2em] uppercase text-[#5b4a80] hover:text-[#cc1a1a] transition-colors duration-300"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
