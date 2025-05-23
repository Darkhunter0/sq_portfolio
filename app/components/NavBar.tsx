"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useTranslations } from 'next-intl';
import Link from "next/link";

import LanguageSwitcher from './LanguageSwitcher';


export default function Navbar() {
  const t = useTranslations('navbar');

  return (
    <nav className="bg-[#0f172a] border-b border-slate-700/40 px-6 py-4 sticky top-0 z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="text-white text-lg font-bold">
          SQ.dev
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="...">{t('about')}</a>
          <a href="#experience" className="...">{t('experience')}</a>
          <a href="#contact" className="...">{t('contact')}</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 text-gray-300 text-lg">
          <a
            href="https://github.com/Darkhunter0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastián-quesada-gutiérrez-29003725b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <div className="flex items-center text-sm h-full">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
