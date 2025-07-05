'use client';

import Hero from './components/Hero';
import ContactBreakerOrange from './components/ContactBreakerOrange';
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
      <section id="story" className="w-full bg-black">
        <Story />
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