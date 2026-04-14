import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-16 lg:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-primary-foreground max-w-md">
            Subscribe To Regular Newsletters.
          </h2>
          <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1 md:w-80">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-l-full bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button className="bg-card text-primary px-6 py-3 rounded-r-full text-sm font-semibold hover:bg-secondary transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
