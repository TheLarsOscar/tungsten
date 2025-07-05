'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-black text-white w-full min-h-[600px] lg:min-h-[740px] flex flex-col justify-end overflow-hidden font-jetbrains">
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

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-grid-gap-mobile lg:gap-grid-gap items-end pb-8 lg:pb-0">
        {/* Kontaktinfo-block, identisk markup/stil som ContactBreakerOrange */}
        <div className="lg:col-span-7 flex flex-col justify-end px-6 lg:px-0 z-10">
          <div className="flex flex-col gap-2 pb-10 lg:pb-16">
            <div className="font-jetbrains text-[20px] uppercase text-white tracking-wider">[W74] Tungsten</div>
            <div className="font-jetbrains text-[20px] uppercase text-white tracking-wider">
              Malmö <span className="mx-2">/</span> Stockholm <span className="mx-2">/</span> Remote
            </div>
            <div className="font-jetbrains text-[20px] uppercase tracking-wider">
              <span className="text-black">LinkedIn:</span>
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
            <div className="font-jetbrains text-[20px] uppercase tracking-wider">
              <span className="text-black">Contact:</span>
              <span className="ml-3">
                <a
                  href="mailto:hello@w74tungsten.com"
                  className="underline decoration-white hover:decoration-tungstenOrange text-white hover:text-black transition"
                >
                  hello@w74tungsten.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Logotyp – alltid nere till höger på desktop, centrerad på mobil */}
      <div className="
        absolute
        right-0
        bottom-0
        w-full
        flex
        justify-center
        lg:justify-end
        pointer-events-none
        z-10
      ">
        <Image
          src="/logo/logo_footer.svg"
          alt="[W74] TUNGSTEN"
          width={860}
          height={265}
          className="w-[430px] h-auto lg:w-[860px] max-w-none object-contain"
          priority
        />
      </div>
    </footer>
  );
}