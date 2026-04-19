const ResultCard = ({ scheme }) => {
  return (
    <article className="animate-fade-up rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
            Recommended Scheme
          </p>
          <h3 className="mt-2 font-display text-2xl text-forest">{scheme.name}</h3>
        </div>
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
          Match Score {scheme.score}
        </span>
      </div>

      <p className="mb-4 text-sm leading-7 text-ink/75">{scheme.description}</p>

      <div className="mb-6 rounded-2xl bg-cream p-4">
        <p className="mb-2 text-sm font-semibold text-ink">Eligibility</p>
        <p className="text-sm leading-7 text-ink/75">{scheme.eligibility}</p>
      </div>

      <a
        href={scheme.applyLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
      >
        Apply / Learn More
      </a>
    </article>
  );
};

export default ResultCard;
