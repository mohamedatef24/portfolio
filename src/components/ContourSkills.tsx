"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skillIcons: Record<string, { class?: string; emoji?: string }> = {
  Python: { class: "devicon-python-plain colored" },
  Java: { class: "devicon-java-plain colored" },
  "C++": { class: "devicon-cplusplus-plain colored" },
  "C#": { class: "devicon-csharp-plain colored" },
  C: { class: "devicon-c-plain colored" },
  JavaScript: { class: "devicon-javascript-plain colored" },
  Django: { class: "devicon-django-plain colored" },
  SQL: { class: "devicon-mysql-plain colored" },
  MySQL: { class: "devicon-mysql-plain colored" },
  "Microsoft SQL Server": { class: "devicon-microsoftsqlserver-plain colored" },
  Git: { class: "devicon-git-plain colored" },
  Kotlin: { class: "devicon-kotlin-plain colored" }
};

const ELLIPSE_W = 600;
const ELLIPSE_H = 90;
const SPEED = 0.0002;

export default function ContourSkills({ skills }: { skills: string[] }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let frame: number;
    const animate = () => {
      setPhase((p) => (p + SPEED) % 1);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden min-h-[150px] py-4">
      {/* No ellipse line */}
      {skills.map((skill, i) => {
        // Animate all skills around the full ellipse
        const t = (i / skills.length + phase) % 1;
        const angle = Math.PI + t * 2 * Math.PI; // full ellipse
        const x = (ELLIPSE_W / 2 - 40) * Math.cos(angle) + ELLIPSE_W / 2;
        const y = (ELLIPSE_H / 2) * Math.sin(angle) + ELLIPSE_H / 2 + 40;
        const icon = skillIcons[skill];
        return (
          <motion.div
            key={skill + i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              zIndex: 2
            }}
            className="flex items-center gap-2 bg-gradient-to-br from-[rgba(127,255,212,0.13)] to-[rgba(79,209,197,0.18)] text-[#7fffd4] font-semibold px-6 py-2.5 rounded-[22px] text-[1.08rem] shadow-[0_2px_12px_0_#7fffd455,0_1.5px_6px_#4fd1c522] backdrop-blur-[8px] saturate-[1.2] border border-[rgba(127,255,212,0.22)] transition-all duration-200 cursor-pointer select-none font-inter"
            whileHover={{
              scale: 1.13,
              background: "linear-gradient(120deg, rgba(127,255,212,0.22) 0%, rgba(79,209,197,0.28) 100%)",
              color: "#23243a",
              boxShadow: "0 0 32px 8px #7fffd4cc, 0 2px 12px #4fd1c555",
              border: "1.5px solid #7fffd4"
            }}
          >
            {icon?.class ? (
              <i className={icon.class + " text-[26px] leading-none align-middle"}></i>
            ) : (
              <span className="text-[22px]">{icon?.emoji || "✨"}</span>
            )}
            <span>{skill}</span>
          </motion.div>
        );
      })}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "#a6c1ee",
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 1,
          textAlign: "center",
          pointerEvents: "none",
          opacity: 0.7,
          zIndex: 2
        }}
      >
        <span>Skills</span>
      </div>
    </div>
  );
} 