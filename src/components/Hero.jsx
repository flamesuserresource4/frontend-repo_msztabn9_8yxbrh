import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const useTypewriter = (text, speed = 25) => {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return display;
};

const Hero = () => {
  const main = useTypewriter('learn to code — the smart way with Neot', 18);

  return (
    <section className="pt-24 md:pt-28 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              <span>{main}</span>
              <span className="ml-1 inline-block w-[2px] h-8 sm:h-10 align-middle bg-[#66BB6A] animate-pulse"/>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              The AI-powered platform that teaches you coding faster, easier, and more effectively. Personalized lessons, practice challenges, and real-time feedback — all for free.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#start" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#66BB6A] text-white font-semibold shadow-sm hover:shadow transition-shadow">
                Get Started
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#66BB6A] text-[#66BB6A] font-semibold hover:bg-[#66BB6A]/10">
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/64?img=${i+10}`} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900" />
                ))}
              </div>
              <span>Join thousands learning with Neot</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#66BB6A]/10 to-[#66BB6A]/30 dark:from-[#66BB6A]/20 dark:to-[#66BB6A]/40 p-1 shadow-inner">
              <div className="w-full h-full rounded-xl bg-white dark:bg-neutral-900 flex items-center justify-center">
                <button className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 shadow hover:shadow-md">
                  <Play size={18} className="text-[#66BB6A]"/>
                  See how it works
                </button>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-md border border-gray-100 dark:border-neutral-800">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Daily Streak</p>
              <p className="text-2xl font-extrabold text-[#66BB6A]">12🔥</p>
            </div>
            <div className="absolute -top-5 -right-4 md:-right-8 bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-md border border-gray-100 dark:border-neutral-800">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">XP</p>
              <p className="text-2xl font-extrabold text-[#66BB6A]">3,240</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
