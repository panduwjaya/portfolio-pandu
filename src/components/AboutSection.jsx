// src/components/AboutSection.jsx
import { profile } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">{profile.about}</p>
      </div>
    </section>
  );
}
