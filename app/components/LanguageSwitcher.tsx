'use client';

import { useLocale } from '../context/LocaleContext';
import { Menu } from '@headlessui/react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const selected = languages.find((l) => l.code === locale);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition leading-none">
        {selected?.label}
        <svg
          className="w-3 h-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-1 w-20 bg-slate-800 rounded-md shadow-md ring-1 ring-slate-600 focus:outline-none z-50">
        {languages.map(({ code, label }) => (
          <Menu.Item key={code}>
            {({ active }) => (
              <button
                onClick={() => setLocale(code)}
                className={`${
                  active ? 'bg-slate-700 text-white' : 'text-gray-300'
                } w-full px-3 py-1 text-sm text-left`}
              >
                {label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
