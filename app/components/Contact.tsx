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

  return (
    <section id="contact" className="relative bg-black text-white w-full min-h-[1800px] lg:min-h-[2040px] overflow-hidden font-jetbrains">
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
      <Image
        src="/images/Contact_Back.webp"
        alt="Skyline"
        width={1920}
        height={340}
        className="absolute left-0 bottom-0 w-full h-auto z-10 pointer-events-none select-none"
        priority
      />
      <div className="relative z-50 w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 gap-y-12 px-4 sm:px-6 lg:px-0">
        <div className="col-span-6 col-start-1 mt-[220px] sm:mt-16 sm:max-w-[95vw] sm:mx-auto sm:text-center lg:mt-[220px] lg:max-w-none lg:mx-0 lg:text-left">
          <h2 className="font-jetbrains text-[56px] md:text-[96px] font-thin uppercase leading-none tracking-widest mb-0" style={{ letterSpacing: '0.06em' }}>
            Contact
          </h2>
          <div className="h-1 w-56 bg-gradient-to-r from-tungstenOrange to-transparent mb-[60px] mx-auto sm:mx-auto lg:mx-0" />
        </div>
        <div className="col-span-8 col-start-2 mt-[60px] w-full">
          <div className="bg-[#222338]/35 rounded-2xl p-10 sm:p-14 w-full inline-block min-w-fit max-w-full align-top">
            <div className="font-jetbrains text-[25px] md:text-[36px] uppercase text-white tracking-widest text-left break-words">
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
        </div>
        <div className="col-span-8 col-start-2 mt-[60px] space-y-5 font-mono text-[18px] md:text-[20px] leading-relaxed">
          <p>
            We never saw attack ships on fire off the shoulder of Orion.<br />
            Neither did we watch C-beams glitter in the dark near the Tannhäuser Gate.
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
        {/* Placeholder for the ship element */}
      </div>
      <div className="col-span-3 col-start-10 flex items-end justify-end min-h-[340px] relative z-30" ref={parallaxRef}>
        <motion.div style={{ y }} className="w-[180px] md:w-[240px] lg:w-[280px] select-none pointer-events-none">
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
