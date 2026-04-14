import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import CircularProgress from './ui/CircularProgress';

const bullets = [
  'Transforming healthcare experiences through innovation',
  'Providing care with kindness and understanding',
  'Striving for the highest standards in every service',
  'Dedicated to improving public health outcomes',
];

const About = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-64 h-80 bg-primary/10 rounded-2xl -z-10" />
        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500" alt="Female doctor smiling" className="rounded-2xl w-full max-w-sm object-cover shadow-lg" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400" alt="Medical team in discussion" className="absolute -bottom-8 right-0 w-48 md:w-56 rounded-2xl shadow-xl border-4 border-card object-cover" loading="lazy" />
        <div className="absolute -bottom-4 left-4 w-20 h-20">
          <svg viewBox="0 0 100 100" className="animate-spin-slow w-full h-full">
            <defs><path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" /></defs>
            <text fontSize="9" fontWeight="600" fill="hsl(var(--primary))"><textPath href="#circlePath">MADULA MEDICAL • DOCTORS SEARCH •</textPath></text>
          </svg>
        </div>
      </div>

      <div>
        <span className="text-sm font-semibold text-primary block"># About Us</span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mt-2 mb-4">Excellence in Healthcare Rooted in Trust.</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">We are dedicated to delivering compassionate and innovative medical services. Our team of experienced professionals strives for excellence in every aspect of patient care.</p>
        <ul className="space-y-3 mb-8">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground">{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 mb-8">
          <motion.a href="#" whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium">More About Us <ArrowRight className="w-4 h-4" /></motion.a>
          <div>
            <p className="font-heading text-lg italic text-foreground">Jason Gomez</p>
            <p className="text-xs text-muted-foreground">Chief Medical Officer</p>
          </div>
        </div>
        <div className="flex gap-10">
          <CircularProgress percentage={85} label="Qualified Doctors" />
          <CircularProgress percentage={60} label="Open Communication" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
