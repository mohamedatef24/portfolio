import AboutMePhoto from "./AboutMePhoto";
import SectionHeader from "./SectionHeader";

const AboutSection = () => (
  <>
    <SectionHeader label="About Me" />
    <section className="bg-[#23243a] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-12 shadow-[0_2px_12px_#4fd1c522]">
      <div className="flex-2 min-w-[320px] mb-6 md:mb-0">
        <div className="text-cyan-400 font-extrabold text-2xl mb-4 font-sans">WHO AM I?</div>
        <div className="text-[#f3f3f3] text-base md:text-lg leading-relaxed font-sans">
          Mohamed Atef is a senior Artificial Intelligence student at Cairo University, currently in his fourth year. He is passionate about leveraging AI to solve real-world problems and is currently working on an Arabic Sign Language Converter project. This project aims to bridge the communication gap between the deaf or hard-of-hearing community and the wider population, reflecting his commitment to impactful, inclusive technology.
        </div>
      </div>
      <AboutMePhoto />
    </section>
  </>
);

export default AboutSection; 