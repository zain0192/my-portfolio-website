import { Heart } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[var(--color-background)] py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
          Designed & Built with <Heart weight="fill" className="text-red-500" /> by Zain
        </p>
        <p className="mt-2 text-xs text-gray-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
