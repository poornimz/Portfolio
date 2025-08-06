

'use client';

import { personalInfo, aboutText, experience, softwareProjects, coreEngineeringProjects, skills, publications } from "@/data/info";
import Link from "next/link";

import ExperienceCard from "@/components/experiencecard";
import ProjectCard from "@/components/projectcard";
import PublicationCard from "@/components/publicationcard";


export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">

      {/* Hero Section */}
      <section id="hero" className="text-center py-20 lg:py-32 w-full">
        {/* --- YOUR NAME IS NOW PURE WHITE --- */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">{personalInfo.name}</h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-400 font-semibold mb-6">{personalInfo.title}</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">{personalInfo.tagline}</p>
        <div className="flex justify-center gap-4">
          <Link href={personalInfo.linkedin} target="_blank" className="bg-gray-200 text-black font-bold py-3 px-8 rounded-lg hover:bg-white transition">LinkedIn</Link>
          <Link href={personalInfo.github} target="_blank" className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition">GitHub</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 my-10 w-full max-w-6xl bg-gray-900/50 backdrop-blur-sm rounded-xl scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10 text-white">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed px-6">{aboutText}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 w-full max-w-4xl scroll-mt-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
        <div>
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              role={exp.role}
              company={exp.company}
              date={exp.date}
              description={exp.description}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 w-full max-w-7xl scroll-mt-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>
        <h3 className="text-3xl font-bold text-center mb-8 text-white">Software & Machine Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {softwareProjects.map((proj) => <ProjectCard key={proj.title} {...proj} />)}
        </div>
        <h3 className="text-3xl font-bold text-center mb-8 text-white">Core Engineering & Hardware</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreEngineeringProjects.map((proj) => <ProjectCard key={proj.title} {...proj} />)}
        </div>
      </section>
      
      {/* Publications Section */}
      <section id="publications" className="py-20 my-10 w-full max-w-6xl bg-gray-900/50 backdrop-blur-sm rounded-xl scroll-mt-24">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Publications</h2>
            <div className="mx-auto px-6">
              {publications.map((pub) => (
                <PublicationCard
                  key={pub.title}
                  title={pub.title}
                  conference={pub.conference}
                  authors={pub.authors}
                  link={pub.link}
                />
              ))}
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 w-full max-w-5xl scroll-mt-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Technical Skills</h2>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-700">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-md font-medium">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 mt-10 w-full bg-gray-900 scroll-mt-24">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">I&apos currently open to new opportunities. My inbox is always open!</p>
            <a 
                href={`mailto:${personalInfo.email}`} 
                className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition text-lg"
            >
              Say Hello
            </a>
        </div>
      </section>
    </div>
  );
}
