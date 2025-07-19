"use client";

import SectionHeader from "./SectionHeader";
import React, { useRef } from "react";
import Image from "next/image";

function CertificationsCarousel() {
  const certificates = Array.from({ length: 10 }, (_, i) => `/certificate${i + 1}.png`);
  const [index, setIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % certificates.length);
        setAnimating(false);
      }, 400); // Animation duration
    }, 1000); // Show each certificate for 1s
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, paused]);

  const defaultWidth = 710;
  const hoveredWidth = 760;
  const scale = hovered ? hoveredWidth / defaultWidth : 1;

  return (
    <div
      className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl aspect-[710/380] mx-auto relative overflow-hidden rounded-2xl bg-[rgba(35,36,58,0.85)] flex items-center justify-center transition-all"
      style={{
        transform: `scale(${scale})`,
        zIndex: hovered ? 10 : 1,
        boxShadow: hovered
          ? '0 0 32px 8px #4fd1c588, 0 0 18px 4px #a6c1ee55, 0 2px 16px #4fd1c522'
          : '0 2px 12px #4fd1c522',
      }}
      onMouseEnter={() => { setPaused(true); setHovered(true); }}
      onMouseLeave={() => { setPaused(false); setHovered(false); }}
    >
      <Image
        key={index}
        src={certificates[index]}
        alt={`Certificate ${index + 1}`}
        width={710}
        height={400}
        className="w-full h-auto object-fill absolute left-0 top-0 transition-all"
        style={{
          opacity: animating ? 0 : 1,
          left: animating ? '-100%' : 0,
          transition: 'left 0.4s cubic-bezier(.4,2,.6,1), opacity 0.4s',
        }}
      />
      <Image
        key={index + 1}
        src={certificates[(index + 1) % certificates.length]}
        alt={`Certificate ${(index + 2)}`}
        width={710}
        height={400}
        className="w-full h-auto object-fill absolute left-0 top-0 transition-all"
        style={{
          opacity: animating ? 1 : 0,
          left: animating ? 0 : '100%',
          transition: 'left 0.4s cubic-bezier(.4,2,.6,1), opacity 0.4s',
        }}
      />
    </div>
  );
}

const CertificationsSection = () => (
  <>
    <SectionHeader label="Certifications" />
    <section className="my-20 flex flex-col items-center">
      <CertificationsCarousel />
    </section>
  </>
);

export default CertificationsSection; 