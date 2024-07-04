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
          <div className="image-container rounded-full mb-5 md:mb-0 md:mr-10">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
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
            <ul className="list-disc ml-5 mt-5 text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>Full-Stack Software Development</li>
              <li>Frontend: React, Next.js, Angular</li>
              <li>Backend: Node.js, Django, Express.js, Laravel, Nest.js</li>
              <li>Database: MongoDB, PostgreSQL, Supabase, Firebase, MySQL</li>
              <li>DevOps: Docker, Kubernetes, AWS</li>
              <li>Testing: Jest, Mocha, Selenium</li>
              <li>Deployment: Vercel, Netlify, Heroku</li>
              <li>UI/UX Design: Figma, Photoshop</li>
              <li>Programming Languages: JavaScript, TypeScript, PHP, Python</li>
              <li>CMS: WordPress</li>
              <li>Mobile Development: Flutter,React Native</li>
            </ul>
          </motion.div>
        </section>

        <section className="projects px-5 md:px-20 py-5">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            My Projects
          </motion.h3>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg text-gray-600 mt-5"
          >
            I am currently building a SaaS marketing tool named Mail Motion. It is a mobile app designed to be easy to use and cost-effective, allowing users to send emails, WhatsApp messages, or SMS to their subscribers effortlessly. Mail Motion offers a variety of built-in templates and customizable options, making it a versatile tool for businesses of all sizes.
          </motion.p>
        </section>

        <section className="contact px-5 md:px-20 py-5">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Let&apos;s Connect
          </motion.h3>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="social-icons flex justify-center md:justify-start mt-5 space-x-5 text-3xl text-gray-800"
          >
            <Link href="https://github.com/hadi-razal" target="_blank" rel="noopener noreferrer">
              <RiGithubFill className="hover:text-blue-500 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/hadi-razal-690b22228/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinFill className="hover:text-blue-500 transition duration-300" />
            </Link>
            <Link href="https://twitter.com/Hadi_Razal" target="_blank" rel="noopener noreferrer">
              <RiTwitterFill className="hover:text-blue-500 transition duration-300" />
            </Link>
            <Link href="https://www.instagram.com/hadi_razal/" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="hover:text-blue-500 transition duration-300" />
            </Link>
            <Link href="https://wa.me/919074063723" target="_blank" rel="noopener noreferrer">
              <RiWhatsappFill className="hover:text-blue-500 transition duration-300" />
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <RiFileDownloadFill className="hover:text-blue-500 transition duration-300" />
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default Home;
