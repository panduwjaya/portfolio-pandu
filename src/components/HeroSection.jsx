// src/components/HeroSection.jsx
import { profile, links, icons } from "../data/portfolioData";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src={profile.photo}
          alt="Foto Profil"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover"
        />
        <h1 className="text-5xl font-bold mb-4">Halo, I am {profile.name}</h1>
        <p className="text-xl mb-6">{profile.title}</p>

        {/* Icon Menu */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#portfolio"
            className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 hover:bg-gray-100 transition duration-300"
          >
            <img src={icons.portfolio} alt="Portfolio" className="w-8 h-8 object-contain" />
          </a>

          <a
            href={links.cv}
            download
            className="w-16 h-16 bg-yellow-400 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 hover:bg-yellow-300 transition duration-300"
          >
            <img src={icons.cv} alt="CV" className="w-8 h-8 object-contain" />
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-gray-500 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 hover:bg-gray-400 transition duration-300"
          >
            <img src={icons.github} alt="GitHub" className="w-8 h-8 object-contain" />
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-blue-900 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 hover:bg-blue-800 transition duration-300"
          >
            <img src={icons.linkedin} alt="LinkedIn" className="w-8 h-8 object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
}
