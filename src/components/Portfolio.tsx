import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400', title: 'Advanced Diagnostics' },
  { img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400', title: 'Patient Care Innovation' },
  { img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400', title: 'Research Laboratory' },
  { img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400', title: 'Digital Health Platform' },
];

const Portfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="portfolio" className="py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-sm font-semibold text-primary"># Medical Project</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mt-2 mb-12">
          One Portfolio at a Time.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[3/4]"
            >
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">Sustainability Goals</span>
                <h3 className="text-primary-foreground font-bold font-heading mt-1">{p.title}</h3>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="w-9 h-9 rounded-full bg-card flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
