// import React from 'react';
// import Navbar from '../Navigation/Navbar';
// import projectheading from '../assets/Institution.jpeg';
// import { IoArrowDownOutline } from "react-icons/io5";
// import Annupam from '../assets/Gallery6.jpeg';
// import Artivism from '../assets/Artivism Fellowship.jpg';
// import Artivism1 from '../assets/Gallery20.jpeg';
// import HumanRights from '../assets/HumanRights.jpeg';
// import Problem from '../assets/problem with Partnership.jpg';
// import TooSouthern from '../assets/TooSoutherntobefunded.png';
// import Information from '../assets/Gallery15.jpeg';
// import ElectionMonitor from '../assets/VoicesofFrontliners.jpg';
// import ArtivistShield from '../assets/ArtivistShield.jpeg';
// import YouthPeace from '../assets/Gallery4.jpeg';
// import Footer from '../component/Footer';

// const ProjectList = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       {/* <div className='bg-black h-auto md:h-[90vh] lg:h-screen overflow-y-hidden'> */}
//       <div>
//         <Navbar />
//         {/* <div className='flex justify-center items-center pt-20 md:pt-24 lg:pt-36 px-4 md:px-10 lg:ml-10'>
//           <img 
//             src={projectheading} 
//             className='w-full md:w-[80vw] lg:w-[900px] h-[50vh] md:h-[60vh] lg:h-[500px] object-cover box-border rounded-[2vw] relative'
//             alt="Project heading"
//           />
//           <div className='absolute left-4 md:left-10 lg:left-28'>
//             <h1 className='font-droid text-4xl md:text-5xl lg:text-7xl text-white'>PRO<span className='text-[#9a1d20] font-droid'>J</span>ECTS</h1>
//           </div>
//         </div>
//         <div className='flex justify-center text-white mt-4 md:mt-10 text-xs opacity-60'>
//           <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-white border cursor-pointer md:border-2">
//             <IoArrowDownOutline color="white" size={18} md:size={24} />
//           </div>
//         </div> */}
//       </div>

//       {/* Project Sections */}
//       {/* Project 01 */}
//       {/* <div className='py-10 md:py-20 px-4 md:px-20 h-auto'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>01</h2>
//           <div className='w-full lg:w-[45%] order-2'>
//             <img
//               src={Annupam}
//               className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
//               alt="Anupam Campaign"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>ANUPAM CAMPAIGN</h3>
//             <p className='text-sm text-justify mt-2'>
//               The Anupam Campaign is a powerful nationwide initiative advancing women's political
//               leadership and feminist discourse across Nepal. Through regional bus caravans,
//               storytelling, and grassroots mobilization, the campaign built momentum for change.
//               Freedom Studio led the campaign's creative direction part, developing a full visual
//               identity, branding toolkit, and materials for public engagement like banners, stickers,
//               and merchandise. For last two years, we facilitated artivism workshops, produced 100+
//               video interviews, and managed the digital storytelling strategy including a podcast
//               series and several documentaries. Our work helped visually and strategically unify the
//               campaign while uplifting the voices of women on the frontlines.
//             </p>
//           </div>
//         </div>
//       </div> */}

//        <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid font-bold text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>01</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={Annupam}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Anupam Campaign"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>ANUPAM CAMPAIGN</h3>
//             <p className='text-sm text-justify mt-4'>
//               The Anupam Campaign is a powerful nationwide initiative advancing women's political
//               leadership and feminist discourse across Nepal. Through regional bus caravans,
//               storytelling, and grassroots mobilization, the campaign built momentum for change.
//               Freedom Studio led the campaign's creative direction part, developing a full visual
//               identity, branding toolkit, and materials for public engagement like banners, stickers,
//               and merchandise. For last two years, we facilitated artivism workshops, produced 100+
//               video interviews, and managed the digital storytelling strategy including a podcast
//               series and several documentaries. Our work helped visually and strategically unify the
//               campaign while uplifting the voices of women on the frontlines.
//             </p>
//           </div>
//         </div>
//     <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>

