'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Experience() {
  const t = useTranslations('experience');
  const [activeTab, setActiveTab] = useState('all');

  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Software Engineering Degree',
      company: 'CENFOTEC University',
      period: '2023 - Present',
      location: 'Costa Rica',
      description: [
        t('edu.desc1'),
        t('edu.desc2'),
        t('edu.desc3'),
        t('edu.desc4')
      ],
      technologies: ['Java', 'Python', 'C++', 'SQL', 'Git'],
      icon: FaGraduationCap,
      color: 'text-blue-400'
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Cap Software Developers CR',
      period: '2023 - Present',
      location: 'Remote / Costa Rica',
      description: [
        t('cap.desc1'),
        t('cap.desc2'),
        t('cap.desc3'),
        t('cap.desc4')
      ],
      technologies: ['React', 'TypeScript', 'Python', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Git'],
      icon: FaBriefcase,
      color: 'text-green-400'
    },
    {
      id: 3,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'LinkAmerica Labs',
      period: '2022 - 2023',
      location: 'Costa Rica',
      description: [
        t('link.desc1'),
        t('link.desc2'),
        t('link.desc3')
      ],
      technologies: ['Python', 'AWS', 'OpenSearch', 'Next.js', 'React', 'Ant Design'],
      icon: FaCode,
      color: 'text-orange-400'
    },
    {
      id: 4,
      type: 'certification',
      title: 'Complete Rust Programming Language Course',
      company: 'Udemy',
      period: '2025',
      location: 'Online',
      description: [
        t('cert.desc1'),
        t('cert.desc2'),
        t('cert.desc3'),
        t('cert.desc4')
      ],
      technologies: ['Rust', 'CLI', 'Ownership', 'Memory Safety', 'Error Handling'],
      icon: FaCertificate,
      color: 'text-orange-500'
    }
  ];

  const filteredExperiences = activeTab === 'all'
    ? experiences
    : experiences.filter(exp => exp.type === activeTab);

  const tabs = [
    { id: 'all', label: t('tabs.all'), count: experiences.length },
    { id: 'work', label: t('tabs.work'), count: experiences.filter(e => e.type === 'work').length },
    { id: 'education', label: t('tabs.education'), count: experiences.filter(e => e.type === 'education').length },
    { id: 'certification', label: t('tabs.certifications'), count: experiences.filter(e => e.type === 'certification').length }
  ];

  return (
    <section id="experience" className="relative px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-cyan-400 text-sm font-mono">{t('tag')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('titleStart')} <span className="text-cyan-400">{t('titleEnd')}</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                  : 'bg-slate-800/50 text-gray-400 border border-slate-700/50 hover:border-cyan-400/50 hover:text-cyan-300'
              }`}
            >
              {tab.label} {tab.count > 0 && `(${tab.count})`}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-slate-600/30 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row gap-6 group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-slate-900 border-2 border-cyan-400 rounded-full items-center justify-center z-10">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>

                  <div className="flex-shrink-0 md:ml-20">
                    <div className={`w-16 h-16 ${exp.color} bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-cyan-400/30 transition-all duration-300`}>
                      <IconComponent className="text-2xl" />
                    </div>
                  </div>

                  <div className="flex-1 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 group-hover:border-cyan-400/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5 text-xs">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded border border-slate-600/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">{t('cta.text')}</p>
          <a
            href="https://www.linkedin.com/in/sebastián-quesada-gutiérrez-29003725b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>{t('cta.button')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
