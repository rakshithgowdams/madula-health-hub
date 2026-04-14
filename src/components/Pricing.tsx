import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const plans = [
  { name: 'Basic Plan', price: 150, featured: true, icon: null },
  { name: 'Standard', price: 380, featured: false, icon: null },
  { name: 'Premium', price: 550, featured: false, icon: Star },
];

const features = [
  'Full Body Checkup',
  'Doctor Consultation',
  'Dental Care Package',
  '24/7 Emergency Support',
  'Lab Tests Included',
];

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="py-20 lg:py-28" style={{ backgroundColor: '#F0F0FF' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-sm font-semibold text-primary"># Pricing Plan</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mt-2">
            Flexible Options for Every Patient.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={!plan.featured ? { scale: 1.02, borderColor: 'hsl(239, 84%, 67%)' } : {}}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-primary text-primary-foreground animate-pulse-glow'
                  : 'bg-card border'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold font-heading">{plan.name}</h3>
                {plan.icon && <plan.icon className="w-5 h-5 text-yellow-400" />}
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold font-heading">${plan.price}</span>
                <span className="text-sm opacity-70">/Usd</span>
              </div>
              <ul className="space-y-3 mb-8">
                {features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 ${
                  plan.featured
                    ? 'bg-card text-primary'
                    : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
                }`}
              >
                Pick This Package <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
