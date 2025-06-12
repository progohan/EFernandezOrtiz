import React from 'react';
import profileImage from '../assets/profile.jpg';

interface AboutProps {
  data: {
    full_name: string;
    current_title: string;
    about_description: string;
  };
  achievements: string[];
}

const About: React.FC<AboutProps> = ({ data, achievements }) => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Eduardo
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-cyan-500 shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Eduardo Fernández Ortiz - Project Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Infrastructure Development Leader
              </h3>
              <div className="text-slate-300 text-lg leading-relaxed mb-8 space-y-4">
                {data.about_description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Professional Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Professional Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">Alternative Project Delivery (P3, CMAR, DB, Alliance)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">Commercial & Contract Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">Program & Project Controls</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">Data-Driven Construction (AI, Big Data, Cloud)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">Cross-Functional Leadership & Stakeholder Engagement</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">Civil Engineering & Execution Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.slice(0, 8).map((achievement, index) => (
                <div key={index} className="flex items-start p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-slate-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-colors">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-slate-300 text-sm">Team Members Led</div>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-500/50 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">14km+</div>
              <div className="text-slate-300 text-sm">Tunnels Designed</div>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5km+</div>
              <div className="text-slate-300 text-sm">Bridges Designed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
