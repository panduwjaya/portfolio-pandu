// src/components/Footer.jsx
import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© {year} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
