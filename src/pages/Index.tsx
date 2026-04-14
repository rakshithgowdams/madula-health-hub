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
  <div>
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
  </div>
);

export default Index;
