import React from 'react';

// --- REACT-ICONS IMPORTS ---
// Leadership & Management Competencies
import { FiTarget } from "react-icons/fi"; // Strategic Planning & Execution
import { GoProject, GoProjectSymlink } from "react-icons/go"; // Project & Program Management, Project Types header
import { RiTeamFill, RiMoneyDollarCircleLine, RiRobot3Line } from "react-icons/ri"; // Cross-Functional Team Leadership, Cost Optimization, Emerging Technologies
import { FaRegHandshake, FaRegLightbulb } from "react-icons/fa"; // Stakeholder Engagement, Innovation
import { LiaFileContractSolid } from "react-icons/lia"; // Contract Negotiation
import { AiOutlineThunderbolt } from "react-icons/ai"; // Risk Assessment
import { FaDatabase } from "react-icons/fa6"; // Big Data Analytics
import { FaCloud, FaSuitcase, FaLaptopCode } from "react-icons/fa"; // Cloud Computing, Commercial Management, Technology Skills
import { MdOutlineEngineering } from "react-icons/md"; // Civil Engineering
import { GiTeamIdea, GiFireworkRocket } from "react-icons/gi"; // Mentorship, Technical Skills Header
import { CiMedal } from "react-icons/ci"; // Leadership Skills header
import { FaRegAddressBook } from "react-icons/fa"; // Delivery Models header
import { TfiWorld } from "react-icons/tfi"; // International Projects
import { BsSuitcaseLg } from "react-icons/bs"; // Executive Leadership

// Note: The default '⭐' icon is not replaced directly here,
// as getIcon will now return JSX, we'll use a specific default icon component if needed.
// For now, we'll ensure all competencies have a mapped icon.
// --- END REACT-ICONS IMPORTS ---

interface CoreCompetenciesProps {
  competencies: string[];
  technicalExpertise: {
    delivery_models: string[];
    project_types: string[];
    technical_skills: string[];
    technology_skills: string[];
  };
  leadershipSkills: string[];
}

const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({
  competencies,
  technicalExpertise,
  leadershipSkills,
}) => {
  // Map competency names to their chosen React-Icon components
  // Each function returns a JSX.Element (the icon component)
  const competencyIconMap: { [key: string]: JSX.Element } = {
    'Strategic Planning & Execution': <FiTarget />,
    'Project & Program Management': <GoProject />,
    'Cross-Functional Team Leadership': <RiTeamFill />,
    'Stakeholder Engagement & Communication': <FaRegHandshake />,
    'Cost Optimization & Value Engineering': <RiMoneyDollarCircleLine />,
    'Contract Negotiation & Management': <LiaFileContractSolid />,
    'Risk Assessment & Mitigation': <AiOutlineThunderbolt />,
    'Big Data Analytics & AI Applications': <FaDatabase />,
    'Cloud Computing Architectures (AWS & Azure)': <FaCloud />,
    'Commercial Management': <FaSuitcase />,
    'Civil Engineering': <MdOutlineEngineering />,
    'Mentorship & Team Development': <GiTeamIdea />,
    'Innovation & Continuous Improvement': <FaRegLightbulb />
  };

  const getIcon = (competency: string): JSX.Element => {
    // Return the specific icon or a fallback if not found
    return competencyIconMap[competency] || <GoProject />; // Using a sensible default if somehow a competency isn't mapped
  };

  return (
    <section id="competencies" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Core Competencies & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
              Comprehensive expertise spanning traditional civil engineering and cutting-edge technology integration
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Leadership & Management Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competencies.map((competency, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-slate-700/70"
                >
                  <div className="flex items-start">
                    {/* The text-2xl and text-white classes will apply to the icon's size and color */}
                    <span className="text-2xl text-white mr-3 mt-1">{getIcon(competency)}</span>
                    <div>
                      <h4 className="text-white font-semibold leading-tight">{competency}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Delivery Models */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                  {/* Delivery Models Icon */}
                  <span className="text-2xl mr-3"><FaRegAddressBook /></span>
                  Delivery Models
                </h3>
                <div className="space-y-3">
                  {technicalExpertise.delivery_models.map((model, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                  {/* Project Types Icon */}
                  <span className="text-2xl mr-3"><GoProjectSymlink /></span>
                  Project Types
                </h3>
                <div className="space-y-3">
                  {technicalExpertise.project_types.map((type, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical & Technology Skills */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                  {/* Technical Skills Icon */}
                  <span className="text-2xl mr-3"><GiFireworkRocket /></span>
                  Technical Skills
                </h3>
                <div className="space-y-3">
                  {technicalExpertise.technical_skills.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                  {/* Technology Skills Icon */}
                  <span className="text-2xl mr-3"><FaLaptopCode /></span>
                  Technology Skills
                </h3>
                <div className="space-y-3">
                  {technicalExpertise.technology_skills.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
                  {/* Leadership Skills Icon */}
                  <span className="text-2xl mr-3"><CiMedal /></span>
                  Leadership Skills
                </h3>
                <div className="space-y-3">
                  {leadershipSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specialty Areas */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Specialty Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/30">
                {/* Emerging Technologies Icon */}
                <div className="text-4xl mb-4 text-blue-400"><RiRobot3Line /></div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Emerging Technologies</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  AI, Big Data Analytics, and Cloud Computing integration in construction management
                </p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl border border-green-500/30">
                {/* International Projects Icon */}
                <div className="text-4xl mb-4 text-green-400"><TfiWorld /></div>
                <h4 className="text-xl font-semibold text-green-400 mb-3">International Projects</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Cross-cultural project management across North America and Europe
                </p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl border border-purple-500/30">
                {/* Executive Leadership Icon */}
                <div className="text-4xl mb-4 text-purple-400"><BsSuitcaseLg /></div>
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Executive Leadership</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Strategic planning, business development, and organizational transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;