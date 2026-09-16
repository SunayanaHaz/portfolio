"use client";

import Link from "next/link";

const skills = [
  "Python",
  "Pandas",
  "Scikit-learn",
  "Random Forest",
  "TF-IDF",
  "K-Means Clustering",
  "Power BI",
  "Data Analysis",
  "Machine Learning",
  "WCAG 2.1",
];

const findings = [
  {
    title: "Accessibility failures were unevenly distributed",
    text: "News & Media showed the highest observed concentration of accessibility violations in the analyzed dataset, highlighting how accessibility risk can vary substantially across digital domains.",
  },
  {
    title: "A small set of barriers appeared repeatedly",
    text: "Color contrast, landmarks and regions, duplicate IDs, link names, and heading structure emerged as recurring accessibility problems across industries.",
  },
  {
    title: "Syntactic violations dominated",
    text: "Most observed violations were syntactic, while semantic issues occurred less frequently but were concentrated particularly in Education and Technology.",
  },
  {
    title: "Severity changed remediation priorities",
    text: "Raw violation counts alone did not capture user impact, so the analysis incorporated severity-weighted prioritization to identify pages where remediation could matter most.",
  },
];

const clusters = [
  {
    number: "01",
    title: "Contrast-Heavy Pages",
    description:
      "Pages dominated by color-contrast violations, creating significant barriers for users with low vision.",
  },
  {
    number: "02",
    title: "Navigation Confusion",
    description:
      "Pages with missing landmarks and regions that make orientation and navigation harder for screen-reader users.",
  },
  {
    number: "03",
    title: "Structure-Broken Pages",
    description:
      "Pages with duplicate IDs and structural HTML problems that can interfere with assistive technologies.",
  },
  {
    number: "04",
    title: "Heading Disorder",
    description:
      "Pages with incorrect heading hierarchy that make content structure harder to understand and navigate.",
  },
];

const recommendations = [
  {
    title: "Fix color contrast",
    coverage: "747 violations",
    description:
      "Enforce WCAG contrast requirements and integrate automated contrast testing into design and CI workflows.",
  },
  {
    title: "Add semantic landmarks",
    coverage: "869 violations",
    description:
      "Use semantic elements such as nav, main, and footer consistently to improve assistive navigation.",
  },
  {
    title: "Ensure meaningful link text",
    coverage: "423 violations",
    description:
      "Replace vague link labels with descriptive actions and destinations and provide appropriate alternative text for linked images.",
  },
  {
    title: "Validate HTML structure",
    coverage: "763 violations",
    description:
      "Maintain unique IDs and logical heading hierarchy to improve structural interpretation by assistive technologies.",
  },
];

export default function Data4LyfPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            ← Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                DubsTech Datathon 2026
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Technology Track
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Team Data4Lyf
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Data4Lyf
            </h1>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-700 md:text-3xl">
              An Accessibility Analysis of Real-World Websites
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              A data-driven analysis of real-world web accessibility failures
              combining exploratory analytics, machine learning, severity-based
              prioritization, clustering, and Power BI to identify systematic
              barriers and translate them into actionable remediation priorities.
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
    href="https://github.com/SunayanaHaz/Data4lyf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
  >
    View GitHub Repository ↗
  </a>

  <a
    href="https://sunayanahaz.github.io/Dataforlife.github.io/"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
  >
    View Live Project ↗
  </a>
