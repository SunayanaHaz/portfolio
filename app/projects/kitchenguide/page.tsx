"use client";

import Link from "next/link";

export default function KitchenGuidePage() {
  const skills = [
    "AI Product Strategy",
    "Predictive Analytics",
    "Decision Automation",
    "Product Management",
    "Behavioral Design",
    "Financial Modeling",
    "GTM Strategy",
    "Change Management",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            ← Back to Portfolio
          </Link>

          <div className="mt-10 max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              AIMS Product Competition 2026
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
              KitchenGuide
            </h1>

            <p className="mt-4 text-2xl font-medium text-slate-500 md:text-3xl">
              FreshOps AI — Real-Time Kitchen Decision Assistant for Fast-Casual Restaurants
            </p>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              An AI-driven decision automation concept designed to help
              regional restaurant chains reduce perishable food waste by
              converting demand signals into real-time kitchen preparation
              guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="https://github.com/SunayanaHaz/KitchenGuide"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
  >
    View GitHub Repository ↗
  </a>

  <a
    href="https://claude.ai/public/artifacts/4fa0b5d6-79fb-4890-95f9-ef0e6f48e7df"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
  >
    View Prototype ↗
  </a>
</div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Competition case-model assumptions & projections
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Metric
              value="~$1.5M"
              label="Annual Waste Exposure"
              detail="Modeled for a 40-location regional chain"
            />
            <Metric
              value="25%"
              label="Waste Reduction"
              detail="Modeled product impact assumption"
            />
            <Metric
              value="~2.6×"
              label="Customer ROI"
              detail="Based on competition pricing model"
            />
            <Metric
              value="~$5.4M"
              label="Year-3 ARR"
              detail="Modeled at 1,500 stores"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section number="01" title="The Problem">
        <p>
          Fast-casual restaurants already generate substantial operational
          data through POS systems, inventory platforms, and forecasting
          tools. Yet food waste can still occur because those systems often
          describe what happened rather than guide the frontline decision
          being made during service.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7">
          <p className="text-xl font-bold text-slate-900">
            The core insight
          </p>
          <p className="mt-3">
            Waste is not simply a data-visibility problem. It is a real-time
            decision uncertainty problem.
          </p>
        </div>

        <p className="mt-7">
          Managers and kitchen staff must continuously balance two competing
          risks: preparing too much creates waste, while preparing too little
          creates stockouts and service delays. KitchenGuide was designed to
          intervene at that decision point.
        </p>
      </Section>

      {/* USERS */}
      <DarkSection number="02" title="Designed Around Three Operational Users">
        <div className="grid gap-5 md:grid-cols-3">
          <DarkCard
            title="Regional Operations Manager"
            text="Oversees roughly 40 locations and needs scalable visibility into waste, margins, adoption, and operational consistency."
          />
          <DarkCard
            title="Store Manager / Shift Lead"
            text="Makes ordering and preparation decisions while balancing service speed, availability, and waste."
          />
          <DarkCard
            title="Kitchen Staff"
            text="Needs simple, immediate guidance during service without stopping to interpret analytics."
          />
        </div>
      </DarkSection>

      {/* PRODUCT STRATEGY */}
      <Section number="03" title="From Analytics to Decision Automation">
        <p>
          We evaluated forecasting tools, waste-tracking systems,
          auto-ordering, and training-based approaches. Each addresses part
          of the problem, but none directly resolves the moment when kitchen
          staff must decide whether to prepare another batch.
        </p>

        <div className="mt-10 rounded-2xl bg-emerald-50 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Product Positioning
          </p>
          <p className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            We are not an analytics tool.
            <br />
            We are a decision automation layer.
          </p>
        </div>

        <p className="mt-8">
          KitchenGuide converts operational data into direct actions so that
          insights are delivered when they can still change the outcome.
        </p>
      </Section>

      {/* WORKFLOW */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            04 · Product Workflow
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Predict → Guide → Learn
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <LightCard
              eyebrow="Before Opening"
              title="Predict & Plan"
              text="Forecast demand by ingredient, calculate appropriate quantities, adjust reorder points, and flag overstock risk."
            />
            <LightCard
              eyebrow="During Service"
              title="Guide Live Prep"
              text="Compare actual sales with expected demand and translate the signal into simple Prep Now, Wait, or Reduce Batch actions."
            />
            <LightCard
              eyebrow="After Closing"
              title="Learn & Improve"
              text="Review waste cost and over-preparation patterns, then feed those signals back into future planning."
            />
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <DarkSection number="05" title="Three-Layer Product Architecture">
        <p>
          The concept connects strategic oversight, frontline execution, and
          an underlying intelligence layer rather than treating them as
          separate tools.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <DarkCard
            title="Regional Manager Dashboard"
            text="Control layer for comparing stores, identifying adoption gaps, monitoring waste, and tracking margin improvement."
          />
          <DarkCard
            title="Kitchen Display Tablet"
            text="Execution layer that delivers clear operational guidance to frontline teams during service."
          />
          <DarkCard
            title="Prediction & Decision Engine"
            text="Intelligence layer that processes demand signals and generates forecasts, optimized quantities, and live recommendations."
          />
        </div>

        <div className="mt-10 rounded-xl border border-slate-700 p-6 text-center">
          <p className="text-xl font-bold text-white">
            Manager controls → Kitchen acts → System learns
          </p>
        </div>
      </DarkSection>

      {/* PROTOTYPE */}
      <Section number="06" title="Prototype Experience">
        <p>
          The MVP translated the product strategy into interfaces for both
          regional operations management and AI-supported operational
          decision-making.
        </p>

        <div className="mt-10 space-y-12">
          <PrototypeFigure
            src="/kitchenguide/operations-dashboard.png"
            alt="KitchenGuide operations dashboard prototype"
            title="Operations Dashboard"
            caption="Regional control layer for monitoring operational signals, store performance, and areas requiring attention."
          />

          <PrototypeFigure
            src="/kitchenguide/intelligent-predictions.png"
            alt="KitchenGuide intelligent predictions prototype"
            title="Intelligent Predictions"
            caption="Decision-support experience translating demand signals into recommended operational adjustments."
          />
        </div>
      </Section>

      {/* METRICS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            07 · Success Metrics
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Measure behavior before business impact
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-600">
            The measurement framework deliberately separates leading
            indicators of adoption and behavior change from lagging indicators
            of financial and operational impact.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <MetricGroup
              title="Leading · Behavior Change"
              items={[
                "Prep-guidance adherence rate",
                "Manual override rate",
                "Emergency prep events",
              ]}
            />

            <MetricGroup
              title="Lagging · Business Impact"
              items={[
                "Perishable waste cost per store",
                "Stockout incidents",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FINANCIAL MODEL */}
      <Section number="08" title="Business & Financial Model">
        <p>
          The competition model positioned KitchenGuide as a per-store SaaS
          product with a land-prove-expand adoption strategy.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FinancialCard
            value="$300"
            title="Per Store / Month"
            text="$3,600 annually in the base competition pricing model."
          />
          <FinancialCard
            value="$250"
            title="Volume Pricing"
            text="Modeled monthly price for larger chain deployments."
          />
          <FinancialCard
            value="~2.6×"
            title="Modeled ROI"
            text="Based on the case assumptions of approximately $37,500 annual waste per store and 25% waste reduction."
          />
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-3 bg-slate-950 px-5 py-4 text-sm font-bold text-white">
            <span>Year</span>
            <span>Stores</span>
            <span>Modeled ARR</span>
          </div>

          <FinancialRow year="Y1" stores="150" arr="~$540K" />
          <FinancialRow year="Y2" stores="500" arr="~$1.8M" />
          <FinancialRow year="Y3" stores="1,500" arr="~$5.4M" />
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          Financial figures shown above are competition case-model
          assumptions and projections, not realized commercial results.
        </p>
      </Section>

      {/* GTM */}
      <DarkSection number="09" title="Launch & Change Management">
        <p>
          Because operational AI only creates value when frontline teams use
          it, adoption was treated as part of the product strategy rather
          than a post-launch activity.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <DarkCard
            title="Business Readiness"
            text="Customer onboarding, compliance approval, operational reinforcement, and structured feedback from stores."
          />
          <DarkCard
            title="Technology Readiness"
            text="POS integration, secure data access, role-based permissions, issue resolution, and manual override capability."
          />
          <DarkCard
            title="Market Adoption"
            text="Pilot regional operators, demonstrate waste savings, develop case evidence, and expand from pilot stores to broader chain deployment."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <p className="font-bold text-white">Land → Prove → Expand</p>
          <p className="mt-3 text-slate-300">
            Pilot → Proof of savings → 40-store rollout → Multi-region
            expansion
          </p>
        </div>
      </DarkSection>

      {/* RISK */}
      <Section number="10" title="Assumptions, Risks & Responsible Deployment">
        <p>
          The proposal explicitly identified the dependencies and behavioral
          risks that could prevent a technically sound recommendation engine
          from delivering operational value.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SimpleCard
            title="Key Risks"
            items={[
              "Staff ignore recommendations",
              "Incorrect predictions reduce trust",
              "Events and promotions create operational edge cases",
              "Experienced managers resist workflow changes",
            ]}
          />

          <SimpleCard
            title="Mitigation"
            items={[
              "Show recommendation confidence",
              "Roll out gradually by store",
              "Preserve manual override",
              "Continuously learn from operating data",
            ]}
          />
        </div>
      </Section>

      {/* DEMONSTRATED */}
      <DarkSection number="11" title="What I Demonstrated">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <DarkCard
            title="AI Product Strategy"
            text="Translated an operational problem into an AI-enabled decision product rather than another reporting layer."
          />
          <DarkCard
            title="Business Analysis"
            text="Connected users, workflows, pain points, assumptions, dependencies, and measurable business outcomes."
          />
          <DarkCard
            title="Product Architecture"
            text="Structured the solution across intelligence, execution, and management control layers."
          />
          <DarkCard
            title="Metrics & Analytics"
            text="Separated leading behavioral indicators from lagging operational and financial outcomes."
          />
          <DarkCard
            title="Business Modeling"
            text="Connected pricing, waste reduction assumptions, customer ROI, adoption, and modeled SaaS growth."
          />
          <DarkCard
            title="Change Management"
            text="Designed adoption, training, trust, override mechanisms, and rollout into the operating model."
          />
        </div>
      </DarkSection>

      {/* PROJECT NOTE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm leading-6 text-slate-500">
            <span className="font-semibold text-slate-700">Project note:</span>{" "}
            KitchenGuide was developed for the AIMS Product Competition 2026. Financial impact,
            market size, waste reduction, ROI, adoption, and revenue figures
            shown in this case study are competition assumptions and modeled
            projections rather than realized customer results.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Sunayana Hazarika · AI, Data & Enterprise Technology
          </p>

          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            Back to Portfolio →
          </Link>
        </div>
      </footer>
    </main>
  );
}

function Metric({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-3xl font-bold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-2 font-bold text-slate-800">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
          {number}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-7 max-w-5xl text-lg leading-8 text-slate-600">
          {children}
        </div>
      </div>
    </section>
  );
}

function DarkSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
          {number}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-7 max-w-5xl text-lg leading-8 text-slate-300">
          {children}
        </div>
      </div>
    </section>
  );
}

function DarkCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function LightCard({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-7">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function PrototypeFigure({
  src,
  alt,
  title,
  caption,
}: {
  src: string;
  alt: string;
  title: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
        <img src={src} alt={alt} className="h-auto w-full" />
      </div>
      <figcaption className="mt-4">
        <p className="font-bold text-slate-900">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-500">{caption}</p>
      </figcaption>
    </figure>
  );
}

function MetricGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-600">
            <span className="font-bold text-emerald-600">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FinancialCard({
  value,
  title,
  text,
}: {
  value: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
      <p className="text-3xl font-bold text-slate-950">{value}</p>
      <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function FinancialRow({
  year,
  stores,
  arr,
}: {
  year: string;
  stores: string;
  arr: string;
}) {
  return (
    <div className="grid grid-cols-3 border-t border-slate-200 px-5 py-4 text-slate-600">
      <span className="font-semibold text-slate-900">{year}</span>
      <span>{stores}</span>
      <span>{arr}</span>
    </div>
  );
}

function SimpleCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base text-slate-600">
            <span className="font-bold text-emerald-600">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}