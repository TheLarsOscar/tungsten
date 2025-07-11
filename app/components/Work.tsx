'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const workItems = [
  {
    title: "Shaping the cities of tomorrow",
    text: `Creating smarter infrastructure,\nbetter architecture and sustainable\nliving environments.`,
    clients: `WINGÅRDHS ARCHITECTS | JERNHUSEN | LM LUNDBERG | CASTELLUM | ALKYON | IDEON GATEWAY | CISCO | VIAEUROPA | IKANO GROUP | ARKDES | FORM DESIGN CENTER`,
    image: "/images/work_01_right.png",
    imageOnRight: true,
  },
  {
    title: "Improving the things we use every day",
    text: `Developing smarter consumer\nproducts, brands and experiences\nthat make life easier and better.`,
    clients: `IKEA | INTER IKEA SYSTEMS BV | NIKE | THULE | PILOT PENS | VISIT SWEDEN | POSEIDON DIVING SYSTEMS | ALFA LAVAL | TETRA PAK | SONY`,
    image: "/images/work_02_left.png",
    imageOnRight: false,
  },
  {
    title: "Influencing policies and ideas",
    text: `Helping financial institutions,\ngovernments and organizations shape\npolicies that matter.`,
    clients: `ALLIANZ BANK | LÄNSFÖRSÄKRINGAR | DANISH FOREIGN MINISTRY | FI! – THE FEMINIST PARTY | FREE LUNCH COMMISSION | WWF – THE WORLD WILDLIFE FOUNDATION`,
    image: "/images/work_03_right.png",
    imageOnRight: true,
  },
  {
    title: "Driving the future of mobility",
    text: `Redesigning how people move and\ngoods are transported—cleaner,\nsafer, smarter.`,
    clients: `ÖRESUNDSBRON | SKÅNETRAFIKEN | SCANIA | VOLVO CARS | VOLVO GROUP | MAZDA CARS | RENAULT | HONDA | LAND ROVER | ASTON MARTIN`,
    image: "/images/work_04_left.png",
    imageOnRight: false,
  },
  {
    title: "Creating shared cultural experiences",
    text: `Delivering events, broadcasts, and\nperformances that inspire and connect millions.`,
    clients: `RIKSTEATERN | MALMÖ OPERA | SVT MELODIFESTIVALEN | EUROVISION SONG CONTEST | THE ROYAL OPERA | EUROPEAN BROADCASTING UNION`,
    image: "/images/work_05_right.png",
    imageOnRight: true,
  },
  {
    title: "Turning innovation into relevance",
    text: `Transforming research, education and\nnew ideas into practical solutions that\ndrive progress.`,
    clients: `ASTRAZENECA | VTT FINLAND | LUND UNIVERSITY | MALMÖ UNIVERSITY | KTH ROYAL INSTITUTE OF TECHNOLOGY | PUBLIC SCHOOLS OF HELSINGBORG | MOBY MART`,
    image: "/images/work_06_left.png",
    imageOnRight: false,
  },
];

function WorkImageParallax({ image, title }: { image: string; title: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  return (
    <div
      ref={ref}
      className="overflow-hidden h-image md:h-image w-full flex items-center justify-center"
      style={{ width: '100%' }}
    >
      <motion.div style={{ y, width: '100%' }}>
        <Image
          src={image}
          alt={title}
          width={480}
          height={540}
          className="rounded w-full object-cover h-hero-img max-w-img md:max-w-none"
          priority
        />
      </motion.div>
    </div>
  );
}

export default function Work() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section
      id="work"
      className="w-full pt-gap-2xl pb-gap-2xl bg-gradient-to-bl from-tungstenOrange to-[#FF5F5F] text-white"
    >
      <div className="max-w-container mx-auto w-full px-6">
        {/* Rubrik med underline och spacing */}
        <div className="flex flex-col items-start justify-end">
          <h2 className="font-jetbrains text-[72px] md:text-[96px] font-thin uppercase leading-none tracking-widest mb-0" style={{ letterSpacing: '0.06em' }}>
            Our Work
          </h2>
          <div className="h-1 w-56 bg-gradient-to-r from-tungstenOrange to-transparent mb-gap-xl" />
        </div>

        {/* Schackruta med tight grid */}
        <div className="flex flex-col gap-0">
          {workItems.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col md:flex-row ${item.imageOnRight ? "md:flex-row" : "md:flex-row-reverse"}
                items-stretch
              `}
            >
              {/* TEXTBLOCK */}
              <div
                className={`
                  flex-1 flex flex-col justify-center
                  ${item.imageOnRight ? "md:items-end md:text-right pr-8" : "md:items-start md:text-left pl-8"}
                  py-[55px] md:py-0
                `}
                style={{ minHeight: '414px' }} // (no token for minHeight, leave as is)
              >
                <h3 className="font-jetbrains text-[36px] md:text-[48px] font-thin uppercase leading-tight mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-mono text-[20px] mb-5 whitespace-pre-line">
                  {item.text}
                </p>
                <p className="font-mono text-[15px] text-white/80 mb-0 uppercase leading-tight tracking-wide">
                  {item.clients}
                </p>
              </div>
              {/* IMAGEBLOCK */}
              <div className="flex-1 flex items-center md:items-stretch">
                <WorkImageParallax image={item.image} title={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}