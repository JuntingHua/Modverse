'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 relative">
              {/* 3D 'M' Logo with gradient */}
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#1a365d' }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
                  </linearGradient>
                </defs>
                <path
                  d="M5 30L20 5L35 30H28L20 15L12 30H5Z"
                  fill="url(#logo-gradient)"
                  className="drop-shadow-lg"
                />
              </svg>
            </div>
            <span className="ml-2 text-2xl font-sans text-charcoal">modverse</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-gray-900">
                {t('nav.about')}
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 border-t border-gray-100">
                  <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('about.ourStory')}
                  </Link>
                  <Link href="/about#mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('about.mission')}
                  </Link>
                  <Link href="/about#vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('about.vision')}
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('mvp')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-gray-900">
                {t('nav.mvp')}
              </button>
              {activeDropdown === 'mvp' && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 border-t border-gray-100">
                  <Link href="/mvp" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('mvp.projects')}
                  </Link>
                  <Link href="/mvp#showcase" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('mvp.showcase')}
                  </Link>
                  <Link href="/mvp#demo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('mvp.demo')}
                  </Link>
                </div>
              )}
            </div>

            <Link href="/team" className="text-gray-700 hover:text-gray-900">
              {t('nav.team')}
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              {t('nav.contact')}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('language')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-gray-900">
                {t('nav.language')}
              </button>
              {activeDropdown === 'language' && (
                <div className="absolute top-full right-0 w-48 bg-white rounded-md shadow-lg py-2 border-t border-gray-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as 'en' | 'zh')}
                      className={`block w-full text-left px-4 py-2 ${
                        language === lang.code
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 