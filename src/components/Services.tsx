import { motion } from 'framer-motion';
import { Smile, ClipboardList, Brain, ClipboardCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  { title: 'Dental Checkup', Icon: Smile, bg: 'bg-purple-100', color: 'text-purple-600', desc: 'Our comprehensive preventive care services are designed to identify potential issues early.' },
  { title: 'Preventive Care', Icon: ClipboardList, bg: 'bg-green-100', color: 'text-green-600', desc: 'Our comprehensive preventive care services are designed to identify potential issues early.' },
  { title: 'Medical Services', Icon: Brain, bg: 'bg-pink-100', color: 'text-pink-600', desc: 'Our comprehensive preventive care services are designed to identify potential issues early.' },
  { title: 'Preventive Care', Icon: ClipboardCheck, bg: 'bg-green-100', color: 'text-green-600', desc: 'Our comprehensive preventive care services are designed to identify potential issues early.' },
];

export default function Services() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <AnimatedSection>
            <p className="text-indigo-600 text-sm font-semibold mb-2"># Our Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900">Our Medical Services.</h2>
          </AnimatedSection>
          <div className="hidden lg:flex gap-3">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors"><ArrowLeft size={16} /></button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors"><ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map(({ title, Icon, bg, color, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(79,70,229,.12)' }}
              className="bg-white border border-slate-100 rounded-2xl p-5 lg:p-8 cursor-pointer group"
            >
              <div className={`w-12 h-12 lg:w-16 lg:h-16 ${bg} rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6`}>
                <Icon size={22} className={color} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 lg:mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 lg:mb-6">{desc}</p>
              <a className="flex items-center gap-2 text-indigo-600 text-sm font-semibold group-hover:gap-3 transition-all">
                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
