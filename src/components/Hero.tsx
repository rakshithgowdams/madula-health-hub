import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './ui/AnimatedCounter';

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
  }, []);

  const stats = [
    { value: 500, suffix: '+', label: 'Patients Served' },
    { value: 2, suffix: 'M+', label: 'Reports Delivered' },
    { value: 100, suffix: '+', label: 'Expert Specialists' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 text-destructive text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-4 h-4 fill-current" />
            Solutions for Better Health
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-foreground leading-tight mb-6">
            YOUR <span className="text-primary">HEALTH</span> OUR PRIORITY
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Our compassionate healthcare team is dedicated to providing personalized, high-quality medical care for you and your family.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-medium"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div {...fadeUp(0.4)} className="flex items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">2000+ Experience Team</span>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} className="flex gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-heading text-foreground">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          {/* Floating decorative */}
          <div ref={plusRef1} className="absolute top-8 left-4 z-10">
            <Plus className="w-8 h-8 text-primary" />
          </div>
          <div ref={plusRef2} className="absolute bottom-16 right-4 z-10">
            <Plus className="w-6 h-6 text-accent" />
          </div>
          <div className="absolute top-1/4 right-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center z-10">
            <Heart className="w-5 h-5 text-accent" />
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600"
              alt="Professional doctor in white coat"
              className="rounded-3xl w-full max-w-md lg:max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
