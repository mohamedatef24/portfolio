"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy, SECTION_IDS_LIST } from "../utils/useScrollSpy";

const menuItems = [
  { label: "Home", icon: "🏠" },
  { label: "About", icon: "👤" },
  { label: "Projects", icon: "💼" },
  { label: "Skills", icon: "🛠️" },
  { label: "Contact", icon: "✉️" },
];

export default function FloatingCircularMenu() {
  const [open, setOpen] = useState(false);
  const activeIndex = useScrollSpy();

  const handleClick = (i: number) => {
    setOpen(false);
    const id = SECTION_IDS_LIST[i];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-[1000] flex items-center justify-center"
    >
      {/* Menu Items */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
            style={{
              position: "absolute",
              bottom: 70,
              right: 0,
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              alignItems: "flex-end",
            }}
          >
            {menuItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.08 * i } }}
                exit={{ x: 40, opacity: 0 }}
                whileHover={{ scale: 1.18, boxShadow: "0 4px 24px #fcb69f99", background: "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)", color: "#ff7e5f" }}
                style={{
                  background: activeIndex === i ? "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)" : "linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)",
                  color: activeIndex === i ? "#fff" : "#ff7e5f",
                  borderRadius: 24,
                  boxShadow: activeIndex === i ? "0 4px 24px #fcb69f99, 0 0 0 4px #ff7e5f55" : "0 2px 12px rgba(252,182,159,0.15)",
                  padding: "12px 28px",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 4,
                  transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                  border: "2px solid #fff",
                }}
                onClick={() => handleClick(i)}
              >
                <span style={{ fontSize: "1.4em", filter: "drop-shadow(0 2px 6px #fff3)" }}>{item.icon}</span> {item.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={false}
        animate={{ rotate: open ? 45 : 0 }}
        whileTap={{ scale: 0.93 }}
        whileHover={{ boxShadow: "0 0 0 8px #fcb69f55, 0 8px 32px #fcb69f99", background: "linear-gradient(135deg, #fcb69f 0%, #ffecd2 100%)" }}
        style={{
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
          border: "none",
          boxShadow: "0 4px 24px #fcb69f99, 0 0 0 0 #fcb69f55",
          color: "#ff7e5f",
          fontSize: 36,
          fontWeight: 900,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1001,
          transition: "box-shadow 0.2s, background 0.2s",
        }}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        +
      </motion.button>
    </div>
  );
} 