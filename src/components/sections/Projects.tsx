import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { useLenis } from '../../context/LenisContext';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const tabs = ['All', 'React', 'WordPress', 'Shopify'];

  const projects = [
    {
      id: 1,
      title: 'Neon Dashboard',
      desc: 'A futuristic analytics dashboard with real-time data visualization.',
      tech: ['React', 'D3.js', 'Tailwind'],
      category: 'React',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'E-Commerce AI',
      desc: 'AI-powered shopping assistant with personalized recommendations.',
      tech: ['Next.js', 'OpenAI', 'Stripe'],
      category: 'React',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Luxury Brand Store',
      desc: 'High-end fashion e-commerce store with custom theme.',
      tech: ['Shopify', 'Liquid', 'JS'],
      category: 'Shopify',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Corporate Portfolio',
      desc: 'Custom WordPress theme for a tech consultancy firm.',
      tech: ['WordPress', 'PHP', 'ACF'],
      category: 'WordPress',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Immersive 3D World',
      desc: 'A 3D portfolio experience built with Three.js.',
      tech: ['Three.js', 'React Three Fiber'],
      category: 'React',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Artisan Shop',
      desc: 'Handcrafted goods store with custom checkout flow.',
      tech: ['Shopify', 'React', 'GraphQL'],
      category: 'Shopify',
      image: 'https://images.unsplash.com/photo-1472851294608-415522f96319?fit=crop&w=800&q=80',
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
                className="group relative flex h-[400px] flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
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
                  <p className="mb-6 text-sm text-gray-400">{project.desc}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[var(--color-accent)]"
                    >
                      View Project <ArrowRightIcon />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      <GithubLogoIcon size={24} />
                    </a>
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
