import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Facebook,
  Linkedin,
  Github,
  Cloud,
  Code2,
  Workflow,
  Rocket,
  Menu,
  X,
} from "lucide-react";
import hiraAsset from "@/assets/hira.png.asset.json";
import firstFrameAsset from "@/assets/firstframe-architecture.png.asset.json";
import microtechxCover from "@/assets/microtechx-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hira Jabeen — Full-Stack Developer & DevOps Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Hira Jabeen, a full-stack developer and DevOps engineer helping SaaS startups ship faster with reliable cloud infrastructure.",
      },
      { property: "og:title", content: "Hira Jabeen — Full-Stack Developer & DevOps Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack engineering, CI/CD automation, and Azure cloud architecture for SaaS startups.",
      },
      { property: "og:image", content: hiraAsset.url },
      { name: "twitter:image", content: hiraAsset.url },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "hirajabeenbhatti@gmail.com";
const FB = "https://www.facebook.com/hirarajput.bhatti.7/";
const LI = "https://www.linkedin.com/in/hira-jabeen-cloud-engineer/";
const GH = "https://hirajabeen01.github.io/portfolio/";

const services = [
  {
    letter: "L",
    icon: Rocket,
    title: "Launch Your Product",
    desc: "From MVPs to full-scale platforms, I help startups bring ideas to market.",
    points: ["SaaS Development", "MVP Delivery", "Custom Platforms", "API Development"],
  },
  {
    letter: "A",
    icon: Workflow,
    title: "Automate Delivery",
    desc: "Reduce release risk through modern DevOps practices and workflows.",
    points: ["CI/CD Pipelines", "Deployment Automation", "Cloud Infrastructure", "Monitoring & Reliability"],
  },
  {
    letter: "W",
    icon: Cloud,
    title: "Azure Cloud Solutions",
    desc: "Designing scalable cloud infrastructure that supports growth.",
    points: ["Azure Architecture", "Cloud Migrations", "Cost Optimization", "Security & Governance"],
  },
];