</div>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-5 md:grid-cols-4">
          <MetricCard value="3,524" label="Violation Records" />
          <MetricCard value="~590" label="Web Pages" />
          <MetricCard value="5" label="K-Means Clusters" />
          <MetricCard value="~80%" label="Remediation Coverage" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <SectionLabel>01 · Problem</SectionLabel>

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Technology is intended to be inclusive. Digital experiences often
              are not.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Accessibility barriers are often invisible to designers and
              developers but can create substantial challenges for people who
              rely on screen readers, keyboard navigation, or accessible visual
              design.
            </p>

            <p>
              The project analyzed real-world website accessibility violations
              to understand where failures occur most frequently, which types of
              violations dominate, and which pages may create the greatest
              accessibility barriers.
            </p>

            <p>
              Rather than optimizing for model complexity, the team focused on
              interpretability, human impact, severity-based prioritization, and
              recommendations organizations could act on.
            </p>
          </div>
        </div>
      </section>

      {/* DATASET */}
      <section className="mt-8 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <SectionLabel dark>02 · Data & Preparation</SectionLabel>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Turning raw accessibility records into an analytical dataset
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                The AccessGuru dataset contained 3,524 accessibility violation
                records across approximately 590 unique web pages. The data
                included domain categories, violation types, accessibility
                categories, severity indicators, impact labels, and page
                identifiers.
              </p>
            </div>

            <div className="grid gap-4">
              <DarkCard
                title="Standardized categories"
                text="Normalized inconsistent domain labels to create comparable categories across the dataset."
              />
              <DarkCard
                title="Removed failed scrapes"
                text="Excluded unsuccessfully scraped pages before analytical aggregation."
              />
              <DarkCard
                title="Aggregated page-level patterns"
                text="Grouped violations at page and domain levels to support comparative analysis and clustering."
              />
              <DarkCard
                title="Validated severity fields"
                text="Checked consistency between violation scores and impact labels before using them for prioritization."
              />
            </div>
          </div>

          <p className="mt-10 max-w-4xl border-l-2 border-slate-600 pl-5 text-sm leading-6 text-slate-400">
            Analytical assumption: the dataset represents reported violations,
            so findings describe patterns in the observed dataset rather than a
            complete census of all accessibility failures on the web.
          </p>
        </div>
      </section>

      {/* EDA */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionLabel>03 · Exploratory Analysis</SectionLabel>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Where does digital accessibility fail most?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Exploratory analysis revealed that accessibility failures were not
            evenly distributed. Domain type and recurring implementation
            patterns both influenced the observed accessibility burden.
          </p>
        </div>

        {/* VISUAL 1 */}
        <Figure
          src="/data4lyf/violations-by-domain.png"
          alt="Accessibility violations by website domain"
          caption="Observed accessibility violations by domain. News & Media showed the highest violation volume in the analyzed dataset."
        />

        {/* VISUAL 2 */}
        <Figure
          src="/data4lyf/common-barriers.png"
          alt="Most common accessibility barriers"
          caption="The most common accessibility barriers included enhanced color contrast, regions and landmarks, color contrast, duplicate IDs, link names, and heading-related issues."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {findings.map((finding) => (
            <div
              key={finding.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {finding.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{finding.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RISK SCORE */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <SectionLabel>04 · Decision Intelligence</SectionLabel>

          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Severity matters more than volume
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A page with fewer violations can still create greater
                accessibility barriers if those violations are more severe.
                The analysis therefore introduced a severity-weighted Risk
                Score to complement raw violation counts and help prioritize
                remediation.
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                The objective was not simply to identify which pages had the
                most errors, but to translate accessibility data into a more
                useful prioritization mechanism.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Severity-Weighted Risk Score
              </p>

              <div className="mt-8 space-y-4">
                <RiskRow weight="5×" label="Critical" />
                <RiskRow weight="4×" label="Serious" />
                <RiskRow weight="3×" label="Moderate" />
                <RiskRow weight="2×" label="Minor" />
              </div>

              <div className="mt-8 border-t border-slate-700 pt-6">
                <p className="text-sm leading-6 text-slate-300">
                  The scoring framework converts violation severity into a
                  prioritization signal so teams can focus remediation where
                  accessibility impact may be greatest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ML */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionLabel>05 · Machine Learning</SectionLabel>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Extending descriptive analytics with machine learning
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The project explored machine-learning approaches for identifying
            violation types, predicting accessibility impact, and detecting
            recurring page-level failure patterns.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <MethodCard
            number="01"
            title="Violation Type Prediction"
            text="Combined affected HTML elements and violation descriptions into text features, then used TF-IDF with a Random Forest classifier across common violation classes."
          />

          <MethodCard
            number="02"
            title="Impact Prediction"
            text="Used encoded violation type, violation count, domain category, and violation score as features for a Random Forest model predicting accessibility impact."
          />

          <MethodCard
            number="03"
            title="Pattern Discovery"
            text="Aggregated violation profiles at the page level, standardized features, and applied K-Means clustering to identify recurring accessibility failure patterns."
          />
        </div>
      </section>

      {/* CLUSTERING */}
      <section className="bg-[#eef2f7]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <SectionLabel>06 · Pattern Discovery</SectionLabel>

          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Accessibility problems formed recurring families
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                K-Means clustering with k=5 was applied to standardized
                page-level violation profiles. The resulting silhouette score
                was 0.334, indicating moderate separation in the observed
                real-world data.
              </p>

              <div className="mt-8 inline-flex items-center gap-5 rounded-2xl bg-white px-6 py-5 shadow-sm">
                <div>
                  <p className="text-3xl font-bold text-slate-950">0.334</p>
                  <p className="text-sm text-slate-500">Silhouette Score</p>
                </div>

                <div className="h-12 w-px bg-slate-200" />

                <div>
                  <p className="text-3xl font-bold text-slate-950">5</p>
                  <p className="text-sm text-slate-500">Clusters</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {clusters.map((cluster) => (
                <div
                  key={cluster.number}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-bold text-blue-600">
                    {cluster.number}
                  </p>
                  <h3 className="mt-3 text-lg font-bold">{cluster.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {cluster.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
            <p className="font-semibold text-slate-900">
              Analytical implication
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              Recurring problem families suggest that accessibility remediation
              can be approached systematically. Instead of treating every
              violation as an isolated defect, teams can build repeatable
              remediation patterns around common failure modes.
            </p>
          </div>
        </div>
      </section>

      {/* POWER BI */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionLabel>07 · Business Intelligence Layer</SectionLabel>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Translating analysis into an interactive decision layer
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Power BI was used to validate and communicate the analytical
            findings through an interactive dashboard that allowed users to
            explore domain-level accessibility patterns, common violations,
            and page-level risk.
          </p>
        </div>

        {/* VISUAL 3 */}
        <Figure
          src="/data4lyf/power-bi-dashboard.png"
          alt="Data4Lyf Power BI accessibility dashboard"
          caption="Power BI dashboard with domain filtering, violation analysis, and page-level accessibility risk scores."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <SmallCard
            title="Domain Exploration"
            text="Filter accessibility findings across website categories."
          />
          <SmallCard
            title="Barrier Analysis"
            text="Identify recurring violation types within selected domains."
          />
          <SmallCard
            title="Risk Prioritization"
            text="Surface individual pages with higher severity-weighted risk."
          />
        </div>
      </section>

      {/* HUMAN IMPACT */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <SectionLabel dark>08 · Human Impact</SectionLabel>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The data represents barriers experienced by real people
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              The analysis connected technical violations to the users most
              likely to experience their consequences, keeping human impact at
              the center of the analytical interpretation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <ImpactCard
              issue="Color contrast"
              user="People with low vision"
              impact="Text and interface elements can become difficult or impossible to perceive."
            />
            <ImpactCard
              issue="Missing link names"
              user="Screen-reader users"
              impact="Links can lose meaningful context or purpose."
            />
            <ImpactCard
              issue="Missing landmarks"
              user="Blind and screen-reader users"
              impact="Page orientation and navigation can become substantially harder."
            />
            <ImpactCard
              issue="Duplicate IDs"
              user="Assistive technology users"
              impact="Page structure can be interpreted incorrectly by assistive technologies."
            />
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionLabel>09 · Recommendations</SectionLabel>

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Four remediation practices address nearly 80% of observed
              violations
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The analysis translated recurring failure patterns into a
              practical remediation roadmap. Together, these four categories
              covered 2,802 of the 3,524 observed violation records.
            </p>

            <div className="mt-8 rounded-2xl bg-blue-600 p-7 text-white">
              <p className="text-5xl font-bold">79.5%</p>
              <p className="mt-2 text-blue-100">
                of observed violation records covered by the four recommended
                remediation categories
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {recommendations.map((recommendation, index) => (
              <div
                key={recommendation.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-bold text-slate-900">
                        {recommendation.title}
                      </h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {recommendation.coverage}
                      </span>
                    </div>

                    <p className="mt-2 leading-7 text-slate-600">
                      {recommendation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DEMONSTRATED */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <SectionLabel>10 · What I Demonstrated</SectionLabel>

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                From raw data to decision-ready insight
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Capability
                title="Data Analysis"
                text="Cleaned, standardized, aggregated, and interpreted a real-world accessibility dataset."
              />
              <Capability
                title="Machine Learning"
                text="Applied TF-IDF, Random Forest classification, feature encoding, standardization, and K-Means clustering."
              />
              <Capability
                title="Business Intelligence"
                text="Translated analytical outputs into an interactive Power BI decision layer."
              />
              <Capability
                title="Human-Centered Analytics"
                text="Connected technical accessibility defects to their potential consequences for people using assistive technologies."
              />
              <Capability
                title="Decision Frameworks"
                text="Moved beyond raw counts by incorporating severity and remediation prioritization."
              />
              <Capability
                title="Executive Communication"
                text="Converted technical findings into concise patterns, implications, and actionable recommendations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionLabel>11 · Technical Stack</SectionLabel>

        <div className="grid gap-5 md:grid-cols-4">
          <TechCard
            title="Analysis"
            items={["Python", "Pandas", "NumPy"]}
          />
          <TechCard
            title="Machine Learning"
            items={["Scikit-learn", "Random Forest", "K-Means"]}
          />
          <TechCard
            title="Feature Engineering"
            items={["TF-IDF", "Label Encoding", "StandardScaler"]}
          />
          <TechCard
            title="Visualization"
            items={["Power BI", "Python Visualization"]}
          />
        </div>

      </section>

      {/* PROJECT NOTE */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="rounded-2xl border border-slate-200 bg-[#eef2f7] p-7">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
            Project Note
          </p>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            This project was developed by Sunayana Hazarika for the DubsTech
            Datathon 2026 Technology Track. Findings represent
            patterns in the supplied AccessGuru dataset and should not be
            interpreted as a comprehensive accessibility assessment of the
            organizations or websites represented in the dataset.
          </p>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 md:px-10">
          <Link
            href="/#projects"
            className="font-semibold text-slate-600 transition hover:text-slate-950"
          >
            ← Back to Projects
          </Link>

          <span className="text-sm text-slate-400">
            AI · Data · Business Intelligence
          </span>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                               COMPONENTS                                   */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-8 text-sm font-bold uppercase tracking-[0.2em] ${
        dark ? "text-blue-300" : "text-blue-600"
      }`}
    >
      {children}
    </p>
  );
}

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-3xl font-bold tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
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
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-2 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-white p-4 md:p-8">
        <img
          src={src}
          alt={alt}
          className="mx-auto h-auto w-full max-w-5xl object-contain"
        />
      </div>

      <figcaption className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-sm leading-6 text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

function RiskRow({
  weight,
  label,
}: {
  weight: string;
  label: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-slate-900 px-5 py-4">
      <span className="font-medium text-slate-300">{label}</span>
      <span className="text-xl font-bold text-white">{weight}</span>
    </div>
  );
}

function MethodCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <p className="text-sm font-bold text-blue-600">{number}</p>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function SmallCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function ImpactCard({
  issue,
  user,
  impact,
}: {
  issue: string;
  user: string;
  impact: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm font-semibold text-blue-300">{issue}</p>
      <h3 className="mt-3 text-xl font-bold text-white">{user}</h3>
      <p className="mt-3 leading-7 text-slate-400">{impact}</p>
    </div>
  );
}

function Capability({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-6">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function TechCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-slate-900">{title}</h3>

      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <p key={item} className="text-sm text-slate-600">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}