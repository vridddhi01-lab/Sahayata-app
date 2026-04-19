import ResultCard from "./ResultCard";

const ResultsSection = ({ hasSearched, results, onReset }) => {
  if (!hasSearched) {
    return null;
  }

  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
              Top Matches
            </p>
            <h2 className="mt-2 font-display text-3xl text-forest">
              Schemes you can explore
            </h2>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="w-fit rounded-full border border-forest/15 bg-white px-5 py-3 text-sm font-semibold text-forest shadow-sm hover:border-forest/35"
          >
            Start Again
          </button>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {results.map((scheme) => (
              <ResultCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-forest/20 bg-white/75 p-8 text-center shadow-sm">
            <h3 className="font-display text-2xl text-forest">
              No exact matches found
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-ink/75">
              Try a different age, income, or occupation selection. This MVP uses a
              small sample dataset, so changing one answer can reveal more schemes.
            </p>
            <button
              type="button"
              onClick={onReset}
              className="mt-6 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white"
            >
              Edit Answers
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultsSection;
