const projects = [
  {
    title: "AI Undercover: Manipulation Hunter",
    recognition: "Showcase Winner · UW iSchool Showcase",
    category: "Responsible AI · Full-Stack Development · Behavioral Research",
    description:
      "Led approximately 90% of the end-to-end project, from ideation and research design through development, sampling, data collection, and behavioral analytics. Built a full-stack research platform investigating how users detect manipulative conversational AI.",
    skills: [
      "Responsible AI",
      "Full-Stack Development",
      "Human-AI Interaction",
      "Behavioral Analytics",
    ],
    href: "/projects/ai-undercover",
  },
  {
    title: "Costco Business Intelligence Consulting",
    recognition: "Graduate Consulting Project",
    category: "Business Intelligence · Data Strategy",
    description:
      "Developed a BI consulting proposal covering predictive supply-chain resilience, membership churn analytics, KPI design, and a unified cloud data warehouse roadmap.",
    skills: [
      "Business Intelligence",
      "Data Strategy",
      "Opportunity Sizing",
      "Consulting",
    ],
  },
  {
    title: "Stanley 1913 GCC Market Entry",
    recognition: "1st Place · EY × Stanley 1913 Case Challenge",
    category: "Strategy Consulting · Market Expansion",
    description:
      "Led a consulting team in developing a phased GCC market-entry strategy, beginning with a UAE launch hub and expanding into Saudi Arabia, Qatar, and the wider region.",
    skills: [
      "Market Research",
      "GTM Strategy",
      "Consulting",
      "Executive Presentation",
    ],
  },
  {
    title: "SheBuilds Solutions",
    recognition: "Winner · WE Lead × Lovable Solve-a-thon",
    category: "AI Innovation · Women's Health",
    description:
      "Led a team from concept to working AI-built prototype in one day, addressing women's healthspan, preventive care, and community support.",
    skills: [
      "AI Prototyping",
      "Lovable",
      "Product Strategy",
      "Team Leadership",
    ],
  },
  {
    title: "KitchenGuide",
    recognition: "Winner · AIMS Product Competition 2026",
    category: "Predictive AI · SaaS Strategy",
    description:
      "Co-developed an AI-powered SaaS concept using forecasting, real-time prediction, and adaptive learning to reduce perishable-food waste in fast-casual restaurants.",
    skills: [
      "Predictive Analytics",
      "AI Strategy",
      "Financial Modeling",
      "GTM",
    ],
  },
  {
    title: "ResolveIQ",
    recognition: "Finalist · Dempsey Startup Competition 2026",
    category: "Generative AI · Knowledge Management",
    description:
      "Designed an AI solution that turns incident-resolution conversations into structured knowledge-base articles so organizations stop repeatedly solving the same problems.",
    skills: [
      "Generative AI",
      "Knowledge Management",
      "Startup Strategy",
      "Prototyping",
    ],
  },
  {
    title: "Confirmation Bias in AI Analytics",
    recognition: "Graduate Research",
    category: "Responsible AI · Behavioral Research",
    description:
      "Co-led a mixed-methods study examining confirmation bias in LLM-based analytics tools and found that bias awareness reduced uncritical AI acceptance.",
    skills: [
      "Mixed-Methods Research",
      "Responsible AI",
      "Survey Design",
      "Analysis",
    ],
  },
  {
    title: "Retail Store Performance Analysis",
    recognition: "Graduate Analytics Project",
    category: "SQL · Snowflake · Data Warehousing",
    description:
      "Built secure SQL views in Snowflake to evaluate sales performance, bonus allocation, demand trends, and multi-location operations, translating warehouse data into decision-ready business analysis.",
    skills: [
      "SQL",
      "Snowflake",
      "Data Warehousing",
      "Business Analytics",
    ],
  },
 {
  title: "PAMA",
  recognition: "iStartup Lab Micro Grant Winner",
  category: "AI Startup · Digital Storytelling",
  description:
    "Developed an AI-powered platform that organizes family-contributed memories into structured life biographies and received an iStartup Lab Micro Grant.",
  skills: [
    "AI Product Strategy",
    "Entrepreneurship",
    "GTM",
    "Storytelling",
  ],
  externalLink:
    "https://startup.ischool.uw.edu/grants/#:~:text=Hazarika%20(MSIM%20%E2%80%9926)-,Bhagyashree%20Vaidya,-(INFO%20%E2%80%9926)",
  externalLabel: "View UW iStartup Lab recognition →",
},
  {
    title: "CogniSense",
    recognition: "Figma Education Hackathon",
    category: "Human-Centered Design · Wearable Technology",
    description:
      "Designed and prototyped a cognitive-load-aware wearable and companion application under a 48-hour hackathon deadline.",
    skills: [
      "Figma",
      "UX Design",
      "Rapid Prototyping",
      "Human-Centered Design",
    ],
  },
];

