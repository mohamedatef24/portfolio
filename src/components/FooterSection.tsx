"use client";

import React, { useEffect, useState } from "react";

const FooterSection = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#181824] to-[#23243a] border-t border-[#23243a] mt-16 pt-10 pb-4 text-center text-[#a6c1ee] text-base flex flex-col items-center gap-4 relative" id="contact-footer">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xl">📧</span>
          <a href="mailto:mo7amed3atf24@gmail.com" className="text-[#f3f3f3] no-underline hover:underline">mo7amed3atf24@gmail.com</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">📞</span>
          <a href="tel:+201202868440" className="text-[#f3f3f3] no-underline hover:underline">+20 120-286-8440</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <span>Giza, Egypt</span>
        </div>
      </div>
      <div className="flex gap-4 mt-2 justify-center">
        <a href="https://github.com/mohamedatef24" target="_blank" className="text-2xl text-[#a6c1ee] bg-[#23243a] rounded-full p-2 transition hover:text-[#4fd1c5] hover:bg-[#181824] hover:shadow-[0_4px_16px_#4fd1c555] flex items-center justify-center" aria-label="GitHub" rel="noopener noreferrer"><i className="devicon-github-original colored" /></a>
        <a href="https://www.linkedin.com/in/mohamed-atef-mawad" target="_blank" className="text-2xl text-[#a6c1ee] bg-[#23243a] rounded-full p-2 transition hover:text-[#4fd1c5] hover:bg-[#181824] hover:shadow-[0_4px_16px_#4fd1c555] flex items-center justify-center" aria-label="LinkedIn" rel="noopener noreferrer"><i className="devicon-linkedin-plain colored" /></a>
        <a href="https://www.kaggle.com/mo7amed3atf" target="_blank" className="text-2xl text-[#a6c1ee] bg-[#23243a] rounded-full p-2 transition hover:text-[#4fd1c5] hover:bg-[#181824] hover:shadow-[0_4px_16px_#4fd1c555] flex items-center justify-center" aria-label="Kaggle" rel="noopener noreferrer"><i className="devicon-kaggle-original colored" /></a>
      </div>
      <div className="text-[#4fd1c5] text-sm mt-4">© {new Date().getFullYear()} Mohamed Atef. All rights reserved.</div>
      {showButton && (
        <button
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-cyan-400 text-[#181824] flex items-center justify-center shadow-lg hover:bg-pink-400 transition z-50"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default FooterSection; 