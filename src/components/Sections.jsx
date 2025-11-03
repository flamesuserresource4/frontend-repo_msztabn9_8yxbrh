import React, { useEffect, useRef, useState } from 'react';
import { Bot, BookOpen, Star, Users, Trophy, Award, MessageSquare, CheckCircle, Sparkles, Github, Linkedin, Youtube } from 'lucide-react';

// Feature Card
const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800 hover:shadow-md transition-shadow">
    <div className="w-11 h-11 rounded-xl bg-[#66BB6A]/10 text-[#66BB6A] flex items-center justify-center mb-4">
      <Icon />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
  </div>
);

// Testimonials Slider
const Testimonials = () => {
  const reviews = [
    { name: 'Aarav', text: 'Neot helped me stay consistent with daily practice. The AI mentor is a game changer!', stars: 5 },
    { name: 'Maya', text: 'I landed my first internship after completing the web dev path. Clear, fast, and fun.', stars: 5 },
    { name: 'Ishaan', text: 'The instant feedback on code saved me hours. Love the streaks and badges!', stars: 4 },
  ];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 4000);
    return () => clearInterval(intervalRef.current);
  }, [reviews.length]);

  return (
    <div className="mt-10">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {reviews.map((r, i) => (
            <div key={i} className="min-w-full px-2">
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800">
                <div className="flex items-center gap-2 text-[#66BB6A]">
                  {Array.from({ length: r.stars }).map((_, s) => <Star key={s} size={16} fill="#66BB6A" className="text-[#66BB6A]"/>) }
                </div>
                <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">“{r.text}”</p>
                <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {reviews.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${index === i ? 'bg-[#66BB6A]' : 'bg-gray-300 dark:bg-neutral-700'}`} />
        ))}
      </div>
    </div>
  );
};

const Sections = () => {
  return (
    <div className="bg-white dark:bg-neutral-950" id="about">
      {/* Features */}
      <section id="features" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Key Features</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">Personalized paths, interactive practice, and your always-on AI mentor — everything you need to learn faster.</p>
            </div>
            <a href="#start" className="hidden md:inline-flex text-sm font-semibold text-[#66BB6A]">Start learning free →</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={BookOpen} title="Personalized Learning" desc="Tailored lessons that adapt to your skill level and pace with AI assistance."/>
            <FeatureCard icon={CheckCircle} title="Interactive Practice" desc="Solve coding challenges and projects in your browser with instant feedback."/>
            <FeatureCard icon={Bot} title="AI Mentor" desc="Get explanations, debugging help, and coding tips from your AI mentor — 24/7."/>
            <FeatureCard icon={Trophy} title="Streaks & Rewards" desc="Build daily habits. Earn streaks, badges, and XP as you progress."/>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-neutral-900" id="how">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              title: 'Sign up for free',
              desc: 'Create your account and set a daily goal — it takes less than a minute.',
              icon: Users
            }, {
              title: 'Choose your path',
              desc: 'Pick Python, Web Dev, C++, and more. Learn with bite-sized modules.',
              icon: Sparkles
            }, {
              title: 'Learn with AI',
              desc: 'Practice interactively and get instant AI feedback with progress tracking.',
              icon: Award
            }].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-950 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#66BB6A]/10 text-[#66BB6A] flex items-center justify-center">
                    <step.icon />
                  </div>
                  <span className="text-sm font-semibold text-gray-400">{String(i+1).padStart(2,'0')}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-950 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Progress Dashboard</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Track streaks, XP, completed modules, and your global rank with beautiful charts.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-950 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">AI Code Reviewer</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Instant tips on code style, clarity, and logic — improve with every submission.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-950 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Gamified Learning</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Compete on leaderboards, earn badges, and keep your streak alive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 sm:py-20" id="community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Learn with a community of passionate learners.</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">Join forums, Discord, and study groups to stay motivated and get help fast.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#66BB6A] text-white text-sm font-semibold shadow-sm">Join Discord</a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#66BB6A] text-[#66BB6A] text-sm font-semibold">Visit Forums</a>
              </div>
            </div>
            <div className="flex -space-x-3 justify-end md:justify-start">
              {[...Array(12)].map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/80?u=user-${i}`} alt="learner avatar" className="w-12 h-12 rounded-full border-2 border-white dark:border-neutral-950" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16 sm:py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">What students say</h2>
            <div className="flex items-center gap-2 text-[#66BB6A]">
              <Star size={16} fill="#66BB6A" className="text-[#66BB6A]"/>
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">4.9 / 5</span>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Ready to master coding with AI?</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Start learning free. No credit card required.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#66BB6A] text-white font-semibold shadow-sm hover:shadow-md">Start Learning Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-neutral-800 py-10" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-end gap-1 justify-center md:justify-start">
                <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">nishaan</span>
                <span className="text-[#66BB6A] text-xl font-black">.</span>
                <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 tracking-wide">education</span>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">© 2025 Nishaan Education. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <a href="#about" className="hover:text-[#66BB6A]">About</a>
              <a href="#privacy" className="hover:text-[#66BB6A]">Privacy</a>
              <a href="#terms" className="hover:text-[#66BB6A]">Terms</a>
              <a href="#contact" className="hover:text-[#66BB6A]">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:text-[#66BB6A]"><Linkedin size={18}/></a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:text-[#66BB6A]"><Github size={18}/></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:text-[#66BB6A]"><Youtube size={18}/></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sections;
