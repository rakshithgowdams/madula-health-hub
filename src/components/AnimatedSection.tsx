import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export default function AnimatedSection({ children, delay = 0, direction = 'up' }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const x = direction === 'left' ? -40 : direction === 'right' ? 40 : 0;
  const y = direction === 'up' ? 40 : 0;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
