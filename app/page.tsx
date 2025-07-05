'use client';

import Hero from './components/Hero';
import ContactBreakerOrange from './components/ContactBreakerOrange';
import StatementBreakerLarge from './components/StatementBreakerLarge';
import Studio from './components/Studio';
import Operators from './components/Operators';
import Work from './components/Work';
import Story from './components/Story';

export default function Home() {
  return (
    <main className="font-jetbrains bg-black text-white">
      <section id="home">
        <Hero />
      </section>
      <section id="contact-orange-1">
        <ContactBreakerOrange />
      </section>
      <section id="the-studio" className="w-full bg-black">
        <Studio />
      </section>
      <section id="statement-large">
        <ContactBreakerOrange />
      </section>
      <section id="story" className="w-full bg-[url('/images/bg-metal-hero.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto w-full px-6 pt-story-to-title">
          <h2 className="font-jetbrains text-[54px] md:text-[72px] lg:text-[96px] font-thin uppercase leading-none tracking-widest mb-block-gap" style={{ letterSpacing: '0.06em' }}>
            <span className="block">Our</span>
            <span className="block">Story</span>
            <div className="h-1 w-56 mt-4 bg-gradient-to-r from-tungstenOrange to-transparent" />
          </h2>
        </div>
        <Story />
        <div className="w-full h-story-to-breaker" />
      </section>
      <section id="people" className="w-full bg-metallic">
        <Operators />
      </section>
      <section id="contact-orange-2">
        <ContactBreakerOrange />
      </section>
      <section id="our-work" className="w-full bg-black">
        <Work />
      </section>
    </main>
  );
}