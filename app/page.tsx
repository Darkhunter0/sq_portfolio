'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { FaReact, FaNodeJs, FaPython, FaGithub, FaGitAlt, FaRust } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <main className="relative text-white overflow-hidden bg-[#0f172a]">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-b from-blue-950/20 via-slate-900/40 to-cyan-950/20" />

        {/* HERO */}
        <motion.div
          className="relative z-10 text-center flex flex-col items-center justify-center px-4 pt-32 pb-36"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 400)
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="mt-4 text-xl text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { Icon: FaReact, color: 'text-cyan-400' },
              { Icon: SiTypescript, color: 'text-blue-400' },
              { Icon: SiNextdotjs, color: 'text-white' },
              { Icon: FaNodeJs, color: 'text-green-500' },
              { Icon: FaRust, color: 'text-orange-500' },
              { Icon: SiTailwindcss, color: 'text-teal-300' },
              { Icon: FaGitAlt, color: 'text-red-500' },
              { Icon: FaGithub, color: 'text-gray-300' },
              { Icon: FaPython, color: 'text-yellow-400' }
            ].map(({ Icon, color }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
              >
                <Icon className={`text-5xl ${color} transition-all duration-300`} />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-10 text-sm text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {t('techNote')}
          </motion.p>
        </motion.div>

        {/* Wave animation */}
        <div className="relative -mt-20 z-5">
          <svg
            className="w-full h-32 transform rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="rgba(30, 41, 59, 0.8)"
              className="animate-pulse"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="rgba(30, 41, 59, 1)"
            />
          </svg>
        </div>

        {/* Main content */}
        <div className="relative z-10 bg-gradient-to-b from-slate-800/80 to-[#0f172a]">
          <AboutMe />
          <Experience />
          <Footer />
        </div>
      </main>
    </>
  );
}
