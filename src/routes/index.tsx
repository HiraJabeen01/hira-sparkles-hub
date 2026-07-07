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
import microtechxCover from "@/assets/microtechx-site.png.asset.json";
import votingArchitectureAsset from "@/assets/voting-architecture.png.asset.json";
import devopsAsset from "@/assets/firstframe-devops.png.asset.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
    image: microtechxCover.url,
  },
  {
    tag: "Distributed Voting Application",
    name: "Voting Platform",
    title: "Multi-Container Microservices Architecture",
    desc: "Developed a distributed Voting Application designed to run across multiple Docker containers. The application integrates Python, Node.js, and .NET for backend services, Redis for real-time messaging, and Postgres for persistent storage. Utilized Docker Compose, Docker Swarm, and Kubernetes for container orchestration and deployment, ensuring high availability and scalability across services. The project enables seamless communication between microservices, providing a robust and reliable platform for online voting in real-time.",
    stack: "Python · Node.js · .NET · Redis · Postgres · Docker · Kubernetes · Docker Swarm",
    highlights: [
      "Microservices Architecture",
      "Container Orchestration",
      "Real-Time Messaging",
      "High Availability",
    ],
    image: votingArchitectureAsset.url,
  },
  {
    tag: "DevOps Automation",
    name: "FirstFrame DevOps",
    title: "CI/CD Pipeline & Infrastructure Automation",
    desc: "Implemented end-to-end DevOps for a SaaS platform using GitHub Actions, Azure Container Registry and Azure Container Apps across Dev, Test and Prod environments. The pipeline covers build, test, Docker image creation, push to ACR, and automated deployment with monitoring via Azure Monitor and Log Analytics.",
    stack: "GitHub Actions · Azure Container Registry · Azure Container Apps · Docker · Azure Monitor · Log Analytics",
    highlights: [
      "Automated CI/CD with GitHub Actions",
      "Azure Container Registry & Apps",
      "Dev / Test / Prod environments",
      "Azure Monitor & Log Analytics",
      "100% automated deployments",
    ],
    image: devopsAsset.url,
  },
];

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    availability: "",
  });
  const [bookingSent, setBookingSent] = useState(false);

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const openBooking = () => {
    setBookingSent(false);
    setBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Discovery call request — ${booking.name}${booking.company ? ` (${booking.company})` : ""}`;
    const body = [
      `Name: ${booking.name}`,
      `Email: ${booking.email}`,
      `Company: ${booking.company || "—"}`,
      "",
      "Project / goals:",
      booking.project || "—",
      "",
      "Availability (preferred times & timezone):",
      booking.availability || "—",
    ].join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    // Use an anchor click — more reliable than location.href inside iframes/dialogs
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Fallback: also try top-level navigation
    try { window.top && (window.top.location.href = href); } catch { window.location.href = href; }
    setBookingSent(true);
  };

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
              <span className="text-gradient">complexity into clarity.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm <strong className="text-ink font-semibold">Hira Jabeen</strong> — I help SaaS
              startups and growing tech companies launch products faster, automate delivery, and
              build reliable systems that support growth instead of slowing it down.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex items-center gap-2 rounded-full bg-ink text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Book a Discovery Call <ArrowUpRight className="w-4 h-4" />
              </button>
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
          {/* Featured project — full width */}
          {featuredProject && (
            <button
              type="button"
              onClick={() => setSelectedProject(featuredProject)}
              className="group relative w-full text-left bg-primary border border-border rounded-3xl overflow-hidden transition hover:-translate-y-1 md:grid md:grid-cols-2 mb-6 cursor-pointer"
            >
              {featuredProject.image && (
                <div className="relative w-full overflow-hidden bg-[#0b0a2a] md:order-2 md:border-l border-ink/10 aspect-[4/3] md:aspect-auto md:h-full">
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.name} — ${featuredProject.title}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8 md:p-10 flex flex-col md:order-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] opacity-70 mb-3">
                      {featuredProject.tag}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-ink">{featuredProject.name}</h3>
                    <p className="text-ink/70 mt-1 font-medium text-sm">{featuredProject.title}</p>
                  </div>
                  <span className="text-ink/40 font-mono text-sm">01</span>
                </div>
                <p className="mt-6 text-ink/80 leading-relaxed text-sm md:text-base line-clamp-3">
                  {featuredProject.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline underline-offset-4">
                  View details <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          )}

          {/* Other projects — 3 in a row */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((p, i) => (
              <button
                type="button"
                key={p.name}
                onClick={() => setSelectedProject(p)}
                className="group relative text-left bg-surface border border-border rounded-3xl overflow-hidden transition hover:-translate-y-1 flex flex-col cursor-pointer"
              >
                {p.image && (
                  <div className="relative w-full overflow-hidden bg-white aspect-[4/3] border-b border-ink/10">
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.title}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] opacity-70 mb-2">{p.tag}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-ink leading-tight">{p.name}</h3>
                      <p className="text-ink/70 mt-1 font-medium text-xs">{p.title}</p>
                    </div>
                    <span className="text-ink/40 font-mono text-xs">0{i + 2}</span>
                  </div>
                  <p className="mt-4 text-ink/80 leading-relaxed text-sm line-clamp-3">{p.desc}</p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline underline-offset-4">
                    View details <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Project details modal */}
          <Dialog open={!!selectedProject} onOpenChange={(o) => !o && setSelectedProject(null)}>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-background">
              {selectedProject && (
                <div className="grid md:grid-cols-2">
                  {selectedProject.image && (
                    <div className="relative w-full overflow-hidden bg-surface aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.name} — ${selectedProject.title}`}
                        className="absolute inset-0 w-full h-full object-contain p-6"
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8 flex flex-col gap-5">
                    <DialogHeader>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        {selectedProject.tag}
                      </div>
                      <DialogTitle className="text-2xl md:text-3xl font-bold text-ink">
                        {selectedProject.name}
                      </DialogTitle>
                      <DialogDescription className="text-ink/70 font-medium">
                        {selectedProject.title}
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-ink/80 leading-relaxed text-sm md:text-base">
                      {selectedProject.desc}
                    </p>
                    {selectedProject.highlights && (
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                          Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-xs font-medium px-3 py-1.5 rounded-full border bg-background text-ink border-border"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        Tech Stack
                      </h4>
                      <p className="text-sm text-ink/80 font-mono">{selectedProject.stack}</p>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>


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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold hover:opacity-90 transition"
            >
              <ArrowUpRight className="w-5 h-5" />
              Book a Discovery Call
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 rounded-full border border-background/30 px-7 py-4 text-base font-semibold hover:bg-background/10 transition"
            >
              <Mail className="w-5 h-5" />
              {EMAIL}
            </a>
          </div>
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

      {/* BOOKING DIALOG */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Book a Discovery Call</DialogTitle>
            <DialogDescription>
              Share a few details and I'll reply within 24 hours with available times.
            </DialogDescription>
          </DialogHeader>
          {bookingSent ? (
            <div className="py-6 text-center space-y-3">
              <div className="text-lg font-semibold">Your email draft is ready ✉️</div>
              <p className="text-sm text-muted-foreground">
                If your mail app didn't open, email me directly at{" "}
                <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
              </p>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="mt-4 rounded-full bg-ink text-background px-6 py-2 text-sm font-medium"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4 mt-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-sm font-medium space-y-1 block">
                  Name
                  <input
                    required
                    maxLength={100}
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </label>
                <label className="text-sm font-medium space-y-1 block">
                  Email
                  <input
                    required
                    type="email"
                    maxLength={255}
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </label>
              </div>
              <label className="text-sm font-medium space-y-1 block">
                Company (optional)
                <input
                  maxLength={100}
                  value={booking.company}
                  onChange={(e) => setBooking({ ...booking, company: e.target.value })}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="text-sm font-medium space-y-1 block">
                What are you building?
                <textarea
                  required
                  rows={3}
                  maxLength={1000}
                  value={booking.project}
                  onChange={(e) => setBooking({ ...booking, project: e.target.value })}
                  placeholder="A short description of the project or the problem you're solving."
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="text-sm font-medium space-y-1 block">
                Preferred times & timezone
                <textarea
                  rows={2}
                  maxLength={500}
                  value={booking.availability}
                  onChange={(e) => setBooking({ ...booking, availability: e.target.value })}
                  placeholder="e.g. Weekdays 3–6pm PKT, or share 2–3 options."
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Send Request <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                This opens your email app with the details pre-filled — just hit send.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
