"use client";

import Link from "next/link";

export default function SheBloomPage() {
  const skills = [
    "Product Strategy",
    "Rapid Prototyping",
    "UX Design",
    "Lovable",
    "Health & Wellness",
    "User-Centered Design",
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

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
              Winner · WE Lead × Lovable Solve-a-thon
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
              SheBloom
            </h1>

            <p className="mt-4 text-2xl font-medium text-slate-500 md:text-3xl">
              Women&apos;s Health &amp; Wellness
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              A rapid product-development project focused on creating a
              user-centered digital experience for women&apos;s health and
              wellness, built during the WE Lead × Lovable Solve-a-thon.
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

            <div className="mt-8">
              <a
                href="https://radiant-woman-space.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                View Live Product ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Snapshot
              label="Recognition"
              value="Winner"
              detail="WE Lead × Lovable Solve-a-thon"
            />
            <Snapshot
              label="Product"
              value="SheBloom"
              detail="Women's Health & Wellness"
            />
            <Snapshot
              label="Approach"
              value="Rapid Build"
              detail="From concept to working digital experience"
            />
          </div>
        </div>
      </section>
      {/* PRODUCT PREVIEW */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
              Product Experience
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              From concept to working product
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              SheBloom was translated from an initial women&apos;s health and
              wellness concept into a working digital experience that users
              can explore directly.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src="/shebloom/shebloom-product.png"
              alt="SheBloom women's health and wellness product interface"
              className="h-auto w-full"
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            SheBloom working product experience · Built with Lovable
          </p>
        </div>
      </section>
      {/* PROBLEM */}
      <Section number="01" title="The Opportunity">
        <p>
          Women&apos;s health and wellness spans multiple dimensions of daily
          life, yet digital experiences can often feel fragmented or difficult
          to navigate. SheBloom explored how a focused digital product could
          create a more approachable experience centered around women&apos;s
          wellness.
        </p>

        <p className="mt-5">
          The challenge was not simply to generate an idea, but to translate
          that idea into a usable product experience within the compressed
          timeline of a solve-a-thon.
        </p>
      </Section>

      {/* PRODUCT */}
      <DarkSection number="02" title="From Problem to Product">
        <p>
          SheBloom was developed as a working digital experience rather than
          remaining at the concept or presentation stage. The project required
          moving quickly from problem framing to product structure, interface
          decisions, and a functioning prototype that could communicate the
          solution directly through the user experience.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <DarkCard
            title="Problem Framing"
            text="Focused the solution on a meaningful women's health and wellness problem space."
          />
          <DarkCard
            title="Experience Design"
            text="Translated the concept into an approachable, user-centered digital experience."
          />
          <DarkCard
            title="Rapid Prototyping"
            text="Used Lovable to accelerate the transition from product concept to a working experience."
          />
        </div>
      </DarkSection>

      {/* PRODUCT THINKING */}
      <Section number="03" title="Product Thinking">
        <p>
          The project demonstrates a product-development approach that connects
          business problem framing with user experience and execution. Instead
          of treating the solve-a-thon as only an ideation exercise, the goal
          was to make the concept tangible enough for users and judges to
          experience.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <LightCard
            title="Human-Centered"
            text="Designed around an accessible and approachable wellness experience rather than technology for its own sake."
          />
          <LightCard
            title="Focused Scope"
            text="Prioritized a coherent product experience that could be built and demonstrated within the competition timeline."
          />
          <LightCard
            title="Rapid Iteration"
            text="Used rapid prototyping to shorten the distance between an initial concept and a working product."
          />
          <LightCard
            title="Outcome-Oriented"
            text="Created something judges could interact with and evaluate as a product experience rather than only a proposed idea."
          />
        </div>
      </Section>

      {/* BUILD */}
      <section className="bg-rose-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
            04 · Build Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Using AI-Assisted Product Development
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
            Lovable enabled rapid translation of product ideas into a working
            web experience. This allowed the project to emphasize product
            thinking, user flow, interface decisions, and iteration while
            accelerating implementation during the solve-a-thon.
          </p>

          <div className="mt-10 rounded-2xl border border-rose-200 bg-white p-7">
            <p className="font-semibold text-slate-900">
              The important capability demonstrated here is not simply the use
              of an AI development tool.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              It is the ability to define a problem, shape a product concept,
              translate that concept into an experience, use emerging tools to
              accelerate execution, and produce a working outcome.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <Section number="05" title="Outcome">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p>
              SheBloom was recognized as a winner of the WE Lead × Lovable
              Solve-a-thon.
            </p>

            <p className="mt-5">
                The project demonstrates rapid product development in an AI-assisted
                environment, combining problem framing, product strategy, UX thinking,
                and hands-on execution to move from an initial concept to a working
                digital experience.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
              Recognition
            </p>
            <p className="mt-4 text-4xl font-bold">Winner</p>
            <p className="mt-3 leading-7 text-slate-300">
              WE Lead × Lovable
              <br />
              Solve-a-thon
            </p>
          </div>
        </div>
      </Section>

      {/* DEMONSTRATED */}
      <DarkSection number="06" title="What I Demonstrated">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <DarkCard
            title="Product Strategy"
            text="Connecting a user problem with a focused digital product concept."
          />
          <DarkCard
            title="Rapid Execution"
            text="Moving from concept toward a functioning experience within a constrained timeline."
          />
          <DarkCard
            title="AI-Assisted Building"
            text="Using emerging development tools to accelerate product creation and iteration."
          />
          <DarkCard
            title="UX Thinking"
            text="Structuring an approachable experience around the needs of the intended user."
          />
          <DarkCard
            title="Problem Solving"
            text="Converting an open-ended challenge into a concrete and demonstrable solution."
          />
          <DarkCard
            title="Techno-Functional Leadership"
            text="Bridging product strategy, user needs, technology, and execution."
          />
        </div>
      </DarkSection>

      {/* LIVE PRODUCT */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
            Explore the Product
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Experience SheBloom
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Explore the working SheBloom experience built for the solve-a-thon.
          </p>

          <a
            href="https://radiant-woman-space.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-slate-950 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-800"
          >
            View Live Product ↗
          </a>
        </div>
      </section>

      {/* NOTE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm leading-6 text-slate-500">
            <span className="font-semibold text-slate-700">Project note:</span>{" "}
            SheBloom was developed for the WE Lead × Lovable Solve-a-thon.
            This portfolio case study focuses on the product-development
            process and working experience. Detailed technical architecture,
            production metrics, and user-outcome claims are intentionally not
            presented where they have not been independently documented.
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

function Snapshot({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
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
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
          {number}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-7 max-w-4xl text-lg leading-8 text-slate-600">
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
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-400">
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

function LightCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
    </div>
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