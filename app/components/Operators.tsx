'use client';
import Image from 'next/image';

export default function Operators() {
  return (
    <section
      id="operators"
      className="w-full pt-operators-to-title pb-operators-to-breaker bg-[url('/background/bg-metal-hero.png')] bg-cover bg-center text-white"
    >
      <div className="max-w-7xl mx-auto w-full px-6">
        {/* Rubrik */}
        <div className="lg:col-span-12 flex flex-col justify-end">
          <h2 className="font-jetbrains text-[54px] md:text-[72px] lg:text-[96px] font-thin uppercase leading-none tracking-widest" style={{ letterSpacing: '0.06em' }}>
            <span className="block">The</span>
            <span className="block">People</span>
            <div className="h-1 w-56 mt-4 bg-gradient-to-r from-tungstenOrange to-transparent" />
          </h2>
        </div>

        {/* Avstånd från rubrik till bilder */}
        <div className="mt-16" />

        {/* 3 kolumner: Bild + Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Strategist */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/operator01.png"
              alt="The Strategist"
              width={320}
              height={320}
              className="h-operators-image w-auto rounded mb-6"
              style={{ objectFit: 'cover' }}
            />
            <div className="max-h-operators-textblock text-left">
              <div className="font-thin text-3xl uppercase mt-6 mb-4 tracking-wide text-center">The Strategist</div>
              <p className="font-mono text-[16px] whitespace-pre-line leading-snug">
                <span className="font-bold">Lars Oscar Lyberg</span> is a senior advisor within strategy, communication, and transformation. With a background rooted in Swedish export industry, he has led complex initiatives across automotive, infrastructure, real estate, and the public sector. His work focuses on aligning long-term strategy with real-world implementation – often navigating the space between digital transformation, stakeholder alignment, and measurable results.<br /><br />
                He has worked closely with global players such as Volvo, IKEA, and Tetra Pak, combining customer experience, innovation, and sustainability across industries. As part of a broader effort to explore the future of urban life, he contributed to a series of exploration cases – addressing the intersection of urban planning, infrastructure, digitalization, and community wellbeing. Lars is frequently engaged at both executive and operational levels to drive resilient, forward-looking solutions in complex environments.
              </p>
            </div>
          </div>
          {/* Technologist */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/operator02.png"
              alt="The Technologist"
              width={320}
              height={320}
              className="h-operators-image w-auto rounded mb-6"
              style={{ objectFit: 'cover' }}
            />
            <div className="max-h-operators-textblock text-left">
              <div className="font-thin text-3xl uppercase mt-6 mb-4 tracking-wide text-center">The Technologist</div>
              <p className="font-mono text-[16px] whitespace-pre-line leading-snug">
                <span className="font-bold">Morgan Fredriksson</span> is a senior technologist and platform strategist with deep experience in system design, applied AI, and modular infrastructure. As CEO and co-founder of Nagoon, he leads projects that integrate technical scalability with long-term operational relevance – often in collaboration with research institutions and leading industry partners.<br /><br />
                He works closely with KTH and other academic partners, and currently runs smart lab environments together with Philips and other industrial actors. His work bridges software architecture, machine intelligence, and system viability – from early-stage prototyping to enterprise implementation. Morgan has received awards for innovation and is regularly engaged to develop robust, future-oriented solutions where technology meets real-world complexity.
              </p>
            </div>
          </div>
          {/* Creative */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/operator03.png"
              alt="The Creative"
              width={320}
              height={320}
              className="h-operators-image w-auto rounded mb-6"
              style={{ objectFit: 'cover' }}
            />
            <div className="max-h-operators-textblock text-left">
              <div className="font-thin text-3xl uppercase mt-6 mb-4 tracking-wide text-center">The Creative</div>
              <p className="font-mono text-[16px] whitespace-pre-line leading-snug">
                <span className="font-bold">Per Cromwell</span> is a creative director and innovation strategist with a background in communication, design, and concept development. Over the past two decades, he has co-founded and led a wide range of ventures and projects—spanning everything from guerrilla marketing and tactical media to sustainable retail and speculative design. His work often explores the boundaries between technology, culture, and public engagement.<br /><br />
                As co-founder of Studio Total, Wheelys, and The Nordic Society for Invention and Discovery, he has created international campaigns, future-facing retail platforms, and public interventions that have sparked both media attention and academic interest. He is currently Creative Director at The Great Exhibition, and regularly speaks on creativity, freedom of expression, and disruptive innovation. Per is known for his ability to shift perspective, reframe challenges, and prototype alternative futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}