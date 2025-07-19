import SectionHeader from "./SectionHeader";
import CircularSkills from "./CircularSkills";

const skills = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Django", icon: "devicon-django-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "PyTorch", icon: "devicon-pytorch-original colored" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
  { name: "Computer Vision", icon: "devicon-opencv-plain colored" },
  { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
];

const TechnicalSkillsSection = () => (
  <>
    <SectionHeader label="Technical Skills" />
    <section className="mt-12">
      <h3 className="text-cyan-400 text-xl md:text-2xl font-bold mt-8 mb-6">Technical Skills</h3>
      <CircularSkills skills={skills} />
    </section>
  </>
);

export default TechnicalSkillsSection; 