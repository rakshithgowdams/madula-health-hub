import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = '', duration = 2.5 }: AnimatedCounterProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={end} duration={duration} suffix={suffix} />
      ) : (
        '0' + suffix
      )}
    </span>
  );
};

export default AnimatedCounter;
