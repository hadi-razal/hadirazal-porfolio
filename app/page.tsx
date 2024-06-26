"use client"

import React from 'react';
import { motion } from 'framer-motion'; // For animations
import Head from 'next/head'; // For SEO and meta tags
import Image from 'next/image'; // For responsive image handling

const Home = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Hadi Razal - Full-Stack Developer & Marketing Mastermind</title>
        <meta name="description" content="Hadi Razal is a skilled full-stack developer and marketing specialist who builds amazing digital experiences." />
        {/* Add more meta tags as needed */}
      </Head>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero flex flex-col md:flex-row items-center justify-center py-20 px-5 md:px-20"
      >
        <div className="image-container mb-10 md:mb-0 md:mr-10">
          <Image
            src="https://i.pinimg.com/originals/83/be/23/83be236f0528c6a867715f8c6f9f575f.jpg" // Replace with Hadi's headshot
            alt="Hadi Razal - Full-Stack Developer & Marketing Mastermind"
            width={300}
            height={300}
            className="rounded-full" // Apply rounded corners
          />
        </div>
        <div className="text-container text-center md:text-left">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Hadi Razal
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-2xl md:text-3xl text-gray-600 mt-2"
          >
            Full-Stack Developer & Marketing Mastermind
          </motion.h2>
        </div>
      </motion.div>

      {/* About Section */}
      <div className="about px-5 md:px-20 py-10">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          About Me
        </motion.h3>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg text-gray-600 mt-5"
        >
          {/* Compelling bio about Hadi */}
          I am a passionate full-stack developer with expertise in modern web technologies and a knack for marketing strategies. My journey in the tech world has been driven by a desire to create impactful digital experiences.
        </motion.p>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="skills mt-10"
        >
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-800">Skills & Expertise</h4>
          <ul className="list-disc ml-5 mt-5 text-gray-600">
            <li>Full-Stack Development: React, Node.js, Express, MongoDB</li>
            <li>Marketing Strategy & Execution</li>
            <li>Content Creation & Branding</li>
            {/* Add more skills as needed */}
          </ul>
        </motion.div>
        {/* Optional: Project Showcase or Video/GIF */}
      </div>

      {/* Contact Section */}
      <div className="contact px-5 md:px-20 py-10">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Let's Talk!
        </motion.h3>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg text-gray-600 mt-5"
        >
          I'm always eager to collaborate on exciting projects. Reach out and tell me about your vision.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-orange-500 text-white py-2 px-4 rounded-md mt-10 hover:bg-orange-700"
        >
          Get a Free Consultation
        </motion.button>
        <div className="social mt-10 flex justify-center md:justify-start">
          <a href="https://twitter.com/Hadi_Razal" target="_blank" rel="noopener noreferrer">
            <motion.svg
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 text-gray-600 hover:text-orange-500 ml-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.97 10.97 0 0 0-3.29 7.436A11.406 11.406 0 0 0 12 24.75c-3.182 0-6.02-1.174-8.27-3.289a10.97 10.97 0 0 0-7.436-3.29L3 3z"></path>
            </motion.svg>
          </a>
          <a href="https://www.instagram.com/hadi_razal/" target="_blank" rel="noopener noreferrer">
            <motion.svg
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 text-gray-600 hover:text-orange-500 ml-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12c6.1 0 11-4.9 11-11 0-5.5-4.5-10-10-10s-10 4.5-10 10c0 6.1 4.9 11 11 11zM5 19a1 1 0 0 1-1-1H2a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM12 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
            </motion.svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
