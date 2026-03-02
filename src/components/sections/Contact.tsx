import { useRef, useState, type FormEvent } from 'react';
import { PaperPlaneRightIcon, GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon, DownloadSimpleIcon, CheckCircleIcon, WarningCircleIcon } from '@phosphor-icons/react';
import { supabase } from '../../lib/supabase';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus('idle');
    setErrorMessage('');
    
    // Validate all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('All fields are required');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact-form')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          },
        ]);

      if (error) throw error;

      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-10 md:pt-20 mt:pb-20">
      {/* Floating Social Icons - Desktop Only */}
      <div className="hidden md:flex fixed left-2 top-1/2 -translate-y-1/2 flex-col gap-2 z-50">
        {[
          { icon: <GithubLogoIcon size={24} />, href: '#', tooltip: 'Check out my GitHub' },
          { icon: <LinkedinLogoIcon size={24} />, href: '#', tooltip: 'Check out my LinkedIn' },
          { icon: <EnvelopeSimpleIcon size={24} />, href: 'mailto:zain@example.com', tooltip: 'Email Me' },
          { icon: <DownloadSimpleIcon size={24} />, href: '#', tooltip: 'Download CV' },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="group glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:scale-110 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_var(--color-accent)] cursor-target cursor-none relative"
          >
            <span className="absolute left-full ml-4 whitespace-nowrap rounded-md bg-black/80 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none backdrop-blur-sm border border-white/10">
              {social.tooltip}
            </span>
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
          <form onSubmit={handleSubmit} className="contact-item glass rounded-2xl p-8 md:p-10">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-green-400">
                <CheckCircleIcon size={20} weight="fill" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400">
                <WarningCircleIcon size={20} weight="fill" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                Name <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-target cursor-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                Email <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-target cursor-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                Message <span className="text-[var(--color-accent)]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-target cursor-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_var(--color-accent)] cursor-target cursor-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <PaperPlaneRightIcon size={20} weight="bold" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
