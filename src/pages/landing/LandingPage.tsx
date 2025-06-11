import React, { useEffect, useState } from 'react';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false); // State for navbar scroll effect

  // Effect to handle navigation active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar scroll state
      if (window.scrollY > 50) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }

      // Update active section for navigation highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 150; // Offset to activate section earlier

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function for smooth scrolling to sections
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  // Data for Features Section
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Student Data Security',
      description: 'Bank-grade encryption and compliance with student data privacy standards like FERPA, GDPR, and HIPAA.',
      benefits: ['Role-based access control', 'Multi-factor authentication', 'Real-time anomaly detection']
    },
    {
      icon: 'fas fa-cloud',
      title: 'Scalable Cloud Infrastructure',
      description: 'Auto-scaling cloud architecture that seamlessly grows with your institution\'s needs.',
      benefits: ['99.99% uptime guarantee', 'Global CDN distribution', 'Automated backups']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Advanced Academic Analytics',
      description: 'Real-time insights and predictive analytics to improve student outcomes and operational efficiency.',
      benefits: ['Student performance dashboards', 'AI-powered learning insights', 'Automated progress reporting']
    },
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Seamless Integration',
      description: 'Connect with popular educational tools and platforms effortlessly.',
      benefits: ['API-first design', 'LMS integration', 'Custom SIS connectors']
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Teacher & Staff Collaboration',
      description: 'Enhanced productivity tools for educators and administrative staff.',
      benefits: ['Real-time lesson planning', 'Secure communication channels', 'Task tracking']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Access for All',
      description: 'Native mobile apps and responsive web interface for on-the-go access for students, parents, and staff.',
      benefits: ['Offline capability', 'Push notifications', 'Cross-platform sync']
    }
  ];

  // Data for Testimonials Section
  const testimonials = [
    {
      name: 'Dr. Anya Sharma',
      title: 'Principal, Greenfield Academy',
      image: 'https://source.unsplash.com/random/64x64/?woman,teacher', // Unsplash random image
      rating: 5,
      content: 'Afralma has transformed our school\'s operations. The streamlined administration and powerful analytics have made a huge difference in student success.'
    },
    {
      name: 'Mr. Benjamin Davis',
      title: 'Head of IT, Grandview University',
      image: 'https://source.unsplash.com/random/64x64/?man,educator', // Unsplash random image
      rating: 5,
      content: 'The scalability and security of Afralma\'s platform are exactly what a large university needs. Our data is safe, and the system handles thousands of users effortlessly.'
    },
    {
      name: 'Ms. Chloe Lee',
      title: 'Admissions Director, Bright Horizons',
      image: 'https://source.unsplash.com/random/64x64/?female,student', // Unsplash random image
      rating: 5,
      content: 'Outstanding platform with exceptional support. Afralma\'s system has revolutionized our admissions process and communication with prospective students and parents.'
    }
  ];

  return (
    // Main container div for the entire landing page
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/*
        Global CSS for animations and custom utilities are defined below using <style jsx global>.
        In a typical React project, these might be in a separate global CSS file (e.g., src/index.css)
        and imported once in App.tsx or index.tsx. Tailwind is assumed to be globally available.
      */}

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavbarScrolled ? 'glass-effect-scrolled' : 'glass-effect-navbar'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand Name */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-white">
                <span className="text-purple-400">Afralma</span>
                <span className="text-xs ml-2 text-purple-300">SCHOOL</span> {/* Changed to SCHOOL */}
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['features', 'solutions', 'testimonials', 'pricing'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => smoothScrollTo(item)}
                    className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeSection === item
                        ? 'text-purple-300 bg-purple-800/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  type="button"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 pulse-glow"
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } glass-effect`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {['features', 'solutions', 'testimonials', 'pricing'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => smoothScrollTo(item)}
                className="capitalize block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md w-full text-left transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&crop=center)',
          }}
          role="img"
          aria-label="Modern classroom with students learning"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-slate-900/80 to-purple-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              School Management
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Redefined
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your educational institution with our next-generation platform. Built for growth,
              designed for learning, secured for students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                type="button"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 pulse-glow"
              >
                <i className="fas fa-rocket mr-2"></i>
                Start Free Trial
              </button>
              <button
                type="button"
                className="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-200"
              >
                <i className="fas fa-play mr-2"></i>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: '10K+', label: 'Schools Worldwide' },
                { number: '2M+', label: 'Active Students' },
                { number: '99.99%', label: 'Uptime SLA' }
              ].map((stat, index) => (
                <div key={index} className="glass-effect p-6 rounded-2xl float-animation">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements (Decorative) */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop)',
          }}
          role="img"
          aria-label="Books and technology for learning"
        >
          <div className="absolute inset-0 bg-slate-900/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Modern Education
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technology to meet the demands of today's digital-first schools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-400 flex items-center">
                      <i className="fas fa-check text-purple-400 mr-3"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tailored Solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Every Educational Setting
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                From K-12 schools to universities and vocational centers - our platform adapts to your
                institution's unique requirements while maintaining the highest standards of data security and compliance.
              </p>

              <div className="space-y-6">
                {[
                  { icon: 'fas fa-school', title: 'K-12 Schools', desc: 'Comprehensive management for elementary, middle, and high schools.' },
                  { icon: 'fas fa-university', title: 'Higher Education', desc: 'Advanced tools for universities, colleges, and research institutions.' },
                  { icon: 'fas fa-book-open', title: 'Vocational & Training', desc: 'Specialized solutions for vocational training and professional development.' },
                  { icon: 'fas fa-globe', title: 'International Schools', desc: 'Multi-campus and multi-cultural support for global educational networks.' }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl text-purple-400 mt-1">
                      <i className={solution.icon}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{solution.title}</h4>
                      <p className="text-gray-400">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <i className="fas fa-calendar mr-2"></i>
                Schedule Demo
              </button>
            </div>

            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&h=1080&fit=crop)',
                  height: '400px'
                }}
                role="img"
                aria-label="Students collaborating in a modern classroom setting"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-white mb-2">Intuitive Dashboards for Educators</h4>
                    <p className="text-gray-300">Gain real-time insights into student progress and school operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Educational
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Leaders Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our school customers have to say about their transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-purple-400"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                  )}
                </div>

                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop)',
          }}
          role="img"
          aria-label="Abstract background of data charts and graphs relevant to education"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-slate-900/90 to-purple-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Every School Size
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that scales with your institution. All plans include our core security features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic School',
                price: '$49',
                period: 'per student/year',
                features: ['Up to 100 students', 'Core management features', 'Standard support', '99.9% uptime SLA'],
                highlight: false
              },
              {
                name: 'Pro Academy',
                price: '$99',
                period: 'per student/year',
                features: ['Up to 1,000 students', 'Advanced analytics', 'Priority support', '99.95% uptime SLA', 'Parent portal'],
                highlight: true
              },
              {
                name: 'University/District',
                price: 'Custom',
                period: 'contact sales',
                features: ['Unlimited students', 'All integrations', 'Dedicated support', '99.99% uptime SLA', 'Custom development'],
                highlight: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`glass-effect p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.highlight ? 'ring-2 ring-purple-400 pulse-glow' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <i className="fas fa-check text-purple-400 mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105'
                    : 'glass-effect text-white hover:bg-white/20'
                }`}>
                  {plan.name === 'University/District' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              School Management?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of educational institutions already using Afralma to drive innovation and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 pulse-glow"
            >
              <i className="fas fa-rocket mr-2"></i>
              Start Your Free Trial
            </button>
            <button
              type="button"
              className="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-200"
            >
              <i className="fas fa-phone mr-2"></i>
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      
<footer className="bg-slate-900/50 border-t border-gray-800 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 align-center">
    <div className="container mx-auto">
      {/* Main footer content in 3 columns */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Column 1: Company Info */}
        <div className="lg:w-1/3 glass-effect p-6 rounded-xl">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-purple-400">Afralma</span>
            <span className="text-xs ml-2 text-purple-300">SCHOOL</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering educational institutions with next-generation school management solutions.
          </p>
          <div className="flex space-x-4">
            {['fab fa-twitter', 'fab fa-linkedin', 'fab fa-github'].map((icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <i className={`${icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:w-1/3 glass-effect p-6 rounded-xl">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Integrations', 'Pricing'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="lg:w-1/3 glass-effect p-6 rounded-xl">
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-400">
              <i className="fas fa-envelope mr-3"></i>
              support@afralma.com
            </li>
            <li className="flex items-center text-gray-400">
              <i className="fas fa-phone mr-3"></i>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center text-gray-400">
              <i className="fas fa-map-marker-alt mr-3"></i>
              123 Business Avenue, Suite 100<br />
              New York, NY 10001
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Afralma School Management Platform. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

      {/* Global CSS for custom animations and utility classes */}
      <style jsx global>{`
        /* Root CSS variables */
        :root {
            --primary: #4F46E5;
            --secondary: #F59E0B;
            --dark: #0F172A;
            --light: #F8FAFC;
        }

        /* Base font-family applied globally */
        * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Keyframe definitions for animations */
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.3); }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left { /* Added missing keyframes for slide-in-left */
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right { /* Added missing keyframes for slide-in-right */
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        /* Custom animation utility classes */
        .float-animation { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; } /* Renamed to match usage */
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; } /* Renamed to match usage */
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-500 { animation-delay: 0.5s; }

        /* Glass Morphism Styles */
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        /* Glass Effect for Navbar (initial state) */
        .glass-effect-navbar {
            backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(255, 255, 255, 0.05); /* Lighter for initial state */
            border-bottom: 1px solid rgba(255, 255, 255, 0.125);
        }
        /* Glass Effect for Navbar (scrolled state) */
        .glass-effect-scrolled {
            backdrop-filter: blur(20px) saturate(180%);
            background-color: rgba(15, 23, 42, 0.8); /* Darker on scroll */
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* Custom Scrollbar Styles */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
        }

        /* Smooth scroll behavior for the entire HTML document */
        html {
            scroll-behavior: smooth;
        }

        /* Accessibility focus styles for interactive elements */
        button:focus,
        a:focus {
            outline: 2px solid #4f46e5;
            outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
