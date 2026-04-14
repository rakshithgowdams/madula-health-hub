import { ShieldCheck, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  { Icon: ShieldCheck, bg: 'bg-pink-100', color: 'text-pink-600', title: 'Expert Professionals', desc: 'Our highly skilled doctors, nurses, and specialists bring years of experience and a commitment to excellence in every service we provide.' },
  { Icon: Heart, bg: 'bg-teal-100', color: 'text-teal-600', title: 'Beyond treatments', desc: 'Our highly skilled doctors, nurses, and specialists bring years of experience and a commitment to excellence in every service we provide.' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F9FF] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rotate-3 rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
                <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&h=600&fit=crop"
                  alt="Doctor" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-600 rounded-2xl opacity-20" />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <p className="text-indigo-600 text-sm font-semibold mb-2"># Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mb-6">
              Where Compassion Meets Expertise.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              We believe healthcare is not just about treating illnesses — it's about caring for people. With a perfect balance of compassion and expertise, our team is dedicated to providing exceptional medical care.
            </p>
            <div className="space-y-6">
              {features.map(({ Icon, bg, color, title, desc }) => (
                <div key={title} className="flex items-start gap-5">
                  <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={24} className={color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
