"use client";

import React from "react";
import Head from "next/head";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaLaravel,
  FaAngular,
  FaJs,
  FaPhp,
  FaWordpress,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiKubernetes,
  SiJest,
  SiMocha,
  SiSelenium,
  SiVercel,
  SiNetlify,
  SiFlutter,
  SiTypescript,
} from "react-icons/si";
import { useRouter } from "next/navigation";
import Image from "next/image";

const skillsData = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const SkillItem = ({ name, icon }) => (
  <div className="skill-item flex flex-col items-center justify-center p-4">
    <div className="icon text-4xl mb-2">{icon}</div>
    <h4 className="text-lg font-semibold">{name}</h4>
  </div>
);

const SocialLink = ({ href, icon, color, hoverColor }) => (
  <Link
    href={href}
    className={`text-4xl ${color} hover:${hoverColor}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
);

const Home = () => {
  const router = useRouter();

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText("hadhirasal22@gmail.com");
      toast.success("Email copied to clipboard", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "linear-gradient(to right, #6e6e6e, #4e4e4e, #2e2e2e)",
          color: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          fontSize: "16px",
        },
      });
    } catch (error) {
      console.log("Error copying email:", error);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-20">
      <Head>
        <title>Hadi Razal - Full Stack Developer</title>
        <meta
          name="description"
          content="Hadi Razal is a skilled full-stack developer"
        />
        <meta
          name="keywords"
          content="Hadi Razal, full-stack developer, web developer, software engineer, React, Node.js, Next.js, Duoph Technologies"
        />
        <meta name="author" content="Hadi Razal" />
        <link rel="canonical" href="https://hadirazal.in/" />
        <meta
          property="og:title"
          content="Hadi Razal - Full-Stack Developer & Founder of Duoph Technologies"
        />
        <meta
          property="og:description"
          content="Hadi Razal is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences."
        />
        <meta property="og:image" content="/hadi.jpg" />
        <meta property="og:url" content="https://hadirazal.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hadi Razal - Full-Stack Developer & Founder of Duoph Technologies"
        />
        <meta
          name="twitter:description"
          content="Hadi Razal is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences."
        />
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

      <header className="flex flex-col items-center justify-center py-10">
        <div className="hero flex flex-col md:flex-row items-center">
          <div className="relative rounded-full mb-5 md:mb-0 md:mr-10 w-[290px] h-[290px] overflow-hidden flex items-center justify-center">
            <Image
              fill
              src="/hadi2.jpg"
              alt="Hadi Razal - Full-Stack Developer"
              className="rounded-full object-cover"
            />
          </div>

          <div className="text-container text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Hadi Razal
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mt-2">
              Full-Stack Developer
            </h2>
            <h6
              onClick={handleCopyEmail}
              className="text-gray-600 mt-2 cursor-pointer"
            >
              hadhirasal22@gmail.com
            </h6>
          </div>
        </div>

        <button
          onClick={() => router.push("/aiChat")}
          className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 border border-transparent rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-5"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full opacity-50 transform scale-125 group-hover:scale-150 transition-transform duration-500 ease-in-out blur-sm group-hover:blur-md group-hover:shadow-2xl"></span>
          <span className="relative z-10 text-lg">Chat With AI</span>
        </button>
      </header>

      <main className="flex flex-col items-center py-10">
        <section className="w-full mb-10">
          <p className="text-gray-600 font-light leading-relaxed">
            I am a passionate Full-Stack Developer with 2 years of experience,
            currently working at a company based in Kochi, Kerala that provides
            services worldwide. My expertise spans modern web technologies,
            including frontend frameworks like React, Next.js, Angular, and
            React Native, and backend development with Node.js, Django, and
            Express.js. I have strong skills in designing intuitive user
            interfaces and optimizing user experiences, leveraging my
            proficiency in UI/UX design and tools such as Figma and Photoshop.
          </p>
        </section>

        <section className="skills w-full">
          <h3 className="text-3xl font-bold mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </section>

        <section className="social-links flex flex-wrap gap-6 justify-center mt-10">
          <SocialLink
            href="https://github.com/hadi-razal"
            icon={<RiGithubFill />}
            color="text-gray-800"
            hoverColor="text-gray-600"
          />
          <SocialLink
            href="https://www.linkedin.com/in/hadi-razal-690b22228/"
            icon={<RiLinkedinFill />}
            color="text-gray-800"
            hoverColor="text-gray-600"
          />
          <SocialLink
            href="https://twitter.com/Hadi_Razal"
            icon={<RiTwitterFill />}
            color="text-gray-800"
            hoverColor="text-gray-600"
          />
          <SocialLink
            href="https://www.instagram.com/hadi_razal/"
            icon={<RiInstagramFill />}
            color="text-gray-800"
            hoverColor="text-gray-600"
          />
          <SocialLink
            href="https://wa.me/84834834249"
            icon={<RiWhatsappFill />}
            color="text-gray-800"
            hoverColor="text-gray-600"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
