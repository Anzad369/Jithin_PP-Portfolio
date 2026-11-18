import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Camera,
  Award,
  Globe,
} from "lucide-react";
import VideoShowcase from "@/components/VideoShowcase";
import {
  PROFILE,
  EXPERIENCE,
  SKILLS,
  EDUCATION,
} from "@/data/portfolioData";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09090B] text-[#F4F4F5] selection:bg-amber-500 selection:text-white">
      {/* Sticky Minimal Navbar */}
      <header className="sticky top-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a
            href="#"
            className="font-semibold tracking-tight text-base sm:text-lg shrink-0 transition-transform duration-200 hover:scale-105 text-zinc-100"
          >
            {PROFILE.name}
            <span className="text-amber-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a
              href="#work"
              className="hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Video Reels
            </a>
            <a
              href="#experience"
              className="hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-zinc-100 text-zinc-950 hover:bg-amber-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 shadow-sm"
          >
            Book a Shoot
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:border-amber-500/50 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Based in {PROFILE.location}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-zinc-100">
              Visual storytelling through{" "}
              <span className="text-amber-500 italic font-serif font-normal">
                cinema & lens.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {PROFILE.summary}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#work"
                className="text-center px-6 py-3.5 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-amber-500 hover:text-white hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-200"
              >
                Watch Edited Reels
              </a>
              <div className="flex flex-wrap gap-2.5">
                {PROFILE.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200 hover:border-amber-500 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                  >
                    <InstagramIcon className="w-4 h-4 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Portrait Card */}
          <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:max-w-none">
            <div className="group relative bg-zinc-900 p-3.5 sm:p-4 rounded-3xl border border-zinc-800 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:border-amber-500/40">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-800">
                <img
                  src="/jithin-portrait.jpg"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-2 px-1.5">
                <div>
                  <p className="font-semibold text-sm sm:text-base text-zinc-100">
                    {PROFILE.name}
                  </p>
                  <p className="text-xs text-zinc-400">Final Cut Pro • Drone • Gimbal</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 group-hover:border-amber-500/50 transition-colors shrink-0">
                  10+ Yrs Exp
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Portrait Video Showcase */}
        <VideoShowcase />

        {/* Interactive Experience Timeline */}
        <section id="experience" className="py-14 md:py-20 border-t border-zinc-800">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-medium mb-2">
              Career Track
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCE.map((job, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-lg hover:border-amber-500/50 hover:bg-zinc-900/80"
              >
                <div className="lg:col-span-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 border border-zinc-700 text-amber-500 mb-3 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors duration-300">
                    {job.period}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-100 group-hover:text-amber-500 transition-colors">
                    {job.company}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    {job.role} • {job.location}
                  </p>
                </div>

                <ul className="lg:col-span-8 space-y-2.5 text-zinc-400 text-sm leading-relaxed">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Skills, Education & Languages */}
        <section id="skills" className="py-14 md:py-20 border-t border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <Camera className="w-5 h-5 text-amber-500 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
                  Production & Editing Expertise
                </h2>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200 cursor-default transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-100 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md hover:border-amber-500/50">
                <div className="flex items-center gap-2 mb-2.5">
                  <Award className="w-5 h-5 text-amber-500 shrink-0" />
                  <h3 className="font-semibold text-base sm:text-lg text-zinc-100">Education</h3>
                </div>
                <p className="text-sm text-zinc-400">{EDUCATION.degree}</p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md hover:border-amber-500/50">
                <div className="flex items-center gap-2 mb-2.5">
                  <Globe className="w-5 h-5 text-amber-500 shrink-0" />
                  <h3 className="font-semibold text-base sm:text-lg text-zinc-100">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-200 hover:border-amber-500 hover:scale-105 transition-all duration-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Contact Footer */}
        <footer id="contact" className="py-14 md:py-20 border-t border-zinc-800">
          <div className="p-6 sm:p-10 md:p-14 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-all duration-300 hover:border-amber-500/40 hover:shadow-lg">
            <div className="w-full lg:w-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-medium mb-2">
                Available for Projects in UAE
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-zinc-100">
                Let’s create your next visual story.
              </h2>
              <p className="text-zinc-400 max-w-lg text-sm leading-relaxed">
                Reach out for luxury real estate walkthroughs, commercial shoots, event coverage, or Final Cut Pro post-production.
              </p>
            </div>

            <div className="w-full lg:w-auto space-y-3 text-sm">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-center gap-3 px-4 sm:px-5 py-3.5 rounded-xl bg-zinc-800/80 border border-zinc-700 hover:border-amber-500 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md transition-all duration-200 text-zinc-200"
              >
                <Mail className="w-4 h-4 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">{PROFILE.email}</span>
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-3 px-4 sm:px-5 py-3.5 rounded-xl bg-zinc-800/80 border border-zinc-700 hover:border-amber-500 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md transition-all duration-200 text-zinc-200"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>{PROFILE.phone}</span>
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 text-center sm:text-left">
            <p>© 2026 {PROFILE.name}. All rights reserved.</p>
            <p>{PROFILE.location}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}