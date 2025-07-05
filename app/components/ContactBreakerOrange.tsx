'use client';

export default function ContactBreakerOrange() {
  return (
    <section className="relative h-[100px] mb-breaker-gap flex items-center font-jetbrains uppercase text-left text-[28px] text-white pl-[16.6667%] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background/bg-red-orange.mp4" type="video/mp4" />
      </video>
    </section>
  );
}