type Project = {
  tag: string;
  name: string;
  title: string;
  desc: string;
  stack: string;
  highlights?: string[];
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    tag: "Featured Project",
    name: "FirstFrame",
    title: "Enterprise SaaS Platform",
    desc: "Delivered a cloud-native SaaS platform from concept to production — enabling organizations to streamline collaboration, automate workflows, and scale without increasing operational overhead. FirstFrame unifies Outlook calendar, a video library, and an Outlook add-in into an intelligent campaign engine, then delivers content through a custom Microsoft Teams bot for HR interviews, sales calls, and training sessions.",
    stack: "Azure · Docker · Kubernetes · Terraform · GitHub Actions",
    highlights: [
      "Production-ready MVP",
      "Microsoft 365 Integration",
      "Automated Deployment",
      "Cloud Scalability",
    ],
    image: firstFrameAsset.url,
    featured: true,
  },
  {
    tag: "Corporate Digital Platform",
    name: "Microtechx",
    title: "Enterprise Business Website",
    desc: "Designed and developed the official website for MicroTechx, an enterprise technology company specializing in Cloud, AI, Security, and SAP BTP solutions. Built a responsive, user-centric platform showcasing services, industries, case studies, and business outcomes — with modern UI/UX, intuitive navigation, mobile optimization, and strategic CTAs that drive client engagement.",
    stack: "Next.js · TypeScript · Azure DevOps · Responsive Design",
    highlights: [
      "Responsive UI/UX",
      "Next.js + TypeScript",
      "Azure DevOps Pipelines",
      "SEO & Performance",
    ],
    image: microtechxCover,
  },
  {
    tag: "Cloud Architecture Lab",
    name: "Distributed Voting Platform",
    title: "Microservices Reference",
    desc: "Microservices platform demonstrating scalable infrastructure design, observability, and zero-downtime deployments.",
    stack: "Kubernetes · Terraform · Docker · Prometheus",
  },
  {
    tag: "DevOps Automation",
    name: "CI/CD & Infrastructure Automation",
    title: "Pipeline Toolkit",
    desc: "Built a fully automated CI/CD workflow using cloud-native technologies to ship reliably, multiple times a day.",
    stack: "GitHub Actions · Terraform · Azure · Docker",
  },
];

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
              HJ
            </span>
            <span className="hidden sm:inline">Hira Jabeen</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink/60 transition">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Let's talk <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink text-background px-4 py-2 text-sm font-medium w-fit"
              >
                Let's talk <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 grain-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
              <span className="w-8 h-px bg-ink/40" />
              Full-Stack Development & DevOps
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] text-ink">
              An engineer known for turning{" "}
              <span className="relative inline-block">
                <span className="relative z-10">complexity</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-primary -z-0 rounded-sm" />
              </span>{" "}
              into clarity.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm <strong className="text-ink font-semibold">Hira Jabeen</strong> — I help SaaS
              startups and growing tech companies launch products faster, automate delivery, and
              build reliable systems that support growth instead of slowing it down.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Book a Discovery Call <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                See My Work
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                ["10+", "Projects Delivered"],
                ["100%", "Automated Delivery"],
                ["Azure", "Cloud Expertise"],
                ["SaaS", "Product Engineering"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-display font-bold text-ink">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-primary rounded-[2rem] rotate-3" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ink rounded-full hidden md:block" />
              <img
                src={hiraAsset.url}
                alt="Hira Jabeen, full-stack developer and DevOps engineer"
                className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-background border border-border rounded-full px-4 py-2 text-xs font-medium shadow-md">
                ● Available for projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-ink text-background overflow-hidden">
        <div className="flex gap-12 py-4 whitespace-nowrap animate-[marquee_30s_linear_infinite] font-display text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {[
                "Azure",
                "Kubernetes",
                "Terraform",
                "Docker",
                "GitHub Actions",
                "Next.js",
                "Node.js",
                "CI/CD",
                "SaaS Engineering",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0)} to { transform: translateX(-50%)} }`}</style>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-ink">
              I'm Hira <span className="italic font-display">Jabeen</span>.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              A <strong className="text-ink font-semibold">Full-Stack Developer</strong> and{" "}
              <strong className="text-ink font-semibold">DevOps Engineer</strong> focused on helping
              businesses turn ideas into production-ready products.
            </p>
            <p>
              My work combines software engineering, cloud infrastructure, and automation to deliver
              faster releases, improved reliability, and scalable foundations for growth. I partner
              with founders and engineering teams to ship MVPs, modernize platforms, and bring real
              DevOps discipline to fast-moving environments.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { k: "Platform Engineering", v: "Lead" },
                { k: "Automated Delivery", v: "100% Focus" },
                { k: "Cloud & AI Engineering", v: "Lead" },
                { k: "Production Reliability", v: "Always" },
              ].map((x) => (
                <div key={x.k} className="border border-border rounded-2xl p-5 bg-surface">
                  <div className="text-sm text-muted-foreground">{x.k}</div>
                  <div className="text-xl font-display font-semibold text-ink mt-1">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 text-ink max-w-2xl">
                Helping SaaS startups launch faster, scale smarter, and deliver with confidence.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-background border border-border rounded-3xl p-8 hover:border-ink transition"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display font-bold text-7xl text-primary leading-none">
                    {s.letter}
                  </span>
                  <s.icon className="w-6 h-6 text-ink/60 group-hover:text-ink transition" />
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <ul className="space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-ink/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-ink max-w-2xl">
              Engineering solutions that create measurable business impact.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`group relative border border-border rounded-3xl overflow-hidden transition hover:-translate-y-1 ${
                  p.featured ? "bg-primary md:col-span-2" : "bg-surface"
                }`}
              >
                {p.image && (
                  <div
                    className={`relative w-full overflow-hidden border-b border-ink/10 ${
                      p.featured ? "bg-[#0b0a2a]" : "bg-ink/5"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.title}`}
                      loading="lazy"
                      className={`w-full ${
                        p.featured
                          ? "max-h-[520px] object-contain mx-auto"
                          : "aspect-[16/9] object-cover"
                      } group-hover:scale-[1.02] transition-transform duration-500`}
                    />
                  </div>
                )}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] opacity-70 mb-3">
                        {p.tag}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-ink">{p.name}</h3>
                      <p className="text-ink/70 mt-1 font-medium">{p.title}</p>
                    </div>
                    <span className="text-ink/40 font-mono text-sm">0{i + 1}</span>
                  </div>
                  <p className="mt-6 text-ink/80 max-w-2xl leading-relaxed">{p.desc}</p>
                  {p.highlights && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                            p.featured
                              ? "bg-ink text-background border-ink"
                              : "bg-background text-ink border-border"
                          }`}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-sm font-mono text-ink/70">{p.stack}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:gap-3 transition-all">
                      View case study <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-ink text-background">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-primary">Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Let's build something{" "}
            <span className="italic font-display text-primary">scalable</span>.
          </h2>
          <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto">
            Whether you're launching a SaaS product, modernizing cloud infrastructure, or improving
            deployment reliability — I'd love to hear about your goals.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold hover:opacity-90 transition"
          >
            <Mail className="w-5 h-5" />
            {EMAIL}
          </a>
          <div className="mt-12 flex items-center justify-center gap-4">
            {[
              { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
              { href: LI, icon: Linkedin, label: "LinkedIn" },
              { href: FB, icon: Facebook, label: "Facebook" },
              { href: GH, icon: Github, label: "Portfolio" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full border border-background/20 inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-background/60 border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>© {new Date().getFullYear()} Hira Jabeen. All rights reserved.</div>
          <div className="font-display italic">Built with care — turning complexity into clarity.</div>
        </div>
      </footer>
    </div>
  );
}
