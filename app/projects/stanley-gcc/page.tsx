export default function StanleyGCCPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <a
            href="/#projects"
            className="mb-8 inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            ← Back to Projects
          </a>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300">
              1st Place · EY × Stanley 1913 Case Challenge
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              International Expansion Strategy · 2026
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Stanley 1913 GCC Market Entry
            </h1>

            <p className="mt-6 text-2xl font-semibold leading-snug text-slate-200">
              Designing a phased international expansion strategy for the Gulf
              Cooperation Council
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Developed a market-entry strategy for Stanley 1913 centered on a
              UAE regional hub, followed by expansion into Saudi Arabia, Qatar,
              and the broader GCC. The strategy integrated market analysis,
              operating-model design, localization, channel strategy, financial
              modeling, implementation planning, and risk mitigation.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Market Entry Strategy",
              "International Expansion",
              "Market Analysis",
              "Financial Modeling",
              "Go-to-Market Strategy",
              "Risk Analysis",
              "Executive Strategy",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
            {/* CASE MODEL */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
              Case-Model Projection
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Illustrative financial scenario developed for the case competition
              — not actual Stanley business results.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-3xl font-bold tracking-tight text-slate-950">
                $13–14M
              </p>
              <p className="mt-2 font-semibold text-slate-700">
                Year-5 GCC Revenue
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Projected regional revenue under the case model
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-3xl font-bold tracking-tight text-slate-950">
                $1.5M
              </p>
              <p className="mt-2 font-semibold text-slate-700">
                Initial Investment
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Modeled launch, setup, and working-capital investment
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-3xl font-bold tracking-tight text-slate-950">
                Year 3
              </p>
              <p className="mt-2 font-semibold text-slate-700">
                Cumulative EBIT Breakeven
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Projected breakeven point under the case assumptions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
              Strategic Context
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Diversifying beyond a maturing North American growth engine
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The case examined how Stanley 1913 could reduce geographic
              concentration and build its next growth platform as the North
              American hydration category began normalizing after a period of
              exceptional growth.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The strategic question was not simply where Stanley could sell
              more products. It was where the brand could transfer its equity,
              preserve premium positioning, build an efficient operating model,
              and establish a scalable regional footprint.
            </p>
          </div>

          <div className="rounded-3xl bg-amber-50 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
              Core Decision
            </p>

            <p className="mt-5 text-2xl font-bold leading-snug">
              Where should Stanley build its next international growth platform?
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              The analysis compared international expansion against alternative
              growth paths and selected the GCC as the geographic opportunity
              to develop further.
            </p>
          </div>
        </div>
      </section>

      {/* WHY GCC */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
            Strategy Decision Analysis
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Why the GCC?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            The recommendation was based on the intersection of market
            attractiveness, consumer fit, operating economics, existing brand
            presence, and Stanley&apos;s need for geographic diversification.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Premium Consumer Base",
                text: "Affluent, digitally engaged consumers create a strong environment for premium lifestyle and hydration products.",
              },
              {
                number: "02",
                title: "Climate-Product Fit",
                text: "Extreme heat makes insulation and hydration performance functionally relevant in everyday life.",
              },
              {
                number: "03",
                title: "Regional Growth",
                text: "UAE and Saudi Arabia provide large, expanding retail ecosystems with growing omnichannel adoption.",
              },
              {
                number: "04",
                title: "Existing Brand Foothold",
                text: "Stanley's existing UAE digital and social presence provided a foundation that could be formalized and scaled.",
              },
              {
                number: "05",
                title: "Logistics Advantage",
                text: "Dubai and Jebel Ali offer a potential regional distribution hub for serving multiple GCC markets.",
              },
              {
                number: "06",
                title: "Diversification",
                text: "A GCC platform creates a new geographic revenue engine rather than deepening dependence on the U.S. market.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-bold text-amber-700">{item.number}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATION */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
          Strategic Recommendation
        </p>

        <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight">
          Build a UAE hub, then expand through a phased GCC model
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Rather than entering six markets simultaneously, the strategy used a
          hub-and-spoke model designed to test demand, build operational
          capability, and reduce expansion risk before committing additional
          resources.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border-2 border-amber-500 p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Phase 1 · Year 1–2
            </p>
            <h3 className="mt-3 text-2xl font-bold">UAE Hub</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Establish the regional operating base, strengthen direct and
              premium retail channels, localize the brand, and validate the
              commercial model.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Phase 2 · Year 2–3
            </p>
            <h3 className="mt-3 text-2xl font-bold">Saudi Arabia + Qatar</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Extend the model into high-potential markets using localized
              campaigns, regional partnerships, e-commerce, and premium
              physical retail.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
              Phase 3 · Year 3–5
            </p>
            <h3 className="mt-3 text-2xl font-bold">Broader GCC</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Expand into Kuwait, Oman, and Bahrain while deepening the product
              portfolio and evaluating larger regional brand investments.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
            Operating Model
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            A hub-and-spoke model designed for regional scale
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Dubai&apos;s Jebel Ali Free Zone was proposed as the regional anchor,
            connecting international manufacturing with localized commercial
            execution across GCC markets.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {[
              {
                title: "Supply",
                text: "International manufacturing and GCC-bound inventory",
              },
              {
                title: "UAE Hub",
                text: "Regional headquarters, logistics, brand and partner management",
              },
              {
                title: "UAE",
                text: "DTC, premium retail, marketplaces and brand activation",
              },
              {
                title: "KSA + Qatar",
                text: "Localized market entry, retail partnerships and digital channels",
              },
              {
                title: "Rest of GCC",
                text: "Regional distribution into Kuwait, Oman and Bahrain",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
              >
                <h3 className="text-lg font-bold text-amber-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
          Go-to-Market Strategy
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Global brand, locally relevant execution
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Premium Channel Strategy",
              text: "Prioritize premium retail, controlled marketplace distribution, and DTC rather than broad mass-market expansion at launch.",
            },
            {
              title: "Arabic-First Localization",
              text: "Adapt content, packaging, influencer strategy, and campaign execution by market instead of treating the GCC as one homogeneous consumer segment.",
            },
            {
              title: "Climate-Led Positioning",
              text: "Shift the narrative from viral drinkware toward Stanley's insulation performance, durability, and relevance in extreme heat.",
            },
            {
              title: "Cultural Moments",
              text: "Use high-relevance regional moments such as Ramadan and major Saudi cultural events to build local resonance and trial.",
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
      {/* FINANCIAL MODEL & BI ANALYSIS */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">

          {/* SECTION HEADER */}
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
              Financial Model & BI Analysis
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Turning the market-entry strategy into a measurable growth model
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              I analyzed the five-year case-model revenue trajectory to evaluate
              growth velocity, annual revenue contribution, growth-rate
              deceleration, and the consistency of the modeled expansion path.
              The analysis below is based on the financial scenario presented
              in the final case presentation.
            </p>
          </div>

          {/* EXECUTIVE KPI CARDS */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-amber-200 bg-white p-7">
              <p className="text-4xl font-bold tracking-tight text-slate-950">
                $13.5M
              </p>
              <p className="mt-2 font-semibold text-slate-700">
                Year-5 GCC Revenue
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Projected under the case-model scenario
              </p>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-white p-7">
              <p className="text-4xl font-bold tracking-tight text-slate-950">
                $1.5M
              </p>
              <p className="mt-2 font-semibold text-slate-700">
                Initial Investment
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Modeled initial capital requirement
              </p>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-white p-7">
              <p className="text-4xl font-bold tracking-tight text-slate-950">
                Year 3
              </p>
              <p className="mt-2 font-semibold text-slate-700">
                Cumulative EBIT Breakeven
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Projected under the case assumptions
              </p>
            </div>
          </div>

          {/* REVENUE CHART */}
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                  Revenue Trend
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Projected GCC Revenue
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  USD millions · Case-model projection
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Year 1 → Year 5
                </p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  $3.0M → $13.5M
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex h-80 items-end justify-between gap-3 border-b border-slate-300 sm:gap-6">

                {[
                  {
                    year: "Y1",
                    value: "$3.0M",
                    height: "22.2%",
                  },
                  {
                    year: "Y2",
                    value: "$5.3M",
                    height: "39.3%",
                  },
                  {
                    year: "Y3",
                    value: "$8.0M",
                    height: "59.3%",
                  },
                  {
                    year: "Y4",
                    value: "$10.5M",
                    height: "77.8%",
                  },
                  {
                    year: "Y5",
                    value: "$13.5M",
                    height: "100%",
                  },
                ].map((item) => (
                  <div
                    key={item.year}
                    className="flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <p className="mb-3 text-xs font-bold text-slate-700 sm:text-sm">
                      {item.value}
                    </p>

                    <div
                      className="w-full max-w-20 rounded-t-xl bg-amber-500"
                      style={{ height: item.height }}
                    />

                    <p className="mt-3 pb-3 text-xs font-bold text-slate-500 sm:text-sm">
                      {item.year}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              Illustrative financial projection developed for the case
              competition. Figures are modeled scenarios and are not actual
              Stanley 1913 business results.
            </p>
          </div>

          {/* BI ANALYTICS KPI ROW */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-3xl font-bold text-slate-950">
                4.5×
              </p>
              <p className="mt-2 font-semibold">
                Revenue Scale
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Modeled revenue expansion from Year 1 to Year 5
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-3xl font-bold text-slate-950">
                45.6%
              </p>
              <p className="mt-2 font-semibold">
                Modeled CAGR
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Compound annual growth across the five-year model
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-3xl font-bold text-slate-950">
                +$2.62M
              </p>
              <p className="mt-2 font-semibold">
                Regression Trend
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Approximate incremental revenue per modeled year
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-3xl font-bold text-slate-950">
                0.998
              </p>
              <p className="mt-2 font-semibold">
                Linear Fit R²
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Descriptive fit of the five modeled revenue observations
              </p>
            </div>

          </div>

          {/* REGRESSION ANALYSIS */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">

            <div className="rounded-3xl bg-slate-950 p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">
                Regression Analysis
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Revenue = 0.20 + 2.62 × Year
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                A simple linear regression across the five modeled annual
                observations produces an R² of approximately 0.998. Within
                this case scenario, the revenue trajectory therefore follows
                an almost linear absolute growth pattern.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">
                  Analytical interpretation
                </p>
                <p className="mt-2 font-semibold leading-7 text-white">
                  The model adds approximately $2.62M of GCC revenue for each
                  additional modeled year.
                </p>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-400">
                Regression is used here descriptively, not as an independent
                forecast. The dataset contains only five observations and the
                observations themselves are case-model projections.
              </p>
            </div>

            {/* YOY GROWTH */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                Growth Velocity
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Percentage growth moderates as the revenue base scales
              </h3>

              <div className="mt-7 space-y-6">

                {[
                  {
                    period: "Y1 → Y2",
                    growth: "76.7%",
                    width: "100%",
                  },
                  {
                    period: "Y2 → Y3",
                    growth: "50.9%",
                    width: "66%",
                  },
                  {
                    period: "Y3 → Y4",
                    growth: "31.3%",
                    width: "41%",
                  },
                  {
                    period: "Y4 → Y5",
                    growth: "28.6%",
                    width: "37%",
                  },
                ].map((item) => (
                  <div key={item.period}>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-600">
                        {item.period}
                      </p>
                      <p className="font-bold text-slate-950">
                        {item.growth}
                      </p>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* DECISION INTELLIGENCE */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
              Decision Intelligence
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              What the model tells decision-makers
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                  1
                </div>

                <h4 className="text-lg font-bold">
                  Strong early acceleration
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Revenue grows 76.7% between Years 1 and 2 as the model begins
                  scaling beyond the initial UAE market foundation.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                  2
                </div>

                <h4 className="text-lg font-bold">
                  Stable absolute expansion
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Annual revenue additions remain in a relatively narrow
                  $2.3M–$3.0M range even as percentage growth naturally
                  moderates against a larger revenue base.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                  3
                </div>

                <h4 className="text-lg font-bold">
                  Stage-gated investment
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  With cumulative EBIT breakeven modeled in Year 3, expansion
                  decisions can be tied to measurable commercial and operating
                  milestones rather than geographic growth alone.
                </p>
              </div>

            </div>
          </div>

          {/* BI DASHBOARD / KPI FRAMEWORK */}
          <div className="mt-8 rounded-3xl bg-slate-950 p-8 text-white lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">
              BI Measurement Framework
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              KPIs I would monitor during market execution
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The financial model establishes the target trajectory. A
              management BI layer would then connect market, channel,
              customer, inventory, and financial performance to determine
              whether each expansion phase is meeting its entry criteria.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  category: "Growth",
                  metrics: "Revenue by market · YoY growth · Revenue per channel",
                },
                {
                  category: "Customer",
                  metrics: "CAC · Repeat purchase · NPS · Customer lifetime value",
                },
                {
                  category: "Operations",
                  metrics: "Sell-through · Inventory turnover · Stockouts · Lead time",
                },
                {
                  category: "Financial",
                  metrics: "Gross margin · EBIT · Marketing efficiency · Cumulative return",
                },
              ].map((item) => (
                <div
                  key={item.category}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
                >
                  <p className="font-bold text-amber-300">
                    {item.category}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.metrics}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* METHODOLOGY NOTE */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-100/50 p-6">
            <p className="text-sm leading-6 text-slate-700">
              <strong>Methodology note:</strong> CAGR, year-over-year growth,
              and linear regression were calculated from the five annual
              revenue projections in the final case presentation. Because the
              source series contains five modeled observations rather than
              realized historical results, the regression is presented as
              descriptive scenario analysis rather than a predictive forecast.
            </p>
          </div>

        </div>
      </section>

      {/* RISK */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
          Risk Framework
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Build mitigation into the strategy, not after it
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              risk: "Tariff & Landing-Cost Risk",
              mitigation:
                "Design regional logistics and sourcing choices around landed-cost economics and customs efficiency.",
            },
            {
              risk: "Counterfeit & Grey-Market Risk",
              mitigation:
                "Use authorized partners, IP protection, authentication, and marketplace monitoring.",
            },
            {
              risk: "Localization Risk",
              mitigation:
                "Create market-specific UAE, Saudi, and Qatar playbooks with localized content and partnerships.",
            },
            {
              risk: "Regulatory Complexity",
              mitigation:
                "Sequence market entry and establish specialist legal and compliance support before expansion.",
            },
            {
              risk: "Category Cooling",
              mitigation:
                "Position around Stanley's durability and product breadth rather than dependence on a single viral product.",
            },
            {
              risk: "Distribution Misalignment",
              mitigation:
                "Protect premium positioning through selective retail partnerships and controlled channel expansion.",
            },
          ].map((item) => (
            <div
              key={item.risk}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <h3 className="text-lg font-bold">{item.risk}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.mitigation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTION */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
            Execution Philosophy
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight">
            Stage investment against evidence
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Each phase was designed with performance gates before additional
            geographic expansion. The approach reduces the risk of committing
            simultaneously across six markets and creates opportunities to
            incorporate market learning into subsequent phases.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
              <p className="text-sm font-bold text-amber-300">VALIDATE</p>
              <h3 className="mt-3 text-xl font-bold">UAE</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Test demand, channel economics, brand resonance, and operating
                capability.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
              <p className="text-sm font-bold text-amber-300">EXPAND</p>
              <h3 className="mt-3 text-xl font-bold">KSA + Qatar</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Apply lessons while adapting execution to different consumer and
                regulatory environments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
              <p className="text-sm font-bold text-amber-300">SCALE</p>
              <h3 className="mt-3 text-xl font-bold">Full GCC</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Extend the operating model after regional economics and brand
                performance are demonstrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DEMONSTRATED */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
            What I Demonstrated
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Turning market intelligence into an executable strategy
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Market Entry Strategy",
              "Strategic Decision Analysis",
              "Market & Competitive Research",
              "Go-to-Market Planning",
              "Financial Modeling",
              "Operating Model Design",
              "Risk & Mitigation Planning",
              "International Expansion",
              "Executive Communication",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <p className="text-lg leading-8 text-slate-700">
              <strong>Project note:</strong> This work was developed for the
              2025–26 MOSAIC case competition as a strategic recommendation for
              Stanley 1913. Financial figures and business outcomes presented in
              the original analysis were modeled scenarios and should not be
              interpreted as actual Stanley results.
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