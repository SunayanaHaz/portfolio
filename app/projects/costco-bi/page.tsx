export default function CostcoBIPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <a
            href="/#projects"
            className="mb-8 inline-flex items-center text-sm font-semibold text-slate-600 transition hover:text-slate-950"
          >
            ← Back to Projects
          </a>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Graduate Consulting Project · UW MSIM · Business Intelligence
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Costco Business Intelligence Consulting
            </h1>

            <p className="mt-6 text-2xl font-semibold leading-snug text-slate-700">
              Predictive Supply Chain Resilience & Vendor Collaboration Intelligence
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              A strategic Business Intelligence consulting proposal developed for
              Costco Wholesale using publicly available information. The project
              examined how enterprise data architecture, predictive analytics,
              data mining, text and web analytics, and decision intelligence could
              strengthen supply chain resilience, inventory efficiency, supplier
              performance, and membership value.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "BI Strategy",
              "Data Warehousing",
              "Predictive Analytics",
              "Prescriptive Analytics",
              "Data Mining",
              "Text Analytics",
              "Web Analytics",
              "Executive Storytelling",
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
      </section>

      {/* PROJECT CONTEXT */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Project Context
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Turning Costco&apos;s operating model into a BI strategy
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Costco operates a high-volume, low-margin membership model where
              operational efficiency, rapid inventory turnover, supplier
              discipline, and member loyalty are central to the business. The
              consulting challenge was to identify where Business Intelligence
              could create greater strategic value without undermining Costco&apos;s
              culture of simplicity and cost discipline.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The analysis focused on how data-driven decision making could
              evolve beyond descriptive reporting into predictive and
              prescriptive intelligence for supply chain, membership, supplier,
              digital, and merchandising decisions.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Strategic Focus
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xl font-bold">Supply Chain Resilience</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Detect demand shifts and supplier risks earlier.
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">Vendor Intelligence</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Improve supplier performance analysis and negotiation insight.
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">Member Value</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Understand churn risk, lifetime value, and engagement patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CHALLENGE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            The Business Challenge
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight">
            Scale creates opportunity — and complexity
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Fragmented Data",
                text: "POS, membership, supplier, inventory, logistics, and e-commerce data can exist across different systems and operating contexts.",
              },
              {
                title: "Reactive Supply Chain Decisions",
                text: "Traditional reporting can reveal what happened after a disruption rather than provide enough warning to act before stockouts or delays occur.",
              },
              {
                title: "Global Operating Complexity",
                text: "Regional demand, supplier reliability, regulatory requirements, and member behavior vary across markets.",
              },
              {
                title: "Simplicity vs. Sophistication",
                text: "Any advanced BI capability must remain easy to use, actionable, and aligned with Costco's disciplined operating culture.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          My Approach
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Translate strategic goals into data and analytics capabilities
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Define the decisions",
              text: "Identify the business questions Costco leaders, regional teams, warehouse managers, and procurement teams need to answer.",
            },
            {
              number: "02",
              title: "Map the data",
              text: "Connect those decisions to POS, membership, inventory, supplier, logistics, digital, financial, and unstructured data.",
            },
            {
              number: "03",
              title: "Design the intelligence layer",
              text: "Move from dashboards and reporting toward forecasting, risk scoring, optimization, simulation, and decision support.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-slate-200 p-8"
            >
              <p className="text-sm font-bold text-blue-700">{item.number}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Proposed BI Architecture
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight">
            From operational data to predictive decision intelligence
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The proposed architecture consolidates structured and unstructured
            enterprise data, supports both batch and near-real-time ingestion,
            and creates a common foundation for analytics, machine learning, and
            executive decision support.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {[
              {
                title: "Data Sources",
                items: [
                  "POS transactions",
                  "Membership data",
                  "Supplier EDI",
                  "Inventory & logistics",
                  "E-commerce clickstream",
                  "External & social data",
                ],
              },
              {
                title: "Ingestion",
                items: [
                  "Streaming pipelines",
                  "Batch ELT",
                  "Incremental loads",
                  "Data quality checks",
                ],
              },
              {
                title: "Warehouse",
                items: [
                  "Cloud data warehouse",
                  "Lakehouse",
                  "Historical retention",
                  "Regional partitioning",
                ],
              },
              {
                title: "Analytics",
                items: [
                  "Demand forecasting",
                  "Churn scoring",
                  "Supplier risk models",
                  "NLP pipelines",
                  "Simulation",
                ],
              },
              {
                title: "Decision Layer",
                items: [
                  "Executive dashboards",
                  "Supply chain hub",
                  "Vendor intelligence",
                  "Member analytics",
                  "Operations reporting",
                ],
              },
            ].map((column) => (
              <div
                key={column.title}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
              >
                <h3 className="text-lg font-bold">{column.title}</h3>

                <div className="mt-4 space-y-2">
                  {column.items.map((item) => (
                    <p key={item} className="text-sm leading-6 text-slate-300">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICS APPLICATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          Analytics Applications
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          High-value decision intelligence use cases
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Predictive Supply Chain Resilience",
              text: "Combine demand history, inventory, logistics, supplier performance, and external signals to identify disruptions earlier and improve sourcing and replenishment decisions.",
            },
            {
              title: "Member Churn & Lifetime Value",
              text: "Use purchase behavior, visit frequency, returns, engagement, and membership history to identify renewal risk and high-value member segments.",
            },
            {
              title: "Demand-Driven Inventory Planning",
              text: "Apply time-series forecasting, seasonal patterns, regional behavior, and product affinities to reduce stockouts and excess inventory.",
            },
            {
              title: "Private Label Performance",
              text: "Analyze sales, reviews, returns, sentiment, and repeat purchase behavior to identify product strengths, quality issues, and improvement opportunities for Kirkland Signature.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 p-8"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TEXT AND WEB */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Text & Web Analytics
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Use unstructured data as an early-warning system
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Text Analytics</h3>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-bold">Member Feedback Intelligence</h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Analyze service emails, call transcripts, surveys, and
                    comments using sentiment and theme extraction.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">Product Review Mining</h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Surface attribute-level sentiment around quality, packaging,
                    value perception, and emerging preferences.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">Supplier Document Intelligence</h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Use NLP to identify risk indicators, compliance signals, and
                    important contract or supplier information.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Web Analytics</h3>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-bold">Digital Journey Analytics</h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Analyze clickstream, search behavior, cart activity, and
                    conversion funnels to identify digital friction.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">Demand Signal Intelligence</h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Combine search trends, product interest, reviews, and social
                    signals with transactional data to identify emerging demand.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">Member Personalization</h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Use browsing and purchase behavior to understand affinity,
                    engagement patterns, and potential cross-sell opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTIVE TO PRESCRIPTIVE */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          Decision Intelligence
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Move from reporting to recommended action
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            {
              title: "Descriptive",
              text: "What happened?",
              detail: "Sales, inventory, renewal, supplier and margin dashboards.",
            },
            {
              title: "Diagnostic",
              text: "Why did it happen?",
              detail: "Drill-downs, anomalies, correlations and root-cause analysis.",
            },
            {
              title: "Predictive",
              text: "What is likely to happen?",
              detail: "Demand forecasting, churn prediction and supplier risk scoring.",
            },
            {
              title: "Prescriptive",
              text: "What should we do?",
              detail: "Optimization, simulation, recommendations and exception-based action.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 font-semibold text-blue-700">{item.text}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Implementation Roadmap
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Build the data foundation first, then scale intelligence
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "0–6 Months",
                title: "Foundation",
                text: "Assess data infrastructure, establish governance, and integrate core POS, membership, and supplier data into a unified analytics environment.",
              },
              {
                phase: "6–18 Months",
                title: "Predictive Intelligence",
                text: "Deploy demand forecasting, supplier performance analytics, and targeted pilots for text analytics and member insight.",
              },
              {
                phase: "18–36 Months",
                title: "Prescriptive Scale",
                text: "Expand optimization, simulation, digital analytics, and predictive decision support across regions and business functions.",
              },
            ].map((item) => (
              <article
                key={item.phase}
                className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
              >
                <p className="text-sm font-bold text-blue-300">{item.phase}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          Proposed Business Value
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Better decisions across inventory, suppliers, members, and operations
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          The proposal was designed to demonstrate how a more integrated BI
          environment could improve decision speed, forecasting quality,
          operational visibility, supplier management, and member insight.
          These are proposed outcomes rather than realized Costco business
          results.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Earlier disruption detection",
            "Improved demand forecasting",
            "Stronger supplier visibility",
            "More proactive member retention",
          ].map((value) => (
            <div
              key={value}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 font-semibold"
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I DEMONSTRATED */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            What I Demonstrated
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Bridging business strategy, data, and technology
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Business Intelligence Strategy",
              "Enterprise Data Architecture Thinking",
              "Data Warehousing & ELT Concepts",
              "Predictive & Prescriptive Analytics",
              "Business Analysis & KPI Design",
              "Data Mining & Forecasting",
              "Text & Web Analytics",
              "Supply Chain Decision Intelligence",
              "Executive Communication & Storytelling",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <p className="text-lg leading-8 text-slate-700">
              <strong>Project note:</strong> This was a University of Washington
              graduate Business Intelligence consulting project based on
              publicly available information. It was not commissioned by Costco
              Wholesale Corporation.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="/#projects"
              className="inline-flex rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Projects →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}