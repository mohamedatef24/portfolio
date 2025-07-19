"use client";

import AnimatedCodeBlock from "./AnimatedCodeBlock";

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 md:py-16 rounded-2xl mb-9 relative overflow-hidden bg-gradient-to-br from-[#23243a] to-[#23243a]">
    <div className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none bg-[repeating-linear-gradient(0deg,_#fff1_0_1px,_transparent_1px_40px),_repeating-linear-gradient(90deg,_#fff1_0_1px,_transparent_1px_40px)] opacity-15" />
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
      <svg width="100%" height="100%" className="absolute left-0 top-0">
        <ellipse cx="20%" cy="30" rx="60" ry="18" fill="#4fd1c5" opacity="0.13" />
        <ellipse cx="80%" cy="80" rx="80" ry="22" fill="#a6c1ee" opacity="0.10" />
        <ellipse cx="50%" cy="120" rx="120" ry="30" fill="#7fffd4" opacity="0.08" />
      </svg>
    </div>
    <div className="flex-1 min-w-[0] z-10 flex flex-col items-center md:items-start justify-center px-4 md:pl-[4vw] text-center md:text-left">
      <div className="text-2xl md:text-3xl font-bold text-white mb-2">Hello,</div>
      <div className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-2">
        This is <span className="text-pink-400">Mohamed Atef</span>
      </div>
      <div className="text-lg md:text-xl font-bold text-white mb-2">I&apos;m a <span className="text-cyan-400 font-extrabold text-2xl md:text-3xl">Machine Learning Engineer</span></div>
      <div className="flex flex-col md:flex-row gap-4 mt-6 w-full md:w-auto justify-center md:justify-start">
        <button
          className="flex items-center gap-2 px-7 py-3 rounded-full text-base font-bold bg-gradient-to-r from-[#23243a] to-[#4fd1c5] text-white shadow-md transition hover:from-[#4fd1c5] hover:to-[#23243a] hover:shadow-lg w-full md:w-auto justify-center cursor-pointer duration-300"
          onClick={() => {
            const el = document.getElementById('contact-footer');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          CONTACT ME <span>👤</span>
        </button>
        <a
          href="https://drive.google.com/file/d/1sGIb6UKb-PEwa61JbFVgr2vUIHkeSFur/view?usp=sharing"
          className="flex items-center gap-2 px-7 py-3 rounded-full text-base font-bold bg-gradient-to-r from-[#ff4fa3] to-[#a6c1ee] text-white shadow-md transition hover:from-[#a6c1ee] hover:to-[#ff4fa3] hover:shadow-lg w-full md:w-auto justify-center md:justify-start duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET CV <span>⬇️</span>
        </a>
      </div>
    </div>
    <div className="flex-1 min-w-[0] z-10 flex items-center justify-center pr-0 md:pr-[4vw] mt-8 md:mt-0 w-full">
      <div className="bg-[#181824] rounded-2xl shadow-lg p-4 md:p-8 border border-cyan-300 mt-3 w-full max-w-[480px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block" />
          <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block" />
        </div>
        <div className="py-4 text-base font-mono text-white overflow-x-auto">
          <AnimatedCodeBlock />
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 