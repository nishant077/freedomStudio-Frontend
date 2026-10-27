import React from 'react';
import { motion } from 'framer-motion';
import { FaEarListen, FaHeart, FaPaintbrush, FaRocket } from 'react-icons/fa6';

const FreedomFormula = () => {

  const data2 = [
    {
      icon: FaEarListen,
      front: 'Listen',
      back: 'We begin by listening, deeply and respectfully, to communities, clients, cultures, and contexts. This grounds everything we build in real needs and lived experiences.',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-600',
    },
    {
      icon: FaHeart,
      front: 'Feel',
      back: 'We design with care. By centering emotional wellbeing and collective healing, we ensure our work nourishes people, clients and communities as much as it delivers results.',
      color: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-600',
    },
    {
      icon: FaPaintbrush,
      front: 'Create',
      back: 'We turn insight into bold ideas, visual narratives, and digital tools that spark imagination, shift narratives, and strengthen systems.',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-600',
    },
    {
      icon: FaRocket,
      front: 'Impact',
      back: 'We ensure our actions create lasting change, foster growth for our partners, strengthen communities, and build momentum for movements.',
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-600',
    }
  ];

  return (
    <section className="py-10 px-6 md:px-12 bg-gradient-to-b from-[#F9F6EE] to-white font-sans relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9a1d20]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-droid text-gray-900 mb-3 tracking-tight"
          >
            The <span className="text-transparent bg-clip-text bg-[#9a1d20]">Freedom Formula</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 font-medium leading-relaxed"
          >
            Our signature approach weaves together four driving forces:
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data2.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden flex flex-col h-full z-10"
              >
                {/* Hover Top Gradient Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Floating Circle Background inside card */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-[30px] opacity-40 group-hover:opacity-80 group-hover:scale-150 transition-all duration-700 pointer-events-none`}></div>

                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-sm group-hover:-rotate-6 transition-transform duration-300 relative z-10 border border-white`}>
                  <Icon className={`text-2xl ${item.iconColor}`} />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight relative z-10 group-hover:text-[#9a1d20] transition-colors">{item.front}</h4>
                <p className="text-gray-600 leading-relaxed relative z-10 flex-grow">
                  {item.back}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FreedomFormula;













