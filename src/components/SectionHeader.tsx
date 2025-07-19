const SectionHeader = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center w-full relative z-10 pt-6 pb-2 mb-8">
    <div className="flex-1 h-0.5 bg-gradient-to-r from-[#23243a] via-cyan-400 to-transparent opacity-20 mx-3 rounded" />
    <div
      className="
        bg-gradient-to-r from-[#23243a] to-[#2a2250]
        text-white text-lg md:text-xl font-bold rounded-[14px]
        px-11 py-3 shadow-[0_2px_12px_#4fd1c522]
        tracking-wide relative z-20 transition-all duration-400
        hover:bg-gradient-to-r hover:from-[#4fd1c5] hover:to-[#a6c1ee]
        hover:text-[#181824] hover:shadow-[0_4px_24px_#4fd1c555,0_0_16px_#a6c1ee55]
      "
    >
      {label}
    </div>
    <div className="flex-1 h-0.5 bg-gradient-to-l from-[#23243a] via-cyan-400 to-transparent opacity-20 mx-3 rounded" />
  </div>
);

export default SectionHeader; 