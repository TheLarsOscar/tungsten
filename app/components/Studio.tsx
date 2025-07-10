'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function StudioImageParallax({ src, alt, isVideo = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  if (isVideo) {
    return (
      <motion.div
        ref={ref}
        style={{ y }}
        className="overflow-hidden w-full aspect-square flex items-center justify-center rounded"
      >
        <video
          src={src}
          className="rounded object-cover w-full h-full"
          style={{ width: '100%', height: '100%' }}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
        />
      </motion.div>
    );
  }

  return (
    <div ref={ref} className="w-full h-auto rounded overflow-hidden">
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={480}
          height={360}
          className="rounded"
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          priority
        />
      </motion.div>
    </div>
  );
}

export default function Studio() {
  return (
    <section
      id="studio"
      className="w-full pt-gap-2xl pb-gap-2xl bg-gradient-to-bl from-tungstenOrange to-[#FF5F5F] text-white"
    >
      <div className="max-w-container mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sidtitel tillagd högst upp i grid-layouten, som första grid-item */}
          <div className="lg:col-span-12 col-span-1 flex flex-col mb-12">
            <h2 className="font-jetbrains text-[54px] md:text-[72px] lg:text-[96px] font-thin uppercase leading-none tracking-widest mb-4 text-white text-left">
              <span className="block">The</span>
              <span className="block">Studio</span>
              <div className="h-1 w-56 mt-4 bg-gradient-to-r from-tungstenOrange to-transparent" />
            </h2>
          </div>
          <div className="lg:col-span-8 col-span-1 flex items-center order-1 lg:order-1">
            <StudioImageParallax src="/images/studio-01-left.png" alt="Studio scene left" />
          </div>
          {/* Första textblock: ingress och tre brödtextstycken, med rätt klasser */}
          <div className="lg:col-span-4 col-span-1 flex flex-col self-center max-w-[340px] order-2 lg:order-2">
            {/* Ingress */}
            <p className="font-mono text-base md:text-lg lg:text-xl leading-normal text-left mb-4">
              [W74] Tungsten is a minimalist studio built by Cromwell, Fredriksson & Lyberg as a shared structure for our work and long-standing networks.
            </p>
            {/* Brödtext */}
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              We’re based in Malmö, Stockholm, and sometimes Paris. (Because Per is a romantic.)
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              We do strategy, technology, communication. The kind that moves things forward.
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              We consult—sometimes embedded, sometimes at a distance, sometimes as co-pilots. We focus on clarity, structure, and long-term results. If it’s just fluff, we’re not interested. Unless it’s fun. Fun goes a long way as currency.
            </p>
          </div>

          {/* Andra textblock: ingress och två brödtextstycken */}
          <div className="lg:col-span-4 col-span-1 flex flex-col self-center max-w-[340px] order-4 lg:order-3">
            {/* Ingress */}
            <p className="font-mono text-base md:text-lg lg:text-xl leading-normal text-left mb-4">
              We have a broad network: architects, developers, designers, artists, technologists, writers, analysts. They’re not us.
            </p>
            {/* Brödtext */}
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              They’re lovely, talented and depenadble people we’ve worked with, learned from, and absolutely trust when it matters.
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              Most projects benefit from that network. Sometimes for specialist skills, sometimes just to get things across the line. But mainly because nobody knows everything, and we don’t pretend we do.
            </p>
          </div>
          <div className="lg:col-span-8 col-span-1 flex items-center order-3 lg:order-4">
            <StudioImageParallax src="/images/studio-02-right.png" alt="Studio scene right" />
          </div>

          {/* Ändring: Bilden i tredje sektionen är utbytt mot en video enligt instruktion */}
          <div className="lg:col-span-8 col-span-1 flex items-center order-5 lg:order-5">
            <StudioImageParallax src="/images/studio-03-left.mp4" alt="Studio scene left (video)" isVideo />
          </div>
          {/* Tredje textblock: ingress och resterande brödtextstycken */}
          <div className="lg:col-span-4 col-span-1 flex flex-col self-center max-w-[340px] order-6 lg:order-6">
            {/* Ingress */}
            <p className="font-mono text-base md:text-lg lg:text-xl leading-normal text-left mb-4">
              Most of what we do is non-public by nature — long projects, quiet turnarounds, background work. We prefer it that way: selected, discreet, context-specific.
            </p>
            {/* Brödtext */}
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              No chest pounding. No LinkedIn posts. No “solutions,” “synergy,” or “empowering.” Not for us.
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              We do the work. Others get the credit. We’re good with that.
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              in other words, we do what
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              a communication agency
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              a design studio
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              a pr firm
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              and a digital consultancy would normally do
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              – just faster, with less attitude
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-8">
              &nbsp;
            </p>
            <p className="font-mono text-xs md:text-base leading-normal text-left mb-4">
              and more je ne sais quoi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
// Textblocken har byggts om enligt instruktion:
// - Varje block börjar med en ingress i eget <p> med klasser: font-mono text-base md:text-lg lg:text-xl leading-normal text-left mb-4.
// - Därefter brödtextstycken i egna <p> med klasser: font-mono text-xs md:text-base leading-normal text-left mb-4.
// - Texten är uppdelad exakt enligt senaste instruktionen (ingress + bröd).
// - Ingen uppercase på ingress, monospace på allt.

// Ändring: Lagt till klassen 'aspect-square' på videoelementet i tredje sektionen samt säkerställt att klasserna 'object-cover w-full h-auto rounded' finns för likadan beskärning och form som bilderna ovan.