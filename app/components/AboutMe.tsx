'use client'

import { HiOutlineLightBulb, HiOutlineCode, HiOutlineAcademicCap } from 'react-icons/hi'

export default function AboutMe() {
  return (
    <section id="about" className="py-28 px-6 text-white bg-transparent">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-start">
        {/* Lado izquierdo decorativo */}
        <div className="hidden md:flex flex-col items-center col-span-2">
          <div className="w-[2px] h-full bg-cyan-400/30 rounded-full" />
          <span className="mt-4 text-cyan-400 text-sm tracking-widest rotate-[-90deg] whitespace-nowrap">
            / about me
          </span>
        </div>

        {/* Contenido del About */}
        <div className="md:col-span-10">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
            Who I am
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-cyan-400">me</span>
          </h2>

          <div className="bg-[#1e293b] rounded-xl p-8 md:p-10 shadow-lg border border-white/10 text-base md:text-lg text-gray-300 leading-relaxed space-y-8">
            {/* Bloque 1 */}
            <div className="flex items-start gap-4">
              <HiOutlineLightBulb className="mt-1 text-cyan-400 text-2xl min-w-[1.5rem]" />
              <p>
                I’m a software developer currently pursuing a degree in <strong className="text-white">Software Engineering</strong>.
                I’m passionate about building clean and scalable systems using modern technologies like
                <strong className="text-white"> Rust</strong> and <strong className="text-white">TypeScript</strong>. I also enjoy mentoring others and continuously improving my craft.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="flex items-start gap-4">
              <HiOutlineCode className="mt-1 text-cyan-400 text-2xl min-w-[1.5rem]" />
              <p>
                I’ve worked on SaaS platforms, developer tools, and backend systems using
                <strong className="text-white"> React</strong>, <strong className="text-white">Next.js</strong>,
                <strong className="text-white"> Node.js</strong>, and <strong className="text-white">PostgreSQL</strong>.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="flex items-start gap-4">
              <HiOutlineAcademicCap className="mt-1 text-cyan-400 text-2xl min-w-[1.5rem]" />
              <p>
                My core stack includes: <strong className="text-white">Rust</strong>, <strong className="text-white">TypeScript</strong>,
                <strong className="text-white"> React</strong>, <strong className="text-white">Node.js</strong>,
                <strong className="text-white"> PostgreSQL</strong>, <strong className="text-white">Tailwind CSS</strong>,
                <strong className="text-white"> Docker</strong>, <strong className="text-white">Git</strong>.
              </p>
            </div>

            {/* Resume */}
            <div>
              <a
                href="/Sebastian-Quesada-Resume.pdf"
                download
                className="inline-block text-green-400 font-medium hover:underline hover:translate-x-1 transition-transform"
              >
                Download Resume →
              </a>
            </div>
          </div>

          {/* Cita */}
          <p className="mt-8 text-gray-500 italic text-sm text-center md:text-left">
            “Simplicity is the soul of efficiency.” — Austin Freeman
          </p>
        </div>
      </div>
    </section>
  )
}
