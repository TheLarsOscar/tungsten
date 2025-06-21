import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative font-jetbrains uppercase text-[14px] text-[#0D0D0D] overflow-hidden">
      <Image 
        src="/background/bg-metal-footer.png" 
        alt="Metal background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />
      

      <div className="relative flex flex-col lg:flex-row items-center lg:justify-between px-8 py-8 lg:py-0" style={{ minHeight: '250px', maxHeight: '369px' }}>
        
        <div className="flex-shrink-0 flex justify-center lg:justify-end items-center w-full lg:w-auto lg:order-2">
          <Image 
            src="/logo/logo_footer.svg" 
            alt="Tungsten Footer Logo"
            width={369}
            height={369}
            className="object-contain h-full lg:max-h-[369px] max-h-[120px] w-auto"
          />
        </div>

        <div className="text-center lg:text-right lg:flex-1 lg:order-1 lg:pr-8 px-4 py-4 lg:py-0 font-thin">
          <div className="border-t border-[#0D0D0D] mb-2"></div>
          <p className="inline-block text-left lg:text-right leading-[22px] whitespace-nowrap">
            W74 [TUNGSTEN] Malmö / Stockholm / Remote<br />
            LinkedIn: 
            <Link href="https://linkedin.com/in/morgan" target="_blank" className="hover:text-[#FF7600] hover:font-bold transition duration-200">Morgan</Link> /
            <Link href="https://linkedin.com/in/lars" target="_blank" className="hover:text-[#FF7600] hover:font-bold transition duration-200">Lars</Link> /
            <Link href="https://linkedin.com/in/per" target="_blank" className="hover:text-[#FF7600] hover:font-bold transition duration-200">Per</Link><br />
            Contact: <Link href="mailto:hello@w74tungsten.com" className="hover:text-[#FF7600] hover:font-bold transition duration-200">hello@w74tungsten.com</Link>
          </p>
          <div className="border-b border-[#0D0D0D] mt-2"></div>
        </div>
      </div>
    </footer>
  );
}