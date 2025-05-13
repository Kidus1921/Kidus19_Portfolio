"use client";

import React, { useState } from 'react';
import  { useEffect } from 'react';
function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
  };

  const baseTheme = isDarkMode
    ? {
        bg: "bg-[#0a192f]",
        text: "text-white",
        secondaryBg: "bg-[#112240]",
        cardBg: "bg-[#1d2d50]",
        accent: "text-[#64ffda]",
      }
    : {
        bg: "bg-white",
        text: "text-gray-800",
        secondaryBg: "bg-gray-50",
        cardBg: "bg-white shadow-md",
        accent: "text-[#0a192f]",
      };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Flask-based Excel Processing and Classification Application",
      description:
        "This project is a Flask-based web application designed for processing and classifying Excel files. It enables users to upload data files, classify items by department, generate reports, and download the results in Excel format. The application is geared towards businesses needing to process item data, such as pharmaceutical reports, and offers automated classification, department mapping, and summary generation.",
      technologies: ["Python", "Flask", "Bootstrap", "HTML/CSS"],
      image:
        "https://ucarecdn.com/cc8af1e7-5752-4e1f-b3cf-1c1a97bdaa64/adataanalyticsdashboardinterfaceon_b3DuSAnTdSPbLwYFNMmw_1wqCFHLSREuZA523gGkjkw.jpeg",
      demo: "https://report-generator-abhe.onrender.com",
      github: "https://github.com/Kidus1921/report-generator",
    },
    {
      title: "Basic To-Do List App with Timestamp and Priority Sorting",
      description:
        "This is a lightweight to-do list web application that allows users to add tasks with timestamps and priority levels. Tasks can be sorted by name, creation time, or priority, enabling users to manage their daily goals more effectively. The interface is simple and user-friendly, making it ideal for personal task tracking and productivity.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image:
        "https://ucarecdn.com/9458e8a6-96a7-4cad-ba9c-316a6f3396fb/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg",
      demo: "",
      github: "https://github.com/Kidus1921/todolist-app",
    },
    {
      title: "Student Union Election Management System",
      description:
        "The Student Union Election Management System is a Java-based application designed to conduct, manage, and monitor student body elections efficiently and securely. It facilitates candidate registration, voter authentication, real-time vote casting, and result generation within a user-friendly interface. The system ensures fair elections by preventing multiple votes and providing transparent, auditable election results.",
      technologies: ["Java"],
      image:
        "https://ucarecdn.com/2a6e2eeb-8417-406f-8adc-ebb53da673c2/OIP.RApehYblgRWmvJxY1gxVdwHaFN",
      demo: "",
      github: "https://github.com/Kidus1921/StudentElectionManagement",
    },
  ];
  return (
    <div
      className={`min-h-screen ${baseTheme.bg} ${baseTheme.text} font-poppins transition-colors duration-300`}
    >
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav
          className={`fixed w-full ${baseTheme.bg}/90 backdrop-blur-sm z-50 py-4`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className={`text-2xl font-bold ${baseTheme.accent}`}>KB</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex space-x-8">
                {[
                  "home",
                  "about",
                  "education",
                  "projects",
                  "skills",
                  "experience",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`hover:${baseTheme.accent} transition-colors capitalize cursor-pointer`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  isDarkMode ? "bg-white-200" : "bg-gray-800"
                } transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? "🔆" : "🌙"}
              </button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute w-full ${
              baseTheme.secondaryBg
            } transition-all duration-300 ${
              isMenuOpen ? "max-h-screen" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="container mx-auto px-4 py-2">
              {[
                "home",
                "about",
                "education",
                "projects",
                "skills",
                "experience",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 hover:${baseTheme.accent} transition-colors capitalize`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <section
          id="home"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Kidus Belete
              </h1>
              <h2 className={`text-xl md:text-2xl ${baseTheme.accent} mb-8`}>
                Junior Programmer | IT Support | Cybersecurity Enthusiast
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
                Hi, I'm Kidus Belete — a passionate and versatile Junior
                Programmer with a strong foundation in IT support and
                networking. I'm committed to continuous learning,
                problem-solving, and developing real-world solutions through
                technology.
              </p>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full shadow-xl">
              <img
                src="https://ucarecdn.com/387aa66e-9262-40f7-813b-e8390e4a18e4/profile.jpg"
                alt="Kidus Belete"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section id="about" className={`py-20 ${baseTheme.secondaryBg}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-gray-300">
              <p className="mb-6">
                I'm a dedicated and adaptable tech enthusiast from Dire Dawa,
                Ethiopia, with a focus on web development, cybersecurity, and IT
                support. Alongside my technical degree in Computer Science, I'm
                also pursuing a BA in Management to broaden my leadership and
                strategic thinking capabilities.
              </p>
              <p>
                My mission is to use my skills to create secure, efficient, and
                user-centered systems that make an impact.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div
                className={`border-l-2 border-[#64ffda] pl-8 relative ${baseTheme.cardBg} rounded-lg p-6`}
              >
                <div className="absolute w-3 h-3 bg-[#64ffda] rounded-full -left-[7px]"></div>
                <h3 className="text-xl font-bold">BSc in Computer Science</h3>
                <p className={`${baseTheme.accent} mb-2`}>
                  Haramaya University (2020 – 2024)
                </p>
              </div>
              <div
                className={`border-l-2 border-[#64ffda] pl-8 relative ${baseTheme.cardBg} rounded-lg p-6`}
              >
                <div className="absolute w-3 h-3 bg-[#64ffda] rounded-full -left-[7px]"></div>
                <h3 className="text-xl font-bold">
                  BA in Management (Ongoing)
                </h3>
                <p className={`${baseTheme.accent} mb-2`}>
                  Haramaya University (2023 – 2026)
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Certifications & Badges
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://www.credly.com/badges/0f1ca868-9d22-4d35-a9e5-2a835cae8cc0/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTheme.cardBg} p-6 rounded-lg hover:scale-105 transition-transform`}
                >
                  <p className={`${baseTheme.accent} mb-2`}>
                    🥇 Python Essentials 1
                  </p>
                  <p className="text-sm text-gray-400">
                    Cisco Networking Academy
                  </p>
                </a>
                <a
                  href="https://www.credly.com/badges/415201f6-974b-4c88-a413-3281454778dd/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTheme.cardBg} p-6 rounded-lg hover:scale-105 transition-transform`}
                >
                  <p className={`${baseTheme.accent} mb-2`}>
                    🥇 JavaScript Essentials 1
                  </p>
                  <p className="text-sm text-gray-400">
                    Cisco Networking Academy
                  </p>
                </a>
                <a
                  href="https://www.credly.com/badges/967b5d95-c7f9-4e38-a752-f21be6a1ae75/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTheme.cardBg} p-6 rounded-lg hover:scale-105 transition-transform`}
                >
                  <p className={`${baseTheme.accent} mb-2`}>
                    🥇 JavaScript Essentials 2
                  </p>
                  <p className="text-sm text-gray-400">
                    Cisco Networking Academy
                  </p>
                </a>
                <a
                  href="https://www.credly.com/badges/bda73cf5-ae6a-46f4-be3a-4e0e577bbf17/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTheme.cardBg} p-6 rounded-lg hover:scale-105 transition-transform`}
                >
                  <p className={`${baseTheme.accent} mb-2`}>
                    🥇 Cybersecurity Essentials
                  </p>
                  <p className="text-sm text-gray-400">
                    Cisco + Laikipia University
                  </p>
                </a>
                <a
                  href="https://www.credly.com/badges/a6ad7274-5022-46b3-8228-d992400d9ac5/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTheme.cardBg} p-6 rounded-lg hover:scale-105 transition-transform`}
                >
                  <p className={`${baseTheme.accent} mb-2`}>
                    🥇 Network Security
                  </p>
                  <p className="text-sm text-gray-400">NCST Morocco + Cisco</p>
                </a>
                <a
                  href="https://www.credly.com/badges/d52ddd22-6110-417c-822a-aebdd9dc461f/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTheme.cardBg} p-6 rounded-lg hover:scale-105 transition-transform`}
                >
                  <p className={`${baseTheme.accent} mb-2`}>
                    🥇 Intro to Cybersecurity
                  </p>
                  <p className="text-sm text-gray-400">
                    Cisco Networking Academy
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What I've Built
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`${baseTheme.cardBg} rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`${baseTheme.accent} bg-opacity-10 px-3 py-1 rounded-full text-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${baseTheme.accent} border border-current px-4 py-2 rounded hover:bg-opacity-10 transition-colors`}
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={`py-20 ${baseTheme.secondaryBg}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`${baseTheme.cardBg} p-6 rounded-lg`}>
                <h3 className={`text-xl font-bold mb-4 ${baseTheme.accent}`}>
                  Languages & Frameworks
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>PHP</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>ASP.NET</li>
                  <li>C#</li>
                  <li>React</li>
                </ul>
              </div>
              <div className={`${baseTheme.cardBg} p-6 rounded-lg`}>
                <h3 className={`text-xl font-bold mb-4 ${baseTheme.accent}`}>
                  Cybersecurity & Networking
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Cisco tools</li>
                  <li>Linux</li>
                  <li>Network Security Essentials</li>
                </ul>
              </div>
              <div className={`${baseTheme.cardBg} p-6 rounded-lg`}>
                <h3 className={`text-xl font-bold mb-4 ${baseTheme.accent}`}>
                  Tools & Support
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Microsoft Office</li>
                  <li>Git</li>
                  <li>Firebase</li>
                  <li>Visual Studio Code</li>
                  <li>Hardware & software maintenance</li>
                  <li>LAN setup</li>
                  <li>HMIS management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div
                className={`border-l-2 border-[#64ffda] pl-8 relative ${baseTheme.cardBg} rounded-lg p-6`}
              >
                <div className="absolute w-3 h-3 bg-[#64ffda] rounded-full -left-[7px]"></div>
                <h3 className="text-xl font-bold">IT Support</h3>
                <p className={`${baseTheme.accent} mb-2`}>
                  Delt Yemaryamwork General Hospital (Aug 2024 – Present)
                </p>
                <ul className="text-gray-400 list-disc ml-4">
                  <li>Maintained and supported hospital IT infrastructure</li>
                  <li>Managed HMIS systems and ensured data security</li>
                  <li>Provided troubleshooting and training to staff</li>
                </ul>
              </div>
              <div
                className={`border-l-2 border-[#64ffda] pl-8 relative ${baseTheme.cardBg} rounded-lg p-6`}
              >
                <div className="absolute w-3 h-3 bg-[#64ffda] rounded-full -left-[7px]"></div>
                <h3 className="text-xl font-bold">Internship</h3>
                <p className={`${baseTheme.accent} mb-2`}>
                  Commercial Bank of Ethiopia (July – Aug 2023)
                </p>
                <ul className="text-gray-400 list-disc ml-4">
                  <li>Assisted with ATM networking and remote maintenance</li>
                  <li>Participated in LAN setup and diagnostics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`py-20 ${baseTheme.secondaryBg}`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
            <div className="max-w-md mx-auto">
              <div className="space-y-4 mb-8">
                <p className={baseTheme.accent}>Languages</p>
                <div className="flex justify-center space-x-8">
                  <div>
                    <span className="text-gray-400">🇪🇹 Amharic</span>
                    <p className="text-sm text-gray-500">Native</p>
                  </div>
                  <div>
                    <span className="text-gray-400">🇬🇧 English</span>
                    <p className="text-sm text-gray-500">Proficient</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <a
                  href="mailto:Kidusbelete019@gmail.com"
                  className={`${baseTheme.accent} hover:opacity-80 transition-opacity`}
                >
                  📧 Kidusbelete019@gmail.com
                </a>
                <p className="text-gray-400">📞 +251 940 891 947</p>
                <p className="text-gray-400">📍 Dire Dawa, Ethiopia</p>
                <a
                  href="https://t.me/truth_75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTheme.accent} hover:opacity-80 transition-opacity`}
                >
                  🔗 Telegram: @truth_75
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .border-l-2 {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;