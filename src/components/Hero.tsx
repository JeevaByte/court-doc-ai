
const Hero = () => (
  <section className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-tr from-blue-100/70 via-blue-100/30 to-white rounded-xl px-8 py-8 shadow border border-border">
    <div className="flex-1 min-w-[250px]">
      <h1 className="text-4xl font-bold mb-3 text-primary tracking-tight">
        SCC Form Filler
      </h1>
      <p className="text-lg text-muted-foreground mb-2 max-w-xl">
        Instantly fill out Small Claims Court forms—just select a form, upload your info, and download your PDF. No legal headaches.
      </p>
      <span className="inline-flex items-center bg-blue-100 text-blue-700 rounded px-3 py-1 text-xs font-medium shadow-sm mt-2 animate-pulse">
        PHASE 2 MVP &ndash; Internal Use & Feedback
      </span>
    </div>
    <div className="hidden sm:block flex-shrink-0">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Scale_of_justice_2.svg/1200px-Scale_of_justice_2.svg.png"
        alt="Scales of Justice"
        className="w-28 h-28 object-contain opacity-90 drop-shadow-xl"
      />
    </div>
  </section>
);

export default Hero;
