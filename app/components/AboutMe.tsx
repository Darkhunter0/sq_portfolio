'use client';

import { HiOutlineLightBulb, HiOutlineCode, HiOutlineAcademicCap } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-28 px-6 text-white bg-transparent">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-start">
        {/* Lado izquierdo decorativo */}
        <div className="hidden md:flex flex-col items-center col-span-2">
          <div className="w-[2px] h-full bg-cyan-400/30 rounded-full" />
          <span className="mt-4 text-cyan-400 text-sm tracking-widest rotate-[-90deg] whitespace-nowrap">
            / {t('sideAbout')}
          </span>
        </div>

        {/* Contenido del About */}
        <div className="md:col-span-10">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
            {t('tag')}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t('titleStart')} <span className="text-cyan-400">{t('titleEnd')}</span>
          </h2>

          <div className="bg-[#1e293b] rounded-xl p-8 md:p-10 shadow-lg border border-white/10 text-base md:text-lg text-gray-300 leading-relaxed space-y-8">
            {/* Bloque 1 */}
            <div className="flex items-start gap-4">
              <HiOutlineLightBulb className="mt-1 text-cyan-400 text-2xl min-w-[1.5rem]" />
              <p>
                {t('block1.part1')}
                <strong className="text-white"> {t('block1.strong1')}</strong>.
                {t('block1.part2')}
                <strong className="text-white"> {t('block1.strong2')}</strong> {t('block1.and')}
                <strong className="text-white"> {t('block1.strong3')}</strong>.
                {t('block1.part3')}
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="flex items-start gap-4">
              <HiOutlineCode className="mt-1 text-cyan-400 text-2xl min-w-[1.5rem]" />
              <p>
                {t('block2.part1')}
                <strong className="text-white"> {t('block2.strong1')}</strong>,
                <strong className="text-white"> {t('block2.strong2')}</strong>,
                <strong className="text-white"> {t('block2.strong3')}</strong>,
                {t('block2.and')}
                <strong className="text-white"> {t('block2.strong4')}</strong>.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="flex items-start gap-4">
              <HiOutlineAcademicCap className="mt-1 text-cyan-400 text-2xl min-w-[1.5rem]" />
              <p>
                {t('block3.part1')}
                <strong className="text-white"> {t('block3.strong1')}</strong>,
                <strong className="text-white"> {t('block3.strong2')}</strong>,
                <strong className="text-white"> {t('block3.strong3')}</strong>,
                <strong className="text-white"> {t('block3.strong4')}</strong>,
                <strong className="text-white"> {t('block3.strong5')}</strong>,
                <strong className="text-white"> {t('block3.strong6')}</strong>,
                <strong className="text-white"> {t('block3.strong7')}</strong>,
                <strong className="text-white"> {t('block3.strong8')}</strong>.
              </p>
            </div>

            {/* Resume */}
            <div>
              <a
                href="/Sebastian-Quesada-Resume.pdf"
                download
                className="inline-block text-green-400 font-medium hover:underline hover:translate-x-1 transition-transform"
              >
                {t('resume')} →
              </a>
            </div>
          </div>

          {/* Cita */}
          <p className="mt-8 text-gray-500 italic text-sm text-center md:text-left">
            {t('quote')}
          </p>
        </div>
      </div>
    </section>
  );
}
