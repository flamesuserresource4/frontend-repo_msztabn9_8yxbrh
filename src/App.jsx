import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
    </div>
  );
}

export default App;
