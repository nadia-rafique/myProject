"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, FileText, Briefcase, Star, ExternalLink, Github, Linkedin, MapPin } from "lucide-react"

const DATA = {
  name: "Nadia Rafique",
  title: "Senior Frontend Developer",
  location: "Lahore, Pakistan",
  shortBio:
    "Senior Frontend Developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
  longBio:
    "Currently, I'm a Senior Frontend Developer specializing in modern web technologies. I contribute to the creation and maintenance of UI components that power enterprise applications, ensuring our platforms meet web accessibility standards and best practices to deliver inclusive user experiences.",
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
      image: "https://i.ibb.co/5x4B7cy/prismecs.jpg",
    },
    {
      title: "eIndustrify Marketplace",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-Browser Compatibility"],
      description:
        "Developed full frontend for eIndustrify's B2B industrial marketplace. Built product catalog, category filtering, quick order forms, and improved UX for mobile/desktop.",
      url: "https://eindustrify.com/",
      image: "https://i.ibb.co/6gx2j3R/eindustrify.jpg",
    },
    {
      title: "Jamiah School Management System",
      tags: ["Laravel", "Tailwind CSS", "Livewire", "MySQL", "PostgreSQL"],
      description:
        "Frontend for Jamiah SMS – a web and mobile school management system. Integrated with backend technologies, delivering responsive dashboards and UI components.",
      url: "https://www.jamiah.net/",
      image: "https://i.ibb.co/pPzvVwV/jamiah.jpg",
    },
  ],
  contactEmail: "nadiarafique1441@gmail.com",
}

const Badge = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "accent" }) => (
  <span
    className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${
      variant === "accent"
        ? "bg-accent/10 text-accent border border-accent/20"
        : "bg-muted text-muted-foreground border border-border"
    }`}
  >
    {children}
  </span>
)

const ExperienceCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group p-6 bg-card rounded-xl border border-border hover:border-primary/20 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h4 className="font-semibold text-foreground text-balance">{item.role}</h4>
        <div className="text-sm text-muted-foreground font-medium">{item.company}</div>
      </div>
      <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">{item.date}</div>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{item.details}</p>
  </motion.div>
)

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 + index * 0.1 }}
    className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
  >
    <div className="relative h-48 overflow-hidden bg-muted">
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background"
      >
        <ExternalLink size={16} className="text-foreground" />
      </a>
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-foreground mb-2 text-balance">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-pretty">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag: string) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 3 && <Badge>+{project.tags.length - 3} more</Badge>}
      </div>
    </div>
  </motion.div>
)

export default function ModernPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-semibold text-primary-foreground text-sm">
              {DATA.name.split(" ")[0][0]}
            </div>
            <div className="font-semibold text-foreground">{DATA.name}</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin size={14} />
                  {DATA.location}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  {DATA.name}
                </h1>

                <h2 className="text-xl md:text-2xl text-primary font-medium mb-8 text-balance">{DATA.title}</h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">{DATA.shortBio}</p>

                <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">{DATA.longBio}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {DATA.skills.slice(0, 8).map((skill) => (
                    <Badge key={skill} variant="accent">
                      {skill}
                    </Badge>
                  ))}
                  <Badge>+{DATA.skills.length - 8} more</Badge>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Projects
                  </a>
                  <a
                    href={`mailto:${DATA.contactEmail}`}
                    className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="relative w-full aspect-square max-w-sm mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl rotate-3"></div>
                    <div className="relative bg-card rounded-2xl overflow-hidden border border-border">
                      <img
                        src="https://i.ibb.co/1MSnbQF/profile.jpg"
                        alt="Nadia Rafique"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-card rounded-lg border border-border text-center">
                      <div className="text-2xl font-bold text-foreground">{DATA.projects.length}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="p-4 bg-card rounded-lg border border-border text-center">
                      <div className="text-2xl font-bold text-foreground">{new Date().getFullYear() - 2021}+</div>
                      <div className="text-sm text-muted-foreground">Years Exp</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/nadia-rafique-46a9661b7/"
                      className="p-3 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors"
                    >
                      <Linkedin size={20} className="text-muted-foreground" />
                    </a>
                    <a
                      href={`mailto:nadiarafique1441@gmail.com`}
                      className="p-3 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors"
                    >
                      <Mail size={20} className="text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-12">
                <Briefcase size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Experience</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {DATA.experiences.map((experience, index) => (
                  <ExperienceCard key={index} item={experience} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-foreground">Selected Projects</h2>
                <a
                  href="#projects"
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  View All →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DATA.projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                I'm available for frontend roles and freelance projects. Send a brief message and I'll reply within
                24–48 hours.
              </p>

              <div className="flex items-center justify-center gap-4 mb-12">
                <a
                  href={`mailto:${DATA.contactEmail}`}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  Email Me
                </a>
                <a
                  href="#resume"
                  className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors flex items-center gap-2"
                >
                  <FileText size={18} />
                  Download Resume
                </a>
              </div>

              <div className="p-8 bg-card rounded-xl border border-border max-w-md mx-auto">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <Star size={16} />
                  <span className="text-sm font-medium">Available for Work</span>
                </div>
                <p className="text-sm text-muted-foreground">Open to remote or hybrid frontend developer roles</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {DATA.name}. Crafted with ❤️ using React + Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