const capabilities = [
  "Enterprise Technology",
  "Artificial Intelligence",
  "Business Intelligence",
  "Data Strategy",
  "Digital Transformation",
  "Business Analysis",
  "SQL & Snowflake",
  "AI Agents & RAG",
  "APIs & Integrations",
  "Technology Strategy",
  "AI Prototyping",
  "Executive Storytelling",
];

const careerImpact = [
  {
    metric: "8",
    label: "Major Launches",
    description:
      "7 enterprise application launches across GRC, fintech, and tax technology, plus a Government & Public Sector vertical launch.",
  },
  {
    metric: "$4.5M ARR",
    label: "Anchor Customer",
    description:
      "Built and launched Avalara's Government & Public Sector vertical and secured its first customer on a recurring 5-year contract.",
  },
  {
    metric: "100%",
    label: "Client Retention",
    description:
      "Led a legacy-product deprecation and customer migration while retaining every client through the transition.",
  },
  {
    metric: "$0 → ~$5M",
    label: "Revenue in One Year",
    description:
      "Helped establish ATEN's India subsidiary and scale the business through market creation, customer acquisition, partnerships, and enterprise technology commercialization.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold tracking-tight">
            Sunayana Hazarika
          </a>

          <div className="flex items-center gap-5 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-blue-700">
              About
            </a>

            <a href="#impact" className="hover:text-blue-700">
              Impact
            </a>

            <a href="#projects" className="hover:text-blue-700">
              Projects
            </a>

            <a
              href="/Sunayana-Hazarika-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              Resume
            </a>

            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              SUNAYANA HAZARIKA
            </p>

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Techno-Functional Leader · AI · Data · Enterprise Technology
            </p>

            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
              I solve complex business problems using data, AI, and technology
              strategy.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              I&apos;m a techno-functional enterprise technology leader with
              15+ years of experience translating complex business problems
              into technology solutions, data-driven decisions, product
              launches, and measurable outcomes. I recently earned an M.S. in
              Information Management from the University of Washington,
              specializing in Business Intelligence and Artificial
              Intelligence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore my work
              </a>

              <a
                href="/Sunayana-Hazarika-Resume.pdf"
                download
                className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Download Resume ↓
              </a>

              <a
                href="https://www.linkedin.com/in/sunayana-h"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:border-slate-900 hover:bg-slate-50"
              >
                LinkedIn
              </a>

              <a
                href="mailto:sh2036@outlook.com"
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:border-slate-900 hover:bg-slate-50"
              >
                Email me
              </a>
            </div>
          </div>

          {/* Professional Headshot */}
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
              <img
                src="/sunayana-headshot.jpg"
                alt="Sunayana Hazarika"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>

            <div className="mt-5 text-center lg:text-left">
              <p className="font-bold text-slate-900">Sunayana Hazarika</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                AI · Data · Enterprise Technology · Digital Transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              About
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Where business, technology, data, and AI come together.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              My work sits at the intersection of enterprise technology,
              business transformation, data, and AI. Across 15+ years in
              enterprise technology and SaaS, I have worked across complex
              business workflows, product launches, requirements, enterprise
              systems, APIs and integrations, commercialization, and digital
              transformation.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              My University of Washington MSIM expanded that foundation with
              hands-on work in business intelligence, data warehousing, SQL and
              Snowflake, AI prototyping, responsible AI, behavioral research,
              and technology consulting. I bridge business stakeholders and
              technical teams to turn complex problems into practical,
              measurable solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Impact */}
      <section
        id="impact"
        className="border-y border-slate-200 bg-slate-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Career Impact
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Enterprise experience with measurable outcomes.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Across enterprise SaaS, fintech, tax technology, GRC, ERP, and
              technology commercialization, I have led launches,
              transformation initiatives, customer migrations, and market
              expansion with measurable business impact.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {careerImpact.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-7"
              >
                <p className="text-4xl font-bold tracking-tight text-white">
                  {item.metric}
                </p>

                <h3 className="mt-3 text-lg font-bold text-blue-300">
                  {item.label}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            AI, data, strategy & innovation
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Selected AI, business intelligence, analytics, consulting,
            research, and zero-to-one innovation projects demonstrating how I
            combine business strategy with hands-on technology and data
            capabilities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0
                  ? "border-blue-300 ring-1 ring-blue-100"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {index === 0 && (
                <div className="mb-5">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                    Featured Project
                  </span>
                </div>
              )}

              <p className="text-sm font-bold leading-6 text-blue-700">
                {project.recognition}
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                {project.category}
              </p>

              <p className="mt-5 flex-1 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {"href" in project && project.href ? (
  <a
    href={project.href}
    className="mt-7 font-bold text-slate-900 transition hover:text-blue-700"
  >
    View case study →
  </a>
) : "externalLink" in project && project.externalLink ? (
  <a
    href={project.externalLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-7 font-bold text-slate-900 transition hover:text-blue-700"
  >
    {"externalLabel" in project
      ? project.externalLabel
      : "View recognition →"}
  </a>
) : (
  <span className="mt-7 font-bold text-slate-400">
    Case study coming soon
  </span>
)}
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Graduation Photo */}
          {/* Graduation Photo */}
