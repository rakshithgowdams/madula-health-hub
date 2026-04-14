import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './ui/AnimatedCounter';
import heartBubble from '@/assets/heart-bubble.png';
import pinkCross from '@/assets/pink-cross.png';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const plusRef1 = useRef<HTMLDivElement>(null);
  const plusRef2 = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
    [plusRef1, plusRef2].forEach((ref) => {
      if (ref.current) {
        gsap.to(ref.current, { y: -15, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      }
    });
    if (heartRef.current) {
      gsap.to(heartRef.current, { y: -10, duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    }
  }, []);

  const stats = [
    { value: 500, suffix: '+', label: 'Patients Served' },
    { value: 2, suffix: 'M+', label: 'Reports Delivered' },
    { value: 100, suffix: '+', label: 'Expert Specialists' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-0 overflow-hidden bg-[#e5f1f5]">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center font-sans lg:px-[32px] rounded-none text-6xl">
        {/* Left */}
        <div className="relative z-10">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-5 text-secondary-foreground">
            <Heart className="w-4 h-4 fill-current text-destructive" />
            Solutions for Better Health
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold font-heading text-foreground leading-[1.05] mb-7">
            YOUR <span className="text-primary">HEALTH</span> OUR PRIORITY
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-muted-foreground max-w-lg mb-9 leading-relaxed text-base">
            we are dedicated to putting your health at the forefront of everything we do. Our compassionate team of healthcare.
          </motion.p>

          {/* CTA + Social proof row */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-6 mb-10">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium shadow-lg shadow-primary/25"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </motion.a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-11 h-11 rounded-full border-2 border-card object-cover"
                  />
                ))}
                <div className="w-11 h-11 rounded-full bg-foreground border-2 border-card flex items-center justify-center">
                  <Plus className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <div>
                <span className="text-sm font-bold text-foreground">2000+</span>
                <p className="text-xs text-muted-foreground">Experience Team</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-10">
            {stats.map((s, i) => (
              <div key={s.label} className="relative">
                <div className="text-3xl md:text-4xl font-extrabold font-heading text-foreground">
                  <AnimatedCounter end={s.value} suffix={s.suffix} className="text-center text-secondary-foreground border-0" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                {/* Floating cross after last stat */}
                {i === stats.length - 1 && (
                  <div className="absolute -right-10 top-1/2 -translate-y-1/2">
                    <Plus className="w-7 h-7 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end items-end self-end">
          {/* Pink cross - top right */}
          <div ref={plusRef1} className="absolute top-4 right-8 z-20">
            <img src={pinkCross} alt="" className="w-8 h-8" />
          </div>

          {/* Heart bubble icon - left of doctor */}
          <div ref={heartRef} className="absolute top-1/4 left-8 lg:left-0 z-20">
            <img src="/f200f042-82f6-454a-8e50-4e695de165e1.png" alt="" className="w-20 h-20 lg:w-24 lg:h-24 text-left mx-[150px] rounded-none object-fill" />
          </div>

          {/* Blue cross - bottom right */}
          <div ref={plusRef2} className="absolute bottom-12 right-0 z-20">
            <Plus className="w-10 h-10 text-primary" strokeWidth={3} />
          </div>

          {/* Decorative scribble/arrow marks - dark */}
          <div className="absolute top-16 right-0 z-10 opacity-80">
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none" className="text-xs text-center">
              <path d="M5 45C15 20 35 10 55 5" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M45 2L55 5L50 14" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/5fc12e02-1712-4758-86be-34ed11102e61.png"
              alt="Professional doctor in blue scrubs with stethoscope"
              className="rounded-t-3xl rounded-b-none w-full max-w-md lg:max-w-lg xl:max-w-xl object-cover mb-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
