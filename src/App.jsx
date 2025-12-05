import { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Analytico — Social Media Analytics Platform",
    description:
      "Web platform that automates social analytics, generates reports, and provides strategic recommendations. Built the React + Tailwind UI from Figma and solved pain points around pricing models, analytics compilation, and content manager insights.",
    tags: ["React", "Tailwind", "Analytics"],
    link: {
      href: "https://www.figma.com/proto/nSEFJQpmWMuCUcJgRgJY3F/Analytico-Storyboard?node-id=1-5&starting-point-node-id=1%3A5&t=ZeobGc86GxGjPhve-1",
      label: "View Figma storyboard",
    },
  },
  {
    title: "SGS Tutor — Audio-to-Text Matching",
    description:
      "Audio-to-text matching feature that pairs spoken verses with on-screen text to improve memorization efficiency for student learners; integrated into the main app to streamline accessibility.",
    tags: ["Accessibility", "Frontend", "Audio"],
    link: {
      href: "https://www.sgsgitafoundation.org/tutor.html",
      label: "Open SGS Tutor page",
    },
  },
];

const experiences = [
  {
    role: "Design & Marketing Officer · ACM UTD",
    time: "Aug 2025 – Present · Richardson, TX",
    bullets: [
      "Design visually engaging posts and promos in Figma/Canva to strengthen ACM's online presence.",
      "Capture and edit event photography to showcase the community and initiatives.",
      "Elevate event branding to clearly communicate ACM's mission and values.",
    ],
  },
  {
    role: "Director of Social Media · Kappa Theta Pi",
    time: "Aug 2025 – Present · Richardson, TX",
    bullets: [
      "Partner with VP Marketing to plan and design engaging social content.",
      "Provide creative direction and feedback to keep brand consistent across platforms.",
      "Highlight chapter events, wins, and member stories to drive engagement.",
    ],
  },
  {
    role: "Data Analyst Extern · Beats by Dre",
    time: "Dec 2024 – Feb 2025",
    bullets: [
      "Analyzed qualitative and quantitative data to support strategic marketing decisions.",
      "Performed data cleaning and visualization to keep insights clear and reliable.",
      "Built reports/dashboards with actionable recommendations for stakeholders.",
    ],
  },
  {
    role: "Lead Developer · HSBuilds",
    time: "Aug 2023 – Aug 2024 · Frisco, TX (Hybrid)",
    bullets: [
      "Led timelines and stakeholder comms across 10+ nonprofit web projects.",
      "Designed user-friendly interfaces in HTML, CSS, and JavaScript.",
      "Collaborated with dev/design teams to ship responsive, on-time sites.",
    ],
  },
  {
    role: "Developer (Volunteer) · Karya Siddhi Hanuman Temple",
    time: "Jun 2021 – 2022",
    bullets: [
      "Built audio-to-text feature for SGS Tutor, refining accessibility tools adopted by 500+ learners.",
      "Collaborated with developers to enhance online education resources for spiritual study programs.",
    ],
  },
];

const education = [
  {
    school: "University of Texas at Dallas — B.S. Computer Science",
    detail: "Expected May 2028 · Richardson, TX",
  },
];

