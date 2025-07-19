"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function CircularSkills({ skills }: { skills: { name: string, icon?: string }[] }) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Duplicate the skills array for seamless looping
  const displaySkills = [...skills, ...skills];

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden min-h-[150px] py-4">
      <motion.div
        ref={marqueeRef}
        className="flex items-center gap-12 w-fit will-change-transform"
        animate={{ x: [0, -((skills.length) * (120 + 48))] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }}
      >
        {displaySkills.map((skill, i) => (
          <motion.div
            key={skill.name + i}
            whileHover={{
              scale: 1.05,
              background: "rgba(127,255,212,0.18)",
              color: "#23243a",
              boxShadow: "0 0 8px 4px #7fffd4cc, 0 2px 12px #4fd1c555",
              border: "1.5px solid #7fffd4"
            }}
            className="flex flex-col items-center bg-gradient-to-br from-[rgba(127,255,212,0.13)] to-[rgba(79,209,197,0.18)] font-bold px-4 pt-4 pb-3 rounded-[22px] text-[1.13rem] shadow-[0_2px_12px_0_#7fffd455,0_1.5px_6px_#4fd1c522] backdrop-blur-[8px] saturate-[1.2] border border-[rgba(127,255,212,0.22)] transition-all duration-200 select-none min-w-[90px] min-h-[90px] justify-center"
          >
            {skill.icon ? (
              <i className={skill.icon + " text-[38px] mb-2.5"}></i>
            ) : (
              <span className="text-[32px] mb-2.5">✨</span>
            )}
            <span className="font-bold text-white text-[1.08rem] tracking-wide text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 