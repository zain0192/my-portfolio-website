import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MyLogo from '../../assets/my-logo.png'

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (loaderRef.current) {
          loaderRef.current.style.display = 'none';
        }
        onComplete();
      },
    });

    tl.to(progressRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
    })
      .to(
        textRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
        },
        '-=0.5'
      )
      .to(loaderRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power2.inOut',
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-background)] text-white"
    >
      <div ref={textRef} className="mb-4 tracking-widest">
        <img src={MyLogo} alt="My Logo" />
      </div>
      <div className="h-1 w-64 overflow-hidden rounded-full bg-gray-800">
        <div
          ref={progressRef}
          className="h-full w-0 bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]"
        />
      </div>
    </div>
  );
};

export default Loader;
