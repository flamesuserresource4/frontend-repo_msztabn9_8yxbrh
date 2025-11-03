import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';

const routes = {
  '/': Home,
  '/reviews': Reviews,
};

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    const onClick = (e) => {
      // intercept in-app anchor clicks
      const a = e.target.closest('a[href^="/"]');
      if (a && a.origin === window.location.origin) {
        e.preventDefault();
        const to = a.getAttribute('href');
        if (to && routes[to]) {
          window.history.pushState({}, '', to);
          setPath(to);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick);
    };
  }, []);

  const Page = routes[path] || Home;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
