'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f172a] border-t border-slate-700/40 text-gray-400 pt-12 pb-6 px-4 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Info */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-1">
            Sebastián Quesada
          </h4>
          <p className="text-sm text-gray-400">
            Software Engineer — Python, Rust, React, TypeScript
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Based in Costa Rica 🇨🇷
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Darkhunter0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastián-quesada-gutiérrez-29003725b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=sebasquesada0107@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="Email"
            >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-slate-700/40 pt-6 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Sebastián Quesada. All rights reserved.
        </p>
        <p className="mt-1 italic text-gray-600">
          Built with Next.js & Tailwind CSS — Designed with passion in 🇨🇷
        </p>
      </div>
    </footer>
  )
}
