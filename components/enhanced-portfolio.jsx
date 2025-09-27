"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Send, CheckCircle, ExternalLink, Github, Linkedin, Download } from "lucide-react"

const DATA = {
  name: "Nadia Rafique",
  title: "Senior Frontend Developer",
  location: "Lahore, Pakistan",
  shortBio:
    "Front-End Developer with expertise in HTML, CSS, JavaScript, jQuery, Bootstrap, SASS, Tailwind CSS, React.js, and responsive frameworks. Passionate about creating responsive, user-friendly web designs, with a strong mobile-first approach and focus on accessibility and performance.",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "jQuery",
    "Bootstrap",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Material UI",
    "React Bootstrap",
    "Laravel",
    "RESTful APIs",
    "Git/GitHub",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Performance Optimisation",
    "Accessibility (WCAG/ARIA)",
  ],
  experiences: [
    {
      role: "Frontend Developer",
      company: "Prismecs",
      date: "June 2024 – Present",
      details:
        "Develop responsive, user-centric interfaces with HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS. Ensure performance, accessibility, and cross-browser compatibility. Collaborate with UX/UI designers and backend developers to integrate Laravel-based apps and REST APIs.",
    },
    {
      role: "Frontend Developer",
      company: "Codility Solutions",
      date: "2022 – Feb 2024",
      details:
        "Designed and implemented responsive, mobile-first interfaces using HTML5, CSS3, Tailwind, Bootstrap, and Material UI. Built scalable apps with Laravel, React.js, Vue.js, and Next.js. Optimised performance and accessibility, collaborated closely with UX/UI teams.",
    },
    {
      role: "Web Instructor",
      company: "Al-Khwarizmi Institute of Computer Science (KICS)",
      date: "2021 – 2022",
      details:
        "Conducted training in frontend and backend technologies (HTML, CSS, Bootstrap, JavaScript, PHP, MySQL). Delivered lessons on WordPress development and guided students in building responsive, dynamic websites.",
    },
  ],
  projects: [
    {
      title: "Prismecs Corporate Website",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "JavaScript", "jQuery", "Responsive Design", "SEO"],
      description:
        "Led frontend development of Prismecs' corporate site with responsive, modern UI, reusable components, and SEO optimisation.",
      url: "https://prismecs.com/",
      image: "/modern-corporate-website-with-blue-theme.jpg",
    },
    {
      title: "eIndustrify Marketplace",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-Browser Compatibility"],
      description:
        "Developed full frontend for eIndustrify's B2B industrial marketplace. Built product catalog, category filtering, quick order forms, and improved UX for mobile/desktop.",
      url: "https://eindustrify.com/",
      image: "/industrial-marketplace-website-with-product-catalo.jpg",
    },
    {
      title: "Jamiah School Management System",
      tags: ["Laravel", "Tailwind CSS", "Livewire", "MySQL", "PostgreSQL"],
      description:
        "Frontend for Jamiah SMS – a web and mobile school management system. Integrated with backend technologies, delivering responsive dashboards and UI components.",
      url: "https://www.jamiah.net/",
      image: "/school-management-system-dashboard-interface.jpg",
    },
    {
      title: "Breeders Den NFT Platform",
      tags: ["React.js", "Web3", "NFT", "JavaScript", "CSS3", "Responsive Design"],
      description:
        "NFT minting platform for Muzzle Run web3 game. Built user interface for breeding system with 24/7 access to all breeders, solving high upfront costs and streamlining the breeding process.",
      url: "#",
      image: "/nft-gaming-platform-with-dog-breeding-interface.jpg",
    },
    {
      title: "Australia Consultancy Website",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Static Site", "SEO"],
      description:
        "Dynamic and informative static website providing comprehensive insights into studying in Australia. Features educational opportunities, visa guidelines, universities, and student life information.",
      url: "#",
      image: "/education-consultancy-website-about-studying-in-au.jpg",
    },
    {
      title: "MetriCorr Monitoring System",
      tags: ["JavaScript", "HTML5", "CSS3", "Data Visualization", "Responsive Design"],
      description:
        "Developed manual survey module for MetriCorr's corrosion monitoring platform. Cloned automated survey functionality to allow manual data collection for steel structures monitoring.",
      url: "#",
      image: "/industrial-monitoring-dashboard-with-data-visualiz.jpg",
    },
    {
      title: "ERP Office Management",
      tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Responsive Design"],
      description:
        "Web-based office management application for day-to-day operations. Created responsive UI for task management, projects, appointments, and team communications.",
      url: "#",
      image: "/office-management-erp-system-dashboard.jpg",
    },
    {
      title: "Pokedex Application",
      tags: ["JavaScript", "HTML5", "CSS3", "API Integration", "Responsive Design"],
      description:
        "Interactive Pokemon listing application with detailed information display. Features comprehensive Pokemon database with search and filtering capabilities.",
      url: "#",
      image: "/pokemon-listing-application-with-colorful-cards.jpg",
    },
    {
      title: "Firebase Integration Platform",
      tags: ["Firebase", "JavaScript", "React.js", "Google Services", "Web Development"],
      description:
        "Platform showcasing Firebase integration with cutting-edge Google Services. Demonstrates seamless integration and cost-effective solutions for web and mobile app development.",
      url: "#",
      image: "/firebase-platform-with-google-services-integration.jpg",
    },
  ],
  contactEmail: "nadiarafique1441@gmail.com",
}

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default:
      "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 hover:from-primary/30 hover:to-accent/30",
    accent:
      "bg-gradient-to-r from-accent/20 to-primary/20 text-accent border-accent/30 hover:from-accent/30 hover:to-primary/30",
    secondary:
      "bg-gradient-to-r from-secondary to-muted text-secondary-foreground border-border hover:from-muted hover:to-secondary",
  }

  return (
    <span
      className={`inline-block text-xs px-3 py-1 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg ${variants[variant]}`}
    >
      {children}
    </span>
  )
}

const ExperienceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="p-6 glass-effect rounded-xl hover-lift group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.role}</h4>
          <div className="text-sm text-muted-foreground">{item.company}</div>
        </div>
        <div className="text-xs text-muted-foreground bg-gradient-to-r from-secondary/50 to-muted/50 px-2 py-1 rounded">
          {item.date}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.details}</p>
    </div>
  </motion.div>
)

const ProjectCard = ({ p, i }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
    className="group block rounded-xl overflow-hidden glass-effect hover-lift relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-rainbow-flow" />
    <div className="relative z-10">
      <div className="relative h-48 w-full bg-gradient-to-br from-secondary/20 to-muted/20 overflow-hidden">
        <img
          src={p.image || "/placeholder.svg"}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-sm hover:from-accent hover:to-primary transition-all duration-300 shadow-lg"
          >
            <ExternalLink size={14} />
            View
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-foreground group-hover:gradient-text transition-all duration-300 text-balance">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed text-pretty">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.slice(0, 3).map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
          {p.tags.length > 3 && <Badge variant="secondary">+{p.tags.length - 3}</Badge>}
        </div>
      </div>
    </div>
  </motion.div>
)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 glass-effect p-6 rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 animate-rainbow-flow opacity-50" />
      <div className="relative z-10">
        <div>
          <label className="text-sm font-medium text-foreground">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 bg-input/80 backdrop-blur-sm border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 bg-input/80 backdrop-blur-sm border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 bg-input/80 backdrop-blur-sm border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
            rows={4}
            placeholder="Tell me about your project..."
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:from-accent hover:to-primary transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {status === "sending" ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </div>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/30"
          >
            <CheckCircle size={16} />
            Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/30"
          >
            <Mail size={16} />
            Failed to send message. Please email me directly at nadiarafique1441@gmail.com
          </motion.div>
        )}
      </div>
    </form>
  )
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center font-bold text-primary-foreground animate-gradient-glow">
            {DATA.name.split(" ")[0][0]}
          </div>
          <div>
            <div className="font-semibold text-foreground">{DATA.name}</div>
            <div className="text-xs text-muted-foreground">{DATA.title}</div>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          {[
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Experience", id: "experience" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-sm hover:from-accent hover:to-primary transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default function PortfolioSingleFile() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-cyan-400 font-medium"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white text-balance"
              >
                {DATA.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-cyan-400 font-semibold"
              >
                {DATA.title}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 leading-relaxed text-pretty max-w-2xl mx-auto"
            >
              {DATA.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {DATA.skills.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="inline-block text-xs px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
              <span className="inline-block text-xs px-3 py-1 rounded-full border border-gray-600 bg-gray-800/50 text-gray-300">
                +{DATA.skills.length - 8} more
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center"
            >
              <button
                onClick={() => {
                  const element = document.getElementById("projects")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                View My Work
              </button>
              <a
                href="/Nadia_Rafique_Resume.pdf"
                download="Nadia_Rafique_Resume.pdf"
                className="px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800/50 transition-all flex items-center gap-2 hover:scale-105"
                target="_blank"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4 justify-center"
            >
              <a
                href="https://www.linkedin.com/in/nadia-rafique-46a9661b7/"
                className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" target="_blank"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nadiarafique1441@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200" target="_blank"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-balance">Selected Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A showcase of my recent work in frontend development, featuring modern web applications and user
              interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.projects.map((project, i) => (
              <ProjectCard key={project.title} p={project} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-20 px-6 bg-gradient-to-r from-secondary/10 via-muted/10 to-secondary/10 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-balance">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              My professional journey in frontend development and web technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.experiences.map((experience, i) => (
              <ExperienceCard key={i} item={experience} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-balance">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm available for frontend development roles and freelance projects. Let's discuss how we can bring your
              ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-effect p-6 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                <div className="relative z-10">
                  <h3 className="font-semibold text-foreground mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{DATA.projects.length}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{new Date().getFullYear() - 2021}+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{DATA.skills.length}</div>
                      <div className="text-sm text-muted-foreground">Skills</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">100%</div>
                      <div className="text-sm text-muted-foreground">Remote</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-50" />
                <div className="relative z-10">
                  <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${DATA.contactEmail}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={18} />
                      {DATA.contactEmail}
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-[18px] h-[18px] flex items-center justify-center">📍</div>
                      {DATA.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {DATA.name}. Built with React, Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
