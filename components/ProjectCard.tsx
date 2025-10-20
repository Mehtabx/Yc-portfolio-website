import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-lg bg-brand-gray ${className || ''}`}>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-gold">{project.category}</span>
        <h3 className="text-xl font-bold mt-1">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
