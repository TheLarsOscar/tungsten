// All spacing tokens migrated to "the one list" 2024-07-07. Old px/tokens replaced. Only Tailwind-utilities (like ml-auto) left.
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, animate } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'THE STUDIO', href: '#the-studio' },
    { name: 'OUR STORY', href: '#story' },
    { name: 'OPERATORS', href: '#people' },
    { name: 'OUR WORK', href: '#our-work' },
    { name: 'CONTACT US', href: '#footer' },
  ];

  const smoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // Återställ: Använd Framer Motion animate-scroll igen.
      animate(window.scrollY, offsetPosition, {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1.0],
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 px-gap-xs md:px-gap-sm h-nav flex items-center justify-between font-jetbrains uppercase text-[16px] text-white font-thin">
      <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className="flex-shrink-0 no-underline">
        <Image src="/logo/logo_header.svg" alt="Tungsten Logo" width={160} height={40} />
      </a>

      <div className="hidden lg:flex gap-gap-xs justify-center flex-1">
        {links.map((item, idx) => (
          <span key={item.name} className="flex items-center gap-gap-xs">
            <a
              href={item.href}
              className="hover-underline hover:text-[#FF7600] transition duration-200 whitespace-nowrap no-underline"
              onClick={(e) => smoothScroll(e, item.href)}
            >
              {item.name}
            </a>
            {idx < links.length - 1 && <span>|</span>}
          </span>
        ))}
      </div>

      <button className="text-white ml-auto lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg width="24" height="24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute top-nav left-0 right-0 bg-black bg-opacity-90 px-gap-xs py-gap-xs flex flex-col gap-gap-xs"
          >
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover-underline hover:text-[#FF7600] transition duration-200 no-underline"
                onClick={(e) => smoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
// Kommentar: Lagt till 'no-underline' på alla <a>-taggar för att ta bort eventuell understrykning och säkerställa att länkarna inte blir understrukna. Ingen annan styling eller kod har ändrats.