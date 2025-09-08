"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Palette,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Eye,
  Heart,
  Sparkles
} from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [skillHover, setSkillHover] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { id: "hero", label: "Genesis", icon: <Sparkles className="w-4 h-4" /> },
    { id: "realm", label: "Realm", icon: <Eye className="w-4 h-4" /> },
    { id: "creations", label: "Creations", icon: <Zap className="w-4 h-4" /> },
    { id: "connect", label: "Connect", icon: <Heart className="w-4 h-4" /> },
  ];

  const skills = [
    {
      domain: "Frontend Mastery",
      icon: <Code className="w-8 h-8" />,
      essence: "Crafting Interactive Realities",
      powers: ["React", "Next.js", "TypeScript", "Three.js"],
      color: "from-cyan-400 via-blue-500 to-purple-600",
      glow: "shadow-cyan-500/30",
      level: 95
    },
    {
      domain: "Backend Alchemy",
      icon: <Database className="w-8 h-8" />,
      essence: "Engineering Digital Foundations",
      powers: ["Node.js", "MongoDB", "PostgreSQL", "GraphQL"],
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      glow: "shadow-emerald-500/30",
      level: 90
    },
    {
      domain: "Cloud Mastery",
      icon: <Cloud className="w-8 h-8" />,
      essence: "Orchestrating Infinite Scale",
      powers: ["AWS", "Docker", "Kubernetes", "Serverless"],
      color: "from-violet-400 via-purple-500 to-pink-600",
      glow: "shadow-violet-500/30",
      level: 88
    },
    {
      domain: "Design Sorcery",
      icon: <Palette className="w-8 h-8" />,
      essence: "Weaving Visual Narratives",
      powers: ["Figma", "UI/UX", "Motion", "Branding"],
      color: "from-rose-400 via-pink-500 to-orange-500",
      glow: "shadow-rose-500/30",
      level: 92
    }
  ];

  const projects = [
    {
      title: "Product Share",
      subtitle: "The Discovery Engine",
      description: "An AI-powered ecosystem that transforms how products are discovered, shared, and experienced across digital realms.",
      tech: ["React", "AI/ML", "MongoDB", "WebGL"],
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      metrics: { users: "10K+", engagement: "94%", growth: "+340%" },
      status: "Live & Evolving"
    },
    {
      title: "Product Link",
      subtitle: "The Connection Matrix",
      description: "A revolutionary linking architecture that creates seamless bridges between disparate product ecosystems.",
      tech: ["Next.js", "Supabase", "TypeScript", "WebRTC"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      metrics: { businesses: "500+", connections: "1M+", uptime: "99.9%" },
      status: "Enterprise Scale"
    },
    {
      title: "InOutX",
      subtitle: "Temporal Intelligence",
      description: "A quantum leap in workforce management, blending biometric precision with predictive analytics.",
      tech: ["React Native", "TensorFlow", "AWS", "IoT"],
      gradient: "from-violet-600 via-indigo-600 to-blue-600",
      metrics: { employees: "5K+", accuracy: "99.8%", efficiency: "+250%" },
      status: "Production Ready"
    }
  ];

  const scrollToSection = (sectionId:any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="relative bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Mystical Cursor */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: skillHover ? 2 : 1,
          rotate: skillHover ? 45 : 0,
        }}
      >
        <div className="w-full h-full border-2 border-white rounded-full opacity-80">
          <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Ethereal Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Animated Cosmic Orbs */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-96 h-96 rounded-full opacity-20 blur-3xl`}
              style={{
                background: `radial-gradient(circle, ${
                  ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'][i]
                } 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Quantum Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                HADI
              </span>
              <span className="text-white/90"> RAZAL</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-6 py-3 rounded-2xl transition-all duration-500 group"
                  onMouseEnter={() => setSkillHover(item.id as any)}
                  onMouseLeave={() => setSkillHover(null)}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Genesis Section */}
      <motion.section
        id="hero"
        style={{ scale: scaleProgress }}
        className="min-h-screen flex items-center justify-center px-6 pt-40 relative"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.5, rotateX: 0 }}
            // transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Holographic Avatar */}
            <div className="relative w-48 h-48 mx-auto mb-16">
              <motion.div
                // animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-cyan-500/30 rounded-full"
              />
              <motion.div
                // animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-purple-500/30 rounded-full"
              />
              
              <div className="absolute inset-0 bg-gradient-conic from-cyan-500 via-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 relative">
                    <Image
                      src="/myphoto.jpg"
                      alt="Hadi Razal"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20"></div>
                  </div>
                </div>
              </div>

              {/* Floating Quantum Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    x: [0, Math.cos(i * 45) * 80],
                    y: [0, Math.sin(i * 45) * 80],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8"
              >
                ✨ DIGITAL ARCHITECT & INNOVATION CATALYST
              </motion.span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-4"
              >
                CRAFTING
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                THE FUTURE
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Where <span className="text-cyan-400 font-semibold">technology</span> meets 
              <span className="text-purple-400 font-semibold"> visionary design</span> to create 
              <span className="text-pink-400 font-semibold"> extraordinary digital experiences</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            >
              <motion.button
                onClick={() => scrollToSection("creations")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(6,182,212,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  EXPLORE CREATIONS
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Quantum Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "15K+", label: "Lives Transformed", icon: <Heart className="w-6 h-6" /> },
              { number: "20+", label: "Realms Created", icon: <Globe className="w-6 h-6" /> },
              { number: "4+", label: "Years Crafting", icon: <Zap className="w-6 h-6" /> },
              { number: "∞", label: "Possibilities", icon: <Sparkles className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium group-hover:text-white/90 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Realm Section (Skills) */}
      <section id="realm" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
              MY REALM
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Mastering the arcane arts of digital creation across multiple dimensions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.domain}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                onMouseEnter={() => setSkillHover(skill.domain as any)}
                onMouseLeave={() => setSkillHover(null)}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-white/30 ${skill.glow} hover:shadow-2xl`}>
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={skillHover === skill.domain ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {skill.domain}
                        </h3>
                        <p className="text-white/60 text-sm italic">{skill.essence}</p>
                      </div>
                    </div>

                    {/* Power Level */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/80">Mastery Level</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 2, delay: index * 0.1 }}
                          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>

                    {/* Powers */}
                    <div className="grid grid-cols-2 gap-3">
                      {skill.powers.map((power, powerIndex) => (
                        <motion.div
                          key={power}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + powerIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-center group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <span className="text-white/90 font-medium">{power}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Floating particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={skillHover === skill.domain ? {
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100],
                        opacity: [0, 1, 0],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creations Section */}
      <section id="creations" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
              CREATIONS
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Legendary digital experiences that have shaped the future and transformed industries
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 p-12 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-700 group-hover:border-white/30 group-hover:scale-[1.02]`}>
                  {/* Project background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30">
                            {project.status}
                          </span>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="w-8 h-8 border border-cyan-500/30 rounded-full flex items-center justify-center"
                          >
                            <Star className="w-4 h-4 text-cyan-400" />
                          </motion.div>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xl text-purple-400 font-semibold mb-4">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-lg text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-4 py-2 bg-white/5 rounded-xl border border-white/20 text-white/90 font-medium group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-6">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: metricIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                            {value}
                          </div>
                          <div className="text-white/70 capitalize font-medium">
                            {key}
                          </div>
                        </motion.div>
                      ))}

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 text-white font-semibold group-hover:from-cyan-500/30 group-hover:to-purple-500/30 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Explore Realm</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-16 h-16 border border-cyan-500/30 rounded-full flex items-center justify-center">
                      <Globe className="w-8 h-8 text-cyan-400" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
              CONNECT
            </h2>
            <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to embark on an extraordinary journey? Lets forge the future together and 
              <span className="text-cyan-400 font-semibold"> create digital magic</span> that transcends boundaries.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Github className="w-8 h-8" />,
                href: "https://github.com/hadi-razal",
                label: "GitHub",
                subtitle: "Code Repositories",
                color: "from-gray-600 to-gray-800",
                glow: "shadow-gray-500/30"
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                href: "https://linkedin.com/in/hadi-razal-690b22228",
                label: "LinkedIn",
                subtitle: "Professional Network",
                color: "from-blue-600 to-blue-800",
                glow: "shadow-blue-500/30"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                href: "mailto:hadirazal2745@gmail.com",
                label: "Email",
                subtitle: "Direct Communication",
                color: "from-purple-600 to-pink-600",
                glow: "shadow-purple-500/30"
              }
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, rotateY: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className={`group relative p-8 bg-gradient-to-br ${contact.color} bg-opacity-20 rounded-3xl border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all duration-500 block ${contact.glow} hover:shadow-2xl`}
              >
                <div className="relative z-10">
                  <motion.div
                    className="text-white group-hover:text-cyan-400 transition-colors mb-6 flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">
                    {contact.subtitle}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.a>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-16 rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(6,182,212,0.05), rgba(168,85,247,0.05), rgba(236,72,153,0.05))",
                    "linear-gradient(90deg, rgba(168,85,247,0.05), rgba(236,72,153,0.05), rgba(6,182,212,0.05))",
                    "linear-gradient(135deg, rgba(236,72,153,0.05), rgba(6,182,212,0.05), rgba(168,85,247,0.05))"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-4xl font-bold text-white mb-6">
                  Ready to Create Legends?
                </h3>
                
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  Every revolutionary idea begins with a single conversation. Lets discuss how we can 
                  transform your vision into a digital masterpiece that will be remembered for generations.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(6,182,212,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl font-bold text-xl text-white shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-300 flex items-center justify-center space-x-4"
                >
                  <span>INITIATE COLLABORATION</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          >
            <div className="text-white/60 text-center md:text-left">
              <p className="mb-2">© 2025 Hadi Razal. Architect of Digital Realms.</p>
              <p className="text-sm">Crafted with precision, passion, and a touch of magic.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-cyan-400 rounded-full"
              />
              <span className="text-white/80 font-medium">Available for Epic Quests</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-3 h-3 bg-purple-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          cursor: none;
        }
        
        a, button {
          cursor: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;