import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BeaconhouseUniversity from '../../assets/asdasd.jpg';
import SyncNSecure from '../../assets/unnamed.jpg';
import Xoftscript from '../../assets/xs.png';
import GulfCrescentTech from '../../assets/Dubai-free-zone.jpg';

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
                May 2018
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-14">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Completed my Bachelors in Software Engineering from Beaconhouse University Lahore.
                </div>
              </div>
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={BeaconhouseUniversity} 
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
                March 2019
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-8">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Started my career as a Software Engineer at Sync N Secure, an IoT company based in lahore.
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={SyncNSecure} 
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
                Aug 2020
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-8">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Switched to Full Stack Development in Xoftscript, A Software Development Company based in Lahore, Pakistan.
                </div>
              </div>
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={Xoftscript} 
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
                Oct 2023 - Present
              </div>
            </div>
            <div className="row-span-2 md:row-auto md:col-auto flex justify-start md:justify-center relative">
              <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_var(--color-background)] z-10"></div>
            </div>
            <div className="col-start-2 md:col-auto row-start-2 md:row-auto flex flex-col">
              <div className="mb-8">
                <div className="text-white text-xl md:text-2xl font-medium leading-snug">
                    Currently Working remotely as a Full Stack Developer at Gulf Crescent Tech, an industrial automation company based in Dubai, UAE.
                </div>
              </div>
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={GulfCrescentTech}
                  loading="lazy" 
                  alt="Tesla Milestone" 
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
