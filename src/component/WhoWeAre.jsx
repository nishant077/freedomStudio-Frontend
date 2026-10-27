import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import artist from '../assets/Gallery6.jpeg';
import dreamer from '../assets/Gallery23.jpg';
import Techfreaks from '../assets/Techfreak.jpeg';
import healers from '../assets/healers.jpg'
import organizers from '../assets/organizers.jpg'


const WhoWeAre = () => {
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function onLenisFrame(time) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(onLenisFrame);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    // Animate each line's image span
    linesRef.current.forEach((line) => {
      if (!line) return;
      const imgSpan = line.querySelector(".img-span");
      if (!imgSpan) return;

      gsap.to(imgSpan, {
        width: 300,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
          end: "top 35%",
          scrub: 1.2,
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.ticker.remove(onLenisFrame);
      lenis.destroy();
    };
  }, []);

  const addLineRef = (el) => {
    if (el && !linesRef.current.includes(el)) {
      linesRef.current.push(el);
    }
  };

  return (
    <>

      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F6EE] font-driod">

        {/* Header with gradient line */}
        <div className="relative z-10 pt-16 pb-8 text-center">
          <div className="inline-block">
            <h1 className="md:text-4xl text-3xl font-droid px-8 py-4 text-gray-800">
              Who We Are
            </h1>
          </div>
        </div>

        {/* Main content */}
        <div ref={containerRef} className="relative z-10 w-full flex flex-col justify-center items-center md:py-12 py-7 space-y-8 md:space-y-10">
          
          {/* Line 1 */}
          <div ref={addLineRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Creatives
            </span>
            <span className="img-span h-[90px] sm:h-[100px] md:h-[120px] w-0 rounded-xl overflow-hidden relative shadow-2xl shadow-amber-900/20">
              <img
                src={artist}
                alt="Artistic expression"
                className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 object-cover object-center hover:scale-110 transition-transform duration-700"
              />
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl  font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Designers
            </span>
          </div>

          {/* Line 2 */}
          <div ref={addLineRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl  font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Organizers
            </span>
            <span className="img-span h-[90px] sm:h-[100px] md:h-[120px] w-0 rounded-xl overflow-hidden relative shadow-2xl shadow-amber-900/20">
              <img
                src={organizers}
                alt="Organized creativity"
                className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 object-cover object-center hover:scale-110 transition-transform duration-700"
              />
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl  font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Campaigners
            </span>
          </div>

          {/* Line 3 */}
          <div ref={addLineRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Advocates
            </span>
            <span className="img-span h-[90px] sm:h-[100px] md:h-[120px] w-0 rounded-xl overflow-hidden relative shadow-2xl shadow-amber-900/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Tech innovation"
                className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 object-cover object-center hover:scale-110 transition-transform duration-700"
              />
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl  font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Activists
            </span>
          </div>

          {/* Line 4 */}
          <div ref={addLineRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl  font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Innovators
            </span>
            <span className="img-span h-[90px] sm:h-[100px] md:h-[120px] w-0 rounded-xl overflow-hidden relative shadow-2xl shadow-amber-900/20">
              <img
                src={Techfreaks}
                alt="Advocacy and change"
                className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 object-cover object-center hover:scale-110 transition-transform duration-700"
              />
            </span>
             <span className="text-5xl sm:text-6xl md:text-7xl  font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Tech freaks
            </span>
          </div>

          {/* Line 5 */}
          <div ref={addLineRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Healers
            </span>
            <span className="img-span h-[90px] sm:h-[100px] md:h-[120px] w-0 rounded-xl overflow-hidden relative shadow-2xl shadow-amber-900/20">
              <img
                src={healers}
                alt="Healing and wellness"
                className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 object-cover object-center hover:scale-110 transition-transform duration-700"
              />
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Artists
            </span>
          </div>

          {/* Line 6 */}
          <div ref={addLineRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl  font-black font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Dreamers
            </span>
            <span className="img-span h-[90px] sm:h-[100px] md:h-[120px] w-0 rounded-xl overflow-hidden relative shadow-2xl shadow-amber-900/20">
              <img
                src={dreamer}
                alt="Dreamers and visionaries"
                className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 object-cover object-center hover:scale-110 transition-transform duration-700"
              />
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-blac font-droid tracking-tight text-stone-800 hover:text-[#9a1d20] transition-colors duration-300">
              Doers
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;