//       </div>    

//         {/* Project 02 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid font-bold text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>02</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={Artivism1}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Artivism Workshop"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>ARTIVISM WORKSHOP</h3>
//             <p className='text-sm text-justify mt-4'>
//               The Artivism Workshop is a dynamic space for young changemakers to harness the power of
//               art for activism. We have conducted Artivism Workshop in both international spaces like Berlin,
//               Milan, London, New York, Guatemala City, Johannesburg, and Nairobi. This workshop equips
//               participants with practical tools to create canvas art, music, and installations rooted in social
//               justice themes. Freedom Studio team member facilitates the full workshop by introducing key
//               concepts of artivism, guiding hands-on creation, and leading critical reflection sessions.
//             </p>
//           </div>
//         </div>
//          <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>

//       </div>

//       {/* Project 03 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white  space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid  font-bold text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>03</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={Artivism}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Artivism Fellowship"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid  font-medium text-xl md:text-3xl mt-4 md:mt-10'>ARTIVISM FELLOWSHIP</h3>
//             <p className='text-sm text-justify mt-4'>
//               The Artivism Fellowship is a short-term creative engagement program for artists, mediamakers, and activists working on pressing social issues such as climate change, LGBTQI+
//               rights, political rights and community resilience. Freedom Studio has worked with multiple
//               partners like USAID, National Endowment for Democracy, International Republican Institute to
//               design and implement the fellowship program. Some of the activities include residential
//               training on strategic thinking, technical capacity building training, continuous mentorship and
//               peer learning. Previously, fellows worked on individual and collaborative projects, and explored
//               new creative movement building strategy. Fellowship approach centered on nurturing
//               leadership, expanding imagination, and strengthening the civic space through art-based
//               activism.
//             </p>
//           </div>
//         </div>
//             <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>

//       </div>

//       {/* Project 04 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid font-bold text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>04</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={Information}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Information Manipulation"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>INFORMATION MANIPULATION</h3>
//             <p className='text-sm text-justify mt-4'>
//               This campaign tackled the urgent issue of digital mis/disinformation by engaging youth artists
//               and influencers to produce creative content that challenges harmful narratives. Freedom
//               Studio designed and facilitated a residential artivism workshop where 12 digital artists created
//               digital content, including illustrations, photo stories, and interviews. We also launched a multiplatform social media campaign that reached over 40,000 people through both virtual
//               outreach and physical screening including an open exhibition.
//             </p>
//           </div>
//         </div>
//             <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>

//       </div>

//       {/* Project 05 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid font-bold text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>05</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={HumanRights}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Human Rights Art Festival"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>HUMAN RIGHTS ART FESTIVAL</h3>
//             <p className='text-sm text-justify mt-4'>
//               Annual event organized on December 10, the Human Rights Art Festival brings together
//               hundreds of youth to express themes of dignity, freedom, and justice through art, music,
//               dance, and poetry. Freedom Studio usually co-led the design and facilitation of the event,
//               curating performances and interactive stalls that reflected culture and resistance. We also
//               support storytelling and media documentation, creating a vibrant platform where young artists
//               could connect with civic leaders and share their vision for a more just society. The festival
//               highlights art's power to inform, inspire, and activate.
//             </p>
//           </div>
//         </div>
//         <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>

//       </div>

//       {/* Project 06 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto  bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid font-bold text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>06</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={Problem}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Problem with Partnership"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>PROBLEM WITH PARTNERSHIP</h3>
//             <p className='text-sm text-justify mt-4'>
//               Developed by Peace Direct, The Problem with Partnership is a podcast series exploring the
//               complexities, contradictions, and power imbalances in international peacebuilding
//               partnerships. It centers the voices of local peacebuilders who challenge the status quo and
//               offer grounded insights on how to build truly equitable collaboration. Freedom Studio
//               provided post-production support by editing the podcast episodes, refining the narrative flow,
//               and ensuring high-quality sound for wide accessibility. Our contribution helped bring clarity,
//               emotional resonance, and polish to a powerful series amplifying voices often unheard in the
//               global peacebuilding space.
//             </p>
//           </div>
//         </div>
//             <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>

