import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Heart, ArrowRight, Plus } from 'lucide-react';

const stats = [
  { end: 500, suffix: '+', label: 'Patients Served' },
  { end: 2, suffix: 'M+', label: 'Reports Delivered' },
  { end: 100, suffix: '+', label: 'Expert Specialists' },
];
const avatars = [
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face',
];

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const words = ['YOUR', 'HEALTH', 'OUR', 'PRIORITY'];

  return (
    <section className="hero-section bg-[#F8F9FF] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden mx-[43px] my-px">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span className="text-xs font-semibold tracking-widest text-red-500 uppercase">Solutions For Better Health</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display leading-tight text-slate-900 mb-4 lg:mb-6">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className={w === 'HEALTH' ? 'text-indigo-600' : ''}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {w}{' '}
                </motion.span>
              ))}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              We are dedicated to putting your health at the forefront of everything we do. Our compassionate team of healthcare professionals is here for you.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-colors group">
                Read More
                <motion.span whileHover={{ x: 4 }}><ArrowRight size={18} /></motion.span>
              </button>
              <div className="flex items-center gap-3 my-[18px]">
                <div className="flex">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="team"
                      loading="lazy"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      style={{ marginLeft: i === 0 ? 0 : -10 }}
                    />
                  ))}
                  <div
                    className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ marginLeft: -10 }}
                  >
                    +
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">2000+</p>
                  <p className="text-xs text-slate-500">Experience Team</p>
                </div>
              </div>
            </div>
            <div ref={ref} className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 lg:pt-8 border-t border-slate-100">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
                    {inView ? <CountUp end={s.end} suffix={s.suffix} duration={2.5} /> : '0'}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="order-1 lg:order-2 relative h-[300px] sm:h-[420px] lg:h-[580px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Doctor image — overflow hidden only on this wrapper */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <img
                className="hero-image block h-full w-full object-contain object-bottom"
                alt="Doctor"
                loading="lazy"
                src="/Dr._Hero_section_Image.svg"
              />
            </div>

            {/* Decorative SVGs — visible on all breakpoints with responsive sizing */}
            <div className="hidden sm:flex float-el absolute top-4 right-3 md:top-2 md:right-2 lg:-top-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 items-center justify-center z-10 pointer-events-none">
              <img src="/Purple_place-2.svg" alt="" className="w-full h-full" />
            </div>
            <div className="hidden sm:flex float-el absolute bottom-12 left-2 md:bottom-16 md:left-1 lg:bottom-20 lg:-left-4 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 items-center justify-center z-10 pointer-events-none">
              <img src="/Pink_Bless-2.svg" alt="" className="w-full h-full" />
            </div>
            <div className="hidden sm:block absolute top-[14%] left-0 md:top-[18%] md:-left-3 lg:top-[20%] lg:-left-10 z-10 pointer-events-none">
              <motion.img
                src="/Heart_message-2.svg"
                alt=""
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-xl"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <div className="hidden sm:block absolute top-[18%] right-0 md:top-[22%] md:right-0 lg:top-[28%] lg:-right-8 z-10 pointer-events-none">
              <motion.img
                src="/Heart_message_1.svg"
                alt=""
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-xl lg:mx-[74px] lg:px-0 lg:my-[64px]"
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
