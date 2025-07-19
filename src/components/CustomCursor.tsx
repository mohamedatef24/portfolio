"use client";
import { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const onOver = (e: Event) => {
      if (e.target instanceof HTMLElement && (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.className.includes("projectCard"))) {
        setHovered(true);
      }
    };
    const onOut = (e: Event) => {
      if (e.target instanceof HTMLElement && (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.className.includes("projectCard"))) {
        setHovered(false);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.body.addEventListener("mouseover", onOver);
    document.body.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.removeEventListener("mouseover", onOver);
      document.body.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border-2 border-[#4fd1c5] bg-[#23243a] mix-blend-difference transition-transform duration-200 ${hovered ? 'bg-[#ff4fa3] border-[#ff4fa3]' : ''} ${clicked ? 'scale-90' : 'scale-100'}`}
      style={{
        transform: `translate3d(${mouseX.get()}px, ${mouseY.get()}px, 0)`
      }}
    />
  );
} 