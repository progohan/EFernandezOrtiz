import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 text-center max-w-4xl">
        <div className="mb-6 flex justify-center flex-wrap gap-2">
          {["MSCE", "P.E.", "P.Eng.", "MBA", "PMP"].map((credential, i) => (
            <span key={i} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
              {credential}
            </span>
          ))}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
          Eduardo Fernández Ortiz
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
          Executive Leader in Infrastructure Delivery & Commercial Strategy
        </h2>
        <div className="text-slate-400 mb-8 flex justify-center items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Washington, DC
        </div>

        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          I lead multibillion-dollar infrastructure megaprojects across North America and Europe, specializing in complex alternative delivery models. With a unique blend of commercial acumen, technical rigor, and legal insight, I consistently optimize project outcomes, cultivate stakeholder trust, and expand market share for leading construction enterprises
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-slate-300">Years International Experience</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">$10B+</div>
            <div className="text-slate-300">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">9</div>
            <div className="text-slate-300">Countries & Jurisdictions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
