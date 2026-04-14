import { useInView } from 'react-intersection-observer';

interface CircularProgressProps {
  percentage: number;
  label: string;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress = ({ percentage, label, size = 100, strokeWidth = 8 }: CircularProgressProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={inView ? offset : circumference}
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
        />
      </svg>
      <div className="text-center">
        <span className="text-xl font-bold font-heading text-foreground">{percentage}%</span>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export default CircularProgress;
