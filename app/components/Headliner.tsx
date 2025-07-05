'use client';

interface HeadlinerProps {
  line1: string;
  line2?: string;
  className?: string;
}

export default function Headliner({ line1, line2, className = '' }: HeadlinerProps) {
  return (
        <section className="bg-[url('/background/bg-metal-footer.png')] bg-cover bg-center w-full py-operators-to-title">
      <div className="max-w-7xl mx-auto w-full px-6">
        <h2 className={`font-jetbrains text-[54px] md:text-[72px] lg:text-[96px] font-thin uppercase leading-none tracking-widest text-left mb-block-gap ${className}`} style={{ letterSpacing: '0.06em' }}>
          <span className="block">{line1}</span>
          {line2 && <span className="block">{line2}</span>}
          <div className="h-1 w-56 mt-4 bg-gradient-to-r from-tungstenOrange to-transparent" />
        </h2>
      </div>
    </section>
  );
}