"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill, RiInstagramFill, RiWhatsappFill, RiFileDownloadFill } from 'react-icons/ri';
import Link from 'next/link';
import toast from 'react-hot-toast';

const Home = () => {


  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText("hadhirasal22@gmail.com");
      toast.success("Email copied to clipboard");
    } catch (error) {
      console.log("Error copying email:", error);
    }
  }

  return (
    <div className="container mx-auto pb-10">
      <Head>
        <title>Hadi Razal - Full-Stack Developer</title>
        <meta name="description" content="Hadi Razal is a skilled full-stack developer who builds amazing digital experiences." />
        <meta name="keywords" content="Hadi Razal, full-stack developer, web developer, software engineer, React, Node.js, Next.js" />
        <meta name="author" content="Hadi Razal" />
        <link rel="canonical" href="https://hadirazal.in/" />
        <meta property="og:title" content="Hadi Razal - Full-Stack Developer" />
        <meta property="og:description" content="Hadi Razal is a skilled full-stack developer who builds amazing digital experiences." />
        <meta property="og:image" content="/hadi.jpg" />
        <meta property="og:url" content="https://hadirazal.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hadi Razal - Full-Stack Developer" />
        <meta name="twitter:description" content="Hadi Razal is a skilled full-stack developer who builds amazing digital experiences." />
        <meta name="twitter:image" content="/hadi.jpg" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hadi Razal",
            "jobTitle": "Full-Stack Developer",
            "email": "hadhirasal22@gmail.com",
            "image": "/hadi2.jpg",
            "url": "https://hadirazal.in",
            "sameAs": [
              "https://github.com/hadi-razal",
              "https://www.linkedin.com/in/hadi-razal-690b22228/",
              "https://twitter.com/Hadi_Razal",
              "https://www.instagram.com/hadi_razal/"
            ]
          }
          `}
        </script>
      </Head>

      <header>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero flex flex-col md:flex-row items-center justify-center py-10 px-5 md:px-20"
        >
          <div className=" image-container rounded-full mb-5 md:mb-0 md:mr-10">
            <motion.img
              src="/hadi2.jpg"
              alt="Hadi Razal - Full-Stack Developer"
              className='rounded-[99999px]'
              width={290}
              height={350}
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
              Full-Stack Developer
            </motion.h2>
            <motion.h6
              onClick={handleCopyEmail}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className=" text-gray-600 mt-2 cursor-pointer"
            >
              hadhirasal22@gmail.com
            </motion.h6>
          </div>
        </motion.div>
      </header>

      <main>
        <section className="about px-5 md:px-20 py-5">
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
            I am a passionate Full-Stack developer with a strong focus on creating impactful digital experiences. My expertise spans modern web technologies, including frontend frameworks like React, Next.js, Angular, and React Native, and backend development with Node.js, Django, and Express.js. I excel in designing intuitive user interfaces and optimizing user experiences, leveraging my skills in UI/UX design and proficiency in Figma and Photoshop.

            Additionally, I specialize in database management using MongoDB, PostgreSQL, Supabase, Firebase, and MySQL, and I am proficient in DevOps practices with Docker, Kubernetes, and AWS. I ensure robust application performance through rigorous testing with Jest, Mocha, and Selenium, and streamline deployment using platforms like Vercel and Netlify.

            Driven by a passion for innovation and a commitment to excellence, I thrive in collaborative environments where I can transform ideas into polished, high-impact digital solutions.
          </motion.p>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="skills mt-5"
          >
            <h4 className="text-2xl md:text-3xl font-semibold text-gray-800">Skills &amp; Expertise</h4>
            <ul className="list-disc ml-5 mt-5 text-gray-600">
              <li>Full-Stack Software Development</li>
              <li>Frontend: React, Next.js, Angular, React Native</li>
              <li>Backend: Node.js, Django, Express.js</li>
              <li>Database: MongoDB, PostgreSQL, Supabase, Firebase, MySQL</li>
              <li>DevOps: Docker, Kubernetes, AWS</li>
              <li>Testing: Jest, Mocha, Selenium</li>
              <li>Deployment: Vercel, Netlify</li>
            </ul>
          </motion.div>
        </section>

        <section className="contact px-5 md:px-20 py-5">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Let&apos;s Connect!
          </motion.h3>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg text-gray-600 mt-5"
          >
            I&apos;m always eager to collaborate on exciting projects. Reach out and tell me about your vision.
          </motion.p>
          <div className="flex flex-wrap gap-2 items-center md:justify-start justify-center md:flex-row md:items-center mt-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              href="https://wa.me/919074063723" // Replace with your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-bl from-[#274060] to-[#1B2845] text-white py-2 px-4 rounded-md hover:bg-gradient-to-l flex items-center transition-all duration-300 ease-in-out"
            >
              <RiWhatsappFill className="w-6 h-6 mr-2" />
              Message Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              href="https://github.com/hadi-razal" // Replace with your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-bl from-[#274060] to-[#1B2845] text-white py-2 px-4 rounded-md hover:bg-gradient-to-l flex items-center transition-all duration-300 ease-in-out"
            >
              <RiGithubFill className="w-6 h-6 mr-2" />
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              href="/HadiRazal.pdf"
              download
              className="bg-gradient-to-bl from-[#274060] to-[#1B2845] text-white py-2 px-4 rounded-md hover:bg-gradient-to-l flex items-center transition-all duration-300 ease-in-out"
            >
              <RiFileDownloadFill className="w-6 h-6 mr-2" />
              Download CV
            </motion.a>
          </div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="social mt-10 flex items-center justify-center md:justify-start w-full"
          >
            <p className='font-light opacity-50'>Follow On</p>
            <Link target="_blank" href="https://www.linkedin.com/in/hadi-razal-690b22228/">
              <RiLinkedinFill className="w-8 h-8 text-gray-600 hover:text-gradient-to-r from-orange-500 to-green-500 ml-5" />
            </Link>
            <Link target="_blank" href="https://twitter.com/Hadi_Razal">
              <RiTwitterFill className="w-8 h-8 text-gray-600 hover:text-gradient-to-r from-orange-500 to-green-500 ml-5" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/hadi_razal/">
              <RiInstagramFill className="w-8 h-8 text-gray-600 hover:text-gradient-to-r from-orange-500 to-green-500 ml-5" />
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home;
