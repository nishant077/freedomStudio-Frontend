import { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedVideos = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "This is a story of Khusbu, who got sexually abused by aid worker.",
      youtubeId: "7EBmWQAa96Q",
      channel: "Freedom Studio",
      duration: "2:30"
    },
    {
      id: 2,
      title: "Peaceful Moments",
      youtubeId: "SnuD34RZ4FI",
      channel: "Peace Direct",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Global Impact",
      youtubeId: "8BSXL6x_o4U",
      channel: "Global Fund",
      duration: "2:05"
    },
    {
      id: 4,
      title: "We're thrilled to announce the release of powerful rap, a raw and poignant anthem that confronts the pressing issue of sexual abuse and violence against women.",
      youtubeId: "-YPHGkED3SM",
      channel: "Freedom Studio",
      duration: "4:01"
    },
    {
      id: 5,
      title: "A poetry in motion of an LGBTQI+ individual simply seeking to be themselves in a world that often doesn't understand.",
      youtubeId: "8Vm_ITh5tEU",
      channel: "Freedom Studio",
      duration: "2:45"
    },
    {
      id: 6,
      title: "A short story telling you about what is meter byaj",
      youtubeId: "gjCWSCE4_sY",
      channel: "Freedom Studio",
      duration: "7:19"
    },
    {
      id: 7,
      title: "This is a glimpse into the making of a mural brought to life on the walls of Nepal Police Headquarters, Naxal .A space transformed through color, creativity, and an unlikely collaboration. Over the course of 7 days, five artists turned a wall into something the city will remember.",
      youtubeId: "Zht4vKggK2A",
      channel: "Freedom Studio",
      duration: "5:29"
    }

  ];

  const getThumbnailUrl = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  const midPoint = Math.ceil(videos.length / 2);

  return (
    <div className="h-auto bg-[#F9F6EE] py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold font-droid text-gray-900 mb-12"
        >
          Some Reference of our work
          <motion.div
            className=""
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h1>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          {/* Left Thumbnails (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 w-1/6">
            {videos.slice(0, midPoint).map((video, index) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveVideo(index)}
                className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all ${activeVideo === index ? 'ring-4 ring-[#9a1d20]' : 'opacity-80 hover:opacity-100'}`}
              >
                <img
                  src={getThumbnailUrl(video.youtubeId)}
                  alt={video.title}
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-medium truncate">{video.title}</p>
                </div>
                {activeVideo === index && (
                  <div className="absolute top-2 right-2 bg-[#9a1d20] text-white text-xs px-2 py-1 rounded-full">
                    Selected
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Center Video Player */}
          <div className="w-full lg:w-4/6 lg:sticky lg:top-24 lg:self-start z-10">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo].youtubeId}`}
                title={videos[activeVideo].title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4 px-4">
              <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-1">{videos[activeVideo].title}</h2>
              <p className="text-gray-600 text-sm">{videos[activeVideo].channel} • {videos[activeVideo].duration}</p>
            </div>
          </div>

          {/* Right Thumbnails (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 w-1/6">
            {videos.slice(midPoint).map((video, index) => {
              const actualIndex = index + midPoint;
              return (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveVideo(actualIndex)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all ${activeVideo === actualIndex ? 'ring-4 ring-[#9a1d20]' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img
                    src={getThumbnailUrl(video.youtubeId)}
                    alt={video.title}
                    className="w-full h-full object-cover aspect-video"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                    <p className="text-white text-xs font-medium truncate">{video.title}</p>
                  </div>
                  {activeVideo === actualIndex && (
                    <div className="absolute top-2 right-2 bg-[#9a1d20] text-white text-xs px-2 py-1 rounded-full">
                      Selected
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Thumbnails */}
        <div className="lg:hidden mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveVideo(index)}
              className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all ${activeVideo === index ? 'ring-4 ring-[#9a1d20]' : 'opacity-80 hover:opacity-100'}`}
            >
              <img
                src={getThumbnailUrl(video.youtubeId)}
                alt={video.title}
                className="w-full h-full object-cover aspect-video"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-white text-xs font-medium truncate">{video.title}</p>
              </div>
              {activeVideo === index && (
                <div className="absolute top-2 right-2 bg-[#9a1d20] text-white text-xs px-2 py-1 rounded-full">
                  Selected
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedVideos;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPlay, FaYoutube } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";

// const AnimatedVideos = () => {
//   const [activeVideo, setActiveVideo] = useState(0);

//   const videos = [
//     {
//       id: 1,
//       title: "This is a story of Khusbu, who got sexually abused by aid worker.",
//       youtubeId: "7EBmWQAa96Q",
//       channel: "Freedom Studio",
//       duration: "2:30"
//     },
//     {
//       id: 2,
//       title: "We're thrilled to announce the release of powerful rap, a raw and poignant anthem that confronts the pressing issue of sexual abuse and violence against women.",
//       youtubeId: "-YPHGkED3SM",
//       channel: "Freedom Studio",
//       duration: "4:01"
//     },
//     {
//       id: 3,
//       title: "A poetry in motion of an LGBTQI+ individual simply seeking to be themselves in a world that often doesn't understand.",
//       youtubeId: "8Vm_ITh5tEU",
//       channel: "Freedom Studio",
//       duration: "2:45"
//     },
//     {
//       id: 4,
//       title: "A short story telling you about what is meter byaj",
//       youtubeId: "gjCWSCE4_sY",
//       channel: "Freedom Studio",
//       duration: "7:19"
//     },
//     {
//       id: 5,
//       title: "Peaceful Moments",
//       youtubeId: "SnuD34RZ4FI",
//       channel: "Peace Direct",
//       duration: "1:45"
//     },
//     {
//       id: 6,
//       title: "Global Impact",
//       youtubeId: "8BSXL6x_o4U",
//       channel: "Global Fund",
//       duration: "2:05"
//     },
//     {
//       id: 7,
//       title: "Mural Art at Naxal | Freedom Studio x Artivist Collective x Nepal Police | Artivism",
//       youtubeId: "Zht4vKggK2A",
//       channel: "Freedom Studio",
//       duration: "4:24"
//     },
//   ];

//   const getThumbnailUrl = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

//   return (
//     <section className="bg-[#F9F6EE] py-16 md:py-24 px-4 md:px-8 lg:px-12 font-sans relative overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-[#9a1d20]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9a1d20]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="max-w-2xl"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <span className="h-0.5 w-12 bg-[#9a1d20]"></span>
//               <span className="text-[#9a1d20] font-semibold tracking-wider text-sm uppercase">Our Work</span>
//             </div>
//             <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-droid leading-tight">
//               Inspiring Stories
//             </h2>
//             <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
//               Explore our collection of powerful narratives, documentaries, and creative visual projects that capture the essence of our mission.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

//           {/* Main Video Player */}
//           <motion.div
//             className="lg:col-span-8 flex flex-col lg:sticky lg:top-24 z-20 xl:self-start lg:self-start"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             {/* Player Container */}
//             <div className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video group border border-gray-200/50">
//               <iframe
//                 src={`https://www.youtube.com/embed/${videos[activeVideo].youtubeId}?autoplay=0&rel=0&modestbranding=1`}
//                 title={videos[activeVideo].title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="absolute top-0 left-0 w-full h-full border-0"
//               ></iframe>
//             </div>

//             {/* Video Details */}
//             <div className="mt-6 md:mt-8 bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 xl:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden transition-all duration-300">
//               <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#9a1d20] to-red-500"></div>

//               <motion.h3
//                 key={`title-${activeVideo}`}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4"
//               >
//                 {videos[activeVideo].title}
//               </motion.h3>

//               <motion.div
//                 key={`meta-${activeVideo}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.4, delay: 0.1 }}
//                 className="flex flex-wrap items-center gap-4 md:gap-8 text-gray-600 font-medium"
//               >
//                 <div className="flex items-center gap-2.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
//                   <div className="bg-red-100 p-1.5 rounded-full">
//                     <FaYoutube className="text-[#9a1d20] text-sm md:text-base" />
//                   </div>
//                   <span className="text-sm md:text-base">{videos[activeVideo].channel}</span>
//                 </div>
//                 <div className="flex items-center gap-2.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
//                   <div className="bg-gray-200/50 p-1.5 rounded-full">
//                     <FiClock className="text-gray-600 text-sm md:text-base" />
//                   </div>
//                   <span className="text-sm md:text-base">{videos[activeVideo].duration}</span>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Playlist Side */}
//           <motion.div
//             className="lg:col-span-4 flex flex-col bg-white rounded-2xl md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           >
//             <div className="px-6 py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md flex justify-between items-center sticky top-0 z-10 shrink-0">
//               <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
//                 <span className="w-1.5 h-6 bg-[#9a1d20] rounded-full inline-block"></span>
//                 Playlist
//               </h3>
//               <span className="text-xs font-bold text-[#9a1d20] bg-red-50 px-3 py-1.5 rounded-full tracking-wide">
//                 {videos.length} VIDEOS
//               </span>
//             </div>

//             <div className="flex flex-col p-3 md:p-4 space-y-2 relative">
//               {videos.map((video, index) => {
//                 const isActive = activeVideo === index;
//                 return (
//                   <motion.div
//                     key={video.id}
//                     whileHover={{ scale: isActive ? 1 : 1.015 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setActiveVideo(index)}
//                     className={`group relative flex gap-4 p-3 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 ${isActive
//                       ? 'bg-red-50/60 shadow-sm border border-red-100'
//                       : 'hover:bg-gray-50 border border-transparent'
//                       }`}
//                   >
//                     {/* Thumbnail */}
//                     <div className="relative w-32 h-20 md:w-36 md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 shadow-sm">
//                       <img
//                         src={getThumbnailUrl(video.youtubeId)}
//                         alt={video.title}
//                         className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${!isActive ? 'group-hover:scale-110' : ''}`}
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

//                       {/* Play Icon Overlay / Active Indicator */}
//                       <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-black/40 opacity-100' : 'bg-black/30 opacity-0 group-hover:opacity-100'}`}>
//                         <div className={`p-2.5 rounded-full backdrop-blur-sm transform transition-transform duration-300 ${isActive ? 'bg-[#9a1d20] scale-100' : 'bg-white/20 text-white scale-90 group-hover:scale-100'}`}>
//                           {isActive ? (
//                             <div className="flex gap-1 items-center justify-center w-5 h-5">
//                               <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} className="w-1 bg-white rounded-full"></motion.div>
//                               <motion.div animate={{ height: [14, 6, 14] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} className="w-1 bg-white rounded-full"></motion.div>
//                               <motion.div animate={{ height: [6, 18, 6] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} className="w-1 bg-white rounded-full"></motion.div>
//                             </div>
//                           ) : (
//                             <FaPlay className="text-xs ml-0.5" />
//                           )}
//                         </div>
//                       </div>

//                       <div className="absolute bottom-1.5 right-1.5 bg-black/80 backdrop-blur-md text-white text-[10px] px-1.5 py-0.5 rounded font-medium tracking-wide">
//                         {video.duration}
//                       </div>
//                     </div>

//                     {/* Info */}
//                     <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
//                       <h4 className={`text-sm md:text-sm font-semibold line-clamp-2 leading-snug mb-1.5 transition-colors duration-300 ${isActive ? 'text-[#9a1d20]' : 'text-gray-900 group-hover:text-[#9a1d20]'}`}>
//                         {video.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 truncate mt-auto flex items-center gap-1.5">
//                         {video.channel}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedVideos;