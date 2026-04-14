import { Stethoscope, ShieldPlus, Syringe } from 'lucide-react';

const items = [
  { icon: Stethoscope, label: 'MEDICAL GROUP' },
  { icon: ShieldPlus, label: 'CORE SERVICES' },
  { icon: Syringe, label: 'TECHNOLOGY' },
];

const MarqueeRow = ({ direction, bg }: { direction: 'left' | 'right'; bg: string }) => (
  <div className={`${bg} py-4 overflow-hidden`}>
    <div className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} style={{ display: 'flex', width: 'max-content' }}>
      {[...Array(6)].map((_, rep) =>
        items.map((item, i) => (
          <div key={`${rep}-${i}`} className="flex items-center gap-3 mx-8 text-primary-foreground">
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest whitespace-nowrap">{item.label}</span>
          </div>
        ))
      )}
    </div>
  </div>
);

const MarqueeBanner = () => (
  <section className="overflow-hidden">
    <MarqueeRow direction="left" bg="bg-primary" />
    <MarqueeRow direction="right" bg="bg-foreground" />
  </section>
);

export default MarqueeBanner;
