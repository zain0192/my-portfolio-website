import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.height = `${self.progress * 100}%`;
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" className="bg-[var(--color-background)] text-white font-sans relative" ref={containerRef}>
      <div className="w-[90vw] max-w-[1360px] mx-auto relative">
        
        {/* Heading */}
        <div className="flex flex-col w-full items-center justify-center px-8 mb-16">
            <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">
                My <span className="text-[var(--color-accent)]">Journey</span>
            </h2>
        </div>

        {/* Timeline Component */}
        <div ref={timelineRef} className="flex flex-col justify-center items-center max-w-[1120px] mx-auto relative">
          
          {/* Progress Bar Track */}
          <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#414141] z-0"></div>
          
          {/* Active Progress Bar (Animated) */}
          <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] z-0">
             <div ref={progressRef} className="w-full bg-gradient-to-b from-[var(--color-accent)] to-[#ff6a00] h-0"></div>
          </div>

          {/* Item 1 */}
          <div className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative z-10 w-full">
            <div className="col-start-2 md:col-auto text-left md:text-right flex md:justify-end items-start">
              <div className="text-[var(--color-accent)] text-4xl md:text-5xl font-medium leading-tight sticky top-[50vh] mb-6 md:mb-0">
                January 2010
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-14">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Tesla introduces its first electric car, the Roadster, showing
                  the world the potential of electric vehicles with a range of
                  over 200 miles.
                </div>
              </div>
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src="https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg" 
                  loading="lazy" 
                  alt="Tesla Roadster" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative z-10 w-full">
            <div className="col-start-2 md:col-auto text-left md:text-right flex md:justify-end items-start">
              <div className="text-[var(--color-accent)] text-4xl md:text-5xl font-medium leading-tight sticky top-[50vh] mb-6 md:mb-0">
                March 2015
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-8">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  The Chevy Bolt EV is launched, providing an affordable
                  alternative to Tesla’s luxury offerings, and pushing the
                  industry closer to mass-market electric vehicles.
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://imageio.forbes.com/specials-images/imageserve/6335d2c49044f4bf8e4becc0//960x0.jpg" 
                  loading="lazy" 
                  alt="Chevy Bolt EV" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative z-10 w-full">
            <div className="col-start-2 md:col-auto text-left md:text-right flex md:justify-end items-start">
              <div className="text-[var(--color-accent)] text-4xl md:text-5xl font-medium leading-tight sticky top-[50vh] mb-6 md:mb-0">
                July 2020
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-8">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Governments around the world, including the EU and the US,
                  announce ambitious goals for the phase-out of gas-powered
                  vehicles, further accelerating the electric vehicle
                  transition.
                </div>
              </div>
              <div className="mb-14">
                <p className="text-white/65 text-lg">
                  Countries like Norway plan to ban the sale of new internal
                  combustion engine vehicles by 2025, promoting EV adoption as a
                  critical environmental initiative.
                </p>
              </div>
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src="https://imageio.forbes.com/specials-images/imageserve/6335d4e2fb9864af06377afd//960x0.jpg" 
                  loading="lazy" 
                  alt="Government EV Announcement" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative z-10 w-full">
            <div className="col-start-2 md:col-auto text-left md:text-right flex md:justify-end items-start">
              <div className="text-[var(--color-accent)] text-4xl md:text-5xl font-medium leading-tight sticky top-[50vh] mb-6 md:mb-0">
                February 2021
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-8">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Tesla achieves a milestone of producing over 1 million
                  vehicles,
                  cementing its position as the leader in the electric vehicle
                  market.
                </div>
              </div>
              <div className="mb-14">
                <div className="inline-block">
                  <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[var(--color-accent)] uppercase font-bold text-sm tracking-wider opacity-80 hover:opacity-100 transition-opacity">
                    Tesla’s achievements
                  </a>
                </div>
              </div>
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src="https://imageio.forbes.com/specials-images/imageserve/6335d3b738b890b16d377aff//960x0.jpg" 
                  loading="lazy" 
                  alt="Tesla Milestone" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative z-10 w-full">
            <div className="col-start-2 md:col-auto text-left md:text-right flex md:justify-end items-start">
              <div className="text-[var(--color-accent)] text-4xl md:text-5xl font-medium leading-tight sticky top-[50vh] mb-6 md:mb-0">
                October 2022
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-8">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Electric vehicles make up more than 10% of global vehicle
                  sales,
                  marking a significant milestone in the transition to greener
                  transportation.
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://imageio.forbes.com/specials-images/imageserve/62c59c93a89b61113849c82f//960x0.jpg" 
                  loading="lazy" 
                  alt="Electric Vehicle Sales Milestone" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[var(--color-background)] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--color-background)] to-transparent z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
