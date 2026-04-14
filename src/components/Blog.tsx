import { motion } from 'framer-motion';
import { User, MessageSquare, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const posts = [
  { day: '12', month: 'May', title: 'How to Maintain A Balanced Diet And Exercise.', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=400&fit=crop' },
  { day: '14', month: 'May', title: 'Coping strategies for stress, anxiety, and depression.', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&h=400&fit=crop' },
  { day: '16', month: 'May', title: 'Latest medical technologies and treatments available.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
];

export default function Blog() {
  return (
    <section className="bg-[#F8F9FF] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <AnimatedSection>
            <p className="text-indigo-600 text-sm font-semibold mb-2"># Blog</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900">Our Medical Blog.</h2>
          </AnimatedSection>
          <button className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors">
            View All Blog <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ day, month, title, img }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,.08)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer"
            >
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <img src={img} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center shadow-md">
                  <span className="text-indigo-600 font-bold text-lg leading-none">{day}</span>
                  <span className="text-slate-400 text-xs">{month}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><User size={11} /> By Admin</span>
                  <span className="flex items-center gap-1"><MessageSquare size={11} /> 02 Comment</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base leading-snug mb-4">{title}</h3>
                <button className="flex items-center gap-2 border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 px-4 py-2 rounded-full text-sm text-slate-600 transition-colors">
                  Read More <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
