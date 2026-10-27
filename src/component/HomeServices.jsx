// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';
// import image1 from '../assets/Strategy Building.jpeg';
// import image2 from '../assets/Digital Communication.jpeg';
// import image3 from '../assets/Knowledge Development.jpeg';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const HomeServices = () => {
//   const containerRef = useRef(null);
//   const listWrapperRef = useRef(null);
//   const listRef = useRef(null);
//   const previewImageRef = useRef(null);
//   const mobilePreviewImageRef = useRef(null);
//   const listItemsRef = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const characters = [
//     { id: 1, name: 'STRATEGIC DESIGN', image:  image1},
//     { id: 2, name: 'CREATIVE COMMUNICATION', image: image2 },
//     { id: 3, name: 'DIGITAL TRANSFORMATION', image:  image3},
//   ];

//   useEffect(() => {
//     let lenis;
//     let lenisTicker;

//     let ctx = gsap.context(() => {
//       // Initialize Lenis for smooth scrolling
//       lenis = new Lenis({
//         lerp: 0.1,
//         smoothWheel: true,
//       });

//       lenis.on('scroll', ScrollTrigger.update);

//       lenisTicker = (time) => {
//         lenis.raf(time * 1000);
//       };

//       gsap.ticker.add(lenisTicker);
//       gsap.ticker.lagSmoothing(0);

//       // Make sure all refs are available
//       if (listItemsRef.current.length > 0 && listWrapperRef.current && containerRef.current) {
//         // Calculate scroll distance using GSAP functional properties for responsiveness
//         const getScrollDistance = () => {
//           if (!listItemsRef.current[0]) return 0;
//           const itemHeight = listItemsRef.current[0].offsetHeight;
//           const gap = 8; // gap-2 = 8px
//           return -(itemHeight + gap) * (listItemsRef.current.length - 1);
//         };

//         // GSAP animation
//         gsap.to(listWrapperRef.current, {
//           y: getScrollDistance,
//           ease: "none",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top top",
//             end: "+=150%", // Extended end distance for comfortable scrolling 
//             pin: true,
//             scrub: 1,
//             invalidateOnRefresh: true,
//             onEnter: () => {
//               gsap.to([previewImageRef.current, mobilePreviewImageRef.current].filter(Boolean), {
//                 opacity: 1,
//                 duration: 0.3,
//                 ease: "power2.out"
//               });
//             },
//             onLeave: () => {
//               gsap.to([previewImageRef.current, mobilePreviewImageRef.current].filter(Boolean), {
//                 opacity: 0,
//                 duration: 0.3,
//                 ease: "power2.out"
//               });
//               listItemsRef.current.forEach((item) => {
//                 if (item) item.classList.remove('active-item');
//               });
//             },
//             onEnterBack: () => {
//               gsap.to([previewImageRef.current, mobilePreviewImageRef.current].filter(Boolean), {
//                 opacity: 1,
//                 duration: 0.3,
//                 ease: "power2.out"
//               });
//             },
//             onLeaveBack: () => {
//               gsap.to([previewImageRef.current, mobilePreviewImageRef.current].filter(Boolean), {
//                 opacity: 0,
//                 duration: 0.3,
//                 ease: "power2.out"
//               });
//               listItemsRef.current.forEach((item) => {
//                 if (item) item.classList.remove('active-item');
//               });
//             },
//             onUpdate: (self) => {
//               const newActiveIndex = Math.min(
//                 Math.floor(self.progress * characters.length),
//                 characters.length - 1
//               );

//               // Update active class
//               listItemsRef.current.forEach((item, i) => {
//                 if (item) {
//                   if (i === newActiveIndex) {
//                     item.classList.add('active-item');
//                   } else {
//                     item.classList.remove('active-item');
//                   }
//                 }
//               });

//               // Update image
//               if (previewImageRef.current) {
//                 previewImageRef.current.src = characters[newActiveIndex].image;
//               }
//               if (mobilePreviewImageRef.current) {
//                 mobilePreviewImageRef.current.src = characters[newActiveIndex].image;
//               }

//               setActiveIndex(newActiveIndex);
//             }
//           }
//         });
//       }
//     });

//     // Cleanup
//     return () => {
//       ctx.revert();
//       if (lenisTicker) gsap.ticker.remove(lenisTicker);
//       if (lenis) lenis.destroy();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   // Format index with leading zero
//   const formatIndex = (num) => {
//     return num.toString().padStart(2, '0');
//   };

//   return (
//     <div className="relative bg-[#F9F6EE]">
//       {/* Preview Image */}
//       <img
//         ref={previewImageRef}
//         className="fixed top-1/2 right-20 -translate-y-1/2 w-[420px] h-[560px] object-cover rounded-md pointer-events-none z-50 hidden md:block opacity-0"
//         style={{ objectPosition: 'center top' }}
//         src={characters[0].image}
//         alt="Service preview"
//       />

