import useEmblaCarousel from 'embla-carousel-react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  { text: 'The team at Md Nuristan Sheik went above and beyond during my treatment. From the doctors to the nurses, everyone was incredibly attentive and caring throughout the entire process.', name: 'DR Tamim Hossin', role: 'Senior Doctor', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face' },
  { text: 'The team at Md Nuristan Sheik went above and beyond during my treatment. From the doctors to the nurses, everyone was incredibly attentive and caring throughout the entire process.', name: 'DR Tamim Hossin', role: 'Senior Doctor', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face' },
];
const partners = ['Airtable', 'Uber', 'amazon', 'Vine', 'monday.com', 'TED'];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-indigo-600 text-sm font-semibold mb-2"># Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mb-12">What Our Patients Say?</h2>
        </AnimatedSection>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-none w-full md:w-1/2 border border-slate-100 rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {Array(5).fill(0).map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                        <p className="text-slate-400 text-xs">{t.role}</p>
                      </div>
                    </div>
                    <span className="text-slate-100 text-8xl font-serif leading-none select-none">"</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => emblaApi?.scrollPrev()} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors"><ArrowLeft size={16} /></button>
            <button onClick={() => emblaApi?.scrollNext()} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors"><ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-16 pt-10 border-t border-slate-100">
          {partners.map(p => (
            <span key={p} className="text-slate-300 hover:text-slate-500 font-bold text-lg transition-colors cursor-pointer select-none">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
