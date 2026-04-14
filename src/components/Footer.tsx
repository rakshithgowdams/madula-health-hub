import { useState, useEffect } from 'react';
import { Target, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const links1 = ['About Us', 'Services', 'Services Details', 'Doctors', 'Contact Us'];
const links2 = ['Patient Resources', 'Payment Options', 'Telemedicine Portal', 'Insurance Information', 'Appointment Booking'];

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <footer className="bg-slate-50 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Target size={18} color="white" />
                </div>
                <span className="font-bold text-xl text-slate-900">Ma<span className="text-indigo-600">dula</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">We are committed to delivering exceptional healthcare with compassion, expertise, and innovation.</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:text-white text-slate-500 transition-all">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Link</h4>
              <ul className="space-y-2">
                {links1.map(l => (
                  <li key={l}><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-2">
                {links2.map(l => (
                  <li key={l}><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contact US</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-500"><MapPin size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />1901 Thornridge Cir. Shiloh</li>
                <li className="flex items-start gap-3 text-sm text-slate-500"><Phone size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />013 354 213 - 92132</li>
                <li className="flex items-start gap-3 text-sm text-slate-500"><Mail size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />info123@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">Copyright © 2026 Dexignlab. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">Terms & Conditions</a>
              <a href="#" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center shadow-lg transition-colors z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} color="white" />
        </button>
      )}
    </>
  );
}
