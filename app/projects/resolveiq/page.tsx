export default function ResolveIQPage() {
  const skills = [
    "Generative AI",
    "Enterprise AI",
    "Knowledge Management",
    "AI Product Strategy",
    "Human-in-the-Loop AI",
    "Enterprise SaaS",
    "GTM Strategy",
    "Startup Strategy",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <a
            href="/"
            className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
          >
            ← Back to Portfolio
          </a>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Finalist · Dempsey Startup Competition 2026
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            ResolveIQ
          </h1>

          <p className="mt-5 max-w-4xl text-xl leading-8 text-slate-600 md:text-2xl">
            Transforming Incident Resolution into Institutional Knowledge
          </p>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            ResolveIQ is an enterprise AI product concept designed to help
            organizations stop repeatedly solving the same incidents. It
            captures knowledge generated during incident resolution, turns
            that context into structured organizational knowledge, and helps
            teams surface relevant answers when similar problems occur again.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://resolve-iq-presentation-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View Interactive Demo ↗
            </a>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Venture case-model estimates & competition outcomes
          </p>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["$4.8M+", "Modeled annual cost of lost knowledge"],
              ["12.5 hrs", "Weekly engineering capacity saved per team"],
              ["3–5 weeks", "Average ramp time modeled as disconnected tools"],
              ["Finalist", "Dempsey Startup Competition 2026"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p className="text-2xl font-bold">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            01 · The Problem
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
            Every incident is a lesson nobody learns
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Enterprise teams may successfully resolve an outage, but the
            reasoning behind that resolution is often scattered across
            tickets, chat conversations, calls, individual expertise, and
            disconnected knowledge systems.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            The immediate operational problem gets fixed. The organizational
            learning often does not. When a similar incident appears months
            later, another engineer may have to investigate the same symptoms,
            reconstruct the same context, and rediscover a solution the
            organization already knew.
          </p>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
              Core Product Insight
            </p>
            <p className="mt-3 text-xl font-semibold">
              The problem is not simply incident resolution. It is
              organizational memory.
            </p>
          </div>
        </div>
      </section>

      {/* COST OF LOST KNOWLEDGE */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            02 · Quantifying the Enterprise Problem
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Lost knowledge creates measurable operational drag
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            The venture model estimated more than $4.8M in annual lost-
            knowledge costs for a 1,000-person company in a regulated
            industry. The model grouped that exposure across duplicated
            investigation, repeat incidents, slower ramp-up, escalation, and
            compliance and audit risk.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "Repeated Investigation",
                "Engineers spend time rediscovering information the organization may already possess.",
              ],
              [
                "Knowledge Walks Out",
                "Critical operational context can disappear when experienced employees change roles or leave.",
              ],
              [
                "Fragmented Systems",
                "Tickets, chats, meetings, runbooks, and knowledge bases preserve pieces of the incident rather than the complete reasoning.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            03 · The Solution
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Capture knowledge before it disappears
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            ResolveIQ was designed around two complementary product
            experiences: surface existing institutional knowledge before an
            investigation begins, then capture new knowledge automatically as
            teams resolve incidents.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">
                ContextWeave™
              </p>
              <h3 className="mt-3 text-xl font-bold">
                Answers before investigation begins
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                When a ticket opens, ContextWeave™ evaluates existing
                knowledge, scores relevant articles, and surfaces the most
                useful answer directly in the engineer&apos;s workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">
                WarRoom Capture™
              </p>
              <h3 className="mt-3 text-xl font-bold">
                Turn incident conversations into knowledge
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                WarRoom Capture™ converts incident-resolution context into a
                structured knowledge draft containing root cause, resolution,
                and prevention guidance for human review before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            {/* PRODUCT BLUEPRINT */}
<section className="bg-white">
  <div className="mx-auto max-w-6xl px-6 pb-20">
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
        Product Blueprint
      </p>

      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        From incident resolution to institutional knowledge
      </h2>

      <p className="mt-4 max-w-4xl leading-7 text-slate-600">
        The ResolveIQ product blueprint connects knowledge retrieval,
        incident-context capture, AI-assisted documentation, human review,
        enterprise security, and knowledge reuse into one workflow.
      </p>
    </div>

    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img
        src="/resolveiq/resolveiq-overview.png"
        alt="ResolveIQ product and business blueprint"
        className="h-auto w-full"
      />
    </div>

    <p className="mt-3 text-sm text-slate-500">
      ResolveIQ venture and product blueprint · Dempsey Startup Competition 2026
    </p>
  </div>
</section>
            04 · Knowledge Lifecycle
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Incident → Resolution → Reusable Knowledge
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              [
                "01",
                "Incident Opens",
                "Operational context begins accumulating across the team's existing collaboration tools.",
              ],
              [
                "02",
                "AI Captures Context",
                "ResolveIQ organizes the incident context and resolution knowledge.",
              ],
              [
                "03",
                "Human Reviews",
                "An engineer validates the generated knowledge before publication.",
              ],
              [
                "04",
                "Knowledge Reused",
                "Relevant organizational knowledge can surface when similar incidents occur again.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-xl border border-emerald-100 bg-white p-6"
              >
                <p className="text-xs font-bold text-emerald-700">{number}</p>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-slate-950 px-6 py-5 text-center font-semibold text-white">
            No ticket dependency · No manual write-up · No knowledge lost
          </div>
        </div>
      </section>

      {/* HUMAN IN LOOP */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            05 · Responsible Enterprise AI
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Automation with human accountability
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            ResolveIQ was designed so AI-generated knowledge does not
            automatically become organizational truth. Human review remains
            part of the publishing workflow, allowing an engineer to validate
            the generated article before it enters the knowledge base.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "PII Protection",
                "The product concept includes stripping personally identifiable information as part of secure-by-design processing.",
              ],
              [
                "Human Review",
                "An engineer reviews generated knowledge before every publish.",
              ],
              [
                "Enterprise Security",
                "The venture design incorporates enterprise security and SOC 2 readiness as product requirements.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            06 · Interactive Product Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Experience the knowledge gap
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            The interactive presentation demo places the viewer inside an
            incident scenario and demonstrates the friction of finding the
            right resolution context when knowledge is fragmented.
          </p>

          <a
            href="https://resolve-iq-presentation-demo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Launch Interactive Demo ↗
          </a>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            07 · Business Model
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Enterprise SaaS aligned to productivity value
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            The venture pricing model was designed around employee count and
            the productivity value of reducing repeated investigation and
            knowledge loss.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Growth", "800 employees", "$3,750 / month"],
              ["Target Buyer", "Mid-market enterprise", "500–2,000 employees"],
              ["Modeled ROI", "Productivity-based case", "6.7×"],
            ].map(([title, detail, value]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold text-slate-500">{title}</p>
                <p className="mt-3 text-lg font-bold">{detail}</p>
                <p className="mt-2 text-sm text-slate-600">{value}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Pricing and ROI figures shown here are venture-model assumptions,
            not realized customer results.
          </p>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            08 · Competitive Strategy
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Designed for the knowledge created between systems
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            The competitive thesis was that incumbent tools primarily capture
            pieces of the incident lifecycle: tickets, documentation,
            collaboration, search, or service management. ResolveIQ was
            positioned around the unstructured, multi-channel context created
            while engineers actually diagnose and resolve an incident.
          </p>

          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-7">
            <p className="text-lg font-semibold">
              Incumbents live inside the ticket. ResolveIQ lives in the chaos.
            </p>
          </div>
        </div>
      </section>

      {/* GTM */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            09 · Go-to-Market
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Start with regulated enterprises where knowledge loss is expensive
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "Stage 1 · Pilot",
                "Paid pilots with VP IT Operations at insurance firms, sourced through executive networks.",
              ],
              [
                "Stage 2 · Prove Value",
                "Convert successful pilots into annual contracts after demonstrating measurable operational value.",
              ],
              [
                "Stage 3 · Expand",
                "Use customer success and expansion to build repeatable enterprise growth.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 p-6"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            10 · Venture Validation
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            From enterprise problem to investor pitch
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            ResolveIQ advanced as a finalist in the 2026 Dempsey Startup
            Competition, where the team presented the venture during investor
            pitch rounds. The venture materials also documented market
            conversations, an interactive product demo, and user-impact
            feedback as early validation signals.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Finalist", "Dempsey Startup Competition 2026"],
              ["Interactive Demo", "Product experience developed for venture validation"],
              ["Enterprise Discovery", "Market conversations used to test the problem and value proposition"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-xl border border-emerald-100 bg-white p-6"
              >
                <p className="text-lg font-bold">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DEMONSTRATED */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            11 · What I Demonstrated
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Connecting AI product thinking with enterprise value
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "AI Product Strategy",
                "Translated an enterprise knowledge-management problem into a focused AI product concept.",
              ],
              [
                "Enterprise Workflows",
                "Connected incident response, collaboration, knowledge capture, review, and reuse into one product workflow.",
              ],
              [
                "Human-in-the-Loop AI",
                "Designed human validation into the AI publishing process rather than treating generation as organizational truth.",
              ],
              [
                "Business Modeling",
                "Connected productivity loss, pricing, ROI, buyer definition, and expansion strategy.",
              ],
              [
                "Competitive Strategy",
                "Positioned the product around unstructured incident context rather than duplicating existing ticketing and knowledge tools.",
              ],
              [
                "Venture Communication",
                "Translated a complex enterprise AI concept into an interactive demonstration and investor-facing narrative.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT NOTE */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm leading-7 text-slate-500">
            <strong className="text-slate-700">Project note:</strong>{" "}
            ResolveIQ was developed as a student venture and presented in the
            Dempsey Startup Competition 2026. Financial impact, pricing, ROI,
            market sizing, and productivity figures shown in this case study
            are venture-model assumptions and estimates unless explicitly
            identified as observed traction. They should not be interpreted as
            realized customer results.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Sunayana Hazarika · ResolveIQ Case Study</p>

          <a
            href="/"
            className="font-semibold text-slate-700 transition hover:text-slate-950"
          >
            Back to Portfolio ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
