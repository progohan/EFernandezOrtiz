import React from 'react';

interface EducationProps {
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    status?: string;
  }>;
  programs: Array<{
    program: string;
    institution: string;
    year: string;
  }>;
  certifications: Array<{
    certification: string;
    jurisdictions?: string[];
    jurisdiction?: string;
    country?: string;
    issuing_organization?: string;
    organization?: string;
  }>;
}

const Education: React.FC<EducationProps> = ({ education, programs, certifications }) => {
  const getDegreeIcon = (degree: string): string => {
    if (degree.toLowerCase().includes('law')) return '⚖️';
    if (degree.toLowerCase().includes('mba') || degree.toLowerCase().includes('business')) return '💼';
    if (degree.toLowerCase().includes('engineering') || degree.toLowerCase().includes('math')) return '⚙️';
    if (degree.toLowerCase().includes('intelligence')) return '🧠';
    return '🎓';
  };

  const getCertificationIcon = (cert: string): string => {
    if (cert.includes('P.E.') || cert.includes('P.Eng.')) return '🏗️';
    if (cert.includes('PMP')) return '📊';
    if (cert.includes('Contractor')) return '🔨';
    return '📋';
  };

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
              Comprehensive academic foundation and professional certifications supporting technical excellence and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-3xl mr-3">🎓</span>
                Academic Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-4 mt-1">{getDegreeIcon(edu.degree)}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                        <p className="text-blue-400 font-medium mb-1">{edu.institution}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-sm">{edu.year}</span>
                          {edu.status && (
                            <span className="px-2 py-1 bg-green-600/20 border border-green-500/30 rounded text-green-300 text-xs">
                              {edu.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Postgraduate Programs */}
              <h3 className="text-2xl font-semibold text-white mb-8 mt-12 flex items-center">
                <span className="text-3xl mr-3">📚</span>
                Postgraduate Programs
              </h3>
              <div className="space-y-6">
                {programs.map((program, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-4 mt-1">
                        {program.program.toLowerCase().includes('cloud') ? '☁️' : 
                         program.program.toLowerCase().includes('data') || program.program.toLowerCase().includes('ai') ? '🤖' : 
                         program.program.toLowerCase().includes('steel') ? '🏗️' : '📖'}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{program.program}</h4>
                        <p className="text-cyan-400 font-medium mb-1">{program.institution}</p>
                        <span className="text-slate-400 text-sm">{program.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-3xl mr-3">🏆</span>
                Professional Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-4 mt-1">{getCertificationIcon(cert.certification)}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{cert.certification}</h4>
                        
                        {cert.issuing_organization && (
                          <p className="text-green-400 font-medium mb-2">{cert.issuing_organization}</p>
                        )}
                        
                        {cert.organization && (
                          <p className="text-green-400 font-medium mb-2">{cert.organization}</p>
                        )}

                        <div className="space-y-1">
                          {cert.country && (
                            <p className="text-slate-400 text-sm">Country: {cert.country}</p>
                          )}
                          
                          {cert.jurisdiction && (
                            <p className="text-slate-400 text-sm">Jurisdiction: {cert.jurisdiction}</p>
                          )}
                          
                          {cert.jurisdictions && cert.jurisdictions.length > 0 && (
                            <div className="text-slate-400 text-sm">
                              <span>Jurisdictions: </span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {cert.jurisdictions.map((jurisdiction, jIndex) => (
                                  <span 
                                    key={jIndex}
                                    className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded text-blue-300 text-xs"
                                  >
                                    {jurisdiction}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Credentials Summary */}
              <div className="mt-12 p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/30">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Credentials Summary</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-300 font-medium">Engineering Licenses</div>
                    <div className="text-slate-400">USA (7 states) + Canada</div>
                  </div>
                  <div>
                    <div className="text-slate-300 font-medium">Advanced Degrees</div>
                    <div className="text-slate-400">MSCE, MBA + 4 Masters</div>
                  </div>
                  <div>
                    <div className="text-slate-300 font-medium">Project Management</div>
                    <div className="text-slate-400">PMP Certified</div>
                  </div>
                  <div>
                    <div className="text-slate-300 font-medium">Contractor License</div>
                    <div className="text-slate-400">NASCLA Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">{education.length}</div>
              <div className="text-slate-300 text-sm">Degrees</div>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{programs.length}</div>
              <div className="text-slate-300 text-sm">Postgraduate Programs</div>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <div className="text-3xl font-bold text-green-400 mb-2">{certifications.length}</div>
              <div className="text-slate-300 text-sm">Certifications</div>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <div className="text-3xl font-bold text-yellow-400 mb-2">8</div>
              <div className="text-slate-300 text-sm">Jurisdictions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
