'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Operators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="operators"
      className="sticky top-0 z-30 w-full pt-gap-2xl pb-gap-2xl bg-gradient-to-tr from-[#FF5F5F] to-tungstenOrange text-white"
    >
      {/* Rubrik */}
      <div className="max-w-container mx-auto w-full px-6">
        <div className="lg:col-span-12 flex flex-col justify-end">
          <h2 className="font-jetbrains text-[54px] md:text-[72px] lg:text-[96px] font-thin uppercase leading-none tracking-widest" style={{ letterSpacing: '0.06em' }}>
            <span className="block">Hello</span>
            <span className="block">Operator</span>
            <div className="h-1 w-56 mt-4 bg-gradient-to-r from-tungstenOrange to-transparent" />
          </h2>
        </div>
      </div>
      <div className="sticky top-0 w-screen h-[calc(100vh-20px)] flex mt-gap-xl">
        {[{
          src: "/images/StudioLarsSpace.webp",
          alt: "Lars",
          title: "THE STRATEGIST"
        }, {
          src: "/images/StudioMogSpace.webp",
          alt: "Mog",
          title: "THE TECHNOLOGIST"
        }, {
          src: "/images/StudioPerSpace.webp",
          alt: "Per",
          title: "THE CREATIVE"
        }].map(({ src, alt, title }, index) => {
          let flexClass = "flex-1";
          if (hoveredIndex === index) {
            flexClass = "flex-[0.7]";
          } else if (hoveredIndex !== null) {
            flexClass = "flex-[0.15]";
          }
          return (
            <div
              key={alt}
              className={`${flexClass} h-full relative transition-all duration-700 cursor-pointer items-start overflow-hidden flex`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {index === 1 ? (
                <Image
                  src={src}
                  alt={alt}
                  width={768}
                  height={1364}
                  className="object-cover object-top transition-transform w-[90%] h-[90%] mx-auto my-auto"
                />
              ) : (
                <Image
                  src={src}
                  alt={alt}
                  width={768}
                  height={1364}
                  className="object-cover w-full h-full object-top transition-transform"
                />
              )}
              {hoveredIndex === index && (
                <div className="absolute bottom-0 right-[56px] flex items-end justify-end w-auto">
                  <div className="bg-white/70 px-6 py-2 shadow-lg w-auto min-w-[220px] max-w-[460px] mb-0">
                    <span className="text-black text-base text-left">
                      {index === 0 && (
                        <>
                          <b>Lars Oscar Lyberg</b> is a senior advisor within strategy, communication, and transformation. With a background rooted in Swedish export industry, he has led complex initiatives across automotive, infrastructure, real estate, and the public sector. His work focuses on aligning long-term strategy with real-world implementation – often navigating the space between digital transformation, stakeholder alignment, and measurable results.<br /><br />
                          He cut his teeth global players such as Volvo, IKEA, and Tetra Pak, combining customer experience, innovation, and sustainability across industries. As part of a broader effort to explore the future of urban life, he contributed to a series of exploration cases – addressing the intersection of urban planning, infrastructure, digitalization, and community wellbeing. Lars is frequently engaged at both executive and operational levels to drive resilient, forward-looking solutions in complex environments.
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <b>Morgan Fredriksson</b> is a senior technologist and platform strategist with deep experience in system design, applied AI, and modular infrastructure. As CEO and co-founder of Nagoon, he leads projects that integrate technical scalability with long-term operational relevance – often in collaboration with research institutions and leading industry partners.<br /><br />
                          He works closely with KTH and other academic partners, and currently runs smart lab environments together with Philips and other industrial actors. His work bridges software architecture, machine intelligence, and system viability – from early-stage prototyping to enterprise implementation. Morgan has received awards for innovation and is regularly engaged to develop robust, future-oriented solutions where technology meets real-world complexity.
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <b>Per Cromwell</b> is a creative director and innovation strategist with a background in communication, design, and concept development. Over the past two decades, he has co-founded and led a wide range of ventures and projects—spanning everything from guerrilla marketing and tactical media to sustainable retail and speculative design. His work often explores the boundaries between technology, culture, and public engagement.<br /><br />
                          As co-founder of Studio Total, Wheelys, and The Nordic Society for Invention and Discovery, he has created international campaigns, future-facing retail platforms, and public interventions that have sparked both media attention and academic interest. He is currently Creative Director at The Great Exhibition, and regularly speaks on creativity, freedom of expression, and disruptive innovation. Per is known for his ability to shift perspective, reframe challenges, and prototype alternative futures.
                        </>
                      )}
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 right-0 w-[56px] h-[340px] bg-black flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-widest select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                  {title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}