'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useLocale } from '../context/LocaleContext';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';

const messagesMap = {
  en: enMessages,
  es: esMessages
};

export default function LocaleProviderWrapper({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  const messages = messagesMap[locale as 'en' | 'es'] || enMessages;

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages} timeZone="America/Costa_Rica">
      {children}
    </NextIntlClientProvider>
  );
}
