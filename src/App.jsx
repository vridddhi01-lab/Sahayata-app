import { useRef, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ResultsSection from "./components/ResultsSection";
import StepForm from "./components/StepForm";
import { schemes } from "./data/schemes";
import { getMatchingSchemes } from "./utils/filterSchemes";

const initialAnswers = {};

function App() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const formRef = useRef(null);

  const handleStart = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSelect = (key, value) => {
    setAnswers((previous) => ({
      ...previous,
      [key]: value
    }));
  };

  const handleSubmitStep = () => {
    const stepKeys = ["age", "income", "occupation", "state", "category"];
    const activeKey = stepKeys[currentStep];

    if (answers[activeKey] === undefined) {
      return;
    }

    if (currentStep < stepKeys.length - 1) {
      setCurrentStep((previous) => previous + 1);
      return;
    }

    const matchedSchemes = getMatchingSchemes(schemes, answers);
    setHasSearched(true);
    setResults(matchedSchemes);

    window.setTimeout(() => {
      const resultsSection = document.getElementById("results");
      resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  const handleBack = () => {
    setCurrentStep((previous) => Math.max(previous - 1, 0));
  };

  const handleReset = () => {
    setAnswers(initialAnswers);
    setCurrentStep(0);
    setResults([]);
    setHasSearched(false);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen text-ink">
      <Navbar />
      <main>
        <Hero onStart={handleStart} />

        <section
          id="how-it-works"
          className="px-4 pb-4 sm:px-6"
        >
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Answer simply",
                  text: "Use guided choices instead of typing long details."
                },
                {
                  title: "Find top matches",
                  text: "See three schemes that best fit your profile."
                },
                {
                  title: "Open official links",
                  text: "Go directly to the official scheme page to learn more."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] bg-cream p-5">
                  <h3 className="font-display text-2xl text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/75">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div ref={formRef}>
          <StepForm
            answers={answers}
            currentStep={currentStep}
            onSelect={handleSelect}
            onBack={handleBack}
            onSubmit={handleSubmitStep}
          />
        </div>

        <div id="results">
          <ResultsSection
            hasSearched={hasSearched}
            results={results}
            onReset={handleReset}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
