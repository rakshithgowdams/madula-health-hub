import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-indigo-600 rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <h2 className="text-white font-extrabold font-display text-3xl md:text-4xl max-w-xs">
            Subscribe To Regular Newsletters.
          </h2>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-4 flex-1 md:w-72">
              <Mail size={16} className="text-slate-400 flex-shrink-0" />
              <input className="flex-1 text-sm focus:outline-none bg-transparent" placeholder="Enter Your Email" />
            </div>
            <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-4 rounded-full font-semibold text-sm whitespace-nowrap transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
