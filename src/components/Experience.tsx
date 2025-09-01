import React from 'react';

// Import company logos
import flatironDragadosLogo from '../assets/logos/flatiron_dragados.png';
import accionaLogo from '../assets/logos/acciona.png';
import sncLavalinLogo from '../assets/logos/snc_lavalin.png';
import ferrovialLogo from '../assets/logos/ferrovial.png';
import isoluxCorsanLogo from '../assets/logos/isolux_corsan.png';
import teamEngineeringLogo from '../assets/logos/team_engineering.png';
import fonorteLogo from '../assets/logos/fonorte.png';
import sacyrLogo from '../assets/logos/sacyr.png';
import prointecLogo from '../assets/logos/prointec.png';
import genericContractorLogo from '../assets/logos/generic_contractor.png';

interface ExperienceProps {
  experiences: Array<{
    position: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
  }>;
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {

  const getLogoForCompany = (companyName: string): string => {
    const lowerCaseName = companyName.toLowerCase();
    if (lowerCaseName.includes('flatiron') || lowerCaseName.includes('dragados')) return flatironDragadosLogo;
    if (lowerCaseName.includes('acciona')) return accionaLogo;
    if (lowerCaseName.includes('snc')) return sncLavalinLogo;
    if (lowerCaseName.includes('ferrovial')) return ferrovialLogo;
    if (lowerCaseName.includes('isolux')) return isoluxCorsanLogo;
    if (lowerCaseName.includes('team engineering')) return teamEngineeringLogo;
    if (lowerCaseName.includes('fonorte')) return fonorteLogo;
    if (lowerCaseName.includes('sacyr')) return sacyrLogo;
    if (lowerCaseName.includes('prointec')) return prointecLogo;
    return genericContractorLogo; // Default placeholder
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
              Over two decades of leadership in infrastructure development across North America and Europe
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>
                  
                  {/* Content */}
                  <div className="md:ml-16 w-full">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center text-slate-300">
                            <div className="flex items-center">
                              <img src={getLogoForCompany(exp.company)} alt={`${exp.company} logo`} className="w-24 h-24 mr-6 rounded-lg" />
                              <span className="text-lg font-semibold text-blue-400">
                                {exp.company}
                              </span>
                            </div>
                            <span className="sm:mx-3 text-slate-500 hidden sm:inline">•</span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              </svg>
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <span className="inline-flex items-center px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-200 mb-4">Key Responsibilities & Achievements</h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start">
                              <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-4"></div>
                              <p className="text-slate-300 leading-relaxed">{responsibility}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
