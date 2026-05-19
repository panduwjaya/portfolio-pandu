// src/components/PortfolioSection.jsx
import { projects } from "../data/portfolioData";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Portofolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
                <div className="mt-4 text-sm font-medium text-blue-600 flex items-center gap-1">
                  See on GitHub <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
