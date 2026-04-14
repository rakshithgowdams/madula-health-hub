import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const bullets = [
  'Transforming healthcare experiences through',
  'Providing care with kindness and understanding',
  'Striving for the highest standards in every service',
  'Dedicated to improving public health outcomes',
];

function CircleProgress({ pct, label }: { pct: number; label: string }) {
  const r = 45, circ = 2 * Math.PI * r;
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#E2E8F0" strokeWidth="6" />
        <motion.circle
          cx="50" cy="50" r={r} fill="none" stroke="#4F46E5" strokeWidth="6"
          strokeLinecap="round" strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: circ - (circ * pct) / 100 } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0F172A">{pct}%</text>
      </svg>
      <p className="text-sm text-slate-500 text-center mt-2">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="about-section bg-[#F8F9FF] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — image stack */}
          <AnimatedSection direction="left" className="overflow-hidden">
            <div className="relative h-[360px] sm:h-[440px] lg:h-[520px]">
              <div className="absolute left-0 bottom-0 w-3/4 h-[75%] overflow-hidden rounded-3xl shadow-xl">
                <img className="about-main-img w-full h-full object-cover my-0" alt="Doctor with patient" loading="lazy"
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop" />
              </div>
              <div className="absolute right-0 top-0 w-[55%] h-[55%] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img className="about-sec-img w-full h-full object-cover my-0" alt="Medical team" loading="lazy"
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=350&fit=crop" />
              </div>
              {/* Rotating badge */}
              <div className="hidden lg:block absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 pointer-events-none">
                <svg viewBox="0 0 100 100" width="96" height="96" className="animate-spin" style={{ animationDuration: '20s' }}>
                  <defs><path id="tc2" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" fill="none" /></defs>
                  <text fontSize="9.5" fill="#4F46E5"><textPath href="#tc2">MADULA MEDICAL • DOCTORS SEARCH •</textPath></text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection direction="right">
            <p className="text-indigo-600 text-sm font-semibold mb-2"># About Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mb-6">
              Excellence in Healthcare Rooted in Trust.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              For years, we've dedicated ourselves to delivering exceptional medical care with integrity, compassion, and respect. Our commitment to excellence goes beyond treatments.
            </p>
            <ul className="space-y-4 mb-10">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle2 size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{b}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-8 flex-wrap mb-10">
              <button className="border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 px-6 py-3 rounded-full text-sm font-semibold transition-colors">
                More About Us →
              </button>
              <span className="text-slate-400 text-xl italic font-serif">Jason Gomez</span>
            </div>
            <div className="flex gap-8">
              <CircleProgress pct={85} label="Qualified Doctors" />
              <CircleProgress pct={60} label="Open Communication" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
