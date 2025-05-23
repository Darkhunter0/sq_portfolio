'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {}
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState('en');

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      setLocaleState(storedLocale);
    }
  }, []);

  const setLocale = (newLocale: string) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
