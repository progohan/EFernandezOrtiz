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
import { ResumeData } from './types';

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
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-red-400 text-xl">Error loading data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section id="hero">
          <Hero data={resumeData.personal_info} />
        </section>
        <section id="about">
          <About data={resumeData.personal_info} achievements={resumeData.key_achievements} />
        </section>
        <section id="experience">
          <Experience experiences={resumeData.work_experience} />
        </section>
        <section id="competencies">
          <CoreCompetencies
            competencies={resumeData.core_competencies}
            technicalExpertise={resumeData.technical_expertise}
            leadershipSkills={resumeData.leadership_skills}
          />
        </section>
        <section id="projects">
          <KeyProjects projects={resumeData.key_projects} />
        </section>
        <section id="education">
          <Education 
            education={resumeData.education} 
            programs={resumeData.postgraduate_programs}
            certifications={resumeData.professional_certifications}
          />
        </section>
        <section id="contact">
          <Contact data={resumeData.personal_info} />
        </section>
      </main>
    </div>
  );
}

export default App;
