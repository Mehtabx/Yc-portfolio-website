import React, { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import SubtleArt from '../components/SubtleArt';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const contactSectionRef = useAnimateOnScroll<HTMLDivElement>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // Simulate form submission
        setTimeout(() => {
            setStatus(`Thank you, ${formData.name}. Your message has been sent!`);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 1500);
    };

  return (
    <div className="pt-20">
       {/* Hero Section */}
       <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url('https://picsum.photos/seed/contact-hero/1600/600')` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-200">We're ready to listen. Let's build something amazing together.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <SubtleArt className="absolute -top-20 -right-20 w-96 h-96 text-brand-gray opacity-5 transform rotate-90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div ref={contactSectionRef} className="grid md:grid-cols-10 gap-12 scroll-animate">
                {/* Contact Info */}
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-bold mb-6 text-brand-gold">Get In Touch</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Our Office</h3>
                            <p className="text-gray-400">123 Jasper Avenue<br/>Edmonton, AB T5J 1N9</p>
                        </div>
                         <div>
                            <h3 className="text-lg font-semibold text-white">Phone</h3>
                            <a href="tel:780-555-1234" className="text-gray-400 hover:text-brand-gold transition-colors">(780) 555-1234</a>
                        </div>
                         <div>
                            <h3 className="text-lg font-semibold text-white">Email</h3>
                            <a href="mailto:contact@ychomes.ca" className="text-gray-400 hover:text-brand-gold transition-colors">contact@ychomes.ca</a>
                        </div>
                        <div>
                           <img src="https://picsum.photos/seed/map/600/400" alt="Map to office" className="rounded-lg mt-4 w-full h-auto object-cover grayscale" />
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="md:col-span-6">
                    <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-brand-dark border border-gray-700 text-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold" />
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-brand-dark border border-gray-700 text-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                               <input type="tel" name="phone" placeholder="Your Phone (Optional)" value={formData.phone} onChange={handleChange} className="w-full bg-brand-dark border border-gray-700 text-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold" />
                               <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full bg-brand-dark border border-gray-700 text-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold" />
                            </div>
                            <div>
                                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-brand-dark border border-gray-700 text-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-brand-gold text-white hover:bg-opacity-90 font-bold py-3 px-6 rounded-md transition-colors duration-300">
                                    Send Message
                                </button>
                            </div>
                             {status && <p className="text-center text-brand-gold mt-4">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;