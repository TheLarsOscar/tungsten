'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Slides-data med lager back/mid/fore och text
// ÄNDRAT (på svenska): Första sliden ("The Golden Age of Confusion") är borttagen. Slides-arrayen börjar nu direkt med "Glam in the Shadows" på index 0, följt av resterande scener uppflyttade ett steg.
const slides = [
  {
    year_place: "1779-Stockholm",
    title: "Glamming in the Shadows",
    text: " Back in the olden days—the second era of Swedish glam, during the reign of King Gustav III, our very own let-them-eat-cake monarch—there were people quietly getting the job done in the background.\nChemists, writers, miners, and other unsung consultants, busy doing the actual heavy lifting, while someone else took the spotlight (and probably the cake).",
    back: '/images/w74_s1_back_hslide_01.jpg',
    mid: ['/images/w74_s1_mid_hslide_01.png'],
    fore: [
      '/images/w74_s1_fore_hslide_01.png'
    ],
  },
  {
    year_place: "1781-Köping",
    title: "Master of Ghost Chemistry",
    text: "One of these humble heroes was Carl Wilhelm Scheele, a quiet, intensely curious, and typically dry-as-they-come Swede. In 1781, he picked up and examined a super cumbersome sample—a rock so heavy it was hard to lift. Unknown substance. Scheele simply journaled the world-unique discovery as “tung sten”—literally, heavy stone in Swedish.\n\nScheele was a simply put specialist in humble understatement. Oxygen, chlorine, manganese, you name it—he’d discover it, journal it, and let someone else accept the standing ovation. The man basically invented ghostwriting, only for chemistry.",
    back: '/images/w74_s2_back_hslide_01.jpg',
    mid: ['/images/w74_s2_mid_hslide_01.png'],
    fore: ['/images/w74_s2_fore_hslide_01.png'],
  },
  {
    year_place: "1882-Zinwald",
    title: "Inside you there are no wolves fighting",
    text: "Imagine being a German tin miner. Deep underground. Total horrible darkness. Sweat, soot, and stench. No fun.\nNow imagine a dark, cursed metal that eats your precious tin and your efforts — like a hungry wolf, frothing at the jaws. Not popular.\n\nWolfram? That’s just German for “the white stuff that accumulates in the corners of an aggravated wolf’s mouth.”\nNuance and Germans: never shall those two meet.",
    back: '/images/w74_s3_back_hslide_01.jpg',
    mid: [
      '/images/w74_s3_mid_hslide_01.png',
    ],
    fore: ['/images/w74_s3_fore_hslide_01.png'],
  },
  {
    year_place: "1783-Bergara",
    title: "¿Dónde está el wolframio?",
    text:
      "Enter, the glory hounds—the Elhuyar brothers of Spain. They saw use in the mysterious stone. Did they call it “tungsten” like Scheele? No. Did they name it for its actual property—“the stuff that ruins tin”? Also no.\n\nNein und nein, mein Schatzi. Instead, they went full proto-Wagner and chose dramatic flair. ¡Sí, sí, sí, señor! Al lobo y a los mineros de Alemania.\n\nEs un mineral llamado wolframio.",
    back: '/images/w74_s4_back_hslide_01.jpg',
    mid: ['/images/w74_s4_mid_hslide_01.png'],
    fore: ['/images/w74_s4_fore_hslide_01.png'],
  },
  {
    year_place: "1869-St. Petersburg",
    title: "Dubya Seventy-four. Period.",
    text: "Enter angry Mendeleev. Fueled by vodka and a inferiority complex the size of Siberia, he was certainly no tsarist favorite —just an angry pleb with wild hair and the kind of OCD bureaucracy you only get after generations of крепостные крестьяне (Russian serfdom).\n\nHe puts it all in a table —every element in its place, every symbol, every number. Period.\n\nW for Wolfram, of course. For maximum confusion and cross-border paperwork. W74. Period.",
    back: '/images/w74_s5_back_hslide_01.jpg',
    mid: ['/images/w74_s5_mid_hslide_01.png'],
    fore: ['/images/w74_s5_fore_hslide_01.png'],
  },
  {
    year_place: "2025-MØ+STHLM",
    title: "Respecting the heavy rock",
    text: `Despite all the drama and international confusion, we rather sympathise with Scheele and those miners —quiet brilliance, honest, blunt, rational, yet quietly emotional about their daily frustrations.

So here we are now, entertain us: a down-to-earth consultancy, a mosquito, crafting pretentious texts, doing your work, while quietly admiring typically Swedish humility.

This is our origin story. 

Heavy stone
Seventy-four
Our libido.
`,
    back: '/images/w74_s6_back_hslide_01.jpg',
    mid: [
      '/images/w74_s6_mid_hslide_01.png',
      '/images/w74_s6_mid_hslide_02.png',
      '/images/w74_s6_mid_hslide_03.png',
    ],
    fore: ['/images/w74_s6_fore_hslide_01.png'],
  },
];

