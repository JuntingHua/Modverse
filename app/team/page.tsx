'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function Team() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      
      <main className="container mx-auto px-4 py-16 relative">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('nav.team')}
          </h1>
          <p className="text-2xl font-medium text-gray-900">
            当家球星
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team member cards will go here */}
        </section>
      </main>
    </div>
  );
} 