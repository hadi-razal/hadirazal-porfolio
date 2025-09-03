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
  Download,
  Star,
  Sparkles,
  Rocket,
  Brain,
  Shield,
  Award,
  TrendingUp,
  Users,
  Coffee,
  Heart,
  Eye,
  ArrowUp,
  Play,
  Pause,
  Volume2,
  VolumeX,
  User
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Enhanced skills with more categories and advanced technologies
  const skills = {
    "🚀 Frontend Mastery": {
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 via-cyan-400 to-teal-500",
      items: [
        "React 18+", "Next.js 14", "Vue.js 3", "Angular 17", "Svelte Kit",
        "TypeScript", "JavaScript ES2024", "Tailwind CSS", "Framer Motion",
        "Three.js", "GSAP", "Redux Toolkit"
      ],
    },
    "⚡ Backend & APIs": {
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 via-emerald-400 to-lime-500",
      items: [
        "Node.js", "Express.js", "NestJS", "FastAPI", "Django",
        "GraphQL", "tRPC", "Prisma", "MongoDB", "PostgreSQL",
        "Redis", "WebSockets", "Microservices", "REST APIs"
      ],
    },
    "☁️ Cloud & DevOps": {
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 via-violet-400 to-indigo-500",
      items: [
        "AWS (Lambda, EC2, S3)", "Docker", "Kubernetes", "Terraform",
        "CI/CD Pipelines", "GitHub Actions", "Vercel", "Netlify",
        "Azure DevOps", "Jenkins", "Nginx", "Load Balancing"
      ],
    },
    "🤖 AI & Automation": {
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-500 via-rose-400 to-red-500",
      items: [
        "OpenAI GPT Integration", "LangChain", "Machine Learning", "TensorFlow",
        "Zapier", "Power Automate", "n8n", "Process Automation",
        "RPA", "AI Chatbots", "Computer Vision", "NLP"
      ],
    },
    "🎨 Design & UX": {
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-500 via-amber-400 to-yellow-500",
      items: [
        "Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping",
        "Design Systems", "Brand Identity", "Motion Graphics", "3D Design",
        "User Research", "A/B Testing", "Accessibility", "Mobile First"
      ],
    },
    "📊 Data & Analytics": {
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-cyan-500 via-blue-400 to-indigo-500",
      items: [
        "Power BI", "Tableau", "Google Analytics", "Data Visualization",
        "SQL", "Python", "R", "Big Data", "ETL Pipelines",
        "Business Intelligence", "KPI Dashboards", "Predictive Analytics"
      ],
    },
  };

  // Enhanced projects with more details
  const projects = [
    {
      title: "🎯 Mail Motion",
      category: "AI SaaS Platform",
      description: "Revolutionary AI-powered email marketing automation with GPT-4 content generation, advanced A/B testing, behavioral triggers, and real-time analytics. Features include smart segmentation, deliverability optimization, and omnichannel integration.",
      tech: ["React", "Node.js", "OpenAI GPT-4", "Redis", "WebSockets", "Stripe"],
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      featured: true,
      stats: "10k+ Users, 95% Delivery Rate",
      demo: "https://mailmotion.demo",
      github: "https://github.com/hadi-razal/mailmotion"
    },
    {
      title: "📊 InOutX",
      category: "Enterprise SaaS",
      description: "Intelligent workforce management platform with computer vision attendance tracking, productivity analytics, predictive scheduling, and comprehensive HR automation. Includes real-time dashboards and mobile apps.",
      tech: ["Next.js", "Supabase", "Computer Vision", "ML Algorithms", "React Native"],
      gradient: "from-green-600 via-teal-600 to-blue-600",
      featured: true,
      stats: "50k+ Employees Tracked",
      demo: "https://inoutx.demo",
      github: "https://github.com/hadi-razal/inoutx"
    },
    {
      title: "🛍️ Product Share",
      category: "E-commerce Platform",
      description: "Next-generation community-driven marketplace with AI recommendations, social commerce features, blockchain integration for authenticity, and advanced analytics for merchants and buyers.",
      tech: ["React", "MongoDB", "AI/ML", "Blockchain", "Payment APIs"],
      gradient: "from-purple-600 via-pink-600 to-red-600",
      featured: true,
      stats: "100k+ Products, $2M+ GMV",
      demo: "https://productshare.demo"
    },
    {
      title: "⚡ Enterprise Automation Suite",
      category: "Business Automation",
      description: "Complete business process automation platform using Power Platform, custom workflows, AI-powered document processing, and seamless Office 365 integration for Fortune 500 companies.",
      tech: ["Power Automate", "Power BI", "AI Builder", "SharePoint", "Teams"],
      gradient: "from-indigo-600 via-blue-600 to-cyan-600",
      stats: "10k+ Automated Processes",
    },
    {
      title: "🎨 Design System Studio",
      category: "Design Tool",
      description: "Comprehensive design system management platform with component libraries, automated documentation, design tokens, and seamless developer handoff capabilities.",
      tech: ["React", "Storybook", "Design Tokens", "Figma API", "Documentation"],
      gradient: "from-orange-600 via-red-600 to-pink-600",
      stats: "500+ Components Created",
    },
    {
      title: "🔮 AI Analytics Dashboard",
      category: "Data Platform",
      description: "Advanced analytics platform with predictive insights, real-time data processing, custom visualization engine, and AI-powered business intelligence for enterprise clients.",
      tech: ["Python", "TensorFlow", "D3.js", "FastAPI", "Time Series"],
      gradient: "from-cyan-600 via-teal-600 to-green-600",
      stats: "1TB+ Data Processed",
    },
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "AI Innovation Award", desc: "Best ML Implementation 2024" },
    { icon: <Star className="w-6 h-6" />, title: "Microsoft MVP", desc: "Power Platform Excellence" },
    { icon: <Users className="w-6 h-6" />, title: "10k+ Users", desc: "Across Multiple Platforms" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Fortune 500", desc: "Enterprise Solutions" },
    { icon: <Rocket className="w-6 h-6" />, title: "100+ Projects", desc: "Successfully Delivered" },
    { icon: <Heart className="w-6 h-6" />, title: "99% Satisfaction", desc: "Client Happiness Rate" }
  ];

  const navItems = [
    { id: "hero", label: "Home", icon: <Rocket className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Zap className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Intersection observer for sections
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
        
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );

  // Custom cursor
  const CustomCursor = () => (
    <motion.div
      className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white min-h-screen overflow-x-hidden relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-2xl border-b border-slate-700/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-blue-400" />
              </motion.div>
              Hadi Razal
            </motion.div>

            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-400/10 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg bg-slate-800/50"
            >
              <Code className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
      >
        {/* Interactive background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-56 h-56 mx-auto mb-8">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Hadi Razal"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 mb-4">
              ✨ Available for Freelance Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
          >
            Full-Stack
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AI Engineer
            </motion.span>
            <span className="text-3xl md:text-5xl block mt-4 text-gray-300">
              & SaaS Innovator
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Building next-generation AI-powered applications and enterprise automation solutions. 
            Transforming ideas into scalable SaaS platforms that drive business growth and innovation.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-8 mb-8 flex-wrap"
          >
            {[
              { number: "100+", label: "Projects" },
              { number: "50k+", label: "Users" },
              { number: "99%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold transition-all duration-300 shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-2 w-5 h-5" />
                View My Work
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <Mail className="inline-block mr-2 w-5 h-5" />
              Let's Connect
            </motion.button>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-slate-800/50 border border-slate-600 rounded-full font-semibold hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Download className="inline-block mr-2 w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
                 onClick={() => scrollToSection("about")}>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section - COMPLETION STARTS HERE */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 mb-4"
            >
              🚀 Get to Know Me
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Passionate Developer & AI Enthusiast
                </h3>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a full-stack developer and AI engineer who thrives on turning complex problems into elegant digital solutions. 
                With 3+ years of experience, I've helped 10,000+ employees at top companies streamline their workflows through innovative automation.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My passion lies in building AI-powered SaaS platforms that don't just work—they transform how businesses operate. 
                From SharePoint intranet portals to AI chatbots, I create solutions that make people's work lives better.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI/ML, contributing to open source, 
                or mentoring fellow developers in the community.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                {["Freelance Available", "Remote Friendly", "Fast Turnaround"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Info Cards */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">Based in Abu Dhabi, UAE</span>
                </div>
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">3+ Years Experience</span>
                </div>
                <div className="flex items-center mb-4">
                  <Globe className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Freelance Developer</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">Coffee Enthusiast</span>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/30"
              >
                <h4 className="font-bold mb-4 text-blue-400 text-xl">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-gray-300">10,000+ employees using my solutions</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">Multiple successful SaaS platforms</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Enterprise-grade security implementations</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">AI-powered automation systems</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-500/10 to-teal-500/10 p-6 rounded-2xl border border-green-500/30"
              >
                <h4 className="font-bold mb-4 text-green-400 text-xl">Current Focus</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["AI Integration", "SaaS Development", "Process Automation", "Cloud Architecture"].map((focus) => (
                    <motion.div
                      key={focus}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-2 bg-green-500/20 rounded-lg text-sm text-center text-green-300"
                    >
                      {focus}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-2xl border border-slate-600/30 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400 mb-3 flex justify-center"
                >
                  {achievement.icon}
                </motion.div>
                <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                <p className="text-sm text-gray-400">{achievement.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 mb-4"
            >
              Technical Expertise
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Skills &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 h-full backdrop-blur-sm overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${data.color} mb-6 shadow-lg`}
                    >
                      {data.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold mb-6 text-white">
                      {category}
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      {data.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-2 bg-slate-700/50 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-slate-600/70 transition-all duration-300 text-center border border-slate-600/30 hover:border-slate-500/50"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{
                      background: [
                        "linear-gradient(0deg, transparent, transparent)",
                        "linear-gradient(360deg, rgba(59, 130, 246, 0.1), transparent)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-full text-sm text-green-300 mb-4"
            >
              Portfolio Showcase
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover my latest work in AI-powered SaaS platforms, enterprise automation, 
              and cutting-edge web applications that solve real-world problems.
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
                className={`group relative ${
                  project.featured ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <motion.div 
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 h-full backdrop-blur-sm overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`}
                  />

                  {project.featured && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold flex items-center gap-1"
                    >
                      <Star className="w-3 h-3" />
                      Featured
                    </motion.div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300 border border-slate-600/30">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.1, rotate: -15 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-full bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 transition-all"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {project.stats && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
                      >
                        <div className="flex items-center text-sm text-blue-300">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {project.stats}
                        </div>
                      </motion.div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-slate-600/40 rounded-full text-xs text-gray-300 border border-slate-500/30 hover:border-slate-400/50 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Animated corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-xl`} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full font-bold text-white hover:from-green-400 hover:to-teal-400 transition-all duration-300 shadow-lg"
            >
              <Github className="inline-block mr-2 w-5 h-5" />
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800/30 to-slate-700/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 mb-4"
            >
              Client Love
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=100&h=100&fit=crop&crop=face",
                text: "Hadi transformed our entire workflow automation. The AI solutions he built saved us 40+ hours per week!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, StartupXYZ",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                text: "Incredible attention to detail and innovative approach. The SaaS platform exceeded all our expectations.",
                rating: 5
              },
              {
                name: "Emily Davis",
                role: "VP Operations",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                text: "Professional, efficient, and creative. Hadi delivered our project ahead of schedule with amazing results.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack Visualization */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold mb-12"
          >
            Interactive Tech Universe
          </motion.h3>
          
          <div className="relative h-96 flex items-center justify-center">
            {/* Central Node */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white"
            >
              ME
            </motion.div>

            {/* Orbiting Tech Icons */}
            {[
              { name: "React", color: "text-blue-400", angle: 0 },
              { name: "Node", color: "text-green-400", angle: 60 },
              { name: "AI/ML", color: "text-purple-400", angle: 120 },
              { name: "Cloud", color: "text-cyan-400", angle: 180 },
              { name: "DB", color: "text-orange-400", angle: 240 },
              { name: "Mobile", color: "text-pink-400", angle: 300 },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`absolute w-12 h-12 ${tech.color} rounded-full border-2 border-current flex items-center justify-center text-xs font-bold bg-slate-800`}
                animate={{
                  rotate: 360,
                  x: Math.cos((tech.angle * Math.PI) / 180) * 120,
                  y: Math.sin((tech.angle * Math.PI) / 180) * 120,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
                whileHover={{ scale: 1.5, zIndex: 10 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-full text-sm text-pink-300 mb-4"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Let's collaborate on your next groundbreaking project 
              and create something extraordinary together.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
            >
              <Mail className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Start a Project</h3>
              <p className="text-gray-300 mb-6">
                Have a project in mind? Let's discuss how we can bring your vision to life with cutting-edge technology.
              </p>
              <motion.a
                href="mailto:hadhirasal22@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm"
            >
              <MessageCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quick Chat</h3>
              <p className="text-gray-300 mb-6">
                Need immediate assistance or have questions? Let's have a quick chat on WhatsApp.
              </p>
              <motion.a
                href="https://wa.me/+919074063723"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8">Connect on Social Media</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/hadi-razal", label: "GitHub", color: "hover:text-gray-400" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/hadi-razal-690b22228", label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com/Hadi_Razal", label: "Twitter", color: "hover:text-sky-400" },
                { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/hadi_razal", label: "Instagram", color: "hover:text-pink-400" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 ${social.color}`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 group-hover:scale-110 transition-all"
                  >
                    {social.icon}
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA with Particles */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        
        {/* Animated Particles Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-yellow-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Innovate?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your next breakthrough is just one conversation away.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)",
                background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden"
            >
              <motion.span
                animate={{ x: [-20, 20, -20] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/20 skew-x-12"
              />
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-3 w-6 h-6" />
                Start Your Project Today
                <Sparkles className="ml-3 w-6 h-6" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hadi Razal
              </h3>
              <p className="text-gray-400 mb-4">
                Full-Stack Developer & AI Engineer passionate about creating innovative solutions 
                that make a difference.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.2 }} className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-400">Available for freelance</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Get Updates</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get notified about new projects and articles.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-r-lg font-semibold"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-slate-700/50"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © 2025 Hadi Razal. Built with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400" />
              </motion.span>
              and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-2xl transition-all z-40"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Loading/Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ambient Sound Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsPlaying(!isPlaying)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-600/50 hover:border-slate-500/50 transition-all z-40"
      >
        {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>

      {/* Easter Egg: Hidden Konami Code Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
