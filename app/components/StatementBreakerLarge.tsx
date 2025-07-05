'use client';
import { motion } from 'framer-motion';

export default function StatementBreakerLarge() {
  const statementText = [
    'WE DO WHAT',
    'A COMMUNICATION AGENCY',
    'A DESIGN STUDIO',
    'A PR FIRM',
    'AND A DIGITAL CONSULTANCY WOULD NORMALLY DO',
    '– JUST FASTER, WITH LESS ATTITUDE',
    'AND MORE JE NE SAIS QUOI.'
  ];

  return (
    <section className="relative h-[666px] overflow-hidden flex items-center">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/background/bg-red-orange.mp4" type="video/mp4" />
      </video>


      <div className="relative z-10 pl-[16.6667%] pr-8 font-jetbrains uppercase text-left text-[28px] text-white">
        {statementText.slice(0, 5).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="mb-1"
          >
            {line}
          </motion.p>
        ))}
        {statementText.slice(5).map((line, i) => (
          <motion.p
            key={i + 5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 + i * 0.5 }}
            className={i === 0 ? 'mb-4 mt-4' : 'mb-8'}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}