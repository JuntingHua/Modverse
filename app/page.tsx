'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveBackground from '@/components/InteractiveBackground';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      
      <main className="container mx-auto px-4 py-16 relative">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('home.welcome')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('home.tagline')}
          </p>
          <Link 
            href="/about" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            {t('home.learnMore')}
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.innovation')}
            </h2>
            <p className="text-gray-600">
              {t('home.innovationDesc')}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.excellence')}
            </h2>
            <p className="text-gray-600">
              {t('home.excellenceDesc')}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.impact')}
            </h2>
            <p className="text-gray-600">
              {t('home.impactDesc')}
            </p>
          </div>
        </section>

        <section className="text-center space-y-12">
          <p className="text-2xl font-medium text-gray-900">
            这里放上brand positioning statement
          </p>
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-loose tracking-wide space-y-4">
            开发"AI模块商城"的软件。软件借助各种AI大模型的API，建立能高效完成特定功能的模块，这些模块就是我们的商品。模块包括"和影视明星/书中角色/动漫角色视频通话的AI"，"帮助学生学习特定知识的，互动式学习的AI"，"给简历打分，并提出依据和改进建议的AI"，"给学生进行申请材料holistic review，并给出依据和改进建议的AI"，"帮助制定详细旅游计划，给出食宿选项清单的AI"，"帮助用户设计发型和穿搭的AI"，"由子女录入性格，外形信息后，可以随时和老人视频通话陪伴老人的AI"，"根据患者描述，实时视频中的状态进行看诊的中医/西医AI"，等等。商城将AI模块分为娱乐创意类，效率类，学习类，生活类，等等。每个模块的售价由其所涉及的开发成本和流动成本决定。主要面向C类个人用户，次要面向B类企业用户。会根据用户习惯和偏好推荐AI模块。
          </p>
        </section>
      </main>
    </div>
  );
} 