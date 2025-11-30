import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BlurText from '../UI/BlurText';
import LightRays from '../UI/LightRays';
import CircularText from '../UI/CircularText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
      gsap.from('.hero-text', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 2.5, // Wait for loader
      });
      */

      gsap.from('.hero-btn', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 3.5,
        ease: 'back.out(1.7)',
      });
      
      // Floating elements animation
      gsap.to('.floating-glow', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
            amount: 2,
            from: "random"
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Spotlight / Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#F2A366"
          raysSpeed={1}
          lightSpread={0.3}
          rayLength={3}
          followMouse={true}
          mouseInfluence={1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
        />
      </div>

      <div className="container relative z-10 mx-auto text-center flex flex-col items-center justify-center">
        <BlurText
          text="Hi, I’m Zain"
          delay={150}
          animateBy="words"
          direction="top"
          className="hero-text mb-6 text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl Justify-center"
        />
        <BlurText
          text="Crafting immersive digital experiences with cutting-edge technology"
          delay={300}
          animateBy="words"
          direction="top"
          className="hero-text mx-auto max-w-2xl text-lg text-gray-400 md:text-xl text-center"
        />
        <BlurText
          text="and modern design."
          delay={350}
          animateBy="words"
          direction="top"
          className="hero-text mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl text-center"
        />
        <div className="hero-btn flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-black transition-all hover:scale-105 cursor-target cursor-none"
          >
            <span className="relative z-10 font-bold">Explore Projects</span>
            <div className="absolute inset-0 -translate-x-full bg-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-target cursor-none"
          >
            Hire Me
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[40%] cursor-none">
        <CircularText
          text="SCROLL*DOWN*BUDDY*"
          onHover="speedUp"
          spinDuration={20}
          className="cursor-target cursor-none"
        />
      </div>
    </section>
  );
};

export default Hero;
