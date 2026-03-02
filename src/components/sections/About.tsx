import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoLoop from '../UI/LogoLoop';
import type { LogoItem } from '../UI/LogoLoop';
import NodeLogo from '../../assets/nodejs.png';
import ReactLogo from '../../assets/reactjs.png';
import PythonLogo from '../../assets/python.png';
import FastAPILogo from '../../assets/fastapi.png';
import TypeScriptLogo from '../../assets/ts.png';
import JavaScriptLogo from '../../assets/js.png';
import WordPressLogo from '../../assets/wordpress.png';
import ShopifyLogo from '../../assets/shopify.png';
import CssLogo from '../../assets/css.png';
import HtmlLogo from '../../assets/html.png';
import FirebaseLogo from '../../assets/firebase.png';
import MongoLogo from '../../assets/mongo.png';
import PostgresLogo from '../../assets/postgresql.png';
import QtLogo from '../../assets/qt.png';
import SupabaseLogo from '../../assets/supabase.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 85%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technologies: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={NodeLogo} alt="Node.js" width={42} height={42} />
          <span className="text-white font-semibold">Node.js</span>
        </div>
      ),
      title: 'Node.js'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={ReactLogo} alt="React" width={42} height={42} />
          <span className="text-white font-semibold">React</span>
        </div>
      ),
      title: 'React.js'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={PythonLogo} alt="Python" width={42} height={42} />
          <span className="text-white font-semibold">Python</span>
        </div>
      ),
      title: 'Python'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={FastAPILogo} alt="FastAPI" width={42} height={42} />
          <span className="text-white font-semibold">FastAPI</span>
        </div>
      ),
      title: 'FastAPI'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={TypeScriptLogo} alt="TypeScript" width={42} height={42} />
          <span className="text-white font-semibold">TypeScript</span>
        </div>
      ),
      title: 'TypeScript'
    },
        {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={ReactLogo} alt="React Native" width={42} height={42} />
          <span className="text-white font-semibold">React Native</span>
        </div>
      ),
      title: 'React Native'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={JavaScriptLogo} alt="JavaScript" width={42} height={42} />
          <span className="text-white font-semibold">JavaScript</span>
        </div>
      ),
      title: 'JavaScript'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={WordPressLogo} alt="WordPress" width={42} height={42} />
          <span className="text-white font-semibold">WordPress</span>
        </div>
      ),
      title: 'WordPress'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={ShopifyLogo} alt="Shopify" width={42} height={42} />
          <span className="text-white font-semibold">Shopify</span>
        </div>
      ),
      title: 'Shopify'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={MongoLogo} alt="MongoDB" width={42} height={42} />
          <span className="text-white font-semibold">MongoDB</span>
        </div>
      ),
      title: 'MongoDB'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={PostgresLogo} alt="PostgreSQL" width={42} height={42} />
          <span className="text-white font-semibold">PostgreSQL</span>
        </div>
      ),
      title: 'PostgreSQL'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={QtLogo} alt="Qt" width={42} height={42} />
          <span className="text-white font-semibold">Qt</span>
        </div>
      ),
      title: 'Qt'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={SupabaseLogo} alt="Supabase" width={42} height={42} />
          <span className="text-white font-semibold">Supabase</span>
        </div>
      ),
      title: 'Supabase'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={FirebaseLogo} alt="Firebase" width={42} height={42} />
          <span className="text-white font-semibold">Firebase</span>
        </div>
      ),
      title: 'Firebase'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={HtmlLogo} alt="HTML" width={42} height={42} />
          <span className="text-white font-semibold">HTML</span>
        </div>
      ),
      title: 'HTML'
    },
    {
      node: (
        <div className="flex items-center gap-2 px-4 py-2">
          <img src={CssLogo} alt="CSS" width={42} height={42} />
          <span className="text-white font-semibold">CSS</span>
        </div>
      ),
      title: 'CSS'
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-20">
          {/* Profile Image */}
          <div className="about-content relative flex justify-center md:w-1/2">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-[var(--color-accent)] opacity-20 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--color-accent)] bg-gray-900 transition-transform duration-500 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                  alt="Profile"
                  className="h-full w-full object-cover opacity-80 mix-blend-luminosity transition-all duration-500 hover:opacity-100 hover:mix-blend-normal"
                />
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="md:w-1/2">
            <h2 className="about-content mb-6 text-3xl font-bold text-white md:text-4xl">
              About <span className="text-[var(--color-accent)]">Me</span>
            </h2>
            <p className="about-content mb-8 text-lg leading-relaxed text-gray-400">
              I’m a dynamic Software Engineer with 6 years of driving innovation across full-stack development, cloud technologies, and agile practices.I craft scalable, high-performance systems that empower businesses to thrive. Collaboration is my superpower, and I thrive in cross-functional teams where ideas spark into breakthrough results. Fueled by passion for solving complex technical challenges, I’m ready to channel my expertise and leadership into cutting-edge projects that push boundaries and redefine what’s possible
            </p>
          </div>
        </div>

        {/* Technologies Loop */}
        <div className="about-content mt-16">
          <h3 className="mb-8 text-2xl font-bold text-white text-center">
            Technologies I <span className="text-[var(--color-accent)]">Work With</span>
          </h3>
          <LogoLoop 
            logos={technologies}
            speed={50}
            direction="left"
            logoHeight={40}
            gap={42}
            pauseOnHover={true}
            scaleOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