//       </div>

//       {/* Project 07 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>07</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={TooSouthern}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Too Southern to be Funded"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>TOO SOUTHERN TO BE FUNDED</h3>
//             <p className='text-sm text-justify mt-4'>
//               Led by the Global Fund for Community Foundations, Too Southern to Be Funded is a
//               campaign that challenged the exclusion of Global South civil society from international
//               funding systems. The campaign calls for radical shifts in philanthropy and development.
//               Freedom Studio collaborated closely with the GFCF team to develop the animated explainer
//               video, campaign design, and original illustrations for this campaign. We translated complex
//               funding critique into an engaging visual narrative that was accessible, shareable, and
//               emotionally compelling.
//             </p>
//           </div>
//         </div>
//             <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>
//       </div>
//         {/* Project 08 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>08</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={ElectionMonitor}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Too Southern to be Funded"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>Election Violence Monitoring</h3>
//             <p className='text-sm text-justify mt-4'>
//              Together with the Foreign, Commonwealth & Development Office (FCDO) and the National Democratic Institute (NDI), we are actively monitor collective action, civic mobilization, and politically motivated violence during Nepal’s highly sensitive pre-election periods of March 2026. This project is designed to escalation patterns, misinformation campaigns, and civic space restrictions observed during volatile political cycles in Nepal.

//             </p>
//           </div>
//         </div>
//             <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>
//       </div>

//        {/* Project 09 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>09</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={ArtivistShield}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Too Southern to be Funded"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>Artivist Shield</h3>
//             <p className='text-sm text-justify mt-4'>
//              Artivist Shield was a three-day residential program that provided a safe, creative haven for 50 diverse artists and activists navigating shrinking civic spaces and backlash following the GenZ revolution. Grounded in the belief that youth creativity is a crucial force for defending human rights and democratic values, the initiative moved beyond conventional training by blending artivism, collective care, healing practices, and movement-aligned storytelling. Ultimately, the program laid a powerful foundation for sustained, cross-movement collaboration, proving that when creatives gather in an intentional space, they do more than produce art—they forge the deep trust, resilience, and collective power necessary to protect one another and their communities.

//             </p>
//           </div>
//         </div>
//             <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>
//       </div>

//        {/* Project 10 */}
//       <div className='pt-5 md:pt-10 px-4 md:px-20 h-auto bg-[#040707] text-white space-y-5'>
//         <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
//           <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[12vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>10</h2>
//           <div className='w-full lg:w-[35%] order-2'>
//             <img
//               src={YouthPeace}
//               className='w-full h-auto max-h-[300px] object-cover rounded-md'
//               alt="Too Southern to be Funded"
//             />
//           </div>
//           <div className='w-full lg:w-[30%] order-3'>
//             <h3 className='font-droid font-medium text-xl md:text-3xl mt-4 md:mt-10'>Youth Peace Caravan</h3>
//             <p className='text-sm text-justify mt-4'>
//                Youth Peace Caravan is a mobile, grassroots initiative that traveled across the landscape of Nepal to engage young people through ‘artivism’. By utilizing creative and cultural mediums such as dramas, songs, puppet shows, and art exhibitions, the Caravan aimed to educate local youth on the importance of countering authoritarianism in both culture and governance structures. This peaceful, art-driven approach to civic mobilization successfully energized young citizens, prompting them to initiate critical conversations about democracy during a period when faith in democratic institutions was declining. Ultimately, the Caravan served as a vehicle to bring marginalized, critical voices to light, fostering open, creative, and safe spaces for youths to discuss and develop strategies for strengthening democratic values and civic freedoms in Nepal.

//             </p>
//           </div>
//         </div>
//             <div className="border-t border-gray-600 text-center text-gray-400 text-sm"></div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ProjectList;