//       {/* Main Container */}
//       <div
//         ref={containerRef}
//         className="h-screen overflow-hidden relative bg-[#F9F6EE]"
//       >
//          <h2 
//                     className='text-center md:text-4xl text-3xl font-droid text-gray-800'
//                 >
//                     (Services)
//                 </h2>
//         <div className="px-[60px] max-sm:px-5 h-full">
//           <div ref={listWrapperRef} className="will-change-transform">
//             <div ref={listRef} className="flex flex-col gap-2 py-[50px]">
//               {characters.map((character, index) => (
//                 <div
//                   key={character.id}
//                   ref={(el) => (listItemsRef.current[index] = el)}
//                   className={`
//                     flex items-center py-4 cursor-pointer
//                     border-b border-black/10 last:border-none
//                     transition-all duration-500 ease-out
//                     ${activeIndex === index ? 'active-item' : ''}
//                   `}
//                   data-img={character.image}
//                 >
//                   <span className={`
//                     text-sm font-mono w-10 flex-shrink-0
//                     transition-all duration-500
//                     ${activeIndex === index ? 'text-black/80' : 'text-black/30'}
//                   `}>
//                     {formatIndex(index + 1)}
//                   </span>

//                   <div className={`
//                     text-[clamp(28px,5vw,48px)] font-driod font-bold
//                     transition-all duration-500 ease-out
//                     ${activeIndex === index
//                       ? 'text-black translate-x-6 opacity-100'
//                       : 'text-black/40 translate-x-0 opacity-40'
//                     }
//                     max-sm:text-2xl max-sm:${activeIndex === index ? 'translate-x-3' : 'translate-x-0'}
//                   `}>
//                     {character.name}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Preview Image */}
//       <img
//         ref={mobilePreviewImageRef}
//         className="md:hidden fixed bottom-5 right-4 w-[140px] h-[180px] object-cover rounded-sm pointer-events-none z-50 opacity-0"
//         style={{ objectPosition: 'center top' }}
//         src={characters[activeIndex]?.image || characters[0].image}
//         alt="Service preview"
//       />
//     </div>
//   );
// };

// export default HomeServices;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../assets/Strategy Building.jpeg';
import image2 from '../assets/Digital Communication.jpeg';
import image3 from '../assets/Gallery23.jpg';
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const HomeServices = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      id: 1,
      name: 'STRATEGIC DESIGN',
      description: 'From internal clarity to external impact, we co-create cultures, strategies & policies for organizations and projects.',
      image: image1,
      color: 'bg-[#040707]',
      textColor: 'text-white',
      tags: [
        'Quantitative and Qualitative Research',
        'Campaign Co-creation & Facilitation', 'Policy & Governance Design',
        'Program and Advocacy Planning',
        'Facilitating Strategic Retreats',
        'Co-developing Theories of Change',
        'Institution Building Support'
      ]
    },
    {
      id: 2,
      name: 'CREATIVE COMMUNICATION',
      description: 'Our communications are grounded in purpose and shaped by relevance, so that your audience engages along with you.',
      image: image2,
      color: 'bg-[#008080]',
      textColor: 'text-white',
      tags: [
        'Campaign Storytelling', 'Brand Identity & Visual Design', 'Multimedia Production',
        'Video & Animation Production', 'Graphic & Illustration Design', 'Art Services',
        'Social Media Strategy',
      ]
    },
    {
      id: 3,
      name: 'DIGITAL TRANSFORMATION',
      description: 'We design meaningful technology infrastructure, so that your organizations thrive in a rapidly changing world.',
      image: image3,
      color: 'bg-[#151e3f]',
      textColor: 'text-white',
      tags: [
        'Website & Platform Development', 'Digital Ecosystem Strategy',
        'User Experience (UX/UI) Design',
        'Mapping & Visualization Tools',
        'Online Learning Spaces',

      ]
    },
  ];


  useEffect(() => {
    let ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (index === cardsRef.current.length - 1) return;

      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full pb-[5vh] bg-[#F9F6EE]">
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className={`w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden transform-gpu origin-top ${service.color}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full  px-6 sm:px-8 md:px-16 py-10 sm:py-16 gap-8 sm:gap-12 md:gap-20 lg:gap-32">

            {/* Text Content Side */}
            <div className={`flex flex-col justify-center w-full md:w-1/2 h-full ${service.textColor}`}>

              {/* Number mapping */}
              <div className="text-xl md:text-2xl font-mono mb-4 sm:mb-8 opacity-80">
                0{index + 1}
              </div>

              {/* Short Paragraph */}
              <p className="text-base sm:text-lg md:text-xl font-light mb-6 max-w-md opacity-90 leading-relaxed">
                {service.description}
              </p>

              {/* Tags Container */}
              <div className="flex flex-wrap gap-2 mb-auto max-w-xl">
                {service.tags && service.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="border border-white/40 rounded-full px-3 py-1 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 sm:mt-16 mb-6 sm:mb-8">
                {/* Huge Title */}
                <h2 className="text-[clamp(22px,4vw,80px)] font-droid font-bold leading-[1.1]">
                  {service.name}
                </h2>
              </div>

              {/* Horizontal Line & Learn More */}
              <div className="flex items-center justify-between border-t border-white/30 pt-4 sm:pt-6 mt-2 sm:mt-4 group cursor-pointer transition-colors hover:border-white/80">
                <span className="text-sm sm:text-lg uppercase tracking-wider font-medium">Learn More</span>
                {/* Arrow Icon */}
                <MdArrowOutward size={30} />
              </div>

            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end pb-8 md:pb-0">
              <div className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-md lg:max-w-lg aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeServices;