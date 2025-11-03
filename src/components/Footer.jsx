import React from 'react';
import { Github, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-neutral-800 py-10 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Neot</span>
              <span className="text-[#66BB6A] text-xl font-black">•</span>
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Neot. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="/" className="hover:text-[#66BB6A]">Home</a>
            <a href="/reviews" className="hover:text-[#66BB6A]">Reviews</a>
            <a href="#privacy" className="hover:text-[#66BB6A]">Privacy</a>
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
  );
};

export default Footer;
