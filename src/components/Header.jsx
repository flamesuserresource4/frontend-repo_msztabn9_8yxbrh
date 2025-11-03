import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItemClass = 'text-sm font-medium text-gray-700 hover:text-[#66BB6A] dark:text-gray-200 dark:hover:text-[#66BB6A]';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-shadow bg-white/90 backdrop-blur dark:bg-neutral-900/90 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-end gap-1 select-none">
          <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">nishaan</span>
          <span className="text-[#66BB6A] text-2xl font-black">.</span>
          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 tracking-wide">education</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className={navItemClass}>About</a>
          <a href="#features" className={navItemClass}>Features</a>
          <a href="#pricing" className={navItemClass}>Pricing</a>
          <a href="#reviews" className={navItemClass}>Reviews</a>
          <a href="#blog" className={navItemClass}>Blog</a>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
            {dark ? <Sun size={18} className="text-yellow-400"/> : <Moon size={18} className="text-gray-600 dark:text-gray-300"/>}
          </button>
          <a href="#signin" className="px-4 py-2 rounded-full border border-[#66BB6A] text-[#66BB6A] hover:bg-[#66BB6A] hover:text-white transition-colors text-sm font-semibold">Sign In</a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
            {dark ? <Sun size={18} className="text-yellow-400"/> : <Moon size={18} className="text-gray-700 dark:text-gray-300"/>}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800" aria-label="Open Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <a onClick={() => setOpen(false)} href="#about" className={navItemClass}>About</a>
            <a onClick={() => setOpen(false)} href="#features" className={navItemClass}>Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className={navItemClass}>Pricing</a>
            <a onClick={() => setOpen(false)} href="#reviews" className={navItemClass}>Reviews</a>
            <a onClick={() => setOpen(false)} href="#blog" className={navItemClass}>Blog</a>
            <a onClick={() => setOpen(false)} href="#signin" className="px-4 py-2 w-full text-center rounded-full border border-[#66BB6A] text-[#66BB6A] hover:bg-[#66BB6A] hover:text-white transition-colors text-sm font-semibold">Sign In</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
