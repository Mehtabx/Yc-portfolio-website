import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import type { ProjectCategory } from '../types';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const projectCategories: (ProjectCategory | 'All')[] = ['All', 'Custom Home', 'Residential', 'Commercial'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const galleryRef = useAnimateOnScroll<HTMLDivElement>(true);

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url('https://picsum.photos/seed/projects-hero/1600/600')` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-200">A showcase of our commitment to quality and craftsmanship.</p>
        </div>
      </section>
      
      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {projectCategories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  filter === category
                    ? 'bg-brand-gold text-white'
                    : 'bg-brand-gray text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} className="scroll-animate" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
