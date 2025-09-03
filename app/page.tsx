"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Code,
  Database,
  Cloud,
  Palette,
  Zap,
  Globe,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Calendar,
  Star,
  Sparkles,
  ArrowRight,
  Play,
  Award,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState<any>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSkillSet, setCurrentSkillSet] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    "Frontend Mastery": {
      icon: <Code className="w-8 h-8" />,
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      glowColor: "shadow-cyan-500/50",
      items: [
        { name: "ReactJs", level: 95 },
        { name: "NextJs", level: 92 },
        { name: "Angular", level: 88 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 94 },
        { name: "Tailwind", level: 96 },
        { name: "Redux", level: 87 },
        { name: "Material UI", level: 89 },
      ],
    },
    "Backend & Database": {
      icon: <Database className="w-8 h-8" />,
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      glowColor: "shadow-emerald-500/50",
      items: [
        { name: "NodeJs", level: 91 },
        { name: "ExpressJs", level: 89 },
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 86 },
        { name: "Supabase", level: 87 },
        { name: "Firebase", level: 90 },
        { name: "GraphQL", level: 83 },
      ],
    },
    "Cloud & DevOps": {
      icon: <Cloud className="w-8 h-8" />,
      color: "from-violet-400 via-purple-500 to-indigo-600",
      glowColor: "shadow-violet-500/50",
      items: [
        { name: "AWS", level: 88 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 82 },
        { name: "CI/CD", level: 87 },
        { name: "Git", level: 94 },
        { name: "Socket.io", level: 89 },
        { name: "REST API", level: 93 },
        { name: "Zapier", level: 86 },
      ],
    },
    "Design & Automation": {
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-400 via-rose-500 to-orange-500",
      glowColor: "shadow-pink-500/50",
      items: [
        { name: "Figma", level: 91 },
        { name: "UI/UX", level: 89 },
        { name: "Photoshop", level: 87 },
        { name: "Power BI", level: 93 },
        { name: "Power Automate", level: 95 },
        { name: "Office 365", level: 92 },
        { name: "SEO", level: 85 },
        { name: "Agile/Scrum", level: 88 },
      ],
    },
    "Languages & Innovation": {
      icon: <Zap className="w-8 h-8" />,
      color: "from-amber-400 via-orange-500 to-red-500",
      glowColor: "shadow-amber-500/50",
      items: [
        { name: "Python", level: 86 },
        { name: "PHP", level: 84 },
        { name: "SAP", level: 82 },
        { name: "Bootstrap", level: 90 },
        { name: "Jest", level: 85 },
        { name: "Astro", level: 87 },
        { name: "Framer", level: 91 },
        { name: "React Native", level: 88 },
      ],
    },
  };

  const projects = [
    {
      title: "Product Share",
      category: "SaaS Platform",
      description: "Revolutionary product discovery platform with AI-powered recommendations, real-time analytics, and seamless integration across digital ecosystems.",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      featured: true,
      metrics: "10K+ Users",
      status: "Live",
    },
    {
      title: "Product Link",
      category: "SaaS Platform", 
      description: "Next-generation product linking suite with cross-platform synchronization, automated inventory management, and intelligent data normalization.",
      tech: ["Next.js", "Supabase", "TypeScript", "API Integration"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      featured: true,
      metrics: "500+ Businesses",
      status: "Live",
    },
    {
      title: "SuccessFactors Data Bundling & Compliance Tracker",
      category: "Enterprise Automation",
      description: "Advanced HR data processing engine with automated compliance tracking, dynamic reporting, and real-time audit capabilities for enterprise-scale operations.",
      tech: ["Power Automate", "Power BI", "Office 365", "SuccessFactors"],
      gradient: "from-indigo-600 via-blue-600 to-purple-600",
      metrics: "10K+ Employees",
      status: "Enterprise",
    },
    {
      title: "Leave Management System",
      category: "Low-Code Innovation",
      description: "Intelligent leave management platform with multi-tier approval workflows, predictive analytics, and seamless HR system integration.",
      tech: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      metrics: "99.9% Uptime",
      status: "Production",
    },
    {
      title: "InOutX",
      category: "SaaS Platform",
      description: "Cutting-edge employee time tracking solution with biometric integration, smart scheduling, and comprehensive workforce analytics.",
      tech: ["Next.js", "Supabase", "React", "Analytics"],
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      metrics: "5K+ Employees",
      status: "Live",
    },
    {
      title: "Mail Motion",
      category: "AI SaaS Platform",
      description: "AI-driven email marketing automation with intelligent content generation, advanced segmentation, and predictive performance analytics.",
      tech: ["React", "OpenAI", "Firestore", "Analytics"],
      gradient: "from-orange-600 via-red-600 to-pink-600",
      metrics: "1M+ Emails",
      status: "Beta",
    },
  ];

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev:any) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillSet((prev) => (prev + 1) % Object.keys(skills).length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden pt-10">
      {/* Custom Cursor */}
      <div 
        className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isVisible.hero ? 1.5 : 1})`
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80"></div>
      </div>

      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-600/30 to-orange-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Hadi Razal
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-6 py-3 rounded-full transition-all duration-300 group"
                >
                  <span className={`relative z-10 ${
                    isVisible[item.id]
                      ? "text-cyan-400"
                      : "text-white/70 hover:text-white"
                  }`}>
                    {item.label}
                  </span>
                  {isVisible[item.id] && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/50"
                    />
                  )}
                  <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        id="hero"
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="relative w-64 h-64 mx-auto mb-12">
              {/* Rotating rings around photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-purple-500/30 rounded-full"
              ></motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src="/myphoto.jpg"
                  alt="Hadi Razal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${10 + (i % 2) * 80}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <span className="text-2xl font-light tracking-wide text-cyan-400">INNOVATING THE FUTURE</span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-8 h-8 text-purple-400" />
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
              >
                FULL-STACK
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                ARCHITECT
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Crafting enterprise-grade <span className="text-cyan-400 font-semibold">SaaS platforms</span> and 
              <span className="text-purple-400 font-semibold"> revolutionary solutions</span> that 
              <span className="text-pink-400 font-semibold"> transform industries</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full font-bold text-lg hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:shadow-[0_0_60px_rgba(6,182,212,0.8)]"
              >
                <span className="relative z-10 flex items-center">
                  EXPLORE PROJECTS
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <a
                href="https://github.com/hadi-razal"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Github className="inline-block mr-3 w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                GITHUB
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "10K+", label: "Users Impacted" },
              { number: "15+", label: "Projects Delivered" },
              { number: "3+", label: "Years Experience" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Zap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                EXPERTISE
              </h2>
              <Zap className="w-8 h-8 text-purple-400" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Mastering the art of digital craftsmanship across the entire technology spectrum
            </p>
          </motion.div>

          {/* Interactive Skills Showcase */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skills Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-4 sticky top-32">
                {Object.entries(skills).map(([category, data], index) => (
                  <motion.button
                    key={category}
                    onClick={() => setCurrentSkillSet(index)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group ${
                      currentSkillSet === index
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${data.color} ${data.glowColor} shadow-lg`}>
                        {data.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {category}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {data.items.length} Technologies
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkillSet}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-slate-900/50 to-black/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl"
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {Object.keys(skills)[currentSkillSet]}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.values(skills)[currentSkillSet].items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-cyan-400 font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${Object.values(skills)[currentSkillSet].color} rounded-full`}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${Object.values(skills)[currentSkillSet].color} opacity-20 animate-pulse`}></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Skill Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Code className="w-8 h-8" />, title: "Frontend", desc: "React, Next.js, Angular", color: "from-blue-500 to-cyan-500" },
                { icon: <Database className="w-8 h-8" />, title: "Backend", desc: "Node.js, Python, APIs", color: "from-green-500 to-teal-500" },
                { icon: <Cloud className="w-8 h-8" />, title: "Cloud", desc: "AWS, Docker, K8s", color: "from-purple-500 to-violet-500" },
                { icon: <Zap className="w-8 h-8" />, title: "Innovation", desc: "AI, Automation, SaaS", color: "from-orange-500 to-red-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="group"
                >
                  <div className={`p-6 bg-gradient-to-br ${item.color} bg-opacity-10 rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300`}>
                    <div className={`text-center mb-4 p-4 bg-gradient-to-br ${item.color} rounded-xl mx-auto w-fit`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                PROJECTS
              </h2>
              <Sparkles className="w-8 h-8 text-purple-400" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Groundbreaking solutions that redefine industry standards and user experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className={`group relative ${
                  project.featured ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div className={`relative bg-gradient-to-br from-slate-900/80 to-black/80 p-8 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden h-full transition-all duration-500 group-hover:border-white/30`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Status badges */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        project.status === 'Beta' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </div>
                      {project.featured && (
                        <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs font-bold text-cyan-400 border border-cyan-500/30">
                          FEATURED
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/90 transition-colors">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <Star className="w-4 h-4" />
                        <span className="font-bold">{project.metrics}</span>
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action button */}
                    <button className="w-full py-3 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20 text-white font-semibold group-hover:from-cyan-500/20 group-hover:to-purple-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border border-cyan-500/30 rounded-full flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-semibold">More projects available on request</span>
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-black"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
              <Mail className="w-8 h-8 text-cyan-400" />
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                CONNECT
              </h2>
              <Mail className="w-8 h-8 text-purple-400" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>

            <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Lets create something 
              <span className="text-cyan-400 font-semibold"> extraordinary</span> together.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              {
                icon: <Github className="w-8 h-8" />,
                href: "https://github.com/hadi-razal",
                label: "GitHub",
                color: "from-gray-600 to-gray-800",
                hoverColor: "hover:from-gray-500 hover:to-gray-700"
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                href: "https://linkedin.com/in/hadi-razal-690b22228",
                label: "LinkedIn",
                color: "from-blue-600 to-blue-800",
                hoverColor: "hover:from-blue-500 hover:to-blue-700"
              },
              {
                icon: <Twitter className="w-8 h-8" />,
                href: "https://twitter.com/Hadi_Razal",
                label: "Twitter",
                color: "from-sky-500 to-sky-700",
                hoverColor: "hover:from-sky-400 hover:to-sky-600"
              },
              {
                icon: <Instagram className="w-8 h-8" />,
                href: "https://instagram.com/hadi_razal",
                label: "Instagram",
                color: "from-pink-600 to-purple-700",
                hoverColor: "hover:from-pink-500 hover:to-purple-600"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                href: "https://wa.me/+919074063723",
                label: "WhatsApp",
                color: "from-green-600 to-green-800",
                hoverColor: "hover:from-green-500 hover:to-green-700"
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className={`group relative p-8 bg-gradient-to-br ${social.color} rounded-2xl border border-white/10 backdrop-blur-sm ${social.hoverColor} transition-all duration-300 block`}
              >
                <div className="text-white group-hover:text-white transition-colors mb-4">
                  {social.icon}
                </div>
                <div className="text-white/90 group-hover:text-white font-semibold transition-colors">
                  {social.label}
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}
          </div>

          {/* Featured Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-black/80 p-12 rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Ready to Build the Future?
                  </h3>
                  
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Lets discuss your project and explore how cutting-edge technology 
                    can transform your business. Every great innovation starts with a conversation.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl font-bold text-lg text-white shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-white/60">
              © 2025 Hadi Razal. Crafted with passion and precision.
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 font-medium">Available for freelance projects</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
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
           