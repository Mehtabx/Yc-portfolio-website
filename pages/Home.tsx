import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import SubtleArt from '../components/SubtleArt';

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const WrenchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);

const SERVICES = [
    { icon: <HomeIcon />, title: "Custom Homes", description: "From concept to completion, we build bespoke homes that reflect your unique style and needs." },
    { icon: <WrenchIcon />, title: "Residential Projects", description: "Expert renovations and additions that enhance the beauty and functionality of your space." },
    { icon: <BuildingIcon />, title: "Commercial Properties", description: "Delivering high-quality commercial construction projects on time and on budget." },
];

const Home: React.FC = () => {
  const servicesRef = useAnimateOnScroll<HTMLDivElement>(true);
  const aboutRef = useAnimateOnScroll<HTMLDivElement>();
  const projectsRef = useAnimateOnScroll<HTMLDivElement>(true);
  const servicesHeaderRef = useAnimateOnScroll<HTMLDivElement>();
  const ctaRef = useAnimateOnScroll<HTMLDivElement>();

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="https://picsum.photos/video" type="video/mp4" />
             Your browser does not support the video tag.
        </video>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">Building Edmonton's Future</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">Crafting exceptional spaces with integrity, quality, and a commitment to our clients' vision.</p>
          <Link to="/projects" className="bg-brand-gold text-white hover:bg-opacity-90 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
            View Our Work
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={servicesHeaderRef} className="scroll-animate">
            <h2 className="text-3xl font-bold mb-2">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">We specialize in a range of construction services, ensuring quality and precision in every project.</p>
          </div>
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="scroll-animate bg-brand-dark p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <SubtleArt className="absolute top-1/2 -translate-y-1/2 -right-20 w-96 h-96 text-brand-gray opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={aboutRef} className="grid md:grid-cols-2 gap-12 items-center scroll-animate">
            <div>
              <img src="https://picsum.photos/seed/build/800/600" alt="Construction Site" className="rounded-lg shadow-2xl w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Your Trusted Partner in Construction</h2>
              <p className="text-gray-300 mb-4">
                Based in Edmonton, YC Custom Homes has built a reputation for excellence. Our philosophy is simple: build with passion, integrity, and the highest standards of quality. We collaborate closely with our clients to turn their vision into a tangible reality.
              </p>
              <p className="text-gray-300 mb-6">
                Our experienced team manages every aspect of the construction process, from initial design and permits to the final finishing touches, ensuring a seamless and stress-free experience.
              </p>
              <Link to="/about" className="text-brand-gold font-semibold hover:underline">
                Learn More About Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 scroll-animate is-visible">Featured Projects</h2>
            <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.slice(0, 3).map(project => (
                    <ProjectCard key={project.id} project={project} className="scroll-animate" />
                ))}
            </div>
             <Link to="/projects" className="mt-12 inline-block bg-brand-gold text-white hover:bg-opacity-90 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
                Explore All Projects
            </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url('https://picsum.photos/seed/cta/1200/400')`}}>
        <div ref={ctaRef} className="container mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">Let's discuss your ideas and how we can bring them to life. Contact us today for a consultation.</p>
          <Link to="/contact" className="bg-brand-gold text-white hover:bg-opacity-90 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;