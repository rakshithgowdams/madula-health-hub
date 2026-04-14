import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { gsap } from 'gsap';
import AnimatedCounter from './ui/AnimatedCounter';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const Hero = () => {
  const pinkPlusRef = useRef<HTMLDivElement>(null);
  const purplePlusRef = useRef<HTMLDivElement>(null);
  const skyBluePlusRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animations for all decorative elements
    [pinkPlusRef, purplePlusRef, skyBluePlusRef].forEach((ref, i) => {
      if (ref.current) {
        gsap.to(ref.current, { y: -18, duration: 2.8 + i * 0.3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      }
    });
    if (heartRef.current) {
      gsap.to(heartRef.current, { y: -14, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, { y: -10, duration: 3.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    }
  }, []);

  const stats = [
    { value: 500, suffix: '+', label: 'Patients Served' },
    { value: 2, suffix: 'M+', label: 'Reports Delivered' },
    { value: 100, suffix: '+', label: 'Expert Specialists' },
  ];

  return (
    <section id="home" className="relative h-screen pt-20 overflow-hidden bg-[#e5f1f5]">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1fr] gap-0 h-full">
        {/* Left */}
        <div className="relative z-10 flex flex-col justify-center pb-12 lg:pb-0">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-5 text-secondary-foreground">
            <img src="/Heart_message.svg" alt="" className="w-5 h-5" />
            Solutions for Better Health
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="relative text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold font-heading text-foreground leading-[1.05] mb-7">
            YOUR <span className="relative text-primary">
              HEALTH
              {/* Best_text decorative marks above HEALTH */}
              <img src="/Best_text.svg" alt="" className="absolute -top-10 -right-[54px] w-16 h-14" />
            </span> OUR PRIORITY
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
                {s.label === 'Expert Specialists' && (
                  <div ref={skyBluePlusRef} className="absolute -top-4 right-[-105px] z-20">
                    <img src="/Skyblue_Pluse.svg" alt="" className="w-8 h-8 lg:w-10 lg:h-10 mx-[24px] my-[64px]" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Doctor image + decorative SVGs */}
        <div className="relative flex justify-center lg:justify-end items-end h-full overflow-visible">
          
          {/* Doctor image — flush to bottom, rendered first so decorations layer on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center lg:justify-end z-0"
          >
            <img
              src="/Hero_Doctor_Image.svg"
              alt="Professional doctor in blue scrubs with stethoscope"
              className="max-h-[calc(100vh-5rem)] w-auto object-contain object-bottom"
            />
          </motion.div>

          {/* Heart message bubble - to the left of doctor's head */}
          <div ref={heartRef} className="absolute top-[20%] left-[5%] z-20">
            <img src="/Heart_message.svg" alt="" className="w-28 h-28 lg:w-36 lg:h-36 drop-shadow-2xl mx-0 my-[171px]" />
          </div>

          {/* Pink cross - top right above doctor */}
          <div ref={pinkPlusRef} className="absolute top-[6%] right-[18%] z-20">
            <img src="/Pink_Bless.svg" alt="" className="w-10 h-10 lg:w-14 lg:h-14" />
          </div>

          {/* Arrow/scribble - right side near doctor's shoulder */}
          <div ref={arrowRef} className="absolute top-[25%] right-[-3%] z-10">
            <img src="/Simple_writing.svg" alt="" className="w-44 h-20 lg:w-56 lg:h-24 mx-[27px] -rotate-[5deg] my-[219px]" />
          </div>


          {/* Purple cross - bottom right */}
          <div ref={purplePlusRef} className="absolute bottom-[25%] right-[2%] z-20">
            <img src="/Purple_place.svg" alt="" className="w-10 h-10 lg:w-14 lg:h-14 px-0 my-0 mx-[8px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
