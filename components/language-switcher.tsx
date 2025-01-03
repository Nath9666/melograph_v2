"use client";

import { useRouter } from 'next/router';

export function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={changeLanguage} className="px-2 py-1 bg-gray-200 rounded-md">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}