import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import MarqueeBanner from '@/components/MarqueeBanner';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

const Index = () => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <MarqueeBanner />
      <Portfolio />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </motion.div>
  </AnimatePresence>
);

export default Index;
