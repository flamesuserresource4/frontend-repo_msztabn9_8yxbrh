import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

// Lightweight fake demo "video" rendered with Canvas animation
const DemoVideo = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const [playing, setPlaying] = useState(true);
  const startRef = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.clientWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.clientHeight * window.devicePixelRatio);

    const onResize = () => {
      width = canvas.width = canvas.clientWidth * window.devicePixelRatio;
      height = canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };
    const handler = () => onResize();
    window.addEventListener('resize', handler);

    const draw = (t) => {
      const time = (t - startRef.current) / 1000;
      // Background
      ctx.fillStyle = getComputedStyle(document.documentElement).classList.contains('dark')
        ? '#0a0a0a'
        : '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // UI frame
      const pad = Math.round(16 * window.devicePixelRatio);
      const radius = Math.round(16 * window.devicePixelRatio);

      // Window bar
      ctx.fillStyle = '#f3f4f6';
      if (document.documentElement.classList.contains('dark')) ctx.fillStyle = '#111827';
      roundRect(ctx, pad, pad, width - pad * 2, height - pad * 2, radius);
      ctx.fill();

      // Title
      ctx.fillStyle = '#111827';
      if (document.documentElement.classList.contains('dark')) ctx.fillStyle = '#e5e7eb';
      ctx.font = `${14 * window.devicePixelRatio}px Inter, system-ui, -apple-system`;
      ctx.fillText('Neot — Interactive lesson', pad * 2, pad * 3);

      // Code blocks animation
      const lines = 8;
      for (let i = 0; i < lines; i++) {
        const y = pad * 4 + i * pad * 1.4;
        const base = (Math.sin(time * 2 + i) + 1) / 2; // 0..1
        const w = (width - pad * 4) * (0.3 + base * 0.6);
        ctx.fillStyle = i % 3 === 0 ? '#66BB6A' : '#9ca3af';
        if (document.documentElement.classList.contains('dark')) {
          ctx.fillStyle = i % 3 === 0 ? '#66BB6A' : '#4b5563';
        }
        roundRect(ctx, pad * 2, y, w, pad * 0.6, Math.round(6 * window.devicePixelRatio));
        ctx.fill();
      }

      // Cursor
      const cx = pad * 2 + ((Math.sin(time) + 1) / 2) * (width - pad * 6);
      const cy = pad * 4 + ((Math.cos(time * 1.2) + 1) / 2) * (height - pad * 10);
      ctx.fillStyle = '#111827';
      if (document.documentElement.classList.contains('dark')) ctx.fillStyle = '#e5e7eb';
      roundRect(ctx, cx, cy, pad * 0.8, pad * 0.8, 4);
      ctx.fill();

      if (playing) rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handler);
    };
  }, [playing]);

  const toggle = () => {
    setPlaying((p) => !p);
    if (!playing) {
      // restart timeline to keep it lively when resuming
      startRef.current = performance.now();
      rafRef.current = requestAnimationFrame(() => {});
    }
  };

  return (
    <div className="relative bg-white dark:bg-neutral-950">
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <canvas ref={canvasRef} className="block w-full h-[280px] sm:h-[360px] lg:h-[420px]" />
      <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between bg-gradient-to-t from-white/90 to-transparent dark:from-neutral-950/90">
        <button onClick={toggle} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#66BB6A] text-white text-xs font-semibold shadow-sm">
          {playing ? <Pause size={14}/> : <Play size={14}/>} {playing ? 'Pause' : 'Play'}
        </button>
        <span className="text-[11px] text-gray-600 dark:text-gray-300">Demo preview — not actual footage</span>
      </div>
    </div>
  );
};

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export default DemoVideo;
