import { Stethoscope, ShieldPlus, Syringe } from 'lucide-react';

const items = ['MEDICAL GROUP', 'CORE SERVICES', 'TECHNOLOGY'];

function Track({ reverse }: { reverse?: boolean }) {
  const content = [...items, ...items, ...items, ...items].map((t, i) => (
    <span key={i} className="flex items-center gap-3 mx-8 text-white font-bold text-base tracking-widest uppercase whitespace-nowrap">
      {i % 3 === 0 ? <Stethoscope size={20} /> : i % 3 === 1 ? <ShieldPlus size={20} /> : <Syringe size={20} />}
      {t}
    </span>
  ));
  return (
    <div className="overflow-hidden py-4">
      <div className="flex w-max" style={{ animation: `${reverse ? 'scrollRight' : 'scrollLeft'} 30s linear infinite` }}>
        {content}
      </div>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div>
      <div className="bg-indigo-600"><Track /></div>
      <div className="bg-slate-900"><Track reverse /></div>
    </div>
  );
}
