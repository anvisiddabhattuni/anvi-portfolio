import { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
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
          <div className="text-center space-y-4 max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl tracking-[0.3em] uppercase">
              Anvi
            </h1>
            <h2 className="font-display text-sm md:text-base tracking-[0.4em] uppercase">
              Developer &amp; Creative Storyteller
            </h2>

            <p className="max-w-2xl mx-auto text-sm md:text-base text-bone/85 mt-6 leading-relaxed">
              I build thoughtful digital experiences at the intersection of
              <span className="font-semibold"> computer science</span> and
              <span className="font-semibold"> design</span> — from social media
              analytics platforms to web experiences for student organizations
              and nonprofits.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8 text-[11px] tracking-widerish uppercase">
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
            <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish mb-6">
              Selected Projects
            </h3>
            <div className="space-y-8 text-sm md:text-base">
              <article className="border-t border-ink/10 pt-6">
                <h4 className="font-semibold">
                  Analytico — Social Media Analytics Platform
                </h4>
                <p className="mt-2 text-ink/80">
                  Web-based platform that automates social media analytics and
                  generates data-driven recommendations. Built the front-end
                  using React and Tailwind, bringing Figma designs to life.
                </p>
              </article>

              <article className="border-t border-ink/10 pt-6">
                <h4 className="font-semibold">
                  SGS Tutor App — Audio-to-Text Matching
                </h4>
                <p className="mt-2 text-ink/80">
                  Designed and implemented an audio-to-text matching feature to
                  support memorization of the Bhagavad Gita, improving
                  accessibility for hundreds of learners.
                </p>
              </article>
            </div>
          </section>
        )}

        {activeTab === "about" && (
          <section className="bg-bone text-ink w-full max-w-4xl rounded-2xl px-6 md:px-12 py-10 shadow-xl shadow-ink/10">
            <h3 className="font-display text-lg md:text-xl uppercase tracking-widerish mb-6">
              Experience
            </h3>
            <div className="space-y-8 text-sm md:text-base">
              <div>
                <h4 className="font-semibold">
                  Marketing Co-director · ACM UTD
                </h4>
                <p className="mt-1 text-ink/75">
                  Lead content strategy, photography, and short-form video to
                  grow ACM&apos;s reach and strengthen its brand through reels,
                  campaigns, and event coverage.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Director of Social Media · Kappa Theta Pi
                </h4>
                <p className="mt-1 text-ink/75">
                  Curate cohesive, aesthetic social media content to showcase
                  events, spotlight members, and drive tech community
                  engagement.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Data Analytics Extern · Beats by Dre
                </h4>
                <p className="mt-1 text-ink/75">
                  Analyzed marketing datasets and built streamlined reports in
                  Google Sheets using AI tools, uncovering insights for campaign
                  performance and content strategy.
                </p>
              </div>
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
