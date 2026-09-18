"use client";

import Link from "next/link";

const ArrowUpRight = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

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

export default function PamaPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#211A20]">
      {/* NAV */}
      <nav className="border-b border-[#2D1D2B]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link
            href="/"
            className="text-sm font-medium text-[#695E65] transition hover:text-[#4A233E]"
          >
            ← Back to Portfolio
          </Link>

          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6F3159]">
            Sunayana Hazarika
          </p>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#E9CCD5]/45 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#E8DCCB]/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#4A233E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Founder Venture
              </span>
              <span className="rounded-full border border-[#4A233E]/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A233E]">
                AI Product
              </span>
            </div>

            <p className="text-lg font-semibold tracking-wide text-[#8B506F]">
              PAMA
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-[#2D1D2B] sm:text-6xl lg:text-[76px]">
              Preserve the stories
              <span className="block italic text-[#8B506F]">
                before they fade.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#665C62] sm:text-xl">
              An AI-powered collaborative platform helping families capture
              the memories, voices, and perspectives that make up a life —
              and bring them together into a story worth preserving.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://pamamvp.lovable.app/features"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#4A233E] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5B2B4C]"
              >
                View Live Prototype
                <ArrowUpRight />
              </a>

              <span className="inline-flex items-center rounded-full border border-[#4A233E]/20 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#594D54]">
                Working Prototype → MVP Development
              </span>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#2D1D2B]/10 pt-7 text-sm text-[#695E65]">
              <span>
                <strong className="text-[#2D1D2B]">Founder</strong> · Sunayana
                Hazarika
              </span>
              <span>
                <strong className="text-[#2D1D2B]">NSF I-Corps certified by UC Irvine</strong> ·
                SCustomer Discovery Program
              </span>
              <span>
                <strong className="text-[#2D1D2B]">Discovery</strong> · UC
                Irvine
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative flex min-h-[520px] items-center justify-center">
            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#8B506F]/15 sm:h-[450px] sm:w-[450px]" />
            <div className="absolute h-[315px] w-[315px] rounded-full border border-[#8B506F]/10 sm:h-[365px] sm:w-[365px]" />

            <div className="relative w-full max-w-[430px] rounded-[32px] border border-white/80 bg-white/75 p-7 shadow-[0_30px_90px_rgba(74,35,62,0.13)] backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDE3] text-2xl">
                  ♡
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9A7186]">
                    A family story
                  </p>
                  <p className="mt-1 font-serif text-2xl text-[#33242E]">
                    A life, remembered together
                  </p>
                </div>
              </div>

              <div className="my-7 h-px bg-[#2D1D2B]/10" />

              <div className="space-y-4">
                <MemoryCard
                  initials="M"
                  person="Mom"
                  text="I remember the summer she decided to..."
                />
                <MemoryCard
                  initials="S"
                  person="Sister"
                  text="She always told us this story differently..."
                />
                <MemoryCard
                  initials="G"
                  person="Grandfather"
                  text="There was one moment I never wanted forgotten..."
                />
              </div>

              <div className="mt-7 rounded-2xl bg-[#4A233E] p-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7C9D8]">
                  PAMA
                </p>
                <p className="mt-2 font-serif text-xl">
                  Many memories. One evolving life story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="bg-[#4A233E] text-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
          <Proof
            value="50+"
            label="Family & customer interviews"
            detail="Discovery informing product direction"
          />
          <Proof
            value="68%"
            label="Indicated willingness to pay"
            detail="$10–25/month in discovery research"
          />
          <Proof
            value="NSF I-Corps"
            label="Selected program"
            detail="Customer discovery through UC Irvine"
            small
          />
        </div>
      </section>

      {/* CHAPTER 01 */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel number="01" label="The Human Problem" />

        <div className="mt-10 grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#2D1D2B] sm:text-5xl">
            A person&apos;s story rarely lives in one place.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#665C62]">
            <p>
              Family stories live across people — in conversations,
              photographs, messages, half-remembered moments, and the
              perspectives of relatives who experienced the same life
              differently.
            </p>

            <p>
              Over time, those memories become fragmented. A photograph loses
              its context. A story is remembered by one sibling but not
              another. Details disappear when the people who hold them are no
              longer there to tell them.
            </p>

            <p className="font-serif text-2xl leading-9 text-[#4A233E]">
              PAMA began with a question: how might families preserve those
              stories while the people who remember them can still contribute?
            </p>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className="bg-[#F1E8DF]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="02" label="Discovery & Validation" />

          <div className="mt-10 grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#2D1D2B] sm:text-5xl">
                Start with people.
                <span className="block italic text-[#8B506F]">
                  Not the technology.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#665C62]">
                I led 50+ family and customer interviews to understand how
                people preserve memories today, where existing approaches
                break down, and what families would value in a collaborative
                storytelling experience.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B506F]">
                NSF I-Corps · UC Irvine
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#2D1D2B]">
                Testing the business assumptions through structured customer
                discovery.
              </h3>

              <p className="mt-5 leading-7 text-[#665C62]">
                PAMA was selected for the NSF I-Corps program, where I
                completed customer discovery through UC Irvine. The process
                helped test assumptions around the customer problem, user
                needs, value proposition, and commercialization opportunity.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-[#2D1D2B]/10 pt-6 text-sm font-medium text-[#4A233E]">
                Evidence before features
                <ArrowRight />
                Product direction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET PAMA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel number="03" label="Meet PAMA" />

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8B506F]">
            The Product Thesis
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-[#2D1D2B] sm:text-6xl">
            Many voices.
            <br />
            <span className="italic text-[#8B506F]">One life story.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#665C62]">
            Family members contribute what they remember. PAMA is designed to
            help organize those perspectives into a cohesive narrative that
            the family can review, shape, and preserve.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          <JourneyCard
            number="01"
            title="Create"
            copy="Begin a story for someone whose life you want to preserve."
          />
          <JourneyCard
            number="02"
            title="Invite"
            copy="Bring family members together so different voices can contribute."
          />
          <JourneyCard
            number="03"
            title="Bring it together"
            copy="AI-assisted organization helps structure memories into a narrative."
          />
          <JourneyCard
            number="04"
            title="Review & preserve"
            copy="The family stays in control of the story before it is shared."
          />
        </div>
      </section>

      {/* AI EXPERIENCE */}
      <section className="overflow-hidden bg-[#2D1D2B] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel
            number="04"
            label="The AI Experience"
            light
          />

          <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                AI organizes.
                <span className="block italic text-[#E5BFCF]">
                  People remain the authors.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#D4C8CF]">
                PAMA explores AI as an organizing layer — helping transform
                fragmented, multi-perspective contributions into a narrative
                while keeping people involved in reviewing and shaping the
                final story.
              </p>

              <p className="mt-7 text-sm leading-6 text-[#AB9DA5]">
                The current experience is a working prototype. Production
                architecture will continue to evolve during MVP development.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-7 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <DarkCard
                  eyebrow="INPUT"
                  title="Family memories"
                  copy="Stories, perspectives, photos and recollections from multiple contributors."
                />
                <DarkCard
                  eyebrow="ORGANIZE"
                  title="Narrative assistance"
                  copy="AI helps structure fragmented contributions into a coherent story."
                />
                <DarkCard
                  eyebrow="REVIEW"
                  title="Human judgment"
                  copy="Family members review, edit and shape what the story becomes."
                />
                <DarkCard
                  eyebrow="PRESERVE"
                  title="A shared narrative"
                  copy="A life story designed to remain meaningful across generations."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE */}
      <section className="bg-[#F1E8DF]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionLabel number="05" label="From Insight to Prototype" />

          <div className="mt-10 overflow-hidden rounded-[32px] bg-white shadow-[0_24px_80px_rgba(74,35,62,0.09)]">
            <div className="grid lg:grid-cols-[1fr_.85fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B506F]">
                  Current Stage
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2D1D2B] sm:text-5xl">
                  Working prototype.
                  <span className="block italic text-[#8B506F]">
                    MVP comes next.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-8 text-[#665C62]">
                  I translated customer-discovery insights and the product
                  thesis into a working prototype that makes the PAMA
                  experience tangible and creates a foundation for continued
                  validation.
                </p>

                <p className="mt-5 max-w-xl leading-7 text-[#776B72]">
                  The next phase is focused on developing the MVP for deeper
                  real-world testing and commercialization.
                </p>

                <a
                  href="https://pamamvp.lovable.app/features"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#4A233E] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5B2B4C]"
                >
                  Explore the Working Prototype
                  <ArrowUpRight />
                </a>
              </div>

              <div className="flex min-h-[430px] items-center justify-center bg-[#E5D1D8] p-8 sm:p-12">
                <div className="w-full max-w-sm -rotate-2 rounded-[28px] bg-[#FAF6F0] p-6 shadow-xl">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-serif text-2xl text-[#4A233E]">
                      PAMA
                    </span>
                    <span className="rounded-full bg-[#4A233E]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4A233E]">
                      Story
                    </span>
                  </div>

                  <div className="rounded-2xl bg-[#EADDE1] p-5">
                    <p className="text-xs uppercase tracking-wider text-[#8B506F]">
                      Chapter One
                    </p>
                    <p className="mt-3 font-serif text-2xl leading-tight text-[#33242E]">
                      The years that shaped her
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 rounded bg-[#4A233E]/15" />
                      <div className="h-2 w-11/12 rounded bg-[#4A233E]/15" />
                      <div className="h-2 w-4/5 rounded bg-[#4A233E]/15" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <MiniMemory letter="M" />
                    <MiniMemory letter="A" />
                    <MiniMemory letter="S" />
                  </div>

                  <p className="mt-6 text-center text-xs text-[#8A7E84]">
                    Three perspectives · one shared story
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTURE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel number="06" label="Building the Venture" />

        <div className="mt-10 grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#2D1D2B] sm:text-5xl">
              Designing the product
              <span className="block italic text-[#8B506F]">
                and the business.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#665C62]">
              PAMA is being developed as an early-stage commercial venture,
              not as a portfolio-only concept.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <VentureCard
              title="Customer Discovery"
              copy="Understanding the problem, behaviors, needs and willingness to pay."
            />
            <VentureCard
              title="Product Strategy"
              copy="Translating discovery into product decisions, experience design and AI capabilities."
            />
            <VentureCard
              title="Business Model"
              copy="Exploring pricing and customer segments without treating planning assumptions as results."
            />
            <VentureCard
              title="Path to Market"
              copy="Developing commercialization hypotheses while moving from prototype toward MVP."
            />
          </div>
        </div>

        <div className="mt-16 rounded-[30px] bg-[#4A233E] p-8 text-white sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5BFCF]">
                My Role
              </p>
              <h3 className="mt-4 font-serif text-4xl">Founder</h3>
            </div>

            <div>
              <p className="text-xl leading-9 text-[#F4EBEF]">
                I have led PAMA across customer discovery, product strategy,
                AI product architecture, prototype development, product
                design, business-model exploration, pricing, and go-to-market
                strategy.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "AI Product Strategy",
                  "Customer Discovery",
                  "Product Architecture",
                  "Human-Centered AI",
                  "Product Design",
                  "Entrepreneurship",
                  "GTM Strategy",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs text-[#F4EBEF]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#E8D8D1]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B506F]">
            The Vision
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#2D1D2B] sm:text-6xl">
            Every family deserves a living archive of the people who shaped
            them.
          </h2>

          <a
            href="https://pamamvp.lovable.app/features"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#4A233E] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5B2B4C]"
          >
            View PAMA Prototype
            <ArrowUpRight />
          </a>
        </div>
      </section>

      {/* NOTE + FOOTER */}
      <footer className="bg-[#241A21] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="border-b border-white/10 pb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5AEB9]">
              Venture Status
            </p>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#B8ABB2]">
              PAMA is an early-stage venture currently in product development.
              The current experience is a working prototype, with MVP
              development as the next stage. Customer-discovery findings
              represent research conducted during product development. Market,
              pricing, go-to-market, and financial assumptions are planning
              inputs rather than realized commercial results.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 pt-8">
            <Link
              href="/"
              className="text-sm font-medium text-[#E5BFCF] transition hover:text-white"
            >
              ← Back to Portfolio
            </Link>

            <p className="text-xs text-[#887A82]">
              PAMA · Founder Venture · 2026
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MemoryCard({
  initials,
  person,
  text,
}: {
  initials: string;
  person: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl bg-[#FAF6F0] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8D1D9] text-sm font-bold text-[#6F3159]">
        {initials}
      </div>
      <div>
        <p className="text-xs font-bold text-[#4A233E]">{person}</p>
        <p className="mt-1 text-sm leading-5 text-[#746970]">{text}</p>
      </div>
    </div>
  );
}

function Proof({
  value,
  label,
  detail,
  small = false,
}: {
  value: string;
  label: string;
  detail: string;
  small?: boolean;
}) {
  return (
    <div className="px-6 py-10 sm:px-8 lg:px-10">
      <p
        className={
          small
            ? "font-serif text-3xl text-[#F1D9E4]"
            : "font-serif text-5xl text-[#F1D9E4]"
        }
      >
        {value}
      </p>
      <p className="mt-3 font-semibold">{label}</p>
      <p className="mt-1 text-sm text-[#C9BBC2]">{detail}</p>
    </div>
  );
}

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
        className={`text-xs font-bold tracking-[0.2em] ${
          light ? "text-[#E5BFCF]" : "text-[#8B506F]"
        }`}
      >
        {number}
      </span>

      <div
        className={`h-px w-10 ${
          light ? "bg-white/20" : "bg-[#8B506F]/30"
        }`}
      />

      <span
        className={`text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-[#D7C7CF]" : "text-[#6B5E65]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function JourneyCard({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="group rounded-[24px] border border-[#2D1D2B]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-xs font-bold tracking-widest text-[#A26884]">
        {number}
      </p>
      <h3 className="mt-5 font-serif text-2xl text-[#2D1D2B]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#746970]">{copy}</p>
    </div>
  );
}

function DarkCard({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-[10px] font-bold tracking-[0.2em] text-[#D6AFC1]">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#B8AAB2]">{copy}</p>
    </div>
  );
}

function MiniMemory({ letter }: { letter: string }) {
  return (
    <div className="rounded-xl bg-white p-3 text-center shadow-sm">
      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#E8D1D9] text-xs font-bold text-[#6F3159]">
        {letter}
      </div>
      <div className="mx-auto mt-3 h-1.5 w-8 rounded bg-[#4A233E]/10" />
      <div className="mx-auto mt-1.5 h-1.5 w-6 rounded bg-[#4A233E]/10" />
    </div>
  );
}

function VentureCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#2D1D2B]/10 bg-white p-7">
      <div className="mb-5 h-1 w-9 rounded-full bg-[#A26884]" />
      <h3 className="font-serif text-2xl text-[#2D1D2B]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#746970]">{copy}</p>
    </div>
  );
}
