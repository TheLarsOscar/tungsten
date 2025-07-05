'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const tagline = [
    'WE DO THE WORK.',
    'STRATEGY, TECH, CREATIVE.',
    'YOU GET THE CREDIT.',
    'NO ONE WILL KNOW.'
  ];

  const paragraphs = [
    'We work with words, interfaces, systems, architecture, algorithms and arguments.',
    'We’ve built strategies, launched campaigns, written policies, edited films, shaped brands, designed platforms, designed the decks that funded them, prototyped services, and coded tools to keep customer journey looping.',
    'We build what’s needed — in the format that works.'
  ];

  const timings = [0, 0.5, 1, 1.8, 3, 3.5, 4.0];

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/background/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90"></div>

      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 pt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Image 
            src="/logo/logo_hero.svg" 
            alt="Tungsten Hero Logo" 
            width={1200} 
            height={300} 
            className="w-full h-auto max-w-[1200px]"
          />
        </motion.div>

        <div className="space-y-4">
          {[...tagline, ...paragraphs].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + timings[i], duration: 0.6 }}
              className={`text-white ${i < tagline.length ? 'text-[32px] leading-[36px] uppercase font-medium' : 'text-[16px] leading-[22px]'}`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="h-[220px]"></div>
      </div>
    </section>
  );
}
