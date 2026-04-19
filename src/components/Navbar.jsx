const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-forest/10 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div>
          <p className="font-display text-xl text-forest">Sahayata</p>
          <p className="text-xs uppercase tracking-[0.25em] text-moss">
            Government Scheme Finder
          </p>
        </div>
        <a
          href="#finder"
          className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm font-medium text-forest shadow-sm hover:border-forest/40 hover:shadow-md"
        >
          Find Schemes
        </a>
      </div>
    </header>
  );
};

export default Navbar;
