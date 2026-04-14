import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const testimonials = [
  { name: 'Sarah Johnson', title: 'Patient', text: 'The care I received at Madula was exceptional. The staff was attentive, professional, and truly compassionate. I felt like family from the moment I walked in.' },
  { name: 'Michael Chen', title: 'Senior Doctor', text: 'Working with such a dedicated team has been incredible. Our focus on patient-centered care sets us apart and delivers outstanding health outcomes.' },
  { name: 'Emily Davis', title: 'Patient', text: 'From diagnosis to treatment, every step was handled with utmost care and professionalism. I highly recommend Madula to anyone seeking quality healthcare.' },
  { name: 'Robert Wilson', title: 'Specialist', text: 'The cutting-edge facilities and collaborative environment at Madula enable us to provide the highest standard of medical care to our patients.' },
];

const partners = ['Airtable', 'Uber', 'Amazon', 'Vine', 'Monday', 'TED'];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-semibold text-primary block"># Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mt-2">What Our Patients Say?</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Previous"><ArrowLeft className="w-4 h-4" /></button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Next"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_48%] min-w-0 bg-card border rounded-2xl p-6 relative">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-border" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (<Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16">
          {partners.map((p) => (
            <span key={p} className="text-lg font-bold text-foreground/30 hover:text-foreground/80 transition-colors cursor-pointer font-heading">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
