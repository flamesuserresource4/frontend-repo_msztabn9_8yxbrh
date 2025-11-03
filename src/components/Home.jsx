import React from 'react';
import Hero from './Hero.jsx';
import DemoVideo from './DemoVideo.jsx';
import { CheckCircle, Sparkles, Shield, Rocket } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800">
    <div className="w-10 h-10 rounded-xl bg-[#66BB6A]/10 text-[#66BB6A] flex items-center justify-center">
      <Icon size={18} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
  </div>
);

const Home = () => {
  return (
    <main className="bg-white dark:bg-neutral-950">
      <Hero />

      <section id="demo" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">See Neot in action</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">A quick overview of the learning experience, streaks, and AI mentor — rendered as a lightweight demo right in your browser.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="text-[#66BB6A] mt-0.5" size={16}/>Interactive practice with instant feedback</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#66BB6A] mt-0.5" size={16}/>Personalized paths that adapt to you</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#66BB6A] mt-0.5" size={16}/>Progress tracking with streaks and XP</li>
              </ul>
            </div>
            <div className="rounded-2xl ring-1 ring-gray-100 dark:ring-neutral-800 shadow-sm overflow-hidden">
              <DemoVideo />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Minimal, focused features</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">Only the essentials you need to learn faster — no clutter, just flow.</p>
            </div>
            <a href="/reviews" className="hidden md:inline text-sm font-semibold text-[#66BB6A]">Read reviews →</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature icon={Sparkles} title="AI Mentor" desc="Instant explanations, hints, and feedback while you learn." />
            <Feature icon={Rocket} title="Fast Paths" desc="Short, focused lessons designed for momentum and retention." />
            <Feature icon={CheckCircle} title="Practice First" desc="Hands-on coding from day one — build and ship mini-projects." />
            <Feature icon={Shield} title="Privacy by Default" desc="Your progress data stays secure and under your control." />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">About Neot</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Neot is a minimal, AI-assisted learning platform focused on clarity and consistency. We believe great learning should be simple, delightful, and accessible to everyone.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
