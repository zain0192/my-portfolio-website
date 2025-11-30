import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressBarRef.current) return;

    // Create scroll-linked animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    // Animate the width of the progress bar from 0% to 100%
    tl.to(progressBarRef.current, {
      width: '100%',
      ease: 'none',
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] pointer-events-none">
      {/* Background container */}
      <div className="absolute w-full h-full"></div>
      
      {/* Progress bar with orange neon gradient */}
      <div
        ref={progressBarRef}
        className="absolute h-full w-0"
        style={{
          background: 'linear-gradient(90deg, #ff6b00 0%, #ff9500 25%, #ffb800 50%, #ff9500 75%, #ff6b00 100%)',
          boxShadow: `
            0 0 10px rgba(255, 107, 0, 0.6),
            0 0 20px rgba(255, 107, 0, 0.4),
            0 0 30px rgba(255, 107, 0, 0.2),
            0 2px 8px rgba(255, 107, 0, 0.5)
          `,
        }}
      >
        {/* Additional glow effect on top */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 184, 0, 0.8) 50%, transparent 100%)',
            filter: 'blur(4px)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
