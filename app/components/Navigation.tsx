'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'The Studio', href: '/studio' },
    { name: 'What We Do', href: '/work' },
    { name: 'Get In Touch', href: '/contact' },
    { name: 'Project Space', href: '/project-space' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 px-5 md:px-8 h-16 flex items-center justify-between font-jetbrains uppercase text-[16px] text-white font-thin">
      <Link href="/" className="flex-shrink-0">
        <Image src="/logo/logo_header.svg" alt="Tungsten Logo" width={160} height={40} />
      </Link>

      <div className="hidden lg:flex gap-2 justify-center flex-1">
        {links.map((item, idx) => (
          <span key={item.name} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="hover:font-bold hover:text-[#FF7600] transition duration-200 whitespace-nowrap"
            >
              {item.name}
            </Link>
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
            className="absolute top-16 left-0 right-0 bg-black bg-opacity-90 px-5 py-4 flex flex-col gap-4"
          >
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:font-bold hover:text-[#FF7600] transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}