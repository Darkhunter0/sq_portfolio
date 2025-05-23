'use client'

import { useEffect, useState } from 'react'

import { FaReact, FaNodeJs, FaPython, FaGithub, FaGitAlt, FaRust } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <NavBar />
      <main className="relative text-white overflow-hidden bg-[#0f172a]">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-b from-blue-950/20 via-slate-900/40 to-cyan-950/20"></div>

        {/* HERO */}
        <div
          className="relative z-10 text-center flex flex-col items-center justify-center px-4 pt-32 pb-36"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 400)
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r">
            Sebastián Quesada
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-xl mx-auto">
            Software Engineer | Python, Rust, TypeScript, React | Clean code & fast systems 🚀
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <FaReact className="text-5xl text-cyan-400 hover:scale-110 transition-all duration-300" />
            <SiTypescript className="text-5xl text-blue-400 hover:scale-110 transition-all duration-300" />
            <SiNextdotjs className="text-5xl text-white hover:scale-110 transition-all duration-300" />
            <FaNodeJs className="text-5xl text-green-500 hover:scale-110 transition-all duration-300" />
            <FaRust className="text-5xl text-orange-500 hover:scale-110 transition-all duration-300" />
            <SiTailwindcss className="text-5xl text-teal-300 hover:scale-110 transition-all duration-300" />
            <FaGitAlt className="text-5xl text-red-500 hover:scale-110 transition-all duration-300" />
            <FaGithub className="text-5xl text-gray-300 hover:scale-110 transition-all duration-300" />
            <FaPython className="text-5xl text-yellow-400 hover:scale-110 transition-all duration-300" />
          </div>
          <p className="mt-10 text-sm text-gray-500 italic">
            {`/* Technologies I'm Familiar With */`}
          </p>
        </div>

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

        <div className="relative z-10 bg-gradient-to-b from-slate-800/80 to-[#0f172a]">
          <AboutMe />
          <Experience />
          <Footer />
        </div>
      </main>
    </>
  )
}

