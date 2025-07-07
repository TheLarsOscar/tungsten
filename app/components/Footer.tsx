'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#232325] text-white w-full min-h-footer lg:min-h-footer-lg flex flex-col justify-end overflow-hidden font-jetbrains">
      {/* Content grid */}
      <div className="relative z-10 w-full max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-grid-gap-mobile lg:gap-grid-gap items-end pb-8 lg:pb-0">
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-20 mb-4 lg:hidden z-10">
        <Image
          src="/logo/logo_footer.svg"
          alt="[W74] TUNGSTEN"
          width={320}
          height={99}
          className="w-logo h-auto object-contain"
          priority
        />
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
        hidden lg:flex
      ">
        <Image
          src="/logo/logo_footer.svg"
          alt="[W74] TUNGSTEN"
          width={860}
          height={265}
          className="w-logo-lg h-auto lg:w-logo-xl max-w-none object-contain"
          priority
        />
      </div>
    </footer>
  );
}