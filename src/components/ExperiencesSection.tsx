"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const ExperienceCard = ({ children }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className={`bg-[rgba(35,36,58,0.95)] rounded-2xl p-9 text-white font-sans flex flex-col gap-2 relative transition-shadow duration-200 ${hovered ? 'shadow-[0_8px_32px_#4fd1c555,0_4px_16px_#a6c1ee55]' : 'shadow-[0_2px_12px_#4fd1c522]'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
};

const ExperiencesSection = () => (
  <>
    <SectionHeader label="Experiences" />
    <section className="relative mt-16 min-h-[420px]">
      <div className="absolute left-0 top-0 w-full h-full bg-[repeating-linear-gradient(0deg,_#fff1_0_1px,_transparent_1px_40px),_repeating-linear-gradient(90deg,_#fff1_0_1px,_transparent_1px_40px)] opacity-10 z-0 pointer-events-none" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto relative z-10 items-center justify-center">
        {/* Experience Card 1 */}
        <ExperienceCard>
          <div className="text-cyan-400 font-bold text-base mb-1">(Jul 2024 - Sep 2024)</div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-[#a6c1ee]">📱</span>
            <span className="font-extrabold text-lg text-white">Android Native Developer Intern</span>
          </div>
          <div className="text-[#a6c1ee] font-semibold text-base mb-1">Banque Misr</div>
          <div className="text-[#e3e3e3] text-base mt-1">
            Crafted and deployed Android apps for banking solutions, focusing on secure, user-friendly mobile experiences. Collaborated with cross-functional teams to deliver impactful features for Banque Misr customers.
          </div>
        </ExperienceCard>
        {/* Experience Card 2 */}
        <ExperienceCard>
          <div className="text-cyan-400 font-bold text-base mb-1">(Jul 2025 - Sep 2025)</div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-[#a6c1ee]">🤖</span>
            <span className="font-extrabold text-lg text-white">Computer Vision Intern</span>
          </div>
          <div className="text-[#a6c1ee] font-semibold text-base mb-1">Cellula Technologies</div>
          <div className="text-[#e3e3e3] text-base mt-1">
            Developed computer vision models for real-world applications. Leveraged deep learning to solve image analysis challenges and contributed to innovative AI-driven products.
          </div>
        </ExperienceCard>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 pointer-events-none">
        <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="60" width="120" height="40" rx="12" fill="#4fd1c5" opacity="0.13" />
          <rect x="50" y="30" width="80" height="40" rx="10" fill="#a6c1ee" opacity="0.13" />
          <rect x="70" y="10" width="40" height="30" rx="8" fill="#7fffd4" opacity="0.18" />
          <rect x="85" y="20" width="10" height="18" rx="3" fill="#4fd1c5" opacity="0.25" />
          <circle cx="90" cy="60" r="18" fill="#fff" opacity="0.13" />
        </svg>
      </div>
    </section>
  </>
);

export default ExperiencesSection; 