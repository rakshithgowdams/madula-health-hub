import { Target, MapPin, Phone, Mail, ArrowUp, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl">Ma<span className="font-bold">dula</span></span>
            </a>
            <p className="text-sm text-primary-foreground/60 mb-6 leading-relaxed">Providing compassionate healthcare with cutting-edge medical solutions.</p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.2 }} className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold font-heading mb-4">Links</h4>
            {['About Us', 'Services', 'Services Details', 'Doctors', 'Contact Us'].map((l) => (
              <a key={l} href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground py-1 transition-colors">{l}</a>
            ))}
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold font-heading mb-4">Services</h4>
            {['Patient Resources', 'Payment Options', 'Telemedicine Portal', 'Insurance Information', 'Appointment Booking'].map((l) => (
              <a key={l} href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground py-1 transition-colors">{l}</a>
            ))}
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold font-heading mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="flex items-start gap-2 text-sm text-primary-foreground/60"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 1901 Thornridge Cir. Shiloh</p>
              <p className="flex items-start gap-2 text-sm text-primary-foreground/60"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> 013 354 213 - 92132</p>
              <p className="flex items-start gap-2 text-sm text-primary-foreground/60"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> info123@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Madula. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={scrollTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
