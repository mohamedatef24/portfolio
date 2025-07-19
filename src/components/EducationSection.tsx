import SectionHeader from "./SectionHeader";
import Image from "next/image";

const EducationSection = () => (
  <>
    <SectionHeader label="Education" />
    <section className="mt-12 flex flex-col md:flex-row items-center gap-10" id="education">
      <div className="flex items-center justify-center min-w-[260px]">
        <div className="w-60 h-60 rounded-3xl flex items-center justify-center mr-10 bg-none">
          <Image
            src="/uni-transparent.png"
            alt="Cairo University Logo"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-contain rounded-2xl brightness-110 contrast-125 drop-shadow-[0_0_16px_#4fd1c5aa] drop-shadow-[0_0_8px_#a6c1ee88] bg-none"
            style={{ boxShadow: '0 0 0 0 transparent', transition: 'filter 0.3s' }}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-[rgba(35,36,58,0.95)] rounded-2xl shadow-[0_2px_16px_#4fd1c522] p-8 text-white font-sans max-w-xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-cyan-400 font-bold text-base">2022 - 2026 (Expected)</span>
            <span className="text-2xl text-[#a6c1ee] ml-2">🎓</span>
          </div>
          <div className="text-xl font-extrabold text-white mb-1 leading-tight">BSc in Computer Science & Artificial Intelligence</div>
          <div className="text-[#a6c1ee] font-bold text-base mb-2 leading-tight">Faculty of Computer Science and Artificial Intelligence, Cairo University</div>
          <div className="text-[#f3f3f3] text-base mb-2">GPA: 3.4/4.0</div>
          <div className="text-cyan-400 font-bold text-base mb-1">Major: Artificial Intelligence</div>
          <div className="text-[#a6c1ee] font-semibold text-base mb-2">Year: Senior (4th Year)</div>
          <div className="text-[#f3f3f3] text-sm mt-2 leading-relaxed">
            <div className="font-bold text-cyan-400 mb-1">Key Coursework:</div>
            <ul className="list-disc pl-6">
              <li>Machine Learning & Deep Learning</li>
              <li>Data Structures & Algorithms</li>
              <li>Computer Vision & Image Processing</li>
              <li>Database Management & Data Analysis</li>
              <li>Mathematics for ML & Data Science</li>
              <li>Software Engineering</li>
              <li>Operating Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default EducationSection; 