"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollSpy, SECTION_IDS_LIST } from "../utils/useScrollSpy";

const menuItems = [
  { label: "Home", icon: "🏠" },
  { label: "About", icon: "👤" },
  { label: "Projects", icon: "💼" },
  { label: "Skills", icon: "🛠️" },
  { label: "Contact", icon: "✉️" },
];

export default function AnimatedSidebar() {
  // Responsive: only show on desktop
  const [show, setShow] = useState(true);
  useEffect(() => {
    const check = () => setShow(window.innerWidth >= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  if (!show) return null;

  const activeIndex = useScrollSpy();

  const handleClick = (i: number) => {
    const id = SECTION_IDS_LIST[i];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="fixed top-0 left-0 h-screen w-20 bg-gradient-to-br from-pink-100 via-purple-200 to-blue-200 shadow-[2px_0_16px_#a6c1ee22] flex flex-col items-center pt-10 z-[900] gap-4"
    >
      {menuItems.map((item, i) => (
        <motion.div
          key={item.label}
          whileHover={{ scale: 1.18, backgroundColor: "#fff", color: "#a6c1ee" }}
          animate={i === activeIndex ? { scale: 1.22, backgroundColor: "#fff", color: "#a6c1ee", boxShadow: "0 2px 12px #a6c1ee99" } : {}}
          className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center font-bold text-2xl mb-1 cursor-pointer transition-all duration-200 border-2 ${i === activeIndex ? 'bg-white text-[#a6c1ee] shadow-[0_2px_12px_#a6c1ee55] border-[#a6c1ee]' : 'bg-pink-100 text-[#ff7e5f] border-transparent'}`}
          onClick={() => handleClick(i)}
        >
          <span className="text-[28px]">{item.icon}</span>
          <span className="text-xs mt-0.5">{item.label}</span>
        </motion.div>
      ))}
    </motion.nav>
  );
} 