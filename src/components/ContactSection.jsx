// src/components/ContactSection.jsx
import { links, icons } from "../data/portfolioData";

export default function ContactSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">
          Interested in collaborating or creating a project together?
        </p>
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-green-400 transition duration-300"
          >
            <img src={icons.whatsapp} alt="WhatsApp" className="w-7 h-7 object-contain" />
          </a>
          <a
            href={links.email}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-blue-700 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-blue-600 transition duration-300"
          >
            <img src={icons.email} alt="Email" className="w-7 h-7 object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
}
