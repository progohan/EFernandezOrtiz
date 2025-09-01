import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import CoreCompetencies from './components/CoreCompetencies';
import KeyProjects from './components/KeyProjects';
import Education from './components/Education';
import Contact from './components/Contact';
import resumeData from './data.json';
import { ResumeData } from './types';

function App() {
  const typedResumeData: ResumeData = resumeData;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section id="hero">
          <Hero data={typedResumeData.personal_info} />
        </section>
        <section id="about">
          <About data={typedResumeData.personal_info} achievements={typedResumeData.key_achievements} />
        </section>
        <section id="experience">
          <Experience experiences={typedResumeData.work_experience} />
        </section>
        <section id="competencies">
          <CoreCompetencies
            competencies={typedResumeData.core_competencies}
            technicalExpertise={typedResumeData.technical_expertise}
            leadershipSkills={typedResumeData.leadership_skills}
          />
        </section>
        <section id="projects">
          <KeyProjects projects={typedResumeData.key_projects} />
        </section>
        <section id="education">
          <Education 
            education={typedResumeData.education} 
            programs={typedResumeData.postgraduate_programs}
            certifications={typedResumeData.professional_certifications}
          />
        </section>
        <section id="contact">
          <Contact data={typedResumeData.personal_info} />
        </section>
      </main>
    </div>
  );
}

export default App;
