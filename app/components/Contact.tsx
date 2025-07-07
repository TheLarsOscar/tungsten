'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const skylineRef = useRef(null);
  const { scrollYProgress: skylineScroll } = useScroll({
    target: skylineRef,
    offset: ['start end', 'end start'],
  });
  const skylineY = useTransform(skylineScroll, [0, 1], [0, 250]);

  return (
    <section id="contact" className="relative bg-black text-white w-full min-h-contact lg:min-h-[2040px] overflow-hidden font-jetbrains">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background/bg-red-orange.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: "75%",
          zIndex: 1,
          pointerEvents: "none",
          background: "linear-gradient(to bottom, rgba(20,20,30,0.9) 0%, rgba(20,20,30,0) 100%)"
        }}
      />
      <motion.div
        ref={skylineRef}
        style={{ y: skylineY }}
        className="absolute left-0 bottom-0 w-full h-auto z-20 pointer-events-none select-none"
      >
        <Image
          src="/images/Contact_Back.webp"
          alt="Skyline"
          width={1920}
          height={340}
          className="w-full h-auto"
          priority
        />
      </motion.div>
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6">
        <div className="w-full text-left mt-gap-2xl pl-content-offset studio-title">
          <h2 className="font-jetbrains text-[56px] md:text-[96px] font-thin uppercase leading-none tracking-widest mb-0" style={{ letterSpacing: '0.06em' }}>
            Contact
          </h2>
          <div className="h-1 w-56 bg-gradient-to-r from-tungstenOrange to-transparent" />
        </div>
        <div className="max-w-[750px] w-full mx-auto text-left mt-gap-lg">
          <div className="font-jetbrains text-[18px] md:text-[27px] uppercase text-white tracking-widest break-words">
            <div>[W74] Tungsten</div>
            <div>
              Malmö <span className="mx-2">/</span> Stockholm <span className="mx-2">/</span> Remote
            </div>
            <div>
              <span className="text-tungstenOrange">LINKEDIN</span>
              <span className="ml-3">
                <a
                  href="https://www.linkedin.com/in/morgan-fredriksson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white hover:decoration-tungstenOrange text-white hover:text-black transition"
                >
                  Morgan
                </a>
                <span className="mx-2 text-white">/</span>
                <a
                  href="https://www.linkedin.com/in/lars-oscar-lyberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white hover:decoration-tungstenOrange text-white hover:text-black transition"
                >
                  Lars
                </a>
                <span className="mx-2 text-white">/</span>
                <a
                  href="https://www.linkedin.com/in/percromwell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white hover:decoration-tungstenOrange text-white hover:text-black transition"
                >
                  Per
                </a>
              </span>
            </div>
            <div>
              <span className="text-tungstenOrange">CONTACT:</span>
              <span className="ml-3">
                <a
                  href="mailto:hello@w74tungsten.com"
                  className="underline decoration-white hover:decoration-tungstenOrange text-white hover:text-black transition whitespace-nowrap"
                >
                  hello@w74tungsten.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-[750px] w-full mx-auto text-left font-mono text-[18px] md:text-[20px] leading-relaxed mt-gap-md">
          <p>
            We never saw attack ships on fire—<br />
            off the shoulder of Orion.<br />
            Neither did we watch C-beams glitter—<br />
            in the dark near the Tannhäuser Gate.
          </p>
          <p>
            But there were industrial giants,<br />
            cultural institutions,<br />
            Nordic cities, public broadcasters,<br />
            R&amp;D labs, transport authorities,<br />
            architects, mobility startups,<br />
            governments, universities, foundations,<br />
            think tanks, banks, publishers,<br />
            manufacturers, infrastructure providers—<br />
            and, yes, more than one international music competition.
          </p>
          <p>
            Some public tenders were won. No nepotism.<br />
            and we have been scrutinized by national security.<br />
            Some of us even passed.
          </p>
          <p>
            Sometimes a sharp corner. Sometimes a trick up a sleeve.<br />
            But more importantly, we did cry—same as you—<br />
            when Roy Batty gave his final words, high above the city.
          </p>
          <p>
            Replicant or consultant—<br />
            all those moments will be lost in time, like tears in rain.
          </p>
        </div>
      </div>
      {/* Absolutely positioned spaceship */}
      <div
        className="absolute left-0 bottom-0 z-30 pointer-events-none"
        ref={parallaxRef}
      >
        <motion.div style={{ y }} className="w-[180px] md:w-[240px] lg:w-[280px] xl:w-[320px] select-none">
          <Image
            src="/images/Contact_Ship.webp"
            alt="Spaceship"
            width={320}
            height={495}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
