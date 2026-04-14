import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const services = [
  { title: 'Dental Checkup', icon: '🦷', color: 'bg-purple-100 text-purple-600', desc: 'Comprehensive dental examinations and preventive treatments for optimal oral health.' },
  { title: 'Preventive Care', icon: '📋', color: 'bg-emerald-100 text-emerald-600', desc: 'Proactive health screenings and wellness programs to keep you healthy.' },
  { title: 'Medical Services', icon: '🧠', color: 'bg-pink-100 text-pink-600', desc: 'Full-spectrum medical care from diagnosis to treatment and recovery.' },
  { title: 'Health Monitoring', icon: '✅', color: 'bg-green-100 text-green-600', desc: 'Continuous health tracking and regular check-ups for ongoing wellness.' },
];

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm font-semibold text-primary"
            >
              # Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mt-2"
            >
              Our Medical Services.
            </motion.h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Previous">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Next">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="flex-[0_0_85%] min-w-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1 }}
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, icon, color, desc }: { title: string; icon: string; color: string; desc: string }) => (
  <motion.div
    whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.1)' }}
    className="bg-card border rounded-2xl p-6 transition-shadow cursor-pointer"
  >
    <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-2xl mb-5`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold font-heading text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{desc}</p>
    <a href="#" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
      Read More <ArrowRight className="w-4 h-4" />
    </a>
  </motion.div>
);

export default Services;
