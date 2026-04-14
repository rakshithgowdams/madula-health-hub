import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dot.current) return;
      dot.current.style.left = e.clientX + 'px';
      dot.current.style.top = e.clientY + 'px';
    };
    const grow = () => dot.current?.classList.add('big');
    const shrink = () => dot.current?.classList.remove('big');
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      ref={dot}
      className="custom-cursor bg-indigo-600 pointer-events-none fixed z-[9999] rounded-full mix-blend-difference transition-transform duration-150"
      style={{ width: 12, height: 12 }}
    />
  );
}
