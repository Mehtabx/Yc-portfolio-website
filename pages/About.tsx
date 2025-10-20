import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import SubtleArt from '../components/SubtleArt';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);


const About: React.FC = () => {
  const storyRef = useAnimateOnScroll<HTMLDivElement>();
  const valuesRef = useAnimateOnScroll<HTMLDivElement>(true);
  const whyUsRef = useAnimateOnScroll<HTMLDivElement>();

  return (
    <div className="text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url('https://picsum.photos/seed/about-hero/1600/600')` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">About YC Custom Homes</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-200">Building with precision, passion, and a promise of quality.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative overflow-hidden">
        <SubtleArt className="absolute -bottom-20 -left-20 w-80 h-80 text-brand-gray opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={storyRef} className="grid md:grid-cols-2 gap-12 items-center scroll-animate">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-brand-gold">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in Edmonton, YC Custom Homes was born from a desire to build more than just structures; we wanted to build lasting relationships and communities. Our journey began with a small team of dedicated professionals who shared a vision for superior craftsmanship and client-focused service.
              </p>
              <p className="text-gray-300">
                Today, we have grown into a trusted name in the construction industry, known for our innovative solutions, attention to detail, and unwavering commitment to bringing our clients' dreams to life, whether it's a dream home or a landmark commercial space.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://picsum.photos/seed/ourstory/800/600" alt="YC Custom Homes Team" className="rounded-lg shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 scroll-animate is-visible">Our Core Values</h2>
          <div ref={valuesRef} className="grid md:grid-cols-3 gap-8">
            <div className="p-6 scroll-animate">
              <h3 className="text-2xl font-semibold mb-2 text-brand-gold">Quality</h3>
              <p className="text-gray-400">We use only the finest materials and employ master craftspeople to ensure every detail is perfect.</p>
            </div>
            <div className="p-6 scroll-animate">
              <h3 className="text-2xl font-semibold mb-2 text-brand-gold">Integrity</h3>
              <p className="text-gray-400">We operate with transparency and honesty, building trust with our clients every step of the way.</p>
            </div>
             <div className="p-6 scroll-animate">
              <h3 className="text-2xl font-semibold mb-2 text-brand-gold">Partnership</h3>
              <p className="text-gray-400">We believe in collaborative partnerships with our clients, architects, and trades to achieve the best results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div ref={whyUsRef} className="grid md:grid-cols-2 gap-12 items-center scroll-animate">
            <div>
              <img src="https://picsum.photos/seed/whyus/800/600" alt="Detailed construction work" className="rounded-lg shadow-2xl w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Why YC Custom Homes?</h2>
              <p className="text-gray-300 mb-6">
                Choosing the right builder is the most important decision you'll make. Here's why we stand out:
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start"><CheckIcon /><span><strong>Client-Centric Approach:</strong> Your vision is our blueprint. We listen, we collaborate, and we deliver a personalized experience.</span></li>
                  <li className="flex items-start"><CheckIcon /><span><strong>Expert Team:</strong> Our team consists of seasoned project managers, skilled tradespeople, and design experts.</span></li>
                  <li className="flex items-start"><CheckIcon /><span><strong>Transparent Process:</strong> We provide clear communication and detailed project tracking from start to finish.</span></li>
                  <li className="flex items-start"><CheckIcon /><span><strong>Local Edmonton Knowledge:</strong> As an Edmonton-based builder, we have deep knowledge of local regulations and styles.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;