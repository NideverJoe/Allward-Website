type Side = "people" | "solutions" | "both";

interface Step {
  n: number;
  people: number;
  solutions: number;
  grow: Side;
  label: string;
}

const STEPS: Step[] = [
  {
    n: 1,
    people: 1,
    solutions: 1,
    grow: "solutions",
    label: "Identify a specific problem for a specific individual.",
  },
  {
    n: 2,
    people: 3,
    solutions: 1,
    grow: "people",
    label: "Expand to additional individuals who share that problem.",
  },
  {
    n: 3,
    people: 3,
    solutions: 3,
    grow: "solutions",
    label: "Expand the solution to address more problems for that individual.",
  },
  {
    n: 4,
    people: 6,
    solutions: 3,
    grow: "people",
    label: "Grow to more individuals, solving more problems for more people.",
  },
  {
    n: 5,
    people: 6,
    solutions: 6,
    grow: "solutions",
    label: "Move beyond solving problems to enhancing standard use.",
  },
  {
    n: 6,
    people: 10,
    solutions: 10,
    grow: "both",
    label: "Open it up to the general population.",
  },
];

function DotCluster({
  count,
  active,
  final,
}: {
  count: number;
  active: boolean;
  final: boolean;
}) {
  const dots = Math.min(count, 10);
  const size = dots >= 7 ? 9 : dots >= 4 ? 11 : 14;

  return (
    <div
      className="flex flex-wrap gap-1 justify-center items-center"
      style={{ width: "56px", minHeight: "40px" }}
      aria-hidden="true"
    >
      {Array.from({ length: dots }).map((_, i) => (
        <span
          key={i}
          className="block rounded-full transition-colors"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: final
              ? "#F4A261"
              : active
              ? "#1B998B"
              : "#14213D",
          }}
        />
      ))}
    </div>
  );
}

export default function AllwardMethod() {
  return (
    <div className="w-full">
      {/* Desktop layout */}
      <div className="hidden md:block" aria-hidden="true">
        {/* Column headers */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-4 gap-4">
          <div className="text-center">
            <span className="text-xs font-bold text-navy uppercase tracking-widest">People</span>
          </div>
          <div className="w-52" />
          <div className="text-center">
            <span className="text-xs font-bold text-navy uppercase tracking-widest">Problems &amp; Solutions</span>
          </div>
        </div>

        {STEPS.map((step, idx) => {
          const isFinal = step.n === 6;
          const peopleActive = step.grow === "people" || step.grow === "both";
          const solutionsActive = step.grow === "solutions" || step.grow === "both";
          const isLast = idx === STEPS.length - 1;

          return (
            <div
              key={step.n}
              className={`grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-4 ${!isLast ? "border-b border-slate/10" : ""}`}
            >
              {/* People side */}
              <div className="flex justify-end items-center">
                {peopleActive && !isFinal && (
                  <span className="text-xs text-teal font-semibold mr-2 leading-none">growing</span>
                )}
                <DotCluster count={step.people} active={peopleActive} final={isFinal} />
              </div>

              {/* Center: step number + label */}
              <div className="w-52 flex items-center gap-3">
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-navy text-white text-xs font-bold"
                  aria-label={`Step ${step.n}`}
                >
                  {step.n}
                </span>
                <p className="text-xs text-slate leading-snug">{step.label}</p>
              </div>

              {/* Solutions side */}
              <div className="flex justify-start items-center">
                <DotCluster count={step.solutions} active={solutionsActive} final={isFinal} />
                {solutionsActive && !isFinal && (
                  <span className="text-xs text-teal font-semibold ml-2 leading-none">growing</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile layout: accessible numbered list */}
      <ol className="md:hidden space-y-4">
        {STEPS.map((step) => (
          <li key={step.n} className="flex gap-4 items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold mt-0.5">
              {step.n}
            </span>
            <p className="text-slate leading-relaxed">{step.label}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
