const headlineStats = [
  {
    value: "330",
    label: "Game Rounds",
    detail: "Structured gameplay records analyzed",
  },
  {
    value: "33",
    label: "Distinct Players",
    detail: "Anonymous research participants",
  },
  {
    value: "56%",
    label: "Overall Accuracy",
    detail: "Participants detected just over half correctly",
  },
  {
    value: "10",
    label: "Tactic Choices",
    detail: "Manipulative and legitimate classifications",
  },
];

const difficultyResults = [
  {
    level: "Beginner",
    accuracy: 75,
    label: "75%",
  },
  {
    level: "Intermediate",
    accuracy: 58.97,
    label: "58.97%",
  },
  {
    level: "Expert",
    accuracy: 39.6,
    label: "39.60%",
  },
];

const tactics = [
  {
    number: "01",
    title: "Sycophancy",
    description:
      "Flattering or excessively agreeing with the user, even modifying beliefs to match the user.",
  },
  {
    number: "02",
    title: "Mirroring & Nudging",
    description:
      "Reflecting a user's language or values to build false rapport and subtly steer outcomes.",
  },
  {
    number: "03",
    title: "Loss & FOMO",
    description:
      "Using fear of missing out or potential loss to pressure action or re-engagement.",
  },
  {
    number: "04",
    title: "Confirmshaming",
    description:
      "Inducing guilt, obligation, or emotional pressure to encourage compliance.",
  },
  {
    number: "05",
    title: "Social Proof & Authority",
    description:
      "Invoking crowds, popularity, experts, or authority figures to override deliberation.",
  },
];

const researchMeasures = [
  {
    name: "Correctness",
    description:
      "Whether the participant correctly classified the scenario.",
  },
  {
    name: "Classification Choice",
    description:
      "The tactic selected by the participant from the available choices.",
  },
  {
    name: "Response Time",
    description:
      "How quickly the participant made a decision under the 60-second limit.",
  },
  {
    name: "Confidence",
    description:
      "Participant's self-rated confidence from 1–5.",
  },
  {
    name: "Reasoning",
    description:
      "Optional free-text explanation supporting the participant's choice.",
  },
];

const responsibilities = [
  "Originated the project concept and framed the central research problem.",
  "Synthesized research on linguistic dark patterns, persuasive technology, human-AI interaction, and deceptive design.",
  "Translated academic literature into a usable manipulation taxonomy and game mechanics.",
  "Designed the research methodology, participant flow, sampling approach, and within-subject experiment structure.",
  "Created and structured the conversational scenarios used throughout the experiment.",
  "Designed and built the participant-facing working game.",
  "Implemented the frontend logic, scoring interactions, confidence collection, timing, and participant flow.",
  "Designed the backend API and behavioral data collection pipeline.",
  "Built the structured PostgreSQL research database in Supabase.",
  "Implemented anonymous participant identification and structured interaction records.",
  "Deployed the frontend through Netlify and backend through Render.",
  "Collected participant data from live gameplay.",
  "Cleaned, structured, explored, and analyzed the behavioral dataset.",
  "Analyzed accuracy, tactic difficulty, confidence, response time, scoring, and behavioral patterns.",
  "Developed the player segmentation and behavioral interpretation.",
  "Translated the results into research findings, visualizations, the final paper, and showcase narrative.",
];

