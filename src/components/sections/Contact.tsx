import { useRef } from 'react';
import { PaperPlaneRightIcon, GithubLogoIcon, LinkedinLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="contact" className="relative py-10 md:pt-20 mt:pb-20">
      {/* Floating Social Icons - Desktop Only */}
      <div className="hidden md:flex fixed left-2 top-1/2 -translate-y-1/2 flex-col gap-2 z-50">
        {[
          { icon: <GithubLogoIcon size={24} />, href: '#' },
          { icon: <LinkedinLogoIcon size={24} />, href: '#' },
          { icon: <TwitterLogoIcon size={24} />, href: '#' },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:scale-110 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_var(--color-accent)] cursor-target cursor-none"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="contact-item mb-4 text-3xl font-bold text-white md:text-4xl">
              Let's <span className="text-[var(--color-accent)]">Connect</span>
            </h2>
            <p className="contact-item text-gray-400">
              Have a project in mind? Send me a message and let's create something amazing together.
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-item glass rounded-2xl p-8 md:p-10">
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-target cursor-none"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-target cursor-none"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-target cursor-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_var(--color-accent)] cursor-target cursor-none"
            >
              Send Message
              <PaperPlaneRightIcon size={20} weight="bold" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
