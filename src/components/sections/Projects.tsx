import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRightIcon, AppStoreLogo, GooglePlayLogo } from '@phosphor-icons/react';
import { useLenis } from '../../context/LenisContext';
import BQ from '../../assets/bq.png';
import Cleoparda from '../../assets/cleo.png';
import Mahya from '../../assets/mahya.png';
import Teler from '../../assets/teler.png';
import Jobz from '../../assets/jobz.png';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const tabs = ['All', 'React', 'WordPress', 'Shopify'];

  const projects = [
    {
      id: 1,
      title: 'InvoicePop - An Invoice Management System',
      desc: 'A modern invoice management system built with React, Firebase and Tailwind CSS.',
      tech: ['React', 'Firebase', 'Tailwind'],
      category: 'React',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80',
      link: '#',
    },
    {
      id: 2,
      title: 'The Teler - AI-Powered News Aggregator',
      desc: 'An AI-powered news aggregator built with React Native and Supabase using OpenRouter API.',
      tech: ['React Native', 'Supabase', 'OpenRouter'],
      category: 'React',
      image: Teler,
      link: '#',
      appStore: '#',
      playStore: '#',
    },
    {
      id: 3,
      title: '360 Jobz - Blue and White Collar Job Platform',
      desc: 'A job platform built with React Native and Firebase.',
      tech: ['React Native', 'Firebase'],
      category: 'React',
      image: Jobz,
      link: '#',
      appStore: '#',
      playStore: '#',
    },
    {
      id: 4,
      title: 'Mahya Jewellery - E-commerce Website',
      desc: 'An e-commerce website built with Wordpress.',
      tech: ['WordPress', 'Woocommerce', 'PHP'],
      category: 'WordPress',
      image: Mahya,
      link: '#',
    },
    {
      id: 5,
      title: 'Cleoparda.co - E-commerce Website',
      desc: 'An e-commerce website built with Shopify.',
      tech: ['Shopify', 'React', 'GraphQL'],
      category: 'Shopify',
      image: Cleoparda,
      link: '#',
    },
    {
      id: 6,
      title: 'Bookkeeping Qatar - A Bookkeeping Service Website',
      desc: 'A bookkeeping service website built with WordPress.',
      tech: ['WordPress', 'PHP', 'ACF'],
      category: 'WordPress',
      image: BQ,
      link: '#',
    },
  ];

  const filteredProjects = selectedTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedTab);

  const { lenis } = useLenis();

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (lenis) {
      lenis.scrollTo('#projects', { offset: -100 });
    }
  };

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="sticky top-0 z-30 mb-12 flex flex-col items-center justify-between gap-8 py-6 md:static md:flex-row md:py-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Selected <span className="text-[var(--color-accent)]">Projects</span>
          </h2>

          <div className="flex w-full justify-center overflow-x-auto pb-2 md:w-auto md:justify-end md:pb-0">
            <div className="flex min-w-max gap-2 rounded-full bg-white/5 p-1 backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-6 cursor-target cursor-none ${
                    selectedTab === tab ? 'text-black' : 'text-white hover:text-[var(--color-accent)]'
                  }`}
                >
                  {selectedTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-[var(--color-accent)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/0 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mb-6 text-sm text-gray-400 opacity-90">{project.desc}</p>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[var(--color-accent)]"
                      >
                        Visit Website <ArrowRightIcon />
                      </a>
                    ) : <div />}
                    
                    <div className="flex items-center gap-3">
                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 transition-colors hover:text-white"
                          title="Download on App Store"
                        >
                          <AppStoreLogo size={24} />
                        </a>
                      )}
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 transition-colors hover:text-white"
                          title="Get it on Google Play"
                        >
                          <GooglePlayLogo size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
