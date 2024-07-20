"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaLaravel, FaAngular, FaJs, FaPhp, FaWordpress, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMongodb, SiPostgresql, SiFirebase, SiSupabase, SiMysql, SiKubernetes, SiJest, SiMocha, SiSelenium, SiVercel, SiNetlify, SiFlutter, SiTypescript } from 'react-icons/si';
import Image from 'next/image';

const skillsData = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
  // { name: "Jest", icon: <SiJest /> },
  // { name: "Mocha", icon: <SiMocha /> },
  // { name: "Selenium", icon: <SiSelenium /> },
  // { name: "Vercel", icon: <SiVercel /> },
  // { name: "Netlify", icon: <SiNetlify /> },
  // { name: "Heroku", icon: <SiNetlify /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Git", icon: <FaGitAlt /> }
];

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
    <div className=" mx-auto">
      <Head>
        <title>Hadi Razal - Software Developer & Founder of Duoph Technologies</title>
        <meta name="description" content="Hadi Razal is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences." />
        <meta name="keywords" content="Hadi Razal, full-stack developer, web developer, software engineer, React, Node.js, Next.js, Duoph Technologies" />
        <meta name="author" content="Hadi Razal" />
        <link rel="canonical" href="https://hadirazal.in/" />
        <meta property="og:title" content="Hadi Razal - Full-Stack Developer & Founder of Duoph Technologies" />
        <meta property="og:description" content="Hadi Razal is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences." />
        <meta property="og:image" content="/hadi.jpg" />
        <meta property="og:url" content="https://hadirazal.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hadi Razal - Full-Stack Developer & Founder of Duoph Technologies" />
        <meta name="twitter:description" content="Hadi Razal is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences." />
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
          <div className="image-container rounded-full mb-5 md:mb-0 md:mr-10 w-[290px] h-[290px] overflow-hidden flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src="/hadi2.jpg"
              alt="Hadi Razal - Full-Stack Developer"
              className="rounded-full w-full h-full object-cover"
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
              Full-Stack Developer & Founder of Duoph Technologies
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

      <main className='flex flex-col items-center justify-center gap-3'>
        <section className="about px-3 md:px-10  w-full">
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
            I am a passionate Full-Stack developer and the founder of Duoph Technologies, a company based in Kochi, Kerala that provides services worldwide. My expertise spans modern web technologies, including frontend frameworks like React, Next.js, Angular, and React Native, and backend development with Node.js, Django, and Express.js. I excel in designing intuitive user interfaces and optimizing user experiences, leveraging my skills in UI/UX design and proficiency in Figma and Photoshop.

            Additionally, I specialize in database management using MongoDB, PostgreSQL, Supabase, Firebase, and MySQL, and I am proficient in DevOps practices with Docker, Kubernetes, and AWS. I ensure robust application performance through rigorous testing with Jest, Mocha, and Selenium, and streamline deployment using platforms like Vercel and Netlify.

            Driven by a passion for innovation and a commitment to excellence, I thrive in collaborative environments where I
            can leverage my skills to build amazing digital experiences. As the founder of Duoph Technologies, I lead my team to deliver cutting-edge software solutions, ensuring that our clients receive top-notch service and outstanding results.
          </motion.p>
        </section>

        <section className="skills px-3 md:px-10  w-full py-5">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Skills
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-5"
          >
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item flex flex-col items-center">
                <div className="skill-icon text-4xl text-blue-500 mb-2">
                  {skill.icon}
                </div>
                <div className="skill-name text-gray-700 font-medium">
                  {skill.name}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <section className="px-3 md:px-10 w-full pb-10">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            My SaaS
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className=" px-4 py-4 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* <div className="image-container rounded-full mb-4 md:mb-0 md:mr-6 w-[100px] h-[100px] overflow-hidden flex items-center justify-center">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  src="/image.jpg"
                  alt="Hadi Razal - Full-Stack Developer"
                  className="rounded-full w-full h-full object-cover"
                />
              </div> */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800">Mail Motion</h4>
                <p className="text-gray-600 mt-1">
                  Mail Motion is an advanced AI-powered marketing tool designed specifically for business owners. It simplifies the process of promoting your products or services online by leveraging cutting-edge technology to automate and optimize your marketing efforts. With Mail Motion, you can easily create targeted email campaigns, generate compelling content, and analyze performance metrics—all from a single, intuitive platform.
                </p>
                <p className="text-gray-600 mt-2">
                  Whether you are a small business looking to expand your reach or a larger enterprise aiming to streamline your marketing strategy, Mail Motion offers a cost-effective solution to enhance your online presence. Its user-friendly interface and intelligent algorithms ensure that your marketing efforts are both efficient and effective, helping you achieve better results with minimal effort.
                </p>
              </div>

            </div>
          </motion.div>

        </section>


      </main>

      <footer className="px-5 md:px-20 py-10 pb-10 bg-gray-800 text-white">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center">
          <div className="social-links flex space-x-4 mb-5 md:mb-0">
            <Link target="_blank" href="https://github.com/hadi-razal">
              <p className="text-2xl"><RiGithubFill /></p>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/hadi-razal-690b22228/">
              <p className="text-2xl"><RiLinkedinFill /></p>
            </Link>
            <Link target="_blank" href="https://twitter.com/Hadi_Razal">
              <p className="text-2xl"><RiTwitterFill /></p>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/hadi_razal/">
              <p className="text-2xl"><RiInstagramFill /></p>
            </Link>
            <Link target="_blank" href="https://wa.me/919846258522">
              <p className="text-2xl"><RiWhatsappFill /></p>
            </Link>
          </div>
          <div className="footer-text text-center md:text-left">
            <p>&copy; 2024 Hadi Razal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </div>
  );
}

export default Home;