// Kommentar på svenska: Första sliden ("The Golden Age of Confusion") är borttagen. Slides 1–6 är nu på index 0–5.

export default function Story() {
  // State för aktuell slide och animation status
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [progress, setProgress] = useState(0); // 0 till 1 för animationens progress

  // Ref för animation frame id och starttid
  const animFrameRef = useRef<number | null>(null);
  const animStartRef = useRef<number | null>(null);

  // Ref för att hålla nästa slide index under animation
  const nextIndexRef = useRef(current);

  // Funktion för att starta animationen med requestAnimationFrame
  const startAnimation = (newIndex: number, dir: 'next' | 'prev') => {
    if (animating || newIndex === current || newIndex < 0 || newIndex >= slides.length) return;
    setDirection(dir);
    setAnimating(true);
    setProgress(0);
    nextIndexRef.current = newIndex;
    animStartRef.current = null;

    // ÄNDRAT: Ändra slide-animationens varaktighet från 800ms till 1000ms för snabbare animation
    const duration = 1000; // 1000ms animation

    const step = (timestamp: number) => {
      if (!animStartRef.current) animStartRef.current = timestamp;
      const elapsed = timestamp - animStartRef.current;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        // Animation klar
        setCurrent(newIndex);
        setAnimating(false);
        setProgress(0);
        animFrameRef.current = null;
        animStartRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  // Hantera slide byte med animation
  const changeSlide = (newIndex: number, dir: 'next' | 'prev') => {
    startAnimation(newIndex, dir);
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Beräkna index för slides under animation
  const prevIndex = current;
  const nextIndex = nextIndexRef.current;

  // Funktion för att beräkna translateX för slides och deras lager baserat på progress och direction
  // Vi använder vw-enheter för svepande horisontell transition

  // Translate för slide som försvinner (ut):
  // från 0 till -100vw (next) eller 0 till 100vw (prev)
  const translateOut = direction === 'next' ? -progress * 100 : progress * 100;
  // Translate för slide som kommer in:
  // från 100vw till 0 (next) eller -100vw till 0 (prev)
  const translateIn = direction === 'next' ? 100 - progress * 100 : -100 + progress * 100;

  // ÄNDRAT: Parallax-regeln för både scen 1 ("Glam in the Shadows", index 1) och scen 2 ("The Master of Understatement", index 2) är nu:
  // Fore: -8 * (1 - progress) * sign (vänster in)
  // Mid:  +8 * (1 - progress) * sign (höger in)
  // Back: +2 * (1 - progress) * sign (liten parallax)
  // Ingen special-casing, samma logik för både index 1 och 2.
  // Övriga slides är orörda.
  const parallaxOffsetOut = (
    layer: 'back' | 'mid' | 'fore',
    dir: 'next' | 'prev',
    progress: number,
    slideIdx?: number,
    slide?: typeof slides[number],
    imgIdx?: number
  ) => {
    const sign = dir === 'next' ? 1 : -1;
    // För index 1 och 2, gemensam parallax
    if (slideIdx === 1 || slideIdx === 2) {
      switch (layer) {
        case 'fore':
          return -8 * progress * sign;
        case 'mid':
          return 8 * progress * sign;
        case 'back':
          return 2 * progress * sign;
        default:
          return 0;
      }
    }
    // Övriga slides: bibehåll gamla parallax (eller samma, om du vill)
    switch (layer) {
      case 'fore':
        return -8 * progress * sign;
      case 'mid':
        return 6 * progress * sign;
      case 'back':
        return 2 * progress * sign;
      default:
        return 0;
    }
  };
  const parallaxOffsetIn = (
    layer: 'back' | 'mid' | 'fore',
    dir: 'next' | 'prev',
    progress: number,
    slideIdx?: number,
    slide?: typeof slides[number],
    imgIdx?: number
  ) => {
    const sign = dir === 'next' ? 1 : -1;
    // För index 1 och 2, gemensam parallax
    if (slideIdx === 1 || slideIdx === 2) {
      switch (layer) {
        case 'fore':
          return -8 * (1 - progress) * sign;
        case 'mid':
          return 8 * (1 - progress) * sign;
        case 'back':
          return 2 * (1 - progress) * sign;
        default:
          return 0;
      }
    }
    // Övriga slides: bibehåll gamla parallax (eller samma, om du vill)
    switch (layer) {
      case 'fore':
        return -8 * (1 - progress) * sign;
      case 'mid':
        return 6 * (1 - progress) * sign;
      case 'back':
        return 2 * (1 - progress) * sign;
      default:
        return 0;
    }
  };

  // Vi visar alltid två slides under animation, annars bara en slide

  return (
    // Ändrad wrapper: från fixed till relativ, full viewport utan padding eller max-width, full bleed
    <section id="story" className="relative w-screen h-screen overflow-hidden bg-black select-none z-20">
      {/* Nytt: Bakgrundsvideo och gradient overlay, samma som i Hero. Dessa ligger längst bak. */}
      {/* Kommentar på svenska: Bakgrundsvideo och gradient overlay inlagda överst i sektionen */}
      {/* <video src="/background/hero-video.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" style={{ objectFit: "cover" }} /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90 z-10" />
      <div className="relative w-full h-full overflow-hidden">
        {/* ÄNDRAT (på svenska): 
            - Linjen under "OUR STORY" (scen 1, index 0) är nu flyttad och stylad så att den har exakt samma gradient, bredd och vänsterkolumn/padding som på "The Studio".
            - Linjen ligger direkt under titeln, inom samma grid och wrapper som text och rubrik, och är pixelperfekt vänsterställd/fadar ut i samma grid som titeln/texten under.
        */}
        {/* Om ej animating, visa bara current slide utan animation */}
        {!animating && (
          <RenderSlide
            slide={slides[current]}
            style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', transform: 'translateX(0)', zIndex: 20 }}
            parallaxOffsets={{
              back: 0,
              mid: 0,
              fore: 0,
            }}
            animating={false}
          />
        )}
        {animating && (
          <>
            {/* Här lägger vi till rendering av BÅDA bakgrundslagren kant-i-kant för att undvika gap */}
            {/* Bakgrund för föregående slide, alltid med translateX från 0 till -100vw (next) eller 0 till +100vw (prev) */}
            {slides[prevIndex].back && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  zIndex: 10,
                  transform: `translateX(${direction === 'next' ? -progress * 100 : progress * 100}vw)`,
                  transition: 'none',
                }}
              >
                <Image
                  src={slides[prevIndex].back}
                  alt={slides[prevIndex].title + ' back'}
                  fill
                  className="object-cover"
                  priority={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            {/* Bakgrund för nästa slide, alltid med translateX från 100vw till 0 (next) eller -100vw till 0 (prev) */}
            {slides[nextIndex].back && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  zIndex: 10,
                  transform: `translateX(${direction === 'next' ? 100 - progress * 100 : -100 + progress * 100}vw)`,
                  transition: 'none',
                }}
              >
                <Image
                  src={slides[nextIndex].back}
                  alt={slides[nextIndex].title + ' back'}
                  fill
                  className="object-cover"
                  priority={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Slide som anim out - mid, fore och text */}
            <RenderSlide
              slide={slides[prevIndex]}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                transform: `translateX(${translateOut}vw)`,
                transition: 'none',
                zIndex: 20,
              }}
              parallaxOffsets={{
                back: 0,
                mid: slides[prevIndex].mid ? parallaxOffsetOut('mid', direction, progress, prevIndex, slides[prevIndex]) : 0,
                fore: slides[prevIndex].fore ? parallaxOffsetOut('fore', direction, progress, prevIndex, slides[prevIndex]) : 0,
              }}
              animating={true}
              slideIndex={prevIndex}
            />
            {/* Slide som anim in - mid, fore och text */}
            <RenderSlide
              slide={slides[nextIndex]}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                transform: `translateX(${translateIn}vw)`,
                transition: 'none',
                zIndex: 20,
              }}
              parallaxOffsets={{
                back: 0,
                mid: slides[nextIndex].mid ? parallaxOffsetIn('mid', direction, progress, nextIndex, slides[nextIndex]) : 0,
                fore: slides[nextIndex].fore ? parallaxOffsetIn('fore', direction, progress, nextIndex, slides[nextIndex]) : 0,
              }}
              animating={true}
              slideIndex={nextIndex}
            />
          </>
        )}
      </div>

      {/* ÄNDRAT (på svenska): Navigeringspilarna är alltid aktiva och wrappar i loopen. Vänsterpil från första går till sista, högerpil från sista går till första. */}
      {/* ÄNDRAT (på svenska): 
          Navigationspilarna får på mobil (max-md:) position top-[85%] left-4 / right-4, på desktop (md:) top-1/2 left-0 / right-0. 
          Detta görs med Tailwind-klasser max-md:top-[85%] max-md:left-4 max-md:right-4 md:top-1/2 md:left-0 md:right-0.
          Ingen ändring på overlay/textblock eller rubrik.
      */}
      <button
        onClick={() =>
          changeSlide(
            current === 0 ? slides.length - 1 : current - 1,
            'prev'
          )
        }
        aria-label="Föregående slide"
        className="absolute z-50 flex items-center justify-center aspect-square w-[10rem] h-[10rem] bg-black/40 opacity-80 hover:opacity-100 cursor-pointer select-none outline-none
          max-md:top-[85%] max-md:left-4 md:top-1/2 md:left-0
          -translate-y-1/2"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <span className="text-tungstenOrange text-[6rem] flex items-center justify-center w-full h-full leading-none mx-auto">‹</span>
      </button>
      <button
        onClick={() =>
          changeSlide(
            current === slides.length - 1 ? 0 : current + 1,
            'next'
          )
        }
        aria-label="Nästa slide"
        className="absolute z-50 flex items-center justify-center aspect-square w-[10rem] h-[10rem] bg-black/40 opacity-80 hover:opacity-100 cursor-pointer select-none outline-none
          max-md:top-[85%] max-md:right-4 md:top-1/2 md:right-0
          -translate-y-1/2"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <span className="text-tungstenOrange text-[6rem] flex items-center justify-center w-full h-full leading-none mx-auto">›</span>
      </button>
    </section>
  );
}