import Annupam from '../assets/Anupam Campaign.jpg';
import Artivism from '../assets/Artivism Workshop.jpg';
import Artivism1 from '../assets/Artivism Fellowship.jpg';
import HumanRights from '../assets/HumanRights.jpeg';
import Problem from '../assets/problem with Partnership.png';
import TooSouthern from '../assets/TooSoutherntobefunded.png';
import Information from '../assets/Gallery15.jpeg';
import ElectionMonitor from '../assets/Election Violence Monitoring.png';
import ArtivistShield from '../assets/Artivist Shield.jpg';
import YouthPeace from '../assets/Youth Peace Caravan.JPG';
import { MdOutlineSubdirectoryArrowRight, MdClose, MdLink } from "react-icons/md";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Footer from '../component/Footer';

const ProjectList = () => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const projectdata = [
    {
      img: ElectionMonitor,
      title: 'Election Violence Monitoring',
      description: 'Together with the Foreign, Commonwealth & Development Office (FCDO) and the National Democratic Institute (NDI), we are actively monitor collective action, civic mobilization, and politically motivated violence during Nepal’s highly sensitive pre-election periods of March 2026. This project is designed to escalation patterns, misinformation campaigns, and civic space restrictions observed during volatile political cycles in Nepal.',
      link: 'https://www.instagram.com/chetana.082/'
    },

    {
      img: ArtivistShield,
      title: 'Artivist Shield',
      description: ' Artivist Shield was a three-day residential program that provided a safe, creative haven for 50 diverse artists and activists navigating shrinking civic spaces and backlash following the GenZ revolution. Grounded in the belief that youth creativity is a crucial force for defending human rights and democratic values, the initiative moved beyond conventional training by blending artivism, collective care, healing practices, and movement-aligned storytelling. Ultimately, the program laid a powerful foundation for sustained, cross-movement collaboration, proving that when creatives gather in an intentional space, they do more than produce art—they forge the deep trust, resilience, and collective power necessary to protect one another and their communities.',
      link: 'https://www.youtube.com/watch?v=vQRF5aLg-kQ'
    },
    {
      img: Annupam,
      title: 'ANUPAM CAMPAIGN',
      description: "The Anupam Campaign is a powerful nationwide initiative advancing women's political leadership and feminist discourse across Nepal. Through regional bus caravans,storytelling, and grassroots mobilization, the campaign built momentum for change. Freedom Studio led the campaign's creative direction part, developing a full visual identity, branding toolkit, and materials for public engagement like banners, stickers, and merchandise. For last two years, we facilitated artivism workshops, produced 100+ video interviews, and managed the digital storytelling strategy including a podcast series and several documentaries. Our work helped visually and strategically unify the campaign while uplifting the voices of women on the frontlines.",
      link: 'https://www.youtube.com/watch?v=xX5tGgC7ZW8'
    },
    {
      img: Problem,
      title: 'PROBLEM WITH PARTNERSHIP',
      description: ' Developed by Peace Direct, The Problem with Partnership is a podcast series exploring the complexities, contradictions, and power imbalances in international peacebuilding partnerships. It centers the voices of local peacebuilders who challenge the status quo and offer grounded insights on how to build truly equitable collaboration. Freedom Studio provided post-production support by editing the podcast episodes, refining the narrative flow, and ensuring high-quality sound for wide accessibility. Our contribution helped bring clarity, emotional resonance, and polish to a powerful series amplifying voices often unheard in the global peacebuilding space.',
      link: 'https://www.peacedirect.org/the-problem-with-partnerships-podcast-series/'
    },
    {
      img: TooSouthern,
      title: 'TOO SOUTHERN TO BE FUNDED',
      description: ' Led by the Global Fund for Community Foundations, Too Southern to Be Funded is a campaign that challenged the exclusion of Global South civil society from international funding systems. The campaign calls for radical shifts in philanthropy and development. Freedom Studio collaborated closely with the GFCF team to develop the animated explainer video, campaign design, and original illustrations for this campaign. We translated complex funding critique into an engaging visual narrative that was accessible, shareable, and emotionally compelling.',
      link: 'https://www.youtube.com/watch?v=QwDOrtqVUho'
    },
    {
      img: YouthPeace,
      title: 'Youth Peace Caravan',
      description: 'Youth Peace Caravan is a mobile, grassroots initiative that traveled across the landscape of Nepal to engage young people through ‘artivism’. By utilizing creative and cultural mediums such as dramas, songs, puppet shows, and art exhibitions, the Caravan aimed to educate local youth on the importance of countering authoritarianism in both culture and governance structures. This peaceful, art-driven approach to civic mobilization successfully energized young citizens, prompting them to initiate critical conversations about democracy during a period when faith in democratic institutions was declining. Ultimately, the Caravan served as a vehicle to bring marginalized, critical voices to light, fostering open, creative, and safe spaces for youths to discuss and develop strategies for strengthening democratic values and civic freedoms in Nepal.',
      link: 'https://www.youtube.com/watch?v=QypRpubOM6c'
    },
    {
      img: Artivism,
      title: 'ARTIVISM WORKSHOP',
      description: 'The Artivism Workshop is a dynamic space for young changemakers to harness the power of art for activism. We have conducted Artivism Workshop in both international spaces like Berlin, Milan, London, New York, Guatemala City, Johannesburg, and Nairobi. This workshop equips participants with practical tools to create canvas art, music, and installations rooted in social justice themes. Freedom Studio team member facilitates the full workshop by introducing key concepts of artivism, guiding hands-on creation, and leading critical reflection sessions.',
      link: 'https://www.youtube.com/watch?v=h3GWD9wnPQ4'
    },
    {
      img: Artivism1,
      title: 'ARTIVISM FELLOWSHIP',
      description: 'The Artivism Fellowship is a short-term creative engagement program for artists, media-makers, and activists working on pressing social issues such as climate change, LGBTQI+ rights, political rights and community resilience. Freedom Studio has worked with multiple partners like USAID, National Endowment for Democracy, International Republican Institute to design and implement the fellowship program. Some of the activities include residential training on strategic thinking, technical capacity building training, continuous mentorship and peer learning. Previously, fellows worked on individual and collaborative projects, and explored new creative movement building strategy. Fellowship approach centered on nurturing leadership, expanding imagination, and strengthening the civic space through art-based activism.',
      link: 'https://www.youtube.com/watch?v=7ep5TO8TSAA'
    },
    {
      img: Information,
      title: 'Countering Information Manipulation',
      description: 'This campaign tackled the urgent issue of digital mis/disinformation by engaging youth artists and influencers to produce creative content that challenges harmful narratives. Freedom Studio designed and facilitated a residential artivism workshop where 12 digital artists created digital content, including illustrations, photo stories, and interviews. We also launched a multi-platform social media campaign that reached over 40,000 people through both virtual outreach and physical screening including an open exhibition.',
      link: 'https://www.instagram.com/reels/C7gQerDuBK_/'
    },
    {
      img: HumanRights,
      title: 'HUMAN RIGHTS ART FESTIVAL',
      description: 'Annual event organized on December 10, the Human Rights Art Festival brings together hundreds of youth to express themes of dignity, freedom, and justice through art, music, dance, and poetry. Freedom Studio usually co-led the design and facilitation of the event, curating performances and interactive stalls that reflected culture and resistance. We also support storytelling and media documentation, creating a vibrant platform where young artists could connect with civic leaders and share their vision for a more just society. The festival highlights art’s power to inform, inspire, and activate.',
      link: 'https://www.youtube.com/watch?v=jtkxgdu8HkA'
    },
  ];

  useEffect(() => {
    const cursor = cursorRef.current;
    const container = containerRef.current;

    if (!cursor || !container) return;

    gsap.set(cursor, {
      scale: 0,
      opacity: 0,
      x: -4,
      y: -4
    });

    const onMouseMove = (e) => {
      const target = e.target;
      const isOverImage = target.tagName === 'IMG' || target.closest('.image-container');

      if (isOverImage) {
        gsap.to(cursor, {
          x: e.clientX - 4,
          y: e.clientY - 4,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const onImageEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const onImageLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    };

    const imageContainers = container.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
      container.addEventListener('mouseenter', onImageEnter);
      container.addEventListener('mouseleave', onImageLeave);
    });

    container.addEventListener('mousemove', onMouseMove);

    return () => {
      imageContainers.forEach(container => {
        container.removeEventListener('mouseenter', onImageEnter);
        container.removeEventListener('mouseleave', onImageLeave);
      });
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Sidebar animation effect
  useEffect(() => {
    if (!sidebarRef.current || !overlayRef.current) return;

    if (isSidebarOpen) {
      // Open sidebar
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out"
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        display: 'block',
        ease: "power2.out"
      });
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Close sidebar
      gsap.to(sidebarRef.current, {
        x: '100%',
        duration: 0.5,
        ease: "power3.in"
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        display: 'none',
        ease: "power2.in"
      });
      // Restore body scroll
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => setSelectedProject(null), 500); // Clear after animation
  };

  return (
    <div ref={containerRef} className="bg-[#F9F6EE] min-h-screen w-full p-10 space-y-5 relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 bg-[#008080] rounded-full flex items-center justify-center pointer-events-none z-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <MdOutlineSubdirectoryArrowRight className="w-6 h-6 text-white" />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden"
        onClick={handleCloseSidebar}
      />

      {/* Right Sidebar - Fixed scrolling issue */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 w-full md:max-w-[800px] h-full bg-white z-50 shadow-2xl overflow-y-auto"
        style={{
          transform: 'translateX(100%)',
          margin: 0,
          padding: 0
        }}
      >
        {selectedProject && (
          <>
            {/* Hero Image Section - Fixed height image that doesn't scroll away */}
            <div className="sticky top-0 z-10 w-full h-[300px] md:h-[400px] flex-shrink-0">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Close Button - Positioned on image */}
              <button
                onClick={handleCloseSidebar}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all border border-white/30 z-20"
              >
                <MdClose className="w-6 h-6 text-white" />
              </button>

              {/* Title Overlay on Image */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="flex justify-between items-end">
                  <h2 className="font-droid uppercase text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="px-8 md:px-12 py-10 space-y-8">
              {/* Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-droid text-2xl uppercase tracking-wider font-semibold mb-3">About the Project</h3>
                  <p className="font-droid text-gray-800 text-base leading-relaxed text-justify">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Project Link Section */}
              {selectedProject.link && (
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-droid text-xl uppercase tracking-wider font-semibold mb-4">Project Link</h3>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#008080] text-white rounded-lg hover:bg-[#006666] transition-all duration-300 group"
                  >
                    <MdLink className="w-5 h-5" />
                    <span className="font-droid text-sm uppercase tracking-wider">
                      {selectedProject.link.includes('youtube') && 'Watch on YouTube'}
                      {selectedProject.link.includes('instagram') && 'View on Instagram'}
                      {selectedProject.link.includes('peacedirect') && 'Listen to Podcast'}
                      {!selectedProject.link.includes('youtube') &&
                        !selectedProject.link.includes('instagram') &&
                        !selectedProject.link.includes('peacedirect') && 'Visit Project'}
                    </span>
                    <MdOutlineSubdirectoryArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <h1 className='font-droid md:text-3xl text-2xl font-bold uppercase'>(Work)</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7 rounded-md">
        {projectdata.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => handleCardClick(project)}
          >
            <div className="w-full h-full rounded-md py-4 space-y-4 backdrop-blur-md ">
              {/* Image container */}
              <div className="image-container relative overflow-hidden rounded-md">
                <img
                  src={project.img}
                  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                  alt={project.title}
                />
              </div>

              {/* Title with hover underline effect */}
              <div className='flex justify-between text-black'>
                <span className='font-droid font-medium text-xl uppercase relative'>
                  {project.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectList;


