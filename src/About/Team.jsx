import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import team1 from '../assets/Nish.jpeg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/Aayush.jpeg';
import team6 from '../assets/Renu.jpg';
import team7 from '../assets/Ajit Kumar Bashyal.jpeg';
import team10 from '../assets/Sahaj.jpeg'
import team11 from '../assets/Aditya.png';
import team12 from '../assets/Bikki.png';

const Team = () => {
    const team = [
        {
            name: 'Nishchhal Kharal',
            role: 'Chief Executive Officer',
            image: team1
        },
        {
            name: 'Shila Bhatta',
            role: 'Creative Director',
            image: team2
        },
        {
            name: 'Pratik Karmacharya',
            role: 'Advocacy Director',
            image: team3
        },
        {
            name: 'Aayush Pantha',
            role: 'Multimedia Director',
            image: team4
        },
        {
            name: 'Renu Ghimire',
            role: 'Program Officer',
            image: team6
        },
        {
            name: 'Ajit Kumar Bashyal',
            role: 'Operations Associate',
            image: team7
        },
        {
            name: 'Sahaj Tamrakar',
            role: 'Animator',
            image: team10
        },
        {
            name: 'Aaditya Acharya',
            role: ' Multimedia Associate',
            image: team11
        },
        {
            name: 'Bikki Tamang',
            role: 'Illustrator',
            image: team12
        },

    ];

    const [currentGroup, setCurrentGroup] = useState(0);
    const cardsPerGroup = 4;
    const totalGroups = Math.ceil(team.length / cardsPerGroup);

    const nextGroup = () => {
        setCurrentGroup((prev) => (prev + 1) % totalGroups);
    };

    const prevGroup = () => {
        setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
    };

    const getCurrentCards = () => {
        const startIndex = currentGroup * cardsPerGroup;
        const endIndex = startIndex + cardsPerGroup;
        return team.slice(startIndex, endIndex);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full bg-[#F9F6EE] py-20 px-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl text-center font-droid text-gray-800  mb-2">Our Team</h2>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentGroup}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center gap-6"
                        >
                            {getCurrentCards().map((member, index) => (
                                <motion.div
                                    key={`${member.name}-${index}`}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden w-64 flex-shrink-0"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-droid text-gray-800">{member.name}</h3>
                                        <p className="text-[#9a1d20] text-sm font-medium">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={prevGroup}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9a1d20]"
                        aria-label="Previous group"
                    >
                        <FaChevronLeft className="text-[#9a1d20] text-xl" />
                    </button>

                    <button
                        onClick={nextGroup}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9a1d20]"
                        aria-label="Next group"
                    >
                        <FaChevronRight className="text-[#9a1d20] text-xl" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalGroups }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentGroup(index)}
                            className={`w-3 h-3 rounded-full ${currentGroup === index ? 'bg-[#9a1d20]' : 'bg-gray-300'}`}
                            aria-label={`Go to group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;

// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// import { FaQuoteLeft, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// import './Team.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// const Team = () => {
//     const [activeIndex, setActiveIndex] = useState(0);


//     // TeamData.js
//     const teamData = [
//         {
//             name: 'Nishchhal Kharal',
//             role: 'Chief Executive Officer',
//             image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
//             quote: "Leadership is about making others better as a result of your presence and making sure that impact lasts in your absence."
//         },
//         {
//             name: 'Shila Bhatta',
//             role: 'Creative Director',
//             image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
//             quote: "Creativity is intelligence having fun. The design is not just what it looks like, but how it works."
//         },
//         {
//             name: 'Pratik Karmacharya',
//             role: 'Advocacy Director',
//             image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
//             quote: "Advocacy is about giving voice to the voiceless and power to the powerless."
//         },
//         {
//             name: 'Aayush Pantha',
//             role: 'Multimedia Director',
//             image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
//             quote: "Multimedia is not just about using multiple mediums, it's about creating immersive experiences."
//         },
//         {
//             name: 'Sijendra Thapa',
//             role: 'Multimedia Manager',
//             image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
//             quote: "Good management is the art of making problems so interesting that everyone wants to get involved in solving them."
//         },
//         {
//             name: 'Renu Ghimire',
//             role: 'Senior Program Associate',
//             image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
//             quote: "Programs are the bridge between vision and reality. Effective execution turns ideas into impact."
//         }
//     ];

//     return (
//         <div className="team-section w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen py-16 px-4">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-16">
//                     <div className="inline-block mb-4">
//                         <div className="h-1 w-20 bg-[#FF6B6B] mx-auto mb-2"></div>
//                         <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Creative Team</h3>
//                     </div>
//                     <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//                         Meet the talented individuals who make our vision a reality with their dedication and expertise.
//                     </p>
//                 </div>

//                 <Swiper
//                     effect={'coverflow'}
//                     grabCursor={true}
//                     centeredSlides={true}
//                     slidesPerView={'auto'}
//                     coverflowEffect={{
//                         rotate: 5,
//                         stretch: 0,
//                         depth: 100,
//                         modifier: 2.5,
//                         slideShadows: true,
//                     }}
//                     pagination={{
//                         clickable: true,
//                         el: '.team-pagination',
//                         type: 'bullets',
//                         bulletClass: 'team-bullet',
//                         bulletActiveClass: 'team-bullet-active',
//                     }}
//                     navigation={{
//                         nextEl: '.team-swiper-button-next',
//                         prevEl: '.team-swiper-button-prev',
//                     }}
//                     autoplay={{
//                         delay: 4000,
//                         disableOnInteraction: false,
//                     }}
//                     modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//                     className="team-swiper"
//                     breakpoints={{
//                         320: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                             coverflowEffect: {
//                                 rotate: 0,
//                                 depth: 50,
//                                 modifier: 1,
//                                 stretch: 10,
//                             }
//                         },
//                         768: {
//                             slidesPerView: 2,
//                             spaceBetween: 30,
//                             coverflowEffect: {
//                                 rotate: 5,
//                                 depth: 100,
//                                 modifier: 2,
//                                 stretch: 0,
//                             }
//                         },
//                         1024: {
//                             slidesPerView: 3,
//                             spaceBetween: 40,
//                             coverflowEffect: {
//                                 rotate: 5,
//                                 depth: 100,
//                                 modifier: 2.5,
//                                 stretch: 0,
//                             }
//                         }
//                     }}
//                     onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                 >
//                     {teamData.map((member, index) => (
//                         <SwiperSlide key={index}>
//                             <div className={`team-card ${index === activeIndex ? 'active' : ''} bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden group cursor-pointer relative`}>
//                                 <div className="h-80 overflow-hidden relative">
//                                     <img
//                                         src={member.image}
//                                         alt={member.name}
//                                         className="team-image w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

//                                     <div className="team-socials absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                         <a href="#" className="bg-white p-2 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
//                                             <FaLinkedin className="text-lg" />
//                                         </a>
//                                         <a href="#" className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
//                                             <FaTwitter className="text-lg" />
//                                         </a>
//                                         <a href="#" className="bg-white p-2 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
//                                             <FaInstagram className="text-lg" />
//                                         </a>
//                                     </div>

//                                     <div className="team-overlay absolute bottom-0 left-0 right-0 p-6 text-white">
//                                         <FaQuoteLeft className="text-2xl mb-3 text-[#FF6B6B]" />
//                                         <p className="text-sm font-light italic leading-relaxed">{member.quote}</p>
//                                     </div>
//                                 </div>

//                                 <div className="p-6 text-center relative">
//                                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center">
//                                         <span className="text-white font-bold">{index + 1}</span>
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white mb-1 mt-2">{member.name}</h3>
//                                     <p className="text-[#FF6B6B] text-sm font-medium mb-3">{member.role}</p>
//                                     <div className="flex justify-center space-x-2">
//                                         {Array.from({ length: 5 }).map((_, i) => (
//                                             <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 <div className="flex justify-center items-center mt-12 space-x-4">
//                     <div className="team-swiper-button-prev bg-white/10 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer transition-all duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </div>

//                     <div className="team-pagination flex space-x-2"></div>

//                     <div className="team-swiper-button-next bg-white/10 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer transition-all duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Team;