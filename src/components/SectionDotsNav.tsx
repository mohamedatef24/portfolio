"use client";

import { useScrollSpy, SECTION_IDS_LIST } from "../utils/useScrollSpy";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Projects" },
  { label: "Skills" },
  { label: "Contact" },
];

export default function SectionDotsNav() {
  const activeIndex = useScrollSpy();

  const handleClick = (i: number) => {
    const id = SECTION_IDS_LIST[i];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-1/2 right-6 -translate-y-1/2 z-[950] flex flex-col gap-4 items-center"
    >
      {menuItems.map((item, i) => (
        <motion.div
          key={item.label}
          whileHover={{ scale: 1.3, backgroundColor: "#ff7e5f" }}
          animate={i === activeIndex ? { scale: 1.5, backgroundColor: "#ff7e5f", boxShadow: "0 0 0 6px #fcb69f55" } : { scale: 1, backgroundColor: "#fff" }}
          className={`w-[18px] h-[18px] rounded-full border-2 border-[#ff7e5f] box-shadow transition-all flex items-center justify-center mb-0.5 ${i === activeIndex ? 'bg-[#ff7e5f] shadow-[0_0_0_6px_#fcb69f55]' : 'bg-white shadow-[0_2px_8px_#fcb69f22]'}`}
          onClick={() => handleClick(i)}
        >
          {/* Visually hidden label for accessibility */}
          <span className="absolute left-[-9999px]">{item.label}</span>
        </motion.div>
      ))}
    </nav>
  );
} 