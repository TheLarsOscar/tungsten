'use client';

import Hero from './components/Hero';
import Contact from './components/Contact';
import ContactBreakerOrange from './components/ContactBreakerOrange';
import Studio from './components/Studio';
import Operators from './components/Operators';
import Work from './components/Work';
import Story from './components/Story';

export default function Home() {
  return (
    <main className="font-jetbrains bg-black text-white">
      <section id="home" className="scroll-mt-nav">
        <Hero />
      </section>
      <section id="contact-orange-1" className="scroll-mt-nav">
        <ContactBreakerOrange />
      </section>
      <section id="the-studio" className="w-full bg-black scroll-mt-nav">
        <Studio />
      </section>
      <section id="statement-large" className="scroll-mt-nav">
        <ContactBreakerOrange />
      </section>
      <section id="story" className="w-full bg-black scroll-mt-nav">
        <Story />
      </section>
      <section id="people" className="w-full bg-metallic scroll-mt-nav">
        <Operators />
      </section>
      <section id="contact-orange-2" className="scroll-mt-nav">
        <ContactBreakerOrange />
      </section>
      <section id="our-work" className="w-full bg-black scroll-mt-nav">
        <Work />
      </section>
      <section id="contact" className="scroll-mt-nav">
        <Contact />
      </section>
    </main>
  );
}