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
      style={{ backgroundColor: "#53693b", color: "#f5f2ea" }}
    >
      {/* Top tab nav */}
      <header className="absolute top-6 left-0 right-0 flex justify-center px-4">
        <nav className="flex items-center gap-2 bg-bone/10 backdrop-blur border border-bone/20 rounded-full px-4 py-2 text-xs uppercase tracking-widerish">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`px-3 py-1.5 rounded-full transition ${
                activeTab === tab.id
                  ? "bg-bone text-meadow font-semibold"
                  : "text-bone/80 hover:bg-bone/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Content switcher */}
      <main className="flex items-center justify-center min-h-screen px-6 md:px-12">
        {activeTab === "home" && (
          <div className="text-center space-y-6 max-w-4xl">
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

            <div className="flex items-center justify-center gap-4 mt-2 text-[11px] tracking-widerish uppercase">
              <button
                type="button"
                onClick={() => setActiveTab("projects")}
                className="border border-bone/40 px-6 py-3 rounded-full hover:bg-bone hover:text-meadow transition"
              >
                View Projects
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className="underline-offset-4 hover:underline"
              >
                About & Experience
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("contact")}
                className="underline-offset-4 hover:underline"
              >
                Contact
              </button>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <section className="bg-bone text-ink w-full max-w-4xl rounded-2xl px-6 md:px-12 py-10 shadow-xl shadow-ink/10">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish">
                Selected Projects
              </h3>
              <span className="text-xs uppercase tracking-widerish text-ink/60">
                API-ready content
              </span>
            </div>
            <div className="mt-6 grid gap-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="border border-ink/10 rounded-xl p-5 bg-white/70"
                >
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="mt-2 text-ink/80 text-sm md:text-base">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-xs uppercase tracking-wide text-ink/80 underline-offset-4 hover:underline"
                    >
                      {project.link.label}
                    </a>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-ink/70">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full bg-ink/5 border border-ink/10"
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
          <section className="bg-bone text-ink w-full max-w-5xl rounded-2xl px-6 md:px-12 py-10 shadow-xl shadow-ink/10 space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish">
                About & Experience
              </h3>
              <span className="text-xs uppercase tracking-widerish text-ink/60">
                Design × Data × Story
              </span>
            </div>

            <p className="mt-4 text-sm md:text-base text-ink/80 leading-relaxed">
              Pursuing a B.S. in Computer Science at UT Dallas (May 2028). Design & Marketing Officer for ACM UTD, creating visually engaging promos and elevating event branding. Director of Social Media for Kappa Theta Pi, driving community engagement through creative direction and strategic content. Holds a Web Development Certification (Global Career Accelerator, Oct 2025) with UX, HTML, and CSS expertise to craft user-friendly, impactful experiences.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold uppercase tracking-wide text-xs text-ink/70">
                  Education
                </h4>
                {education.map((edu) => (
                  <div key={edu.school} className="border border-ink/10 rounded-xl p-4 bg-white/70 text-sm md:text-base">
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
                  <div key={cert.name} className="border border-ink/10 rounded-xl p-4 bg-white/70 text-sm md:text-base">
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

            <div className="space-y-6 text-sm md:text-base">
              <h4 className="font-semibold uppercase tracking-wide text-xs text-ink/70">
                Experience
              </h4>
              {experiences.map((item) => (
                <div
                  key={item.role}
                  className="border border-ink/10 rounded-xl p-4 bg-white/70"
                >
                  <div className="flex flex-wrap justify-between gap-2">
                    <p className="font-semibold">{item.role}</p>
                    {item.time && (
                      <p className="text-ink/60 text-xs uppercase tracking-wide">
                        {item.time}
                      </p>
                    )}
                  </div>
                  <ul className="mt-2 space-y-2 text-ink/75 list-disc list-inside">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "contact" && (
          <section className="bg-bone text-ink w-full max-w-xl rounded-2xl px-6 md:px-10 py-10 shadow-xl shadow-ink/10 text-center space-y-4">
            <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish">
              Contact
            </h3>
            <p className="text-sm md:text-base text-ink/75">
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
              className="mt-4 border border-ink/20 px-5 py-2.5 rounded-full text-xs uppercase tracking-widerish hover:bg-ink hover:text-bone transition"
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
