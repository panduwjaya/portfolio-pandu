// src/components/SkillsSection.jsx
import { skills } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skill</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-center">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
