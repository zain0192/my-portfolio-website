import { useState, useEffect, useRef } from 'react';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import gsap from 'gsap';
import { useLenis } from '../../context/LenisContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hireMeRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Animate menu entrance
      const tl = gsap.timeline();
      
      // Menu container slides in from right with scale
      tl.fromTo(
        menuRef.current,
        {
          x: '100%',
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power4.out',
        }
      );

      // Close button spins in
      tl.fromTo(
        closeButtonRef.current,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
        },
        '-=0.3'
      );

      // Stagger animate menu items from bottom with rotation
      tl.fromTo(
        menuItemsRef.current,
        {
          y: 50,
          opacity: 0,
          rotationX: -90,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.2)',
        },
        '-=0.3'
      );

      // Animate hire me button
      tl.fromTo(
        hireMeRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.5)',
        },
        '-=0.3'
      );
    } else {
      document.body.style.overflow = 'unset';
      
      // Animate menu exit
      const tl = gsap.timeline();
      
      // Menu items fade out with stagger
      tl.to(menuItemsRef.current, {
        y: -30,
        opacity: 0,
        rotationX: 90,
        scale: 0.8,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in',
      });

      // Hire me button
      tl.to(
        hireMeRef.current,
        {
          y: -20,
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
        },
        '-=0.2'
      );

      // Close button spins out
      tl.to(
        closeButtonRef.current,
        {
          rotation: 180,
          scale: 0,
          opacity: 0,
          duration: 0.3,
        },
        '-=0.2'
      );

      // Menu slides out
      tl.to(
        menuRef.current,
        {
          x: '100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power3.in',
        },
        '-=0.2'
      );
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const { lenis } = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href);
    }
    setIsOpen(false);
    setActiveSection(href);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#timeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Active section observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Trigger when section is near top
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Animate underline
  useEffect(() => {
    if (!activeSection || !navRef.current || !underlineRef.current) return;

    const activeLink = navRef.current.querySelector(`a[href="${activeSection}"]`) as HTMLAnchorElement;
    
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      
      // Calculate position relative to the nav container
      const left = rect.left - navRect.left;
      const width = rect.width;

      gsap.to(underlineRef.current, {
        left: left,
        width: width,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
        // If no active section (e.g. at very top), maybe hide underline?
        // Or keep it at Home if that's the default.
        // For now, let's fade it out if no match
        gsap.to(underlineRef.current, {
            opacity: 0,
            duration: 0.3
        });
    }
  }, [activeSection]);

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 rounded-full w-[90%] max-w-5xl glass py-3`}
      >
        <div className="relative flex items-center justify-between px-6">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            Zain<span className="text-[var(--color-accent)]">.</span>
          </a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" ref={navRef}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] cursor-target cursor-none ${
                  activeSection === link.href ? 'text-[var(--color-accent)]' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            {/* Animated Underline */}
            <div 
                ref={underlineRef}
                className="absolute bottom-[-4px] h-[2px] bg-[var(--color-accent)] rounded-full pointer-events-none opacity-0"
                style={{ left: 0, width: 0 }}
            />
          </div>

          {/* Hire Me Button - Right */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="rounded-full border border-[var(--color-accent)] px-6 py-2 text-sm font-medium text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-black hover:shadow-[0_0_20px_var(--color-accent)] cursor-target cursor-none"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-white md:hidden relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen (Outside nav to avoid transform parent) */}
      <div
        ref={menuRef}
        className="mobile-menu fixed top-0 left-0 right-0 bottom-0 z-[45] flex h-screen w-screen flex-col items-center justify-center opacity-0 translate-x-full md:hidden pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 20, 19, 0.98) 0%, rgba(13, 20, 19, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-accent)] opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)] opacity-10 rounded-full blur-[120px]"></div>
        </div>

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          className="absolute top-8 right-8 text-white hover:text-[var(--color-accent)] transition-colors z-50"
          onClick={() => setIsOpen(false)}
        >
          <XIcon size={36} weight="bold" />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center gap-10 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              ref={(el) => {
                menuItemsRef.current[index] = el;
              }}
              href={link.href}
              className="text-4xl font-bold text-white transition-all duration-300 hover:text-[var(--color-accent)] hover:scale-110 relative group"
              onClick={(e) => handleScroll(e, link.href)}
              style={{
                textShadow: '0 0 20px rgba(242, 163, 102, 0.3)',
              }}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_10px_var(--color-accent)]"></span>
            </a>
          ))}

          {/* Hire Me Button in Mobile Menu */}
          <a
            ref={hireMeRef}
            href="#contact"
            className="mt-8 rounded-full border-2 border-[var(--color-accent)] px-10 py-4 text-lg font-bold text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-black hover:scale-110 hover:shadow-[0_0_30px_var(--color-accent)]"
            onClick={(e) => handleScroll(e, '#contact')}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
