"use client";

import Link from "next/link";

const PROTOTYPE_URL = "https://nrg-loop-circulate.lovable.app/";

const ArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function LoopPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#10132F]">
      {/* NAV */}
      <nav className="border-b border-[#10132F]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link
            href="/"
            className="text-sm font-medium text-[#626579] transition hover:text-[#10132F]"
          >
            ← Back to Portfolio
          </Link>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#10132F]">
            Sunayana Hazarika
          </span>
        </div>
      </nav>
{/* HERO */}
<section className="relative overflow-hidden bg-[#10132F] text-white">
  <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#12C5AE]/20 blur-3xl" />
  <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#FF6469]/15 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-28">
    
    {/* LEFT SIDE */}
    <div className="flex flex-col justify-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#12C5AE]">
        Venture & Business Build
      </p>

      <h1 className="mt-6 text-6xl font-black tracking-[-0.05em] sm:text-7xl lg:text-[92px]">
        LOOP
      </h1>

      <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-[#F4D263] sm:text-3xl">
        NRG&apos;s Gen Z Social Commerce Venture
      </h2>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-[#C8CAD7]">
        A peer-powered style platform designed to turn a legacy
        retailer&apos;s stores, transaction data, supply chain, and brand
        into an owned digital ecosystem for the next generation of
        consumers.
      </p>

      {/* PROTOTYPE BUTTON */}
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={PROTOTYPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#12C5AE] px-7 py-3.5 text-sm font-bold text-[#10132F] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2AD5BF]"
        >
          View Live Prototype
          <ArrowRight />
        </a>

        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-[#D5D7E1]">
          Interactive Product Prototype
        </span>
      </div>

      {/* SKILLS */}
      <div className="mt-7 flex flex-wrap gap-3">
        {[
          "AI Product Strategy",
          "Venture Strategy",
          "Business Model",
          "GTM Strategy",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 border-t border-white/10 pt-7">
        <p className="text-sm text-[#9EA1B4]">
          TCA × ICG × IUGA Case Competition · March 2026
        </p>
      </div>
    </div>

    {/* RIGHT SIDE — LIVE INTERACTIVE PROTOTYPE */}
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[560px]">
        
        {/* Prototype Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#12C5AE] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#12C5AE]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#12C5AE]">
              Live Interactive Prototype
            </span>
          </div>

          <a
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#C8CAD7] transition hover:text-white"
          >
            Open full screen ↗
          </a>
        </div>

        {/* Browser Window */}
        <div className="overflow-hidden rounded-[24px] border border-white/15 bg-[#20233F] shadow-2xl">
          
          {/* Browser Bar */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-[#292C47] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6469]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F4D263]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#12C5AE]" />
            </div>

            <div className="ml-2 flex-1 rounded-md bg-[#10132F]/60 px-3 py-1.5 text-center text-[10px] text-[#9EA1B4]">
              nrg-loop-circulate.lovable.app
            </div>
          </div>

          {/* REAL LOOP PROTOTYPE */}
          <div className="relative h-[600px] bg-white">
            <iframe
              src={PROTOTYPE_URL}
              title="LOOP Interactive Product Prototype"
              className="h-full w-full border-0"
              loading="lazy"
              allow="clipboard-write"
            />
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[#8F92A5]">
          ↑ Explore the prototype directly — scroll, click, and navigate
        </p>
      </div>
    </div>
  </div>
</section>
      {/* CORE IDEA */}
      <section className="bg-[#12C5AE]">
        <div className="mx-auto max-w-7xl px-6 py-9 lg:px-10">
          <div className="grid gap-4 text-center sm:grid-cols-3">
            <p className="text-xl font-black text-[#10132F]">
              Not a campaign.
            </p>
            <p className="text-xl font-black text-[#10132F]">
              Not a loyalty program.
            </p>
            <p className="text-xl font-black text-[#10132F]">
              A new engine.
            </p>
          </div>
        </div>
      </section>

      {/* 01 THE PROBLEM */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel number="01" label="The Problem" />

        <div className="mt-10 grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
              A retailer with customers —
              <span className="block text-[#EB5B63]">
                but no owned relationship.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#5E6174]">
              The case centered on a structural business challenge: NRG had
              scale, stores, and brand recognition, but customer relationships
              remained mediated through malls, paid advertising, and
              third-party platforms.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5E6174]">
              At the same time, Gen Z discovery behavior was shifting toward
              creators, peers, communities, and social commerce. The challenge
              was not simply to improve marketing — it was to design a new
              digital business.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Metric
                value="+25–60%"
                label="Case assumption: rise in customer acquisition costs"
                accent="#EB5B63"
              />

              <Metric
                value="$360B"
                label="Case estimate: Gen Z U.S. spending power"
                accent="#12C5AE"
              />

              <Metric
                value="450"
                label="Existing stores available as physical infrastructure"
                accent="#E6BC49"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 THE VENTURE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="02" label="The Venture" />

          <div className="mt-10 max-w-4xl">
            <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              One ecosystem.
              <span className="block text-[#6C3FA0]">
                Four interconnected capabilities.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5E6174]">
              LOOP was designed as a social style platform where Gen Z
              creators, shoppers, and resellers interact inside an ecosystem
              connected to NRG&apos;s existing retail infrastructure.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Capability
              number="01"
              title="Style Feed"
              copy="A personalized discovery experience where creator content is surfaced around individual taste."
              accent="#12C5AE"
            />

            <Capability
              number="02"
              title="Shop the Look"
              copy="Creator inspiration connects directly to commerce, allowing users to move from discovery to purchase."
              accent="#EB5B63"
            />

            <Capability
              number="03"
              title="LOOP Resale"
              copy="A peer-to-peer resale layer extends the customer relationship beyond the first purchase."
              accent="#E6BC49"
            />

            <Capability
              number="04"
              title="Trend Intelligence"
              copy="Historical retail data and real-time platform signals create a new source of demand intelligence."
              accent="#6C3FA0"
            />
          </div>
        </div>
      </section>

      {/* 03 PRODUCT EXPERIENCE */}
      <section className="bg-[#10132F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="03" label="Product Experience" light />

          <div className="mt-10">
            <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Three user journeys.
              <span className="block text-[#12C5AE]">One ecosystem.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#B9BBC8]">
              LOOP connects discovery, creation, commerce, and resale so each
              participant contributes to the value of the broader ecosystem.
            </p>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              <Journey
                label="THE SHOPPER"
                accent="#12C5AE"
                items={[
                  "Discovers personalized style content",
                  "Finds products through creators",
                  "Shops the complete look",
                  "Returns to create and engage",
                ]}
                outcome="Discovery → purchase → participation"
              />

              <Journey
                label="THE CREATOR"
                accent="#EB5B63"
                items={[
                  "Joins the creator network",
                  "Creates styling content",
                  "Drives product discovery",
                  "Earns from commerce generated",
                ]}
                outcome="Content → trust → commerce"
              />

              <Journey
                label="THE RESELLER"
                accent="#E6BC49"
                items={[
                  "Lists pre-owned products",
                  "Receives AI-assisted pricing",
                  "Reaches personalized feeds",
                  "Reinvests into the ecosystem",
                ]}
                outcome="Purchase → resale → repurchase"
              />
            </div>

            {/* PROTOTYPE CTA */}
            <div className="mt-10 flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.05] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#12C5AE]">
                  Interactive Prototype
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  Experience LOOP as a product.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#B9BBC8]">
                  Explore the interactive prototype developed to bring the
                  proposed social-commerce experience and product concept to
                  life.
                </p>
              </div>

              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#12C5AE] px-7 py-3.5 text-sm font-bold text-[#10132F] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2AD5BF]"
              >
                Launch Prototype
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 04 TECHNOLOGY ENGINE */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="04" label="Technology Engine" />

          <div className="mt-10 grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                The data
                <span className="block text-[#6C3FA0]">flywheel.</span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-[#5E6174]">
                The strategic advantage was not simply adding AI to a shopping
                experience. LOOP was designed to create a continuous feedback
                loop between consumer behavior, creator activity, commerce,
                resale, and supply-chain decisions.
              </p>
            </div>

            <div className="relative rounded-[32px] bg-white p-7 shadow-sm sm:p-10">
              <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-[#6C3FA0] p-6 text-center text-xl font-black text-white">
                LOOP
                <br />
                DATA
                <br />
                FLYWHEEL
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <FlywheelCard
                  title="Behavioral Data"
                  copy="Scrolls, saves, and purchases improve personalization."
                />

                <FlywheelCard
                  title="Creator Signals"
                  copy="Content engagement reveals which aesthetics drive action."
                />

                <FlywheelCard
                  title="Supply Response"
                  copy="Demand signals can inform merchandising and supply decisions."
                />

                <FlywheelCard
                  title="Resale Signals"
                  copy="Secondary-market behavior adds another view of product demand."
                />
              </div>

              <div className="mt-5 rounded-2xl bg-[#12C5AE]/10 p-5 text-center font-semibold text-[#10132F]">
                More signals → better relevance → more engagement → more
                commerce → more signals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 BUSINESS MODEL */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="05" label="Business Model" />

          <div className="mt-10 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Designing for
                <span className="block text-[#EB5B63]">
                  economic viability.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-[#5E6174]">
                The venture model explored multiple revenue mechanisms so LOOP
                could operate as a business rather than a marketing expense.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <BusinessCard
                title="Commerce Commission"
                copy="Revenue generated from LOOP-driven retail purchases."
              />

              <BusinessCard
                title="Resale Facilitation"
                copy="A transaction fee on peer-to-peer resale activity."
              />

              <BusinessCard
                title="Creator Pro"
                copy="A modeled premium subscription for power creators."
              />

              <BusinessCard
                title="Trend Intelligence"
                copy="Demand intelligence designed to create value for retail and supply-chain decisions."
              />
            </div>
          </div>

          <p className="mt-10 text-sm leading-6 text-[#777A8B]">
            Revenue mix, pricing, GMV, subscriber, and breakeven figures in the
            case were modeled assumptions and projections, not realized
            commercial results.
          </p>
        </div>
      </section>

      {/* 06 GO TO MARKET */}
      <section className="bg-[#F0EADF]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="06" label="Go-to-Market" />

          <div className="mt-10">
            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Launch through the ecosystem,
              <span className="block text-[#6C3FA0]">
                not through paid acquisition alone.
              </span>
            </h2>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              <Phase
                phase="PHASE 1"
                period="Months 1–6"
                title="Seed the Creator Network"
                copy="Recruit micro-creators, activate flagship stores as content touchpoints, and build initial supply-side participation."
              />

              <Phase
                phase="PHASE 2"
                period="Months 7–12"
                title="Ignite Social Loops"
                copy="Expand creator participation, introduce resale, and use community mechanics to drive repeat engagement."
              />

              <Phase
                phase="PHASE 3"
                period="Months 13–36"
                title="Scale the Flywheel"
                copy="Use growing behavioral and commerce signals to strengthen personalization and demand intelligence."
              />
            </div>

            <p className="mt-8 text-sm text-[#777A8B]">
              These phases represent the proposed case strategy rather than
              executed market traction.
            </p>
          </div>
        </div>
      </section>

      {/* 07 DEFENSIBILITY */}
      <section className="bg-[#10132F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="07" label="Defensibility" light />

          <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Build on assets
                <span className="block text-[#F4D263]">
                  a startup cannot easily replicate.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#B9BBC8]">
                The venture was designed around NRG&apos;s existing structural
                advantages rather than treating LOOP as a standalone consumer
                app.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["15 Years", "Historical transaction data"],
                ["450 Stores", "Potential fulfillment and community nodes"],
                ["8 Countries", "Established supplier network"],
                [
                  "Network Effect",
                  "Creators attract shoppers; shoppers attract creators",
                ],
                [
                  "Commerce Loop",
                  "Discovery → purchase → resale → repurchase",
                ],
                [
                  "Brand Foundation",
                  "Existing recognition supporting market entry",
                ],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
                >
                  <p className="text-xl font-black text-[#12C5AE]">
                    {title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#B9BBC8]">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 WHAT THIS DEMONSTRATES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel number="08" label="What This Demonstrates" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
            From business problem
            <span className="block text-[#EB5B63]">
              to technology-enabled venture.
            </span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Venture & Product Strategy",
              "AI Product Thinking",
              "Customer & Market Analysis",
              "Platform Business Models",
              "Data Flywheel Design",
              "Go-to-Market Strategy",
              "Business Viability",
              "Defensibility & Moat",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#10132F]/10 bg-white p-5 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL PROTOTYPE CTA */}
      <section className="bg-[#12C5AE]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#10132F]/60">
                Explore the Product
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#10132F] sm:text-4xl">
                See LOOP in action.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#10132F]/70">
                Explore the interactive product prototype and experience the
                social-commerce concept beyond the strategy deck.
              </p>
            </div>

            <a
              href={PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#10132F] px-8 py-4 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5"
            >
              Open Live Prototype
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT NOTE */}
      <section className="border-t border-[#10132F]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6C3FA0]">
            Project Note
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#686B7C]">
            LOOP was developed as a venture and business-build case concept
            for the TCA × ICG × IUGA Case Competition. NRG is the company
            represented in the case materials. Market figures, financial
            assumptions, adoption targets, revenue projections, and business
            outcomes shown in the underlying proposal are case-model inputs
            and projections rather than realized commercial results.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-[#10132F]"
            >
              ← Back to Portfolio
            </Link>

            <span className="text-xs text-[#8A8C9A]">
              Venture & Business Builds · 2026
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function SectionLabel({
  number,
  label,
  light = false,
}: {
  number: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`text-xs font-black tracking-[0.2em] ${
          light ? "text-[#12C5AE]" : "text-[#6C3FA0]"
        }`}
      >
        {number}
      </span>

      <div
        className={`h-px w-10 ${
          light ? "bg-white/20" : "bg-[#10132F]/20"
        }`}
      />

      <span
        className={`text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-[#C6C8D4]" : "text-[#6C6F80]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Metric({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div
        className="mb-5 h-1 w-10 rounded-full"
        style={{ background: accent }}
      />

      <p className="text-3xl font-black" style={{ color: accent }}>
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-[#66697A]">
        {label}
      </p>
    </div>
  );
}

function Capability({
  number,
  title,
  copy,
  accent,
}: {
  number: string;
  title: string;
  copy: string;
  accent: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#10132F]/10 bg-[#F7F6F2] p-7">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-black text-white"
        style={{ background: accent }}
      >
        {number}
      </div>

      <h3 className="mt-6 text-2xl font-black">{title}</h3>

      <p className="mt-3 max-w-xl leading-7 text-[#66697A]">
        {copy}
      </p>
    </div>
  );
}

function Journey({
  label,
  items,
  outcome,
  accent,
}: {
  label: string;
  items: string[];
  outcome: string;
  accent: string;
}) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05]">
      <div className="h-2" style={{ background: accent }} />

      <div className="p-7">
        <p
          className="text-xs font-black tracking-[0.2em]"
          style={{ color: accent }}
        >
          {label}
        </p>

        <div className="mt-7 space-y-5">
          {items.map((item, index) => (
            <div key={item} className="flex gap-3">
              <div
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black text-[#10132F]"
                style={{ background: accent }}
              >
                {index + 1}
              </div>

              <p className="text-sm leading-6 text-[#D2D4DE]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="px-7 py-4 text-xs font-black text-[#10132F]"
        style={{ background: accent }}
      >
        {outcome}
      </div>
    </div>
  );
}

function FlywheelCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-2xl border border-[#10132F]/10 bg-[#F7F6F2] p-5">
      <h3 className="font-black text-[#10132F]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#6A6D7D]">
        {copy}
      </p>
    </div>
  );
}

function BusinessCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#10132F]/10 bg-[#F7F6F2] p-6">
      <div className="mb-4 h-1 w-9 rounded-full bg-[#12C5AE]" />

      <h3 className="text-xl font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#696C7D]">
        {copy}
      </p>
    </div>
  );
}

function Phase({
  phase,
  period,
  title,
  copy,
}: {
  phase: string;
  period: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-[24px] bg-white p-7 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black tracking-[0.18em] text-[#6C3FA0]">
          {phase}
        </span>

        <span className="text-xs font-semibold text-[#8A8C99]">
          {period}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-black">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#686B7C]">
        {copy}
      </p>
    </div>
  );
}