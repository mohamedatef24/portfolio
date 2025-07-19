import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "projects", "skills", "contact"];

export function useScrollSpy() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return Number.POSITIVE_INFINITY;
        const rect = el.getBoundingClientRect();
        return Math.abs(rect.top - 120); // 120px offset for nav
      });
      const min = Math.min(...offsets);
      setActiveIndex(offsets.indexOf(min));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeIndex;
}

export const SECTION_IDS_LIST = SECTION_IDS; 