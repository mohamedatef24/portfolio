import SectionHeader from "./SectionHeader";
import Image from "next/image";

const projects = [
  {
    title: "Breast Cancer Detection",
    image: "/breast-cancer-detection.jpeg",
    desc: "Deep learning for breast cancer detection using medical imaging and transfer learning. Combines clinical insight with AI for real-world healthcare impact.",
    link: "https://www.kaggle.com/code/mo7amed3atf/breast-cancer-from-a-to-z-cnn-transfer-learning",
    linkLabel: "View on Kaggle"
  },
  {
    title: "Teeth Classification",
    image: "/teeth-classification.jpeg",
    desc: "Built a deep learning model to classify dental X-ray images. Automated detection of dental conditions using CNNs for improved diagnostic support.",
    link: "https://github.com/mohamedatef24/-Teeth-Classification-",
    linkLabel: "View on GitHub"
  },
  {
    title: "Spedo Transfer Application",
    image: "/speedo-app-demo.jpg",
    desc: "Android app for fast money transfer. Top 5 project at Banque Misr internship.",
    link: "https://github.com/mohamedatef24/Spedo-Tranfer-Application",
    linkLabel: "View on GitHub"
  },
  {
    title: "Weather Forecasting",
    image: "/weather-forecasting.jpeg",
    desc: "Designed and implemented a weather prediction model using time series analysis techniques.",
    link: "https://www.kaggle.com/code/mo7amed3atf/weather-forecasting-eda",
    linkLabel: "View on Kaggle"
  }
];

const FeaturedProjectsSection = () => (
  <>
    <SectionHeader label="Featured Projects" />
    <section className="mt-12">
      <h3 className="text-cyan-400 text-xl md:text-2xl font-bold mt-10 mb-6">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-4">
        {projects.map((proj) => (
          <div className="bg-[rgba(35,36,58,0.65)] rounded-2xl shadow-[0_4px_32px_#4fd1c522,0_2px_8px_#23243a55] p-5 text-center transition hover:shadow-[0_8px_32px_#4fd1c555,0_4px_16px_#a6c1ee55] hover:scale-[1.045] border border-cyan-200/20 backdrop-blur-md relative overflow-hidden" key={proj.title}>
            <Image src={proj.image} alt={proj.title} width={400} height={160} className="w-full h-40 object-full rounded-t-2xl mb-3 bg-[#23243a] shadow-[0_2px_8px_#4fd1c522]" style={{ objectFit: "fill" }} />
            <div className="text-cyan-400 font-bold text-lg mb-1">{proj.title}</div>
            <div className="text-[#f3f3f3] text-base mb-2">{proj.desc}</div>
            <a href={proj.link} target="_blank" className="inline-block mt-2 px-5 py-2 bg-cyan-400 text-[#181824] rounded-full font-semibold text-sm no-underline transition hover:bg-[#a6c1ee] hover:text-[#181824] hover:shadow-[0_4px_16px_#a6c1ee55]" rel="noopener noreferrer">{proj.linkLabel}</a>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <a href="https://github.com/mohamedatef24?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-cyan-400 text-[#181824] rounded-full font-semibold text-base no-underline transition hover:bg-[#a6c1ee] hover:text-[#181824] hover:shadow-[0_4px_16px_#a6c1ee55]">More on GitHub</a>
        <a href="https://www.kaggle.com/mo7amed3atf/code" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-cyan-400 text-[#181824] rounded-full font-semibold text-base no-underline transition hover:bg-[#a6c1ee] hover:text-[#181824] hover:shadow-[0_4px_16px_#a6c1ee55]">More on Kaggle</a>
      </div>
    </section>
  </>
);

export default FeaturedProjectsSection; 