const certifications = [
  {
    name: "Web Development Certification — The Global Career Accelerator",
    time: "Issued Oct 2025 · Credential ID 163460074",
    href: "https://www.credential.net/cb2df851-dbc7-48c6-a3d9-944c13ddd559#acc.YSm5Lnve",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(245, 245, 220, 0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(210, 180, 140, 0.14), transparent 30%), linear-gradient(145deg, #14120d, #0f0d0a 60%, #1a1610)",
        color: "#f5f5dc",
      }}
    >
      {/* Top tab nav */}
      <header className="absolute top-8 left-0 right-0 flex justify-center px-4">
        <nav className="flex items-center gap-[3.5rem] sm:gap-[4rem] bg-ink/80 backdrop-blur border border-meadow/60 rounded-full px-8 sm:px-10 py-4 text-lg sm:text-xl uppercase tracking-widerish shadow-2xl shadow-black/40">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`px-7 sm:px-9 py-[10px] sm:py-3 min-w-[110px] sm:min-w-[140px] rounded-full font-semibold transition transform duration-150 active:scale-95 shadow-lg border ${
                activeTab === tab.id
                  ? "bg-meadow text-ink border-meadow ring-4 ring-bone/60 shadow-meadow/70"
                  : "bg-bone text-ink border-bone/70 hover:bg-meadow hover:text-ink hover:border-meadow"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Content switcher */}
      <main
        className={`flex justify-center min-h-screen px-6 md:px-12 ${
          activeTab === "about"
            ? "items-start pt-[22vh] md:pt-[26vh] pb-24 md:pb-32"
            : "items-center pt-32 md:pt-40 pb-24 md:pb-32"
        }`}
      >
        {activeTab === "home" && (
          <div className="text-center space-y-8 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bone/80">
              UTD CS · Storytelling · Analytics
            </p>
            <div className="space-y-2">
              <h1 className="font-display text-4xl md:text-5xl tracking-[0.3em] uppercase">
                Anvi
              </h1>
              <h2 className="font-display text-base md:text-lg tracking-[0.35em] uppercase text-bone/90">
                Developer &amp; Creative Storyteller
              </h2>
            </div>

            <p className="max-w-3xl mx-auto text-sm md:text-base text-bone/85 leading-relaxed">
              UTD computer science student (B.S., May 2028) building data-informed, design-forward experiences. From analytics dashboards to accessibility features, I deliver polished React/Tailwind frontends and plan for secure, API-driven content updates.
            </p>

            <div className="flex items-center justify-center gap-[5rem] mt-16 text-[20px] sm:text-[24px] tracking-widerish uppercase flex-wrap">
              <button
                type="button"
                onClick={() => setActiveTab("projects")}
                className="bg-gradient-to-r from-meadow via-bone to-meadow text-ink border border-meadow/80 ring-4 ring-bone/50 px-[2.75rem] sm:px-[3rem] py-[1.6rem] sm:py-[1.75rem] rounded-full hover:from-bone hover:via-meadow hover:to-bone transition transform duration-150 active:scale-95 shadow-2xl shadow-black/35 font-semibold min-w-[160px] sm:min-w-[190px] min-h-[70px]"
              >
                View Projects
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className="bg-gradient-to-r from-meadow via-bone to-meadow text-ink border border-meadow/80 ring-4 ring-bone/50 px-[2.75rem] sm:px-[3rem] py-[1.6rem] sm:py-[1.75rem] rounded-full hover:from-bone hover:via-meadow hover:to-bone transition transform duration-150 active:scale-95 shadow-2xl shadow-black/35 font-semibold min-w-[160px] sm:min-w-[190px] min-h-[70px] mt-5 md:mt-0"
              >
                About & Experience
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("contact")}
                className="bg-gradient-to-r from-meadow via-bone to-meadow text-ink border border-meadow/80 ring-4 ring-bone/50 px-[2.75rem] sm:px-[3rem] py-[1.6rem] sm:py-[1.75rem] rounded-full hover:from-bone hover:via-meadow hover:to-bone transition transform duration-150 active:scale-95 shadow-2xl shadow-black/35 font-semibold min-w-[160px] sm:min-w-[190px] min-h-[70px]"
              >
                Contact
              </button>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <section className="bg-bone/10 text-bone w-full max-w-4xl rounded-3xl px-6 md:px-12 py-12 shadow-2xl shadow-black/40 border border-bone/20 space-y-8 backdrop-blur">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish">
                Selected Projects
              </h3>
              <span className="text-xs uppercase tracking-widerish text-bone/70">
                API-ready content
              </span>
            </div>
            <div className="grid gap-7">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="border border-bone/20 rounded-2xl p-6 bg-ink/40 space-y-3 shadow-lg shadow-black/30"
                >
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="mt-2 text-bone/80 text-sm md:text-base">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-bone/80 underline-offset-4 hover:underline"
                    >
                      {project.link.label}
                    </a>
                  )}
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-bone/70">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full bg-white/10 border border-white/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === "about" && (
          <>
            <div className="h-40 md:h-56" aria-hidden />
            <section className="bg-bone/10 text-bone w-full max-w-5xl rounded-3xl px-8 md:px-16 pt-20 md:pt-24 pb-14 shadow-2xl shadow-black/40 space-y-12 border border-bone/20 backdrop-blur scroll-mt-[18vh] md:scroll-mt-[22vh]">
              <div className="flex items-center justify-between gap-4 flex-wrap space-y-4 md:space-y-0">
                <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish">
                  About & Experience
                </h3>
                <span className="text-xs uppercase tracking-widerish text-ink/60 block mt-2">
                  Design × Data × Story
                </span>
              </div>

              <p className="mt-4 text-sm md:text-base text-bone/80 leading-relaxed">
                Pursuing a B.S. in Computer Science at UT Dallas (May 2028). Design & Marketing Officer for ACM UTD, creating visually engaging promos and elevating event branding. Director of Social Media for Kappa Theta Pi, driving community engagement through creative direction and strategic content. Holds a Web Development Certification (Global Career Accelerator, Oct 2025) with UX, HTML, and CSS expertise to craft user-friendly, impactful experiences.
              </p>

              <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold uppercase tracking-wide text-xs text-ink/70">
                    Education
                  </h4>
                  {education.map((edu) => (
                    <div key={edu.school} className="border border-bone/25 rounded-xl p-4 bg-ink/40 text-sm md:text-base shadow-inner shadow-black/20">
                      <p className="font-semibold">{edu.school}</p>
                      <p className="text-ink/70 mt-1">{edu.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold uppercase tracking-wide text-xs text-ink/70">
                    Certification
                  </h4>
                  {certifications.map((cert) => (
                    <div key={cert.name} className="border border-bone/25 rounded-xl p-4 bg-ink/40 text-sm md:text-base shadow-inner shadow-black/20">
                      <p className="font-semibold">{cert.name}</p>
                      <p className="text-ink/70 mt-1">{cert.time}</p>
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-ink/80 underline-offset-4 hover:underline mt-2"
                      >
                        View Credential
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-7 text-sm md:text-base">
                <h4 className="font-semibold uppercase tracking-wide text-xs text-ink/70">
                  Experience
                </h4>
                {experiences.map((item) => (
                  <div
                    key={item.role}
                    className="border border-bone/20 rounded-2xl p-5 bg-ink/40 space-y-2 shadow-lg shadow-black/30"
                  >
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="font-semibold">{item.role}</p>
                      {item.time && (
                        <p className="text-bone/70 text-xs uppercase tracking-wide">
                          {item.time}
                        </p>
                      )}
                    </div>
                    <ul className="mt-2 space-y-2 text-bone/80 list-disc list-inside">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "contact" && (
          <section className="bg-bone/10 text-bone w-full max-w-xl rounded-3xl px-6 md:px-10 py-12 shadow-2xl shadow-black/40 text-center space-y-4 border border-bone/20 backdrop-blur">
            <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish">
              Contact
            </h3>
            <p className="text-sm md:text-base text-bone/75">
              Say hi for collaborations, portfolio feedback, or project ideas.
            </p>
            <div className="space-y-3 text-sm md:text-base">
              <a
                href="mailto:anvimsiddabhattuni@gmail.com"
                className="block underline-offset-4 hover:underline"
              >
                anvimsiddabhattuni@gmail.com
              </a>
              <a
                href="tel:+14693530279"
                className="block underline-offset-4 hover:underline"
              >
                469-353-0279
              </a>
              <a
                href="https://www.linkedin.com/in/anvi-siddabhattuni"
                target="_blank"
                rel="noreferrer"
                className="block underline-offset-4 hover:underline"
              >
                linkedin.com/in/anvi-siddabhattuni
              </a>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab("projects")}
              className="mt-10 border border-meadow/80 ring-4 ring-bone/50 bg-gradient-to-r from-meadow via-bone to-meadow text-ink px-22 py-11 rounded-full text-2xl uppercase tracking-widerish hover:from-bone hover:via-meadow hover:to-bone transition transform duration-150 active:scale-95 shadow-2xl shadow-black/35 font-bold"
            >
              View Projects
            </button>
          </section>
        )}
      </main>

      {/* Decorative little “pill” shapes */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-3 bg-ink/70 rounded-full shadow-xl"
            style={{
              top: `${10 + i * 10}%`,
              left: `${(i * 143) % 90 + 5}%`,
              transform: `rotate(${(i * 37) % 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