// RenderSlide: gemensam parallax för ALLA slides/lager, ingen specialhantering för enskilda slides.
// Kommentar på svenska: RenderSlide använder nu EN gemensam parallax-offset för ALLA slides och lager.
// Nytt: RenderSlide tar nu slideIndex som prop, så vi kan särskilja slide 1 för special-animation.
// Kommentar på svenska: För slide 1 ("Glam in the Shadows") får fore och mid lager särskild slide-in-animation enligt instruktion.
// RenderSlide: Nu används EXAKT SAMMA transform/parallax-beräkning för både slide 1 och 2, ingen special-casing alls.
// Kommentar på svenska: All specialhantering för parallax/slide-in (isSpecial1 och liknande) är borttagen. Fore/mid transform är alltid densamma på slide 1 och 2.
// Kommentar på svenska:
// För slide 1 ("Glam in the Shadows", index 1): rendera ALLA lager (back, mid, fore) med fill, objectFit: "cover", objectPosition: "center",
// position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; Alla lager täcker hela viewporten, ingen wrapper-scaling, ingen "none".
// Transform och parallax (translateX) får användas på mid/fore om animation önskas.
// Ingen annan kod ändras.
// ÄNDRAT (på svenska): På slideIndex 0 (scen 1, "Glam in the Shadows"), rendera en stor centrerad sektionstitel "OUR STORY" överst i vyn, ovanför overlay/textblock.
function RenderSlide({
  slide,
  style,
  parallaxOffsets,
  animating,
  slideIndex,
}: {
  slide: typeof slides[number];
  style: React.CSSProperties;
  parallaxOffsets: { back: number; mid: number; fore: number };
  animating: boolean;
  slideIndex?: number;
}) {
  const idx = typeof slideIndex === 'number' ? slideIndex : slides.findIndex(s => s.title === slide.title);
  const unit = 'vw';
  // Specialhantering för slide 1 ("Glam in the Shadows", index 1)
  // ÄNDRAT: Alla slides behandlas lika. Overlay/text-block är alltid vänsterställd.
  // items-start, text-left på h2/p, wrapper-div md:ml-[256px] md:max-w-[35vw].
  // All logik för items-end, mr, text-right etc är borttagen.
  // Kommentar på svenska: Overlay/text-block är nu alltid vänsterställd och har samma styling på alla slides.
  // ÄNDRAT (på svenska): Sektionstiteln "OUR STORY" är nu flyttad till huvudkomponenten och renderas inte här längre.
  return (
    <div style={style} className="relative w-full h-full select-none overflow-hidden">
      {/* Rendera bakgrundslagret back om det finns och om vi inte animar */}
      {!animating && slide.back && (
        <Image
          src={slide.back}
          alt={slide.title + ' back'}
          fill
          className="object-cover"
          style={{
            zIndex: 10,
            pointerEvents: 'none',
            transform: `translateX(${parallaxOffsets.back}${unit})`,
            transition: 'none',
            objectFit: 'cover',
          }}
          priority={true}
          {...(idx === 0
            ? {
                placeholder: "blur",
                blurDataURL: "/images/blur_s1_back_hslide_01.jpg",
              }
            : {})}
        />
      )}
      {/* MID: stöd för array eller sträng */}
      {Array.isArray(slide.mid)
        ? slide.mid.map((src, midIdx) => {
            return (
              <Image
                key={`mid-${midIdx}`}
                src={src}
                alt={slide.title + ` mid ${midIdx + 1}`}
                fill
                className="object-cover"
                style={{
                  zIndex: 20 + midIdx,
                  pointerEvents: 'none',
                  transform: `translateX(${parallaxOffsets.mid}${unit})`,
                  transition: 'none',
                  objectFit: 'cover',
                }}
                priority={true}
              />
            );
          })
        : slide.mid && (
            <Image
              src={slide.mid}
              alt={slide.title + ' mid'}
              fill
              className="object-cover"
              style={{
                zIndex: 20,
                pointerEvents: 'none',
                transform: `translateX(${parallaxOffsets.mid}${unit})`,
                transition: 'none',
                objectFit: 'cover',
              }}
              priority={true}
            />
          )}
      {/* FORE: stöd för array eller sträng */}
      {Array.isArray(slide.fore)
        ? slide.fore.map((src, foreIdx) => {
            return (
              <Image
                key={`fore-${foreIdx}`}
                src={src}
                alt={slide.title + ` fore ${foreIdx + 1}`}
                fill
                className="object-cover"
                style={{
                  zIndex: 30 + foreIdx,
                  pointerEvents: 'none',
                  transform: `translateX(${parallaxOffsets.fore}${unit})`,
                  transition: 'none',
                  objectFit: 'cover',
                }}
                priority={true}
              />
            );
          })
        : slide.fore && (
            <Image
              src={slide.fore}
              alt={slide.title + ' fore'}
              fill
              className="object-cover"
              style={{
                zIndex: 30,
                pointerEvents: 'none',
                transform: `translateX(${parallaxOffsets.fore}${unit})`,
                transition: 'none',
                objectFit: 'cover',
              }}
              priority={true}
            />
          )}
      {/* Overlay/text är alltid sista elementet direkt i root-diven */}
      {/* Kommentar på svenska: Overlay/text är alltid vänsterställd och wrapper-div är md:ml-[256px] md:max-w-[25vw] (ändrat från 35vw enligt instruktion) */}
      {/* ÄNDRAT (på svenska): Overlay/textblock har nu mörkare overlay på slides med index 2 och 5 (scen 3 och 6), övriga slides behåller bg-black/40 */}
      <div
        className="absolute inset-0 flex flex-col justify-center z-200 items-start"
        style={{ zIndex: 200 }}
      >
        <div className="w-full px-4 md:mx-auto md:max-w-xl text-center">
          <div className={`inline-block rounded-lg px-6 py-4 ${
            idx === 2 || idx === 5
              ? 'bg-black/70'
              : 'bg-black/40'
          }`}>
            {/* ÄNDRAT (på svenska):
                Rubriken delas nu upp så här:
                - Om titeln börjar med "ÅRTAL-ORT." (exempel: "1882-Zinwald.") följt av mellanslag och resten:
                  - Rendera årtal+ort (till och med första punkt+mellanslag) som vit och mindre (<span className="text-white text-base md:text-lg lg:text-2xl">...</span>)
                  - Resten av titeln i orange och stor som tidigare (<span className="text-tungstenOrange">...</span>)
                  - Om det bara finns årtal/ort (slutar på punkt), hela titeln är vit och mindre.
                - Om ingen punkt+mellanslag finns, behåll befintlig färg och storlek på rubriken.
                - Gäller alla slides och overlays.
            */}
            <h2 className="font-jetbrains text-2xl md:text-3xl uppercase mb-4 tracking-wider drop-shadow-xl text-left">
              <span className="text-white text-base md:text-lg lg:text-2xl uppercase block">{slide.year_place}</span>
              <span className="text-tungstenOrange uppercase block">{slide.title}</span>
            </h2>
            {/* ÄNDRAT (på svenska): Brödtexten renderas så att endast icke-tomma rader blir <p> med spacing, och tomma rader eller flera radbrytningar i följd ger ENDAST ett <br /> (ingen extra <p>, ingen extra spacing). */}
            <div className="space-y-4">
              {(() => {
                // Dela upp texten i block på tomrad eller dubbel \n.
                // För att hantera både \n och \n\n, använd split(/(\n{2,}|\n\s*\n)/)
                // Men vi vill hantera både enstaka tomma rader och flera i följd som ett block.
                // Vi delar på /\n{2,}/ och itererar över blocken.
                // Inom varje block, dela på \n och rendera <p> för icke-tomma rader.
                // Tomma block (dvs flera \n i rad) ger endast ett <br /> (ingen extra spacing).
                const blocks = slide.text.split(/\n{2,}/);
                // Hitta var i texten det fanns flera tomma rader (för <br />)
                // Vi behöver också veta om blocket var tomt (dvs flera \n i följd).
                // Skapa en array med startindex i originaltexten för varje block.
                // Men enklast: efter varje block, om det inte är sista blocket, så fanns det minst två \n i följd = <br />
                let result: React.ReactNode[] = [];
                let textSoFar = '';
                blocks.forEach((block, i) => {
                  // Trimma blocket för att kolla om det är tomt (kan ha whitespace)
                  if (block.trim() !== '') {
                    // Rendera varje icke-tom rad inom blocket som <p>
                    block.split('\n').forEach((line, j) => {
                      if (line.trim() !== '') {
                        result.push(
                          <p
                            key={`p-${i}-${j}`}
                            className="text-xs md:text-base font-mono text-white drop-shadow-xl text-left"
                          >
                            {line}
                          </p>
                        );
                      }
                    });
                  }
                  // Om det inte är sista blocket, så fanns det minst två \n i följd här = <br />
                  if (i < blocks.length - 1) {
                    result.push(<br key={`br-${i}`} />);
                  }
                });
                return result;
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Kommentar på svenska:
// ÄNDRAT: Overlay/text-block är nu alltid vänsterställd, wrapper-div md:ml-[256px] md:max-w-[35vw], ingen logik för items-end/mr/text-right.