<div className="mx-auto w-full max-w-md lg:mx-0">
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
    <img
      src="/sunayana-graduation.jpg"
      alt="Sunayana Hazarika at University of Washington graduation"
      className="h-auto w-full object-contain"
    />
  </div>

  <p className="mt-4 text-sm leading-6 text-slate-500">
    University of Washington · M.S. in Information Management · 2026
  </p>
</div> 

          {/* Education Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Education
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight">
              University of Washington Information School
            </h2>

            <p className="mt-4 text-2xl font-semibold text-slate-800">
              M.S. in Information Management
            </p>

            <p className="mt-3 text-lg font-medium text-blue-700">
              Business Intelligence & Artificial Intelligence
            </p>

            <p className="mt-2 text-lg text-slate-600">
              STEM-designated · August 2026
            </p>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Expanded my enterprise technology foundation with hands-on work
              in business intelligence, data warehousing, SQL, Snowflake, AI
              prototyping, responsible AI, behavioral research, and technology
              consulting.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Business Intelligence",
                "Artificial Intelligence",
                "Data Warehousing",
                "SQL",
                "Snowflake",
                "Responsible AI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Contact
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s solve an interesting business or technology problem.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I&apos;m interested in opportunities where business, enterprise
            technology, AI, data, and transformation come together — including
            business and technical program leadership, AI transformation,
            business systems, technology strategy, and data-driven
            transformation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:sh2036@outlook.com"
              className="rounded-lg bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-blue-100"
            >
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/sunayana-h"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-bold transition hover:border-white hover:bg-slate-900"
            >
              Connect on LinkedIn
            </a>

            <a
              href="/Sunayana-Hazarika-Resume.pdf"
              download
              className="rounded-lg border border-slate-600 px-6 py-3 font-bold transition hover:border-white hover:bg-slate-900"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Sunayana Hazarika · Built with Next.js
      </footer>
    </main>
  );
}