"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState<any>({});

  const skills = {
    "Frontend Development": {
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      items: [
        "ReactJs",
        "NextJs",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Redux",
        "Material UI",
      ],
    },
    "Backend & Database": {
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      items: [
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Firebase",
        "GraphQL",
      ],
    },
    "Cloud & DevOps": {
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      items: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
        "Socket.io",
        "REST API",
        "Zapier",
      ],
    },
    "Design & Automation": {
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      items: [
        "Figma",
        "UI/UX",
        "Photoshop",
        "Power BI",
        "Power Automate",
        "Office 365",
        "SEO",
        "Agile/Scrum",
      ],
    },
    "Languages & Tools": {
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      items: [
        "Python",
        "PHP",
        "SAP",
        "Bootstrap",
        "Jest",
        "Astro",
        "Framer",
        "React Native",
      ],
    },
  };

  const projects = [
    {
      title: "Product Share",
      category: "SaaS Platform",
      description:
        "Advanced product discovery and sharing platform with integrated analytics, user feedback systems, and AI-powered recommendations for digital stores.",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      gradient: "from-blue-600 to-purple-600",
      featured: true,
    },
    {
      title: "Product Link",
      category: "SaaS Platform",
      description:
        "Smart product linking and cross-platform integration tool that connects inventory across multiple channels with real-time sync and automated updates.",
      tech: ["Next.js", "Supabase", "TypeScript", "API Integration"],
      gradient: "from-green-600 to-teal-600",
      featured: true,
    },
    {
      title: "SuccessFactors Data Bundling & Compliance Tracker",
      category: "Automation Project",
      description:
        "Engineered backend logic using Power Automate and Office 365 to pull, merge, and normalize SuccessFactors data for monthly HR audits with dynamic Power BI dashboards.",
      tech: ["Power Automate", "Power BI", "Office 365", "SuccessFactors"],
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "Leave Management System",
      category: "Low-Code Application",
      description:
        "Scalable Power Apps application with multi-level leave request workflows, real-time notifications, approval chains, and comprehensive dashboard summaries.",
      tech: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "InOutX",
      category: "SaaS Platform",
      description:
        "Employee time tracking and automation suite with real-time logging, schedule validation, automated warnings, and HR system integration.",
      tech: ["Next.js", "Supabase", "React", "Analytics"],
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      title: "Mail Motion",
      category: "SaaS Platform",
      description:
        "AI-powered email marketing automation with auto-generated newsletters, advanced analytics, A/B testing, and seamless CRM synchronization.",
      tech: ["React", "OpenAI", "Firestore", "Analytics"],
      gradient: "from-orange-600 to-red-600",
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
        setIsVisible((prev: any) => ({
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

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Hadi Razal
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    isVisible[item.id]
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                  {isVisible[item.id] && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30"></div>
              <img
                src="/hadi2.jpg"
                alt="Hadi Razal"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Full-Stack Developer
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              & SaaS Innovator
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Founder of Duoph Technologies. Building enterprise-grade solutions
            and SaaS platforms that optimize operations, boost productivity, and
            automate the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              View My Work
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/hadi-razal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <Github className="inline-block mr-2 w-5 h-5" />
              GitHub Profile
            </a>
          </motion.div>
        </div>

        {/* <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Software Developer & Automation Expert
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I lead full-stack development and process automation at Duoph
                Technologies. My solutions have been implemented by 10,000+
                employees at a Top Company, including SharePoint intranet
                portals, AI-powered HR FAQ bots, and comprehensive payroll
                validation dashboards.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                From employee onboarding workflows and mobility automation using
                Power Platform to advanced data dashboards in Power BI and
                Tableau, I specialize in reducing manual effort while increasing
                data clarity and operational efficiency.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise spans from building scalable SaaS platforms to
                creating enterprise automation solutions that transform how
                businesses operate in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600/50">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">Based in Abu Dhabi, UAE</span>
                </div>
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">3+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">
                    Duoph Technologies Founder
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20">
                <h4 className="font-semibold mb-3 text-blue-400">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • 10,000+ employees using my solutions at A top company
                  </li>
                  <li>• Multiple successful SaaS platforms launched</li>
                  <li>• Enterprise-grade automation systems deployed</li>
                  <li>• AI-powered solutions implemented</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
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
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${data.color} mb-6`}
                    >
                      {data.icon}
                    </div>

                    <h3 className="text-xl font-semibold mb-6 text-white">
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
                          className="px-3 py-2 bg-slate-700/50 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-200 text-center"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
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
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 h-full hover:scale-105">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  ></div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-semibold">
                      Featured SaaS
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300">
                        {project.category}
                      </span>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-600/30 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to discuss your next project or explore collaboration
              opportunities? Let's build something amazing together.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  href: "https://github.com/hadi-razal",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  href: "https://linkedin.com/in/hadi-razal-690b22228",
                  label: "LinkedIn",
                },
                {
                  icon: <Twitter className="w-6 h-6" />,
                  href: "https://twitter.com/Hadi_Razal",
                  label: "Twitter",
                },
                {
                  icon: <Instagram className="w-6 h-6" />,
                  href: "https://instagram.com/hadi_razal",
                  label: "Instagram",
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  href: "https://wa.me/+919074063723",
                  label: "WhatsApp",
                },
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
                  className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20"
            >
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can bring your vision to life with
                cutting-edge technology and innovative solutions.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2025 Hadi Razal. Crafted with passion and precision. All rights
            reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
