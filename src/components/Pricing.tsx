import { motion } from 'framer-motion';
import { Check, ArrowRight, X, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  'Seasonal health check-up packages',
  'Packages for routine check-ups',
  'Acceptance of major insurance plans',
  'Interest-free installment options',
  'Tailored health plans to suit individual',
];

const plans = [
  { name: 'Basic Plan', price: 150, featured: true },
  { name: 'Standard', price: 380, featured: false },
  { name: 'Premium', price: 550, featured: false, star: true },
];

export default function Pricing() {
  return (
    <section className="bg-[#F0F0FF] py-16 lg:py-24 relative overflow-hidden">
      <X size={32} className="text-indigo-200 absolute top-12 left-12" />
      <X size={32} className="text-indigo-200 absolute bottom-12 right-12" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-indigo-600 text-sm font-semibold mb-2"># Pricing Table</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900">Flexible Options for Every Patient.</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ name, price, featured, star }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={!featured ? { scale: 1.02, boxShadow: '0 20px 40px rgba(79,70,229,.15)' } : {}}
              className={`rounded-3xl p-8 ${featured ? 'bg-indigo-600 text-white shadow-2xl lg:scale-105 z-10' : 'bg-white border border-slate-100'}`}
            >
              <p className={`text-sm font-semibold mb-2 ${featured ? 'text-indigo-200' : 'text-slate-500'}`}>{name}</p>
              <div className="flex items-baseline gap-1 mb-1">
                {star && <Star size={16} className="text-yellow-400 fill-yellow-400 mb-1" />}
                <span className={`text-5xl font-extrabold font-display ${featured ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                <span className={featured ? 'text-indigo-300' : 'text-slate-400'}>/Usd</span>
              </div>
              <p className={`text-sm mb-6 ${featured ? 'text-indigo-200' : 'text-slate-400'}`}>Primary Health Check-Up</p>
              <div className={`border-t ${featured ? 'border-indigo-500' : 'border-slate-100'} my-6`} />
              <ul className="space-y-3 mb-8">
                {features.map(f => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${featured ? 'text-indigo-100' : 'text-slate-600'}`}>
                    <Check size={16} className={`${featured ? 'text-indigo-300' : 'text-indigo-600'} mt-0.5 flex-shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm w-full justify-center transition-colors ${featured ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600'}`}>
                Pick This Package <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
