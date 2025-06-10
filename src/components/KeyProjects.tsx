import React, { useState } from 'react';

interface Project {
  name: string;
  value: string;
  role: string;
  company: string;
  location?: string;
  contribution?: string;
  achievement?: string;
  scope?: string;
}

interface KeyProjectsProps {
  projects: Project[];
}

const KeyProjects: React.FC<KeyProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const formatValue = (value: string): string => {
    if (value.includes('$')) {
      return value;
    }
    return value;
  };

  const getProjectIcon = (name: string): string => {
    if (name.toLowerCase().includes('rail') || name.toLowerCase().includes('railroad')) return '🚄';
    if (name.toLowerCase().includes('bridge')) return '🌉';
    if (name.toLowerCase().includes('highway') || name.toLowerCase().includes('parkway')) return '🛣️';
    if (name.toLowerCase().includes('tunnel')) return '🚇';
    return '🏗️';
  };

  const getProjectCategory = (name: string): string => {
    if (name.toLowerCase().includes('rail') || name.toLowerCase().includes('railroad')) return 'Rail Infrastructure';
    if (name.toLowerCase().includes('bridge')) return 'Bridge Engineering';
    if (name.toLowerCase().includes('highway') || name.toLowerCase().includes('parkway')) return 'Highway Construction';
    if (name.toLowerCase().includes('tunnel')) return 'Tunneling';
    return 'Infrastructure';
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Key Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
              Multibillion-dollar infrastructure projects spanning rail, highway, and bridge construction across three continents
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{getProjectIcon(project.name)}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">
                      {formatValue(project.value)}
                    </div>
                    <div className="text-xs text-slate-400">Project Value</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded text-blue-300 text-xs font-medium mb-2">
                    {getProjectCategory(project.name)}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-1">
                    <span className="text-blue-400 font-medium">{project.role}</span>
                  </p>
                  <p className="text-slate-400 text-sm">
                    {project.company}
                  </p>
                  {project.location && (
                    <p className="text-slate-500 text-xs mt-1 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {project.location}
                    </p>
                  )}
                </div>

                {/* Key Highlight */}
                {(project.achievement || project.contribution || project.scope) && (
                  <div className="border-t border-slate-700 pt-3">
                    <p className="text-slate-300 text-sm">
                      {project.achievement || project.contribution || project.scope}
                    </p>
                  </div>
                )}

                {/* Click indicator */}
                <div className="flex items-center justify-center mt-4 text-slate-500 group-hover:text-blue-400 transition-colors">
                  <span className="text-xs mr-1">Click for details</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">{projects.length}</div>
              <div className="text-slate-300 text-sm">Major Projects</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$10B+</div>
              <div className="text-slate-300 text-sm">Total Value</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-slate-300 text-sm">Countries</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-slate-300 text-sm">Team Size</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{getProjectIcon(selectedProject.name)}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.name}</h3>
                    <div className="flex items-center text-slate-400">
                      <span className="text-3xl font-bold text-blue-400 mr-4">
                        {formatValue(selectedProject.value)}
                      </span>
                      <span className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded text-blue-300 text-sm">
                        {getProjectCategory(selectedProject.name)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-1">Role</h4>
                    <p className="text-white">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-1">Company</h4>
                    <p className="text-white">{selectedProject.company}</p>
                  </div>
                  {selectedProject.location && (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 mb-1">Location</h4>
                      <p className="text-white">{selectedProject.location}</p>
                    </div>
                  )}
                  {selectedProject.scope && (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 mb-1">Scope</h4>
                      <p className="text-white">{selectedProject.scope}</p>
                    </div>
                  )}
                </div>

                {selectedProject.achievement && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Achievement</h4>
                    <p className="text-slate-300 bg-green-600/10 border border-green-500/20 rounded-lg p-3">
                      {selectedProject.achievement}
                    </p>
                  </div>
                )}

                {selectedProject.contribution && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Contribution</h4>
                    <p className="text-slate-300 bg-blue-600/10 border border-blue-500/20 rounded-lg p-3">
                      {selectedProject.contribution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KeyProjects;
