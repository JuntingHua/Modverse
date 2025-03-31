'use client';
import React from 'react';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function MVPDisplay() {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <div className="container mx-auto px-4 py-8 mt-16 relative">
        <h1 className="text-4xl font-bold text-navy mb-8">MVP Display</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-navy mb-4">Projects</h2>
            <p className="text-gray-700">Explore our latest projects and innovations.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-navy mb-4">Showcase</h2>
            <p className="text-gray-700">View our featured work and achievements.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-navy mb-4">Demo</h2>
            <p className="text-gray-700">Experience our products in action.</p>
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-navy mb-4">娱乐创意类</h2>
            <p className="text-gray-700 leading-relaxed">
              和影视明星/书中角色/动漫角色视频通话的AI，帮助用户设计发型和穿搭的AI，等等。这些模块让用户能够体验独特的创意互动，带来娱乐和趣味性。
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-navy mb-4">生活类</h2>
            <p className="text-gray-700 leading-relaxed">
              帮助制定详细旅游计划，给出食宿选项清单的AI，由子女录入性格，外形信息后，可以随时和老人视频通话陪伴老人的AI，等等。这些模块致力于提升用户的生活品质和便利性。
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-navy mb-4">效率类</h2>
            <p className="text-gray-700 leading-relaxed">
              给简历打分，并提出依据和改进建议的AI，给学生进行申请材料holistic review，并给出依据和改进建议的AI，等等。这些模块帮助用户提高工作效率，优化决策过程。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 