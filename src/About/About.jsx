import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaRegLightbulb } from 'react-icons/fa6';
import Navbar from '../Navigation/Navbar';
import Team from './Team';
import Partners from './Partners';
import AboutGallery from './AboutGallery';
import FreedomFormula from './FreedomFormula';

import AnimatedGradientBackground from '../component/AnimatedGradientBackground';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden font-sans">
        <AnimatedGradientBackground Breathing={true} />

        {/* Dark Overlay for better text readability on top of gradient */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 text-white flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-32 max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="h-px w-8 md:w-12 bg-white/50"></span>
              <span className="text-white/80 font-bold tracking-[0.25em] text-sm uppercase">Who We Are</span>
              <span className="h-px w-8 md:w-12 bg-white/50"></span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black font-droid uppercase tracking-tight leading-none drop-shadow-2xl">
              About Us
            </h1>

            <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl mt-6 drop-shadow-lg">
              Freedom Studio is a civic media agency that partners with movements, organizations and businesses worldwide to craft strategic, creative, and digital solutions for impactful change.
            </p>
          </motion.div>

          {/* Problem & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-8">

            {/* The Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-10 md:p-12 lg:p-14 rounded-[2rem]  hover:bg-white/[0.05] transition-colors duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 blur-[50px] -mr-16 -mt-16 rounded-full"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <FaShieldHalved className="text-xl text-red-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-droid font-bold tracking-tight">What is the problem that we solve?</h2>
              </div>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light relative z-10">
                Social movements, grassroots organizations, and small businesses often lack the capacity and infrastructure to design effective strategies, engage target groups through creative communication, and utilize digital tools that elevate their work.
              </p>
            </motion.div>

            {/* The Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-md border border-white/20 p-10 md:p-12 lg:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#9a1d20]/30 blur-[60px] -ml-20 -mb-20 rounded-full"></div>
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9a1d20] to-transparent opacity-50"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#9a1d20]/30 flex items-center justify-center border border-[#9a1d20]/50 shadow-[0_0_20px_rgba(154,29,32,0.3)]">
                  <FaRegLightbulb className="text-xl text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold font-droid tracking-tight">How do we solve it? </h2>
              </div>

              <p className="text-base md:text-lg text-white/80 leading-relaxed font-light relative z-10 text-justify">
                Freedom Studio bridges this gap by providing strategic, creative, and digital solutions tailored to the unique needs of organizations. We work together with our partners to design impactful strategies, craft compelling stories, and develop digital systems that scale their efforts and deepen their impact.
              </p>
            </motion.div>

          </div>

        </div>
      </div>

      <AboutGallery />
      <FreedomFormula />
      <Team />
      <Partners />
    </>
  );
};

export default About;