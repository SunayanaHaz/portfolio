export default function CogniSensePage() {
  const skills = [
    "AI Product Strategy",
    "Human-Centered AI",
    "Product Discovery",
    "UX Design",
    "Figma Make",
    "Rapid Prototyping",
    "Data Visualization",
    "Speculative Design",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* HERO */}
<section className="border-b border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
    <a
      href="/"
      className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
    >
      ← Back to Portfolio
    </a>

    <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      
      {/* LEFT — PROJECT INTRO */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
          AI Product Concept · Human-Centered Design · Rapid Prototyping
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          CogniSense → CogniWise
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-600 md:text-2xl">
          Exploring how AI and data could make hidden cognitive signals
          visible, understandable, and actionable
        </p>

        <p className="mt-6 text-base leading-8 text-slate-600">
          CogniSense began as a speculative exploration of hidden cognitive
          states: signals such as attention, comprehension, memory, emotion,
          cognitive load, and other changes that people cannot always
          directly perceive. Across multiple prototypes, the idea was
          explored in two contexts — adaptive learning and cognitive
          wellness — connected by one product question: what if technology
          could help people understand signals that are normally invisible
          to them?
        </p>

        {/* SKILLS */}
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

        {/* SUPPORTING LINKS */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://devpost.com/software/cognisense-io71rb"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View CogniSense ↗
          </a>

          <a
            href="https://www.figma.com/make/TemZSThM8Mcg3DBUIr47HG/Design-CogniSense-Dashboard-UI?t=qyDy8gLLWRqnv4qO-0"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Figma Prototype ↗
          </a>
        </div>
      </div>

      {/* RIGHT — INTERACTIVE PROTOTYPES */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Interactive Product Experiences
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">
              Explore the prototypes
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-600" />
            </span>
            LIVE
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          
          {/* PROTOTYPE 1 */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-800">
                CogniWise Web
              </p>

              <a
                href="https://cogniwise-web.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-violet-600 transition hover:text-violet-900"
              >
                Full screen ↗
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              
              {/* Browser Bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <div className="ml-1 flex-1 truncate rounded bg-white px-2 py-1 text-center text-[9px] text-slate-400">
                  cogniwise-web.vercel.app
                </div>
              </div>

              {/* LIVE PROTOTYPE */}
              <div className="h-[500px] bg-white">
                <iframe
                  src="https://cogniwise-web.vercel.app/dashboard"
                  title="CogniWise Web Interactive Prototype"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allow="clipboard-write"
                />
              </div>
            </div>
          </div>

          {/* PROTOTYPE 2 */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-800">
                CogniWise Lovable
              </p>

              <a
                href="https://congiwise.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-violet-600 transition hover:text-violet-900"
              >
                Full screen ↗
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              
              {/* Browser Bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <div className="ml-1 flex-1 truncate rounded bg-white px-2 py-1 text-center text-[9px] text-slate-400">
                  congiwise.lovable.app
                </div>
              </div>

              {/* LIVE PROTOTYPE */}
              <div className="h-[500px] bg-white">
                <iframe
                  src="https://congiwise.lovable.app"
                  title="CogniWise Lovable Interactive Prototype"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allow="clipboard-write"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-5 text-slate-500">
          Explore both prototypes directly — scroll, click, and navigate.
          Prototype content is conceptual and not a validated clinical system.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* PROJECT THESIS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Product Thesis
          </p>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["01", "Invisible Signals"],
              ["02", "Make Them Perceptible"],
              ["03", "Translate Into Context"],
              ["04", "Guide Human Action"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p className="text-2xl font-bold text-violet-600">{number}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSPIRATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            01 · The Inspiration
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
            What if humans could perceive changes in brain health that our
            natural senses cannot detect?
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Part of the broader inspiration for CogniSense came from seeing
            repeated stories of people experiencing sudden neurological events
            such as strokes, sometimes resulting in paralysis, memory loss, or
            lifelong disability after they had appeared outwardly healthy.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            Those stories prompted a speculative question: are meaningful
            changes occurring inside the brain or body that people simply
            cannot perceive directly?
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                The Human Limitation
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Our senses reveal some states — but not all of them.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Hunger, pain, temperature, and fatigue can produce sensations
                we recognize. Many cognitive, neurological, and physiological
                processes, however, are not directly perceptible in the same
                way.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-700">
                The Future-State Vision
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Imagine a new sense for cognitive wellness.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Could future sensing, data, and AI systems make otherwise
                invisible signals understandable enough that people become
                more aware of changes in their cognitive and physiological
                state?
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-violet-400">
              Product Vision
            </p>

            <p className="mt-3 max-w-4xl text-xl font-semibold leading-8">
              Give people greater visibility into hidden cognitive states —
              then translate that visibility into context they can understand.
            </p>
          </div>
        </div>
      </section>

      {/* COGNISENSE */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
            02 · CogniSense
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            The first exploration: Learning Resonance
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            The CogniSense prototype explored the hidden-state idea through
            learning. Instead of assuming every learner should absorb
            information through the same interface, pace, and presentation
            style, the concept asked whether an AI experience could respond to
            differences in the learner&apos;s internal state.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            The concept called this state <strong>Learning Resonance</strong> —
            the alignment of attention, comprehension, memory formation, and
            emotion during learning.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              [
                "Attention Stability",
                "Whether focus is sustained or becoming fragmented.",
              ],
              [
                "Comprehension Depth",
                "Whether meaningful understanding appears to be forming.",
              ],
              [
                "Memory Formation",
                "Whether knowledge is beginning to stick and become retrievable.",
              ],
              [
                "Emotional Alignment",
                "Whether emotional state supports or disrupts the learning experience.",
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

          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-violet-400">
              Adaptive Experience
            </p>

            <p className="mt-3 leading-7 text-slate-300">
              CogniSense explored adapting the learning interface, pace, and
              presentation style using different knowledge representations,
              including structured frameworks, narrative progression, and
              interactive reasoning.
            </p>
          </div>
        </div>
      </section>

      {/* BRIDGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            03 · The Broader Insight
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
            The deeper opportunity was not limited to learning
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            The learning prototype surfaced a broader product idea: people
            continuously generate signals about attention, cognitive demand,
            emotion, fatigue, and wellness, yet those signals are difficult to
            understand as a coherent picture.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            That led to a second design exploration: instead of using hidden
            cognitive state only to adapt learning content, what might an
            interface look like if its primary purpose were to help a person
            understand their cognitive and wellness context itself?
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                CogniSense
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Adapt the experience to the cognitive state
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explored how hidden learning states might inform interface,
                pacing, and knowledge presentation.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-700">
                CogniWise Exploration
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Make the state itself understandable
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explored a broader dashboard experience for bringing cognitive
                and wellness-related concepts into a unified, interpretable
                view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="bg-violet-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            04 · CogniWise Product Exploration
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Turn invisible signals into a comprehensible daily view
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            The CogniWise dashboard prototype explores how multiple cognitive
            and wellness concepts could be brought together rather than shown
            as disconnected data points. The interface includes circulation,
            hydration, stress, cognitive load, an overall daily score, and
            contextual recommendations.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm">
            <img
              src="/cognisense/cognisense-dashboard.png"
              alt="CogniWise dashboard prototype showing cognitive and wellness indicators"
              className="h-auto w-full"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            CogniWise exploratory dashboard. Values, scores, indicators, and
            recommendations shown in the prototype are illustrative product
            concepts, not validated clinical measurements.
          </p>
        </div>
      </section>

      {/* PRODUCT LOGIC */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            05 · Product Logic
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Signal → context → understanding → action
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            The design challenge was not simply to create another dashboard.
            The more interesting question was how a product might translate
            complex signals into information a person could actually
            understand without increasing cognitive overload.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              [
                "01",
                "Sense",
                "Imagine future systems capable of capturing relevant cognitive or physiological signals.",
              ],
              [
                "02",
                "Unify",
                "Bring otherwise fragmented indicators into one coherent experience.",
              ],
              [
                "03",
                "Interpret",
                "Translate information into understandable context rather than unexplained metrics.",
              ],
              [
                "04",
                "Guide",
                "Surface contextual wellness suggestions while keeping the user in control.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-xl border border-slate-200 p-6"
              >
                <p className="text-xs font-bold text-violet-600">{number}</p>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN-CENTERED */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
            06 · Human-Centered AI
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            More data is not automatically more understanding
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            A cognitive product creates an unusual UX challenge: presenting
            too many indicators can itself increase cognitive burden. The
            interface therefore explores hierarchy, summarization, contextual
            explanation, and recommended next actions instead of treating raw
            measurement as the final product.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "Reduce Overload",
                "Prioritize the information a user needs rather than displaying every possible signal.",
              ],
              [
                "Explain the Signal",
                "Pair indicators with context so the interface communicates meaning, not only numbers.",
              ],
              [
                "Preserve Human Agency",
                "Use AI and data to support awareness and decisions rather than presenting the system as an unquestionable authority.",
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

      {/* ITERATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            07 · Iterative Prototyping
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            From abstract idea to interactive product experiences
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            The project moved through multiple design and prototyping
            environments rather than stopping at a presentation. That made it
            possible to explore different interfaces, information
            architectures, interactions, and ways of communicating the
            underlying concept.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              [
                "CogniSense",
                "Speculative AI learning concept centered on Learning Resonance.",
              ],
              [
                "Figma Make",
                "AI-assisted interface exploration and rapid UX prototyping.",
              ],
              [
                "Lovable",
                "Additional rapid product iteration around the broader CogniWise experience.",
              ],
              [
                "Deployed Web App",
                "Interactive dashboard used to make the evolved concept tangible.",
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://devpost.com/software/cognisense-io71rb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              CogniSense · Devpost ↗
            </a>

            <a
              href="https://www.figma.com/make/TemZSThM8Mcg3DBUIr47HG/Design-CogniSense-Dashboard-UI?t=qyDy8gLLWRqnv4qO-0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Figma Make ↗
            </a>

            <a
              href="https://congiwise.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              CogniWise · Lovable ↗
            </a>

            <a
              href="https://cogniwise-web.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              CogniWise · Dashboard ↗
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IT DEMONSTRATES */}
      <section className="bg-violet-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            08 · What This Project Demonstrates
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
            Translating an ambiguous human problem into an AI/data product
            experience
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "Problem Discovery",
                "Starting with an ambiguous human problem and reframing it as a product opportunity.",
              ],
              [
                "AI Product Thinking",
                "Exploring AI as an interpretation and personalization layer rather than simply adding an AI feature.",
              ],
              [
                "Data Product Design",
                "Thinking through how multiple signals could become an understandable product experience.",
              ],
              [
                "Human-Centered UX",
                "Designing around cognitive load, explanation, context, and user agency.",
              ],
              [
                "Rapid Prototyping",
                "Using Figma and AI-assisted development environments to move quickly from idea to interactive experience.",
              ],
              [
                "Product Evolution",
                "Testing the same underlying hidden-state thesis across learning and cognitive-wellness contexts.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-violet-100 bg-white p-6"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE FRAMING */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            09 · Responsible Framing
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            A future-state concept, not a diagnostic system
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-600">
            CogniSense and CogniWise explore what future AI, sensing, data,
            and interface technologies might make possible. The prototypes do
            not establish that the displayed indicators can predict stroke,
            diagnose neurological conditions, or provide clinically validated
            health assessments.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            Any real-world medical implementation of this vision would require
            validated sensing methods, clinical evidence, privacy and security
            controls, appropriate regulatory review, and involvement from
            qualified healthcare professionals.
          </p>
        </div>
      </section>

      {/* PROJECT NOTE */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm leading-7 text-slate-500">
            <strong className="text-slate-700">Project note:</strong>{" "}
            CogniSense and CogniWise are speculative product and prototype
            explorations. Cognitive, neurological, physiological, wellness,
            scoring, and recommendation elements shown in these experiences
            are conceptual and are not presented as validated medical
            measurements, diagnoses, stroke-prediction capabilities, clinical
            outcomes, or medical advice.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Sunayana Hazarika · CogniSense / CogniWise Case Study</p>

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