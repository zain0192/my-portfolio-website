import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubLogoIcon, LinkedinLogoIcon, ShareNetworkIcon, EnvelopeSimple, DownloadSimple } from '@phosphor-icons/react';

const MobileFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: <GithubLogoIcon size={20} weight="bold" />, href: '#', label: 'GitHub', tooltip: 'Check out my GitHub' },
    { icon: <LinkedinLogoIcon size={20} weight="bold" />, href: '#', label: 'LinkedIn', tooltip: 'Check out my LinkedIn' },
    { icon: <EnvelopeSimple size={20} weight="bold" />, href: 'mailto:zain@example.com', label: 'Email', tooltip: 'Email Me' },
    { icon: <DownloadSimple size={20} weight="bold" />, href: '#', label: 'Download Resume', tooltip: 'Download CV' },
  ];

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      {/* Social Icons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-1 flex flex-col-reverse gap-1">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20, 
                  scale: 0.8,
                  transition: {
                    delay: (socialLinks.length - 1 - index) * 0.05,
                    duration: 0.2
                  }
                }}
                className="group glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_var(--color-accent)] relative"
                aria-label={social.label}
              >
                <span className="absolute right-full mr-4 whitespace-nowrap rounded-md bg-black/80 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none backdrop-blur-sm border border-white/10">
                  {social.tooltip}
                </span>
                {social.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all hover:shadow-[0_0_20px_var(--color-accent)] active:scale-95"
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close social menu' : 'Open social menu'}
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ 
            rotate: isOpen ? 360 : 0
          }}
          transition={{ 
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <ShareNetworkIcon 
            size={24} 
            weight="bold" 
            className={isOpen ? 'text-[var(--color-accent)]' : ''}
          />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default MobileFAB;
