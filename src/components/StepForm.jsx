import { useMemo } from "react";

const questions = [
  {
    key: "age",
    label: "What is your age group?",
    options: [
      { label: "18-24", value: 21 },
      { label: "25-35", value: 30 },
      { label: "36-50", value: 42 },
      { label: "51-65", value: 58 },
      { label: "65+", value: 68 }
    ]
  },
  {
    key: "income",
    label: "What is your yearly household income?",
    options: [
      { label: "Below Rs. 2 lakh", value: 150000 },
      { label: "Rs. 2-5 lakh", value: 350000 },
      { label: "Rs. 5-8 lakh", value: 650000 },
      { label: "Above Rs. 8 lakh", value: 900000 }
    ]
  },
  {
    key: "occupation",
    label: "What best describes your occupation?",
    options: [
      { label: "Student", value: "Student" },
      { label: "Farmer", value: "Farmer" },
      { label: "Self-employed", value: "Self-employed" },
      { label: "Labourer", value: "Labourer" },
      { label: "Unemployed", value: "Unemployed" }
    ]
  },
  {
    key: "state",
    label: "Which state are you from?",
    options: [
      { label: "Delhi", value: "Delhi" },
      { label: "Karnataka", value: "Karnataka" },
      { label: "Maharashtra", value: "Maharashtra" },
      { label: "Tamil Nadu", value: "Tamil Nadu" },
      { label: "Uttar Pradesh", value: "Uttar Pradesh" }
    ]
  },
  {
    key: "category",
    label: "Choose a social category (optional)",
    options: [
      { label: "Skip this", value: "" },
      { label: "General", value: "General" },
      { label: "OBC", value: "OBC" },
      { label: "SC", value: "SC" },
      { label: "ST", value: "ST" },
      { label: "Minority", value: "Minority" }
    ]
  }
];

const StepForm = ({
  answers,
  currentStep,
  onSelect,
  onBack,
  onSubmit
}) => {
  const question = useMemo(() => questions[currentStep], [currentStep]);
  const isLastStep = currentStep === questions.length - 1;
  const selectedValue = answers[question.key];

  return (
    <section
      id="finder"
      className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur sm:p-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
              Scheme Finder
            </p>
            <h2 className="mt-2 font-display text-3xl text-forest">
              A few simple steps
            </h2>
          </div>
          <div className="rounded-full bg-mist px-4 py-2 text-sm text-forest">
            Step {currentStep + 1} of {questions.length}
          </div>
        </div>

        <div className="mb-8 h-2 overflow-hidden rounded-full bg-mist">
          <div
            className="h-full rounded-full bg-forest transition-all duration-500"
            style={{
              width: `${((currentStep + 1) / questions.length) * 100}%`
            }}
          />
        </div>

        <div className="animate-fade-up rounded-[1.5rem] bg-cream p-5 sm:p-6">
          <label className="mb-4 block text-xl font-semibold text-ink">
            {question.label}
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            {question.options.map((option) => {
              const isActive = selectedValue === option.value;

              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => onSelect(question.key, option.value)}
                  className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium ${
                    isActive
                      ? "border-forest bg-forest text-white shadow-md"
                      : "border-transparent bg-white text-ink shadow-sm hover:border-sand"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            disabled={currentStep === 0}
            className="rounded-full border border-forest/15 px-5 py-3 text-sm font-semibold text-forest disabled:cursor-not-allowed disabled:opacity-40"
          >
            Back
          </button>

          <button
            type="button"
            onClick={onSubmit}
            disabled={selectedValue === undefined}
            className="rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white shadow-sm disabled:cursor-not-allowed disabled:bg-forest/40"
          >
            {isLastStep ? "Show Results" : "Next Step"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepForm;