const stack = [
  {
    layer: "Game Frontend",
    technologies: "React (Vite) · JavaScript · JSX",
    purpose:
      "Rendered scenarios, managed game logic, captured player selections, scoring, timing, confidence, and reasoning.",
  },
  {
    layer: "Interface",
    technologies: "Tailwind CSS · Lucide React",
    purpose:
      "Responsive UI, visual hierarchy, timers, streaks, rankings, and participant feedback.",
  },
  {
    layer: "Frontend Deployment",
    technologies: "Netlify",
    purpose:
      "Hosted and delivered the live participant-facing research game.",
  },
  {
    layer: "Participant State",
    technologies: "LocalStorage",
    purpose:
      "Stored an anonymous participant identifier across gameplay sessions.",
  },
  {
    layer: "REST API",
    technologies: "Node.js · Express.js",
    purpose:
      "Received gameplay events, validated requests, inserted research records, and supported dataset export.",
  },
  {
    layer: "Backend Deployment",
    technologies: "Render",
    purpose:
      "Hosted the research data API in the cloud.",
  },
  {
    layer: "Database",
    technologies: "Supabase · PostgreSQL",
    purpose:
      "Persisted structured gameplay interactions for analysis and research.",
  },
  {
    layer: "Data Protection",
    technologies: "Row-Level Security · UUIDs · Environment Variables",
    purpose:
      "Protected research data and maintained unique interaction identifiers without exposing credentials.",
  },
  {
    layer: "Developer Workflow",
    technologies: "Git · GitHub · VS Code",
    purpose:
      "Version control, code management, development, testing, and deployment.",
  },
];

const dataModel = [
  ["participantId", "Anonymous participant identifier"],
  ["difficulty", "Beginner, intermediate, or expert"],
  ["scenarioId", "Unique scenario identifier"],
  ["scenarioContext", "Context such as e-commerce chatbot"],
  ["scenarioMessage", "AI message presented to the participant"],
  ["aiType", "Type of AI interaction"],
  ["selectedTactic", "Participant-selected classification"],
  ["correctTactic", "Ground-truth classification"],
  ["correct", "Whether the participant answered correctly"],
  ["baseScore", "Base gameplay score"],
  ["timeBonus", "Score contribution based on response time"],
  ["reasoningBonus", "Bonus based on reasoning input"],
  ["streakBonus", "Gameplay streak bonus"],
  ["totalScore", "Combined score for the trial"],
  ["timeTakenSeconds", "Decision time"],
  ["confidence", "Self-rated confidence from 1–5"],
  ["reasoning", "Free-text explanation"],
];

const tacticAccuracy = [
  {
    tactic: "Social Pressure",
    accuracy: "93%",
    value: 93,
    interpretation: "Highly visible manipulation.",
  },
  {
    tactic: "Legitimate Information",
    accuracy: "87%",
    value: 87,
    interpretation: "Participants generally recognized neutral information.",
  },
  {
    tactic: "Urgency / Loss",
    accuracy: "72%",
    value: 72,
    interpretation: "Explicit pressure was relatively recognizable.",
  },
  {
    tactic: "Personalization",
    accuracy: "62%",
    value: 62,
    interpretation: "Moderately recognizable.",
  },
  {
    tactic: "Sycophancy",
    accuracy: "55%",
    value: 55,
    interpretation: "Flattery became harder to identify as manipulation.",
  },
  {
    tactic: "Fair Upsell",
    accuracy: "50%",
    value: 50,
    interpretation:
      "Participants struggled with the boundary between legitimate persuasion and manipulation.",
  },
  {
    tactic: "Confirmshaming",
    accuracy: "35%",
    value: 35,
    interpretation:
      "Guilt and emotional pressure were frequently confused with other tactics.",
  },
  {
    tactic: "Authority Appeal",
    accuracy: "32%",
    value: 32,
    interpretation:
      "Indirect authority cues were difficult for participants to recognize.",
  },
  {
    tactic: "Dark Nudge",
    accuracy: "27%",
    value: 27,
    interpretation:
      "Subtle nudging language frequently escaped detection.",
  },
  {
    tactic: "Trick Statements",
    accuracy: "13%",
    value: 13,
    interpretation:
      "The hardest pattern in the experiment for participants to recognize.",
  },
];

const numericResults = [
  {
    metric: "Total Score",
    mean: "39.50",
    median: "60",
    sd: "35.33",
    min: "0",
    max: "93",
  },
  {
    metric: "Time Taken",
    mean: "23.39 sec",
    median: "19 sec",
    sd: "15.96",
    min: "1 sec",
    max: "60 sec",
  },
  {
    metric: "Confidence",
    mean: "3.31 / 5",
    median: "3",
    sd: "0.71",
    min: "1",
    max: "5",
  },
];

