
const Hero = () => (
  <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white rounded-2xl px-8 py-12 shadow-lg border border-blue-100 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-100/20 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
    
    <div className="flex-1 min-w-[280px] relative z-10">
      <div className="mb-4">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gray-900 tracking-tight leading-tight">
          SCC Form <span className="text-blue-600">Filler</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"></div>
      </div>
      
      <p className="text-xl text-gray-600 mb-6 max-w-xl leading-relaxed">
        Instantly fill out <span className="font-semibold text-gray-800">Small Claims Court forms</span>—just select a form, upload your info, and download your PDF. 
        <span className="block mt-2 text-blue-600 font-medium">No legal headaches.</span>
      </p>
      
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md">
          <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
          PHASE 2 MVP
        </span>
        <span className="text-sm text-gray-500 font-medium">Internal Use & Feedback</span>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Quick & Easy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>AI-Powered</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span>Instant PDF</span>
        </div>
      </div>
    </div>
    
    <div className="flex-shrink-0 relative z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-full blur-2xl scale-110"></div>
        <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Scale_of_justice_2.svg/1200px-Scale_of_justice_2.svg.png"
            alt="Scales of Justice"
            className="w-32 h-32 lg:w-40 lg:h-40 object-contain opacity-90 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
