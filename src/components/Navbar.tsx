import { useState } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { Target, Search, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';

const links = ['Home', 'About', 'Research', 'Page', 'Blog', 'Contact'];
const hasDropdown = ['Research', 'Page'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 60], ['none', '0 2px 20px rgba(0,0,0,.08)']);

  return (
    <>
      <motion.nav
        style={{ boxShadow: shadow }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
              <Target size={18} color="white" />
            </div>
            <span className="text-xl text-slate-900">
              Ma<span className="font-bold">dula</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors flex items-center gap-1">
                {l}
                {hasDropdown.includes(l) && <ChevronDown size={12} />}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="Search">
              <Search size={18} className="text-slate-600" />
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Book Appointment <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu size={24} className="text-slate-900" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute top-0 right-0 h-full w-72 bg-white p-6 flex flex-col"
            >
              <button className="self-end mb-8" onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-lg font-medium text-slate-900 py-3 border-b border-slate-100" onClick={() => setOpen(false)}>
                  {l}
                </a>
              ))}
              <button
                onClick={() => { setModalOpen(true); setOpen(false); }}
                className="mt-auto bg-indigo-600 text-white py-3 rounded-full font-semibold"
              >
                Book Appointment
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