const segments = [
  {
    title: "High Performers",
    accuracy: "High",
    time: "Medium",
    confidence: "Medium",
    insight: "Skilled and consistent participants.",
  },
  {
    title: "Fast but Inaccurate",
    accuracy: "Low–Medium",
    time: "Fast",
    confidence: "Medium",
    insight:
      "Participants appeared to skim or make quick judgments without sufficient deliberation.",
  },
  {
    title: "Slow Analysts",
    accuracy: "Medium–High",
    time: "Slow",
    confidence: "High",
    insight:
      "More deliberate participants invested significantly more cognitive effort.",
  },
];

const keyFindings = [
  {
    title: "Difficulty matters",
    description:
      "Accuracy dropped from 75% at Beginner difficulty to approximately 40% at Expert difficulty as manipulative signals became layered and ambiguous.",
  },
  {
    title: "Subtle tactics evade detection",
    description:
      "Trick statements, dark nudges, authority framing, and confirmshaming were substantially harder to identify than explicit social pressure or urgency.",
  },
  {
    title: "Confidence does not equal correctness",
    description:
      "Average confidence remained around 3.3 out of 5 even when actual recognition performance was much weaker.",
  },
  {
    title: "Ambiguity creates vulnerability",
    description:
      "Participants struggled most when scenarios contained overlapping persuasive signals rather than one obvious manipulation tactic.",
  },
  {
    title: "Behavior differs by decision style",
    description:
      "Fast participants often sacrificed accuracy, while slower participants tended to analyze scenarios more carefully.",
  },
  {
    title: "The politeness trap",
    description:
      "Qualitative observations suggested that users may continue interacting even after sensing manipulation because ordinary social norms discourage abrupt disengagement.",
  },
];

const fairnessPrinciples = [
  {
    title: "Accessible",
    description:
      "Choices and relevant information should be clear, understandable, and easy to review.",
  },
  {
    title: "Balanced",
    description:
      "Alternatives should be presented without visual, linguistic, or emotional pressure favoring one choice.",
  },
  {
    title: "Empowering",
    description:
      "Users should retain meaningful control over decisions, settings, and continued engagement.",
  },
];

const limitations = [
  {
    title: "Simulation vs. real-world interaction",
    description:
      "The research used rigorously scripted scenarios rather than long-running live AI conversations. Real interactions may involve prior emotional investment, personalization, and longitudinal exposure.",
  },
  {
    title: "Sample size and composition",
    description:
      "The study included 33 distinct participants. Prior AI exposure, digital literacy, or gaming experience may have influenced performance.",
  },
  {
    title: "Uneven participant engagement",
    description:
      "Some participants completed only a few rounds while highly engaged participants completed substantially more, affecting the distribution of observations.",
  },
  {
    title: "Ethical boundaries",
    description:
      "The study intentionally avoided some highly intimate or potentially harmful manipulation scenarios, limiting examination of the most aggressive documented tactics.",
  },
  {
    title: "Project timeframe",
    description:
      "The original adaptive multi-agent vision exceeded what could responsibly be implemented within the available project window.",
  },
];

const futureWork = [
  "Introduce live LLM agents capable of dynamically adapting conversational tactics.",
  "Run longitudinal studies to determine whether manipulation-detection skills persist over time.",
  "Expand the participant base to populations such as teenagers, older adults, and heavy companion-AI users.",
  "Align the taxonomy with emerging manipulation benchmarks such as DarkBench.",
  "Evaluate how digital-literacy interventions could be embedded inside real AI products.",
  "Explore transparency panels, onboarding education, and Fairness by Design mechanisms.",
];

const references = [
  "Kran, E. et al. (2025). DarkBench: Benchmarking Dark Patterns in LLMs. ICLR.",
  "De Freitas, J. et al. (2025). Emotional Manipulation by AI Companions. Harvard Business School Working Paper 26-005.",
  "Malmqvist, L. (2024). Sycophancy in Large Language Models.",
  "Mathur, A. et al. (2019). Dark Patterns at Scale. ACM CSCW.",
  "Yi, W. & Li, Z. (2024). Mapping the Scholarship of Dark Pattern Regulation.",
  "CNIL (2019). Shaping Choices in the Digital World.",
  "Shneiderman, B. (2022). Human-Centered AI. Oxford University Press.",
];

