import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import CoreCompetencies from './components/CoreCompetencies';
import KeyProjects from './components/KeyProjects';
import Education from './components/Education';
import Contact from './components/Contact';

interface ResumeData {
  personal_info: {
    full_name: string;
    credentials: string[];
    current_title: string;
    location: string;
    contact: {
      phone: string;
      email: string;
      linkedin: string;
    };
    summary: string;
    about_description: string;
  };
  core_competencies: string[];
  work_experience: Array<{
    position: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    status?: string;
  }>;
  postgraduate_programs: Array<{
    program: string;
    institution: string;
    year: string;
  }>;
  professional_certifications: Array<{
    certification: string;
    jurisdictions?: string[];
    jurisdiction?: string;
    country?: string;
    issuing_organization?: string;
    organization?: string;
  }>;
  key_projects: Array<{
    name: string;
    value: string;
    role: string;
    company: string;
    location?: string;
    contribution?: string;
    achievement?: string;
    scope?: string;
  }>;
  key_achievements: string[];
  technical_expertise: {
    delivery_models: string[];
    project_types: string[];
    technical_skills: string[];
    technology_skills: string[];
  };
  leadership_skills: string[];
}

function App() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Error loading resume data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">Error loading data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero data={resumeData.personal_info} />
      <About data={resumeData.personal_info} achievements={resumeData.key_achievements} />
      <Experience experiences={resumeData.work_experience} />
      <CoreCompetencies competencies={resumeData.core_competencies} technicalExpertise={resumeData.technical_expertise} />
      <KeyProjects projects={resumeData.key_projects} />
      <Education 
        education={resumeData.education} 
        programs={resumeData.postgraduate_programs}
        certifications={resumeData.professional_certifications}
      />
      <Contact data={resumeData.personal_info} />
    </div>
  );
}

export default App;
