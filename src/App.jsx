export default function App() {
  return (
   <div className="min-h-screen relative overflow-hidden"
     style={{ backgroundColor: "#53693b", color: "#f5f2ea" }}>

      {/* Tiny nav text with breathing room on small screens */}
      <div className="pointer-events-none">
        <div className="absolute inset-x-6 top-8 flex flex-col gap-2 text-[10px] tracking-widerish uppercase md:flex-row md:items-start md:justify-between">
          <p>Anvi Siddabhattuni — Portfolio</p>
          <p className="md:text-right">Developer & Creative Technologist</p>
        </div>
        <div className="absolute inset-x-6 bottom-10 flex flex-col gap-2 text-[10px] tracking-widerish uppercase md:flex-row md:items-end md:justify-between">
          <p>React • Tailwind • Data Analytics</p>
          <p className="md:text-right">ACM • KTP • Beats by Dre</p>
        </div>
      </div>

      {/* Central name */}
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl md:text-5xl tracking-[0.3em] uppercase">
            Anvi
          </h1>
          <h2 className="font-display text-sm md:text-base tracking-[0.4em] uppercase">
            Developer &amp; Creative Storyteller
          </h2>

          <p className="max-w-md mx-auto text-xs md:text-sm text-bone/80 mt-6 leading-relaxed">
            I build thoughtful digital experiences at the intersection of
            <span className="font-semibold"> computer science</span> and
            <span className="font-semibold"> design</span> — from social media
            analytics platforms to web experiences for student organizations
            and nonprofits.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8 text-[11px] tracking-widerish uppercase">
            <a
              href="#projects"
              className="border border-bone/40 px-6 py-3 rounded-full hover:bg-bone hover:text-meadow transition"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="underline-offset-4 hover:underline"
            >
              About & Experience
            </a>
          </div>
        </div>
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

      {/* Below-the-fold content */}
      <section
        id="projects"
        className="bg-bone text-ink px-6 md:px-16 lg:px-32 py-20"
      >
        <h3 className="font-display text-xl md:text-2xl uppercase tracking-widerish mb-8">
          Selected Projects
        </h3>
        <div className="space-y-8 text-sm md:text-base">
          <article className="border-t border-ink/10 pt-6">
            <h4 className="font-semibold">
              Analytico — Social Media Analytics Platform
            </h4>
            <p className="mt-2 text-ink/80">
              Web-based platform that automates social media analytics and
              generates data-driven recommendations. Built the front-end using
              React and Tailwind, bringing Figma designs to life.
            </p>
          </article>

          <article className="border-t border-ink/10 pt-6">
            <h4 className="font-semibold">
              SGS Tutor App — Audio-to-Text Matching
            </h4>
            <p className="mt-2 text-ink/80">
              Designed and implemented an audio-to-text matching feature to
              support memorization of the Bhagavad Gita, improving accessibility
              for hundreds of learners.
            </p>
          </article>
        </div>
      </section>

      <section
        id="about"
        className="bg-bone text-ink px-6 md:px-16 lg:px-32 pb-20"
      >
        <h3 className="font-display text-xl md:text-2xl uppercase tracking-widerish mb-8">
          Experience
        </h3>
        <div className="space-y-8 text-sm md:text-base">
          <div>
            <h4 className="font-semibold">
              Marketing Co-director · ACM UTD
            </h4>
            <p className="mt-1 text-ink/75">
              Lead content strategy, photography, and short-form video to grow
              ACM&apos;s reach and strengthen its brand through reels, campaigns,
              and event coverage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Director of Social Media · Kappa Theta Pi
            </h4>
            <p className="mt-1 text-ink/75">
              Curate cohesive, aesthetic social media content to showcase
              events, spotlight members, and drive tech community engagement.
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
    </div>
  );
}
