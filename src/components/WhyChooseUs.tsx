import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 border-2 border-primary rounded-2xl rotate-3 -z-10" />
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500"
            alt="Doctors collaborating"
            className="rounded-2xl w-full object-cover shadow-lg"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 w-20 h-20">
            <svg viewBox="0 0 100 100" className="animate-spin-slow w-full h-full">
              <defs><path id="circleWhy" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" /></defs>
              <text fontSize="9" fontWeight="600" fill="hsl(var(--primary))">
                <textPath href="#circleWhy">MADULA MEDICAL • DOCTORS SEARCH •</textPath>
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold text-primary"># Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mt-2 mb-4">
            Where Compassion Meets Expertise.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We combine cutting-edge medical technology with compassionate care to deliver the best outcomes for our patients.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-foreground mb-1">Expert Professionals</h3>
                <p className="text-sm text-muted-foreground">Our team consists of board-certified specialists with decades of combined experience.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-foreground mb-1">Beyond Treatments</h3>
                <p className="text-sm text-muted-foreground">We focus on holistic wellness, addressing not just symptoms but overall well-being.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
