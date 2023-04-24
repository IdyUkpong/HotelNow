import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  delay?: number;
  children?: React.ReactNode;
}

const FadeInOut: React.FC<Props> = ({ delay = 0, children }) => {
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView({ threshold: 0 });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (elementRef.current && visible) {
      elementRef.current.style.opacity = '1';
      elementRef.current.style.transition = `opacity 1s ease-in-out ${delay}ms`;
    }
  }, [visible, delay]);

  return (
    <div ref={ref}>
      <div ref={elementRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
};

export default FadeInOut;
