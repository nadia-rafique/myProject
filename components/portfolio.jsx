"use client"
import { motion } from "framer-motion"
import { Mail, FileText, Briefcase, Star } from "lucide-react"

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
        "Led frontend development of Prismecs’ corporate site with responsive, modern UI, reusable components, and SEO optimisation.",
      url: "https://prismecs.com/",
      image: "https://i.ibb.co/5x4B7cy/prismecs.jpg",
    },
    {
      title: "eIndustrify Marketplace",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-Browser Compatibility"],
      description:
        "Developed full frontend for eIndustrify’s B2B industrial marketplace. Built product catalog, category filtering, quick order forms, and improved UX for mobile/desktop.",
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

const Badge = ({ children }) => (
  <span className="inline-block text-sm px-2 py-1 rounded-full bg-gradient-to-r from-sky-100 to-sky-200 text-sky-800 mr-2">
    {children}
  </span>
)

const ExperienceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08 }}
    className="p-4 bg-gradient-to-r from-white to-sky-50 rounded-lg shadow border border-sky-100 hover:shadow-md hover:border-sky-200 transition"
  >
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-semibold text-sky-700">{item.role}</h4>
        <div className="text-sm text-gray-600">{item.company}</div>
      </div>
      <div className="text-xs text-gray-500">{item.date}</div>
    </div>
    <p className="mt-3 text-gray-700 text-sm">{item.details}</p>
  </motion.div>
)

const ProjectCard = ({ p, i }) => (
  <motion.a
    initial={{ opacity: 0, scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.06 + i * 0.06 }}
    href={p.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-lg overflow-hidden shadow hover:shadow-xl border border-sky-100"
  >
    <div className="relative h-44 md:h-52 w-full bg-gray-100">
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4 bg-gradient-to-r from-white to-sky-50">
      <h3 className="font-semibold text-sky-700">{p.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{p.description}</p>
      <div className="mt-3">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
  </motion.a>
)

export default function PortfolioSingleFile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 py-12 px-6 md:px-12">
      <header className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-12 h-12 bg-sky-600 flex items-center justify-center font-semibold text-white shadow-md">
            {DATA.name.split(" ")[0][0]}
          </div>
          <div>
            <div className="text-lg font-semibold text-sky-700">{DATA.name}</div>
            <div className="text-sm text-gray-600">
              {DATA.title} • {DATA.location}
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sky-700">
          <a href="#projects" className="hover:text-sky-900">
            Projects
          </a>
          <a href="#experience" className="hover:text-sky-900">
            Experience
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-sky-900">
            <Mail size={16} /> Contact
          </a>
          <a
            href="#resume"
            className="px-3 py-1 border border-sky-600 text-sky-700 rounded-lg text-sm flex items-center gap-2 hover:bg-sky-50"
          >
            <FileText size={16} /> Resume
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* HERO */}
        <section className="md:col-span-2 bg-gradient-to-br from-white via-sky-50 to-sky-100 rounded-2xl p-8 shadow-md border border-sky-100">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-36 h-36 rounded-xl overflow-hidden bg-gray-100 shadow-md border border-sky-100">
                <img src="https://i.ibb.co/1MSnbQF/profile.jpg" alt="profile" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-sky-800">{DATA.name}</h1>
                <p className="mt-3 text-gray-700 max-w-2xl">{DATA.shortBio}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {DATA.skills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#projects"
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg shadow hover:shadow-lg transition"
                  >
                    See Projects
                  </a>
                  <a
                    href={`mailto:${DATA.contactEmail}`}
                    className="px-4 py-2 border border-sky-600 text-sky-700 rounded-lg hover:bg-sky-50 transition"
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-white/70 border border-sky-100 flex flex-col items-start shadow-sm">
                <div className="text-2xl font-bold text-sky-700">{DATA.projects.length}</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="p-4 rounded-lg bg-white/70 border border-sky-100 flex flex-col items-start shadow-sm">
                <div className="text-2xl font-bold text-sky-700">{DATA.experiences.length}</div>
                <div className="text-sm text-gray-600">Roles</div>
              </div>
              <div className="p-4 rounded-lg bg-white/70 border border-sky-100 flex flex-col items-start shadow-sm">
                <div className="text-2xl font-bold text-sky-700">{new Date().getFullYear() - 2021}</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="p-4 rounded-lg bg-white/70 border border-sky-100 flex flex-col items-start shadow-sm">
                <div className="text-2xl font-bold text-sky-700">10+</div>
                <div className="text-sm text-gray-600">Core Skills</div>
              </div>
            </div>
          </motion.div>
        </section>

        <aside className="rounded-2xl p-6 bg-gradient-to-br from-white to-sky-50 border border-sky-100 shadow-sm">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h3 className="font-semibold flex items-center gap-2 text-sky-700">
              <Briefcase size={16} /> Experience
            </h3>
            <div className="mt-4 space-y-3">
              {DATA.experiences.slice(0, 2).map((e, i) => (
                <ExperienceCard key={i} item={e} index={i} />
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-sky-700">Contact</h4>
              <a className="block mt-2 text-sky-600 hover:underline" href={`mailto:${DATA.contactEmail}`}>
                {DATA.contactEmail}
              </a>

              <div className="mt-4">
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 px-3 py-2 border border-sky-600 text-sky-700 rounded-lg hover:bg-sky-50"
                >
                  <FileText size={16} /> Download Resume
                </a>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star size={14} className="text-sky-600" /> Open to remote or hybrid roles
              </div>
            </div>
          </motion.div>
        </aside>

        <section id="projects" className="md:col-span-3 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-sky-800">Selected Projects</h2>
            <a href="#projects" className="text-sm text-sky-600 hover:underline">
              View all
            </a>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {DATA.projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </section>

        <section id="experience" className="md:col-span-3 mt-8">
          <h2 className="text-2xl font-bold text-sky-800">Experience</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {DATA.experiences.map((e, i) => (
              <ExperienceCard key={i} item={e} index={i} />
            ))}
          </div>
        </section>

        <section id="contact" className="md:col-span-3 mt-8">
          <div className="rounded-2xl p-8 bg-gradient-to-b from-white via-sky-50 to-sky-100 border border-sky-100 shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-sky-800">Let's work together</h3>
                <p className="mt-2 text-gray-600">
                  I’m available for frontend roles and freelance projects. Send a brief message and I’ll reply within
                  24–48 hours.
                </p>
                <div className="mt-4">
                  <a
                    href={`mailto:${DATA.contactEmail}`}
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg shadow hover:shadow-lg"
                  >
                    Email me
                  </a>
                </div>
              </div>

              <form className="space-y-3 bg-white p-4 rounded-lg border border-sky-100 shadow-sm">
                <div>
                  <label className="text-sm text-sky-700">Name</label>
                  <input
                    className="w-full mt-1 border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-sky-700">Email</label>
                  <input
                    className="w-full mt-1 border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-sky-700">Message</label>
                  <textarea
                    className="w-full mt-1 border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    rows={4}
                    placeholder="Short message / details"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg shadow hover:shadow-lg transition"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} {DATA.name}. Built with ❤️ using React + Tailwind.
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