export default function AIUndercoverPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-purple-700"
          >
            ← Back to Portfolio
          </a>

          <div className="flex flex-wrap justify-end gap-2">
            <a
              href="https://github.com/SunayanaHaz/ai-undercover"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-slate-900 sm:inline-block"
            >
              GitHub ↗
            </a>

            <a
              href="https://ai-undercover.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Play Live Game ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-5xl">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.18em]">
            <span className="text-purple-700">
              Linguistic Dark Patterns in Generative AI
            </span>

            <span className="text-slate-400">·</span>

            <span className="text-slate-500">
              UW iSchool Showcase · May 2026
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            AI Undercover:
            <span className="block text-purple-700">
              Manipulation Hunter
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            I built a full-stack behavioral research platform to investigate
            whether everyday users can recognize manipulative conversational
            tactics hidden inside seemingly helpful AI interactions.
          </p>

          <div className="mt-8 rounded-2xl border-l-4 border-purple-700 bg-purple-50 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-700">
              Research Question
            </p>

            <p className="mt-3 text-xl font-semibold leading-8">
              Can everyday users reliably detect manipulative conversational
              tactics embedded in AI outputs — and thereby safeguard their own
              autonomy?
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Responsible AI",
              "UX Research",
              "Behavioral Analytics",
              "Human-AI Interaction",
              "Full-Stack Development",
              "Data Engineering",
              "Digital Ethics",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://ai-undercover.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-purple-700 px-6 py-3 font-bold text-white transition hover:bg-purple-800"
            >
              Play the Live Game ↗
            </a>

            <a
              href="https://github.com/SunayanaHaz/ai-undercover"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-bold transition hover:border-slate-900 hover:bg-slate-50"
            >
              View GitHub Repository ↗
            </a>

            <a
              href="/ai-undercover/poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-bold transition hover:border-slate-900 hover:bg-slate-50"
            >
              View Research Poster ↗
            </a>
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500">
            Research collaborators: Bradley Bomberry and Candice Lee ·
            University of Washington Information School
          </p>
        </div>
      </section>

      {/* Ownership */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-700">
              My Role
            </p>

            <p className="mt-3 text-xl font-bold">
              Project Lead · Research · Engineering · Analytics
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-700">
              Ownership
            </p>

            <p className="mt-3 text-xl font-bold">
              Approximately 90% end-to-end project ownership
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-700">
              Recognition
            </p>

            <p className="mt-3 text-xl font-bold">
              🏆 UW iSchool Showcase Winner
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          Research at a glance
        </p> imp impact these are my career impacts projects can you do game similarly to few startup lab recognition it do heard business I need to put a liphone threaty of me to move

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-5xl font-bold tracking-tight text-purple-700">
                {stat.value}
              </p>

              <p className="mt-3 text-lg font-bold">{stat.label}</p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Poster */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
                Research Showcase
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Final UW iSchool research poster
              </h2>
            </div>

            <a
              href="/ai-undercover/poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-purple-700 hover:underline"
            >
              Open full poster ↗
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <iframe
              src="/ai-undercover/poster.pdf"
              className="h-[800px] w-full"
              title="AI Undercover Research Poster"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
            01 · The Problem
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Manipulation has moved from interface design into the language
            itself.
          </h2>

          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Traditional dark patterns appear in interfaces through tactics
              such as hidden fees, confusing buttons, forced continuity, or
              difficult cancellation flows.
            </p>

            <p>
              Large language models introduce a different risk. Persuasion can
              now appear inside ordinary conversation through flattery,
              urgency, guilt, false rapport, personalization, authority cues,
              and emotional pressure.
            </p>

            <p>
              Because these cues often resemble supportive or helpful
              communication, users may fail to recognize when an AI system is
              influencing their behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Tactics */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          02 · Research Foundation
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Translating dark-pattern research into testable behaviors.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          I synthesized research across deceptive design, persuasive
          technology, human-centered AI, digital ethics, sycophancy, and
          conversational manipulation and translated that literature into a
          usable game taxonomy.
        </p>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {tactics.map((tactic) => (
            <div
              key={tactic.number}
              className="grid gap-4 p-6 md:grid-cols-[80px_240px_1fr]"
            >
              <p className="font-mono font-bold text-purple-700">
                {tactic.number}
              </p>

              <p className="font-bold">{tactic.title}</p>

              <p className="leading-7 text-slate-600">
                {tactic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pivot */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Strategic Pivot
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            From an adaptive multi-agent vision to a controlled research
            instrument.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-amber-950">
            The initial concept involved a live multi-agent conversational game
            in which an AI system dynamically adapted its manipulation strategy.
            The technical and methodological complexity was too high for the
            project timeframe, and a live adaptive model would also make
            experimental conditions harder to control.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-amber-950">
            I therefore pivoted the product toward randomized, research-backed,
            pre-scripted scenarios. That decision preserved the research goal
            while making the experiment reproducible, measurable, feasible,
            and analytically consistent.
          </p>
        </div>
      </section>

      {/* Experiment */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          03 · Experiment Design
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          A game and research instrument in one system.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          Manipulation Hunter used a within-subjects design with randomized
          scenarios across Beginner, Intermediate, and Expert difficulty tiers.
          Participants had up to 60 seconds to classify each scenario.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {researchMeasures.map((measure) => (
            <div
              key={measure.name}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h3 className="font-bold">{measure.name}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {measure.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-7">
            <h3 className="text-xl font-bold">Every round captured</h3>

            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              <li>• Scenario context and AI message</li>
              <li>• Difficulty level</li>
              <li>• Ground-truth tactic</li>
              <li>• Participant-selected tactic</li>
              <li>• Correct / incorrect classification</li>
              <li>• Response time</li>
              <li>• Confidence rating</li>
              <li>• Optional reasoning</li>
              <li>• Game score and bonuses</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-purple-50 p-7">
            <h3 className="text-xl font-bold text-purple-950">
              Dual-purpose model
            </h3>

            <p className="mt-5 leading-7 text-purple-950">
              The game served as both an educational intervention and a
              behavioral research instrument. Players learned to recognize
              manipulation while their responses generated empirical evidence
              about perception, confidence, cognitive effort, and detection
              ability.
            </p>
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
            04 · My Contribution
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight">
            I drove approximately 90% of the project from initial idea to
            working system and analysis.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {responsibilities.map((responsibility) => (
              <div
                key={responsibility}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="leading-7 text-slate-700">
                  <span className="mr-2 font-bold text-purple-700">✓</span>
                  {responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
            05 · Technical Architecture
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            From browser interaction to structured research data.
          </h2>

          <div className="mt-12 grid items-center gap-4 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                Frontend
              </p>

              <p className="mt-3 text-2xl font-bold">React + Vite</p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Scenarios · answers · timers · confidence · scoring
              </p>
            </div>

            <p className="text-2xl text-purple-300">→</p>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                Backend
              </p>

              <p className="mt-3 text-2xl font-bold">Node + Express</p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                REST API · validation · ingestion · export
              </p>
            </div>

            <p className="text-2xl text-purple-300">→</p>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                Data
              </p>

              <p className="mt-3 text-2xl font-bold">Supabase + PostgreSQL</p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Persistent behavioral research records
              </p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-700">
            <div className="hidden bg-slate-900 px-6 py-4 font-bold md:grid md:grid-cols-[180px_1fr_2fr]">
              <p>Layer</p>
              <p>Technology</p>
              <p>Purpose</p>
            </div>

            {stack.map((item) => (
              <div
                key={item.layer}
                className="grid gap-3 border-t border-slate-800 px-6 py-5 md:grid-cols-[180px_1fr_2fr]"
              >
                <p className="font-bold text-white">{item.layer}</p>

                <p className="text-slate-300">{item.technologies}</p>

                <p className="leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href="https://github.com/SunayanaHaz/ai-undercover"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-700 bg-slate-900 p-7 transition hover:border-purple-400"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                Source Code
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                GitHub Repository ↗
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Explore the application code, frontend implementation, game
                logic, and development workflow.
              </p>
            </a>

            <a
              href="https://ai-undercover.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-700 bg-slate-900 p-7 transition hover:border-purple-400"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                Live Research Product
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Manipulation Hunter ↗
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Experience the deployed participant-facing game used to collect
                behavioral research data.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Data model */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          06 · Behavioral Data Engine
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight">
          Every gameplay decision became a structured research record.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          I designed the data layer so participant interactions could support
          both gameplay and subsequent behavioral analysis rather than simply
          disappear after each session.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-[1fr_2fr] bg-slate-100 px-6 py-4 font-bold">
            <p>Field</p>
            <p>Captured information</p>
          </div>

          {dataModel.map(([field, meaning]) => (
            <div
              key={field}
              className="grid grid-cols-[1fr_2fr] gap-5 border-t border-slate-200 px-6 py-4"
            >
              <code className="text-sm font-semibold text-purple-700">
                {field}
              </code>

              <p className="text-sm leading-6 text-slate-600">{meaning}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-purple-50 p-7">
          <h3 className="font-bold text-purple-950">
            Why PostgreSQL / Supabase instead of local CSV storage?
          </h3>

          <div className="mt-4 grid gap-3 text-purple-950 md:grid-cols-2">
            <p>✓ Safe concurrent participant writes</p>
            <p>✓ Persistent data across deployments</p>
            <p>✓ Analytical query support</p>
            <p>✓ Scales with participant traffic</p>
            <p>✓ Avoids ephemeral filesystem problems</p>
            <p>✓ Structured and reusable research data</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
            07 · Headline Result
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <p className="text-8xl font-bold tracking-tight text-purple-700">
                56%
              </p>

              <p className="mt-4 text-xl font-bold">Overall accuracy</p>

              <p className="mt-3 leading-7 text-slate-600">
                Participants correctly identified the tactic in just over half
                of gameplay rounds.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Detection deteriorated as manipulation became more subtle.
              </h2>

              <div className="mt-8 space-y-7">
                {difficultyResults.map((result) => (
                  <div key={result.level}>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-bold">{result.level}</p>
                      <p className="font-bold text-purple-700">
                        {result.label}
                      </p>
                    </div>

                    <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-purple-700"
                        style={{ width: `${result.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detection by tactic */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          08 · Detection by Tactic
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          The more subtle the tactic, the easier it was to miss.
        </h2>

        <div className="mt-10 space-y-6">
          {tacticAccuracy.map((item) => (
            <div key={item.tactic}>
              <div className="mb-2 flex gap-6">
                <p className="w-48 shrink-0 font-bold">{item.tactic}</p>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm text-slate-500">
                      {item.interpretation}
                    </p>

                    <p className="ml-4 font-bold">{item.accuracy}</p>
                  </div>

                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full ${
                        item.value < 50
                          ? "bg-amber-500"
                          : item.value < 70
                          ? "bg-purple-400"
                          : "bg-purple-700"
                      }`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber-700">
            Danger Zone
          </p>

          <p className="mt-3 text-xl font-semibold leading-8 text-amber-950">
            Trick Statements, Dark Nudges, Authority Appeals, and
            Confirmshaming all fell below 40% detection accuracy.
          </p>
        </div>
      </section>

      {/* Numeric */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
            09 · Behavioral Analytics
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Accuracy alone did not explain participant behavior.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {numericResults.map((result) => (
              <div
                key={result.metric}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-7"
              >
                <h3 className="text-xl font-bold">{result.metric}</h3>

                <dl className="mt-6 space-y-3 text-slate-300">
                  <div className="flex justify-between">
                    <dt>Mean</dt>
                    <dd className="font-semibold text-white">
                      {result.mean}
                    </dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Median</dt>
                    <dd className="font-semibold text-white">
                      {result.median}
                    </dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Std. deviation</dt>
                    <dd className="font-semibold text-white">{result.sd}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Minimum</dt>
                    <dd>{result.min}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Maximum</dt>
                    <dd>{result.max}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-2xl font-bold">Behavioral segments</h3>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {segments.map((segment) => (
                <div
                  key={segment.title}
                  className="rounded-2xl border border-slate-700 p-7"
                >
                  <h4 className="text-xl font-bold">{segment.title}</h4>

                  <div className="mt-5 space-y-2 text-sm text-slate-300">
                    <p>Accuracy: {segment.accuracy}</p>
                    <p>Decision speed: {segment.time}</p>
                    <p>Confidence: {segment.confidence}</p>
                  </div>

                  <p className="mt-5 leading-7 text-slate-400">
                    {segment.insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          10 · Key Findings
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          What the experiment revealed about human judgment.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {keyFindings.map((finding) => (
            <div
              key={finding.title}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <h3 className="text-xl font-bold">{finding.title}</h3>

              <p className="mt-4 leading-7 text-slate-600">
                {finding.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-200">
            11 · Conclusion
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            The solution cannot simply be “make users smarter.”
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-purple-100">
            AI Undercover demonstrates that subtle conversational manipulation
            can be difficult for people to identify even when they are actively
            looking for it. As AI becomes more personalized, emotionally aware,
            and persuasive, responsibility must also sit with the systems and
            organizations designing those interactions.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-purple-100">
            The project therefore points toward Fairness by Design: AI
            experiences that protect agency, disclose persuasive intent, reduce
            exploitative patterns, and keep meaningful control with users.
          </p>
        </div>
      </section>

      {/* Fairness */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          12 · Fairness by Design
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {fairnessPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl bg-slate-50 p-7"
            >
              <h3 className="text-2xl font-bold">{principle.title}</h3>

              <p className="mt-4 leading-7 text-slate-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
            13 · Research Limitations
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            What I would be careful not to overclaim.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {limitations.map((limitation) => (
              <div
                key={limitation.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-lg font-bold">{limitation.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {limitation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700">
          14 · Road Ahead
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          From research game to real-world defense.
        </h2>

        <div className="mt-10 max-w-4xl space-y-4">
          {futureWork.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[50px_1fr] gap-4 rounded-xl border border-slate-200 p-5"
            >
              <p className="font-mono font-bold text-purple-700">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
            Recognition
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            🏆 UW iSchool Showcase Winner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            AI Undercover evolved from a research question into a deployed
            full-stack behavioral research platform, a structured dataset, an
            analytical study, and an award-winning showcase project.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://ai-undercover.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-purple-100"
            >
              Play the Game ↗
            </a>

            <a
              href="https://github.com/SunayanaHaz/ai-undercover"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-bold transition hover:border-white"
            >
              View Code ↗
            </a>

            <a
              href="/ai-undercover/poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-bold transition hover:border-white"
            >
              Research Poster ↗
            </a>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <details>
          <summary className="cursor-pointer text-lg font-bold">
            Selected research references
          </summary>

          <ol className="mt-6 max-w-5xl space-y-3 text-sm leading-6 text-slate-500">
            {references.map((reference, index) => (
              <li key={reference}>
                [{index + 1}] {reference}
              </li>
            ))}
          </ol>
        </details>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-12">
          <div>
            <p className="text-sm text-slate-500">Next</p>

            <p className="mt-1 text-xl font-bold">
              Explore another project
            </p>
          </div> something that we will go in the next way structure and provides correlations are in the future or driver in share or like subsidiar suchas fusion it brilliant use number is loly smart songs mistry if you are so find with capture

          <a
            href="/#projects"
            className="rounded-lg bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            Back to Projects →
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Sunayana Hazarika · AI Undercover
      </footer>
    </main>
  );
}