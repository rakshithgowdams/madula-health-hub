import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop', title: 'Reducing waste' },
  { src: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=500&fit=crop', title: 'Reducing waste' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=500&fit=crop', title: 'Health education' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop', title: 'Healthcare through' },
];

export default function Portfolio() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <AnimatedSection>
            <p className="text-indigo-600 text-sm font-semibold mb-2"># Medical Project</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900">One Portfolio at a Time.</h2>
          </AnimatedSection>
          <div className="hidden lg:flex gap-3">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors"><ArrowLeft size={16} /></button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors"><ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map(({ src, title }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{ aspectRatio: '3/4' }}
            >
              <img src={src} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-white/60 text-xs block mb-1">Sustainability Goals</span>
                <h4 className="text-white font-bold text-base">{title}</h4>
              </div>
              <button className="absolute bottom-5 right-5 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-slate-900" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
