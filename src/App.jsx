import { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

const projects = [
  {
    title: "Analytico — Social Media Analytics Platform",
    description:
      "Web app that automates social analytics and delivers data-driven recommendations from Figma specs to production UI.",
    tags: ["React", "Tailwind", "Data viz"],
    link: {
      href: "https://www.figma.com/proto/nSEFJQpmWMuCUcJgRgJY3F/Analytico-Storyboard?node-id=1-5&starting-point-node-id=1%3A5&t=ZeobGc86GxGjPhve-1",
      label: "View Figma storyboard",
    },
  },
  {
    title: "SGS Tutor — Audio-to-Text Matching",
    description:
      "Accessibility feature that pairs spoken verses with on-screen text to help learners memorize and review quickly.",
    tags: ["Accessibility", "Frontend", "Audio"],
    link: {
      href: "https://www.sgsgitafoundation.org/tutor.html",
      label: "Open SGS Tutor page",
    },
  },
];

const experiences = [
  {
    role: "Marketing Co-director · ACM UTD",
    summary:
      "Led content strategy and video to grow ACM's reach with reels, campaigns, and event coverage.",
  },
  {
    role: "Director of Social Media · Kappa Theta Pi",
    summary:
      "Curated cohesive social content to highlight events, members, and drive tech community engagement.",
  },
  {
    role: "Data Analytics Extern · Beats by Dre",
    summary:
      "Analyzed marketing datasets and built streamlined reports to surface campaign insights.",
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
              Portfolio · Storytelling · Analytics
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
              I build data-informed, design-forward experiences. Currently
              crafting a portfolio platform with secure admin controls and API-driven
              content so updates stay effortless.
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
          <section className="bg-bone text-ink w-full max-w-4xl rounded-2xl px-6 md:px-12 py-10 shadow-xl shadow-ink/10">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish">
                About & Experience
              </h3>
              <span className="text-xs uppercase tracking-widerish text-ink/60">
                Design × Data × Story
              </span>
            </div>

            <p className="mt-4 text-sm md:text-base text-ink/80 leading-relaxed">
              I translate complex ideas into clear, aesthetic experiences and am
              currently evolving this portfolio into a data-backed platform with
              authenticated admin tools.
            </p>

            <div className="mt-6 space-y-6 text-sm md:text-base">
              {experiences.map((item) => (
                <div
                  key={item.role}
                  className="border-t border-ink/10 pt-4"
                >
                  <h4 className="font-semibold">{item.role}</h4>
                  <p className="mt-1 text-ink/75">{item.summary}</p>
                </div>
              ))}
            </div>
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
