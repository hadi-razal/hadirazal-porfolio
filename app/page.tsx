"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Brain,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Building,
  Cpu,
  Monitor,
  Server,
  Smartphone,
  BarChart3,
  Users,
  Award,
  Calendar,
  MapPin
} from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const technicalSkills = {
    "Frontend Development": {
      icon: <Monitor className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Bootstrap", "Sass/SCSS"],
      color: "from-blue-500 to-cyan-500"
    },
    "Backend Development": {
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "PHP", "Laravel", "Java", "Spring Boot", "C#", ".NET", "Ruby on Rails"],
      color: "from-green-500 to-teal-500"
    },
    "Mobile Development": {
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "Ionic", "Xamarin", "Swift (iOS)", "Kotlin (Android)", "Progressive Web Apps (PWA)"],
      color: "from-purple-500 to-pink-500"
    },
    "Database & Storage": {
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite", "Firebase", "Supabase", "DynamoDB", "Elasticsearch", "Neo4j"],
      color: "from-orange-500 to-red-500"
    },
    "Cloud & DevOps": {
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Nginx", "Apache", "Linux"],
      color: "from-indigo-500 to-blue-500"
    },
    "AI & Machine Learning": {
      icon: <Brain className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "Computer Vision", "NLP", "Deep Learning", "MLOps", "Data Science"],
      color: "from-violet-500 to-purple-500"
    },
    "Development Tools": {
      icon: <Code className="w-6 h-6" />,
      skills: ["Git", "GitHub", "GitLab", "VS Code", "IntelliJ IDEA", "Postman", "Figma", "Adobe XD", "Jira", "Slack", "Notion"],
      color: "from-gray-600 to-gray-800"
    },
    "Architecture & APIs": {
      icon: <Cpu className="w-6 h-6" />,
      skills: ["REST APIs", "GraphQL", "Microservices", "Serverless", "WebSockets", "gRPC", "OAuth", "JWT", "System Design", "API Gateway"],
      color: "from-emerald-500 to-green-600"
    }
  };

  const projects = [
    {
      title: "Product Share",
      description: "A comprehensive platform for product discovery and sharing with AI-powered recommendations and social features.",
      tech: ["React", "Node.js", "MongoDB", "AI/ML", "WebSocket"],
      features: ["AI-powered recommendations", "Real-time collaboration", "Social sharing", "Analytics dashboard"],
      metrics: { users: "10K+", engagement: "94%", growth: "+340%" },
      status: "Live"
    },
    {
      title: "Product Link",
      description: "Enterprise solution for connecting products across different platforms with advanced linking capabilities.",
      tech: ["Next.js", "TypeScript", "Supabase", "WebRTC"],
      features: ["Cross-platform integration", "Real-time synchronization", "Enterprise dashboard", "API management"],
      metrics: { businesses: "500+", connections: "1M+", uptime: "99.9%" },
      status: "Production"
    },
    {
      title: "InOutX",
      description: "Smart workforce management system with biometric integration and predictive analytics.",
      tech: ["React Native", "Python", "TensorFlow", "AWS", "IoT"],
      features: ["Biometric authentication", "Predictive analytics", "Mobile app", "IoT integration"],
      metrics: { employees: "5K+", accuracy: "99.8%", efficiency: "+250%" },
      status: "Deployed"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-gray-900"
            >
              Hadi Razal
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-200">
              <img
              
                src="/myphoto.jpg"
                alt="Hadi Razal"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Software Engineer & Founder
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Hadi Razal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Founder of <span className="font-bold text-blue-600">Duoph Technologies</span> | 
            Full-Stack Developer | AI/ML Enthusiast | Building the future with code
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Software Engineer & Entrepreneur</h3>
              <p className="text-gray-700 leading-relaxed">
                As the founder of <strong>Duoph Technologies</strong>, I lead a team dedicated to creating 
                innovative digital solutions that solve real-world problems. With 4+ years of experience 
                in full-stack development, I specialize in building scalable applications using modern 
                technologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My expertise spans across frontend and backend development, mobile applications, 
                cloud architecture, and AI/ML integration. I'm passionate about leveraging artificial 
                intelligence and machine learning to create intelligent systems that enhance user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Duoph Technologies, we focus on delivering cutting-edge solutions in web development, 
                mobile applications, AI-powered platforms, and enterprise software that drive business growth 
                and digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Building className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Company</h4>
                <p className="text-gray-600">Duoph Technologies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">4+ Years</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Projects</h4>
                <p className="text-gray-600">20+ Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="w-8 h-8 text-red-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across modern technologies and frameworks
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(technicalSkills).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${data.color} text-white mr-4`}>
                    {data.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Founder & Lead Developer</h3>
                  <p className="text-blue-600 font-semibold">Duoph Technologies</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Current
                  </span>
                  <p className="text-gray-500 mt-1">2021 - Present</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Founded and lead Duoph Technologies, focusing on innovative web and mobile solutions</li>
                <li>• Developed 20+ applications using React, Next.js, Node.js, and modern tech stack</li>
                <li>• Implemented AI/ML solutions including recommendation systems and predictive analytics</li>
                <li>• Built scalable cloud infrastructure on AWS and Google Cloud platforms</li>
                <li>• Led cross-functional teams and managed full project lifecycles</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Full-Stack Developer</h3>
                  <p className="text-blue-600 font-semibold">Freelance</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">2020 - 2021</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Developed custom web applications for various clients across different industries</li>
                <li>• Specialized in React.js frontend development and Node.js backend services</li>
                <li>• Integrated third-party APIs and payment gateways</li>
                <li>• Optimized application performance and implemented SEO best practices</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing some of the innovative solutions I've built
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-gray-700 text-sm">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex space-x-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      View Details
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with innovative technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Github className="w-8 h-8" />,
                href: "https://github.com/hadi-razal",
                label: "GitHub",
                subtitle: "Code Repositories",
                color: "from-gray-600 to-gray-800"
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                href: "https://linkedin.com/in/hadi-razal-690b22228",
                label: "LinkedIn",
                subtitle: "Professional Network",
                color: "from-blue-600 to-blue-800"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                href: "mailto:hadirazal2745@gmail.com",
                label: "Email",
                subtitle: "Direct Contact",
                color: "from-purple-600 to-pink-600"
              }
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.label}</h3>
                <p className="text-gray-600">{contact.subtitle}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-600 mb-6">
              Whether you need a web application, mobile app, or AI-powered solution, 
              I'm here to help bring your vision to reality.
            </p>
            <button
              onClick={() => window.open('mailto:hadirazal2745@gmail.com', '_blank')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center mx-auto"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Hadi Razal. Founder of Duoph Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;