import * as Dialog from '@radix-ui/react-dialog';
import { X, User, Mail, Phone } from 'lucide-react';

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const field = 'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none';
  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 w-[90vw] max-w-md z-50 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-bold font-display text-slate-900">Book Appointment</Dialog.Title>
            <Dialog.Close className="p-1 hover:bg-slate-100 rounded-full transition-colors">
              <X size={20} className="text-slate-400" />
            </Dialog.Close>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className={`${field} pl-10`} placeholder="Your Name" />
            </div>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className={`${field} pl-10`} placeholder="Your Email" type="email" />
            </div>
            <div className="relative">
              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className={`${field} pl-10`} placeholder="Your Phone" type="tel" />
            </div>
            <select className={field}>
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Dental</option>
              <option>General</option>
            </select>
          </div>
          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition-colors">
            Book My Appointment →
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
