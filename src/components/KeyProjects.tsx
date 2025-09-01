import React, { useState } from 'react';

// --- REACT-ICONS IMPORTS ---
// Project-specific icons (kept as per your choices)
import { PiTrain } from 'react-icons/pi';
import { GiSuspensionBridge } from 'react-icons/gi';
import { FaRoad, FaHardHat } from 'react-icons/fa';
import { TbBuildingTunnel } from 'react-icons/tb';

// UI Icons (switched to Material Design to resolve previous errors)
import { MdLocationOn, MdChevronRight, MdClose } from 'react-icons/md';
// --- END REACT-ICONS IMPORTS ---


interface Project {
  name: string;
  value: string;
  role: string;
  company: string;
  client?: string;
  location?: string;
  achievement?: string;
  contribution?: string;
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

  const getProjectIcon = (name: string): JSX.Element => {
    if (name.toLowerCase().includes('rail') || name.toLowerCase().includes('railroad')) {
      return <PiTrain />;
    }
    if (name.toLowerCase().includes('bridge')) {
      return <GiSuspensionBridge />;
    }
    if (name.toLowerCase().includes('highway') || name.toLowerCase().includes('parkway') || name.toLowerCase().includes('section') || name.toLowerCase().includes('lanes')) {
      return <FaRoad />;
    }
    if (name.toLowerCase().includes('tunnel')) {
      return <TbBuildingTunnel />;
    }
    return <FaHardHat />; // Default fallback icon
  };

  const getProjectCategory = (name: string): string => {
    if (name.toLowerCase().includes('rail') || name.toLowerCase().includes('railroad')) return 'High-Speed Rail';
    if (name.toLowerCase().includes('bridge')) return 'Bridge Construction';
    if (name.toLowerCase().includes('highway') || name.toLowerCase().includes('parkway') || name.toLowerCase().includes('section') || name.toLowerCase().includes('lanes')) return 'Highway Construction';
    if (name.toLowerCase().includes('tunnel')) return 'Tunneling';
    return 'Infrastructure';
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Key Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
              Multibillion-dollar infrastructure projects spanning rail, highway, and bridge construction across three continents
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl text-primary">{getProjectIcon(project.name)}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {formatValue(project.value)}
                    </div>
                    <div className="text-xs text-muted-foreground">Project Value</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-medium mb-2">
                    {getProjectCategory(project.name)}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    <span className="font-medium text-foreground/80">{project.role}</span>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {project.company}
                  </p>
                  {project.location && (
                    <p className="text-muted-foreground/80 text-xs mt-1 flex items-center">
                      <MdLocationOn className="w-3 h-3 mr-1" />
                      {project.location}
                    </p>
                  )}
                </div>

                {/* Key Highlight */}
                {project.scope && (
                  <div className="border-t border-border pt-3">
                    <p className="text-foreground/80 text-sm">
                      {project.scope}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start">
                  <div className="text-4xl text-primary mr-4">{getProjectIcon(selectedProject.name)}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.name}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <span className="text-3xl font-bold text-primary mr-4">
                        {formatValue(selectedProject.value)}
                      </span>
                      <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-sm">
                        {getProjectCategory(selectedProject.name)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MdClose className="w-6 h-6" />
                </button>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Role</h4>
                    <p className="text-foreground">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Company</h4>
                    <p className="text-foreground">{selectedProject.company}</p>
                  </div>

                  {selectedProject.client && (
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">Client</h4>
                      <p className="text-foreground">{selectedProject.client}</p>
                    </div>
                  )}

                  {selectedProject.location && (
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">Location</h4>
                      <p className="text-foreground">{selectedProject.location}</p>
                    </div>
                  )}
                  {selectedProject.scope && (
                    <div className="col-span-full">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">Scope</h4>
                      <p className="text-foreground">{selectedProject.scope}</p>
                    </div>
                  )}
                </div>

                {selectedProject.achievement && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Achievement</h4>
                    <p className="text-foreground/90 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      {selectedProject.achievement}
                    </p>
                  </div>
                )}

                {selectedProject.contribution && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Contribution</h4>
                    <p className="text-foreground/90 bg-primary/5 border border-primary/20 rounded-lg p-3">
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
