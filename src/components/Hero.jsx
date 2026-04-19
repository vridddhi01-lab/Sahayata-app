const Hero = ({ onStart }) => {
  return (
    <section className="animate-fade-up px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-sand bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-moss shadow-sm">
            Public Welfare, Made Simpler
          </p>
          <div className="space-y-4">
            <h1 className="font-display text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
              Sahayata helps people discover government schemes with clarity.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-ink/75 sm:text-lg">
              Answer a few quick questions and get scheme suggestions that feel
              relevant, readable, and easy to act on.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStart}
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-forest/90"
            >
              Start Finding Schemes
            </button>
            <a
              href="#how-it-works"
              className="rounded-full border border-forest/15 px-6 py-3 text-sm font-semibold text-forest hover:border-forest/35 hover:bg-white/70"
            >
              How It Works
            </a>
          </div>
        </div>

        <div className="animate-fade-up rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
          <div className="rounded-[1.5rem] bg-mist p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-forest">Quick Check</p>
                <p className="text-sm text-ink/65">Find your best matches</p>
              </div>
              <div className="rounded-full bg-white px-3 py-1 text-xs font-medium text-moss shadow-sm">
                5 Steps
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Select age group",
                "Choose income range",
                "Pick occupation",
                "Select your state",
                "Add category if needed"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white/90 px-4 py-3 text-sm text-ink/80 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
