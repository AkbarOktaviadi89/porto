import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Instagram, ExternalLink, Award, Briefcase, GraduationCap, BookOpen, Search, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllPublications, setShowAllPublications] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'leadership', 'education', 'research', 'publications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');
      const newVisibleElements = new Set(visibleElements);

      elementsToAnimate.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible && !visibleElements.has(index)) {
          newVisibleElements.add(index);
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });

      setVisibleElements(newVisibleElements);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleElements]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const leadership = [
    {
      role: "Vice Dean",
      org: "Faculty of Engineering",
      period: "2020 - Present",
      description: "Leading and coordinating academic activities, research, and community service at the faculty level. Developing strategic policies to enhance education quality and program accreditation."
    },
    {
      role: "Head of Electrical Engineering Program",
      org: "Faculty of Engineering",
      period: "2018 - 2020",
      description: "Managing and developing the Electrical Engineering program curriculum. Ensuring learning quality and strengthening industry collaboration to enhance graduate competencies."
    }
  ];

  const education = [
    {
      degree: "Doctor of Philosophy (Ph.D.)",
      field: "Electrical Engineering",
      institution: "Bandung Institute of Technology",
      year: "2015 - 2019",
      focus: "Control Systems and Automation"
    },
    {
      degree: "Master of Engineering (M.Eng.)",
      field: "Electrical Engineering",
      institution: "Sepuluh Nopember Institute of Technology",
      year: "2010 - 2012",
      focus: "Telecommunications Engineering"
    },
    {
      degree: "Bachelor of Engineering (B.Eng.)",
      field: "Electrical Engineering",
      institution: "Gadjah Mada University",
      year: "2005 - 2009",
      focus: "Electronics and Instrumentation"
    }
  ];

  const research = [
    {
      title: "Intelligent Control System Optimization for Smart Grid",
      type: "Research",
      year: "2024",
      description: "Development of adaptive control algorithms using machine learning for electricity distribution optimization in smart grids, improving energy efficiency by 25%.",
      funding: "Ministry of Research, Technology and Higher Education",
      status: "Ongoing",
      collaborators: "MIT Energy Initiative, Local Power Authority",
      image: "projects/alkautsar.png"
    },
    {
      title: "IoT-Based Monitoring System for Industry 4.0",
      type: "Research",
      year: "2023",
      description: "Design and implementation of IoT-based monitoring systems for manufacturing industries with cloud computing integration and real-time analytics.",
      funding: "Research Institute",
      status: "Completed",
      collaborators: "Manufacturing Companies Consortium",
      image: "projects/Azzahra.png"
    },
    {
      title: "Renewable Energy Integration in Microgrid Systems",
      type: "Research",
      year: "2023",
      description: "Study of renewable energy source integration (solar and wind) in microgrid systems focusing on system stability and efficiency.",
      funding: "Higher Education Research Grant",
      status: "Completed",
      collaborators: "National Renewable Energy Laboratory",
      image: "projects/PTBA.png"
    },
    {
      title: "Smart Campus Technology Development",
      type: "Community Service",
      year: "2024",
      description: "Community service program for smart campus technology implementation in secondary education institutions, including energy monitoring and security systems.",
      funding: "Research Institute",
      status: "Ongoing",
      collaborators: "5 Partner Schools",
      image: "projects/smart-campus.jpg"
    },
    {
      title: "IoT and Arduino Training for Vocational Teachers",
      type: "Community Service",
      year: "2023",
      description: "Intensive training program to enhance vocational school teachers' competencies in IoT and Arduino programming to support project-based learning.",
      funding: "Research Institute",
      status: "Completed",
      collaborators: "Vocational Education Association",
      image: "projects/arduino-training.jpg"
    }
  ];

  const publications = [
    {
      title: "Machine Learning Approaches for Smart Grid Energy Management",
      authors: "[Your Name], Smith, J., & Johnson, A.",
      journal: "IEEE Transactions on Smart Grid",
      year: "2024",
      type: "Journal Article",
      impact: "Q1 - IF: 8.96",
      doi: "10.1109/TSG.2024.xxxxx"
    },
    {
      title: "Adaptive Control Strategies for Renewable Energy Integration",
      authors: "[Your Name] & Chen, L.",
      journal: "Renewable Energy",
      year: "2023",
      type: "Journal Article",
      impact: "Q1 - IF: 8.7",
      doi: "10.1016/j.renene.2023.xxxxx"
    },
    {
      title: "IoT Architecture for Industrial Automation: A Comprehensive Review",
      authors: "[Your Name], Kumar, R., & Davis, M.",
      journal: "Journal of Industrial Information Integration",
      year: "2023",
      type: "Journal Article",
      impact: "Q2 - IF: 5.2",
      doi: "10.1016/j.jii.2023.xxxxx"
    },
    {
      title: "Real-time Monitoring System for Smart Manufacturing",
      authors: "[Your Name] et al.",
      conference: "IEEE International Conference on Industrial Technology",
      year: "2024",
      type: "Conference Paper",
      location: "Singapore"
    },
    {
      title: "Advanced Control Systems in Modern Engineering",
      authors: "[Your Name] & Co-authors",
      publisher: "Springer Nature",
      year: "2023",
      type: "Book Chapter",
      isbn: "978-3-xxx-xxxxx-x"
    }
  ];

  const awards = [
    {
      title: "Best Researcher Award",
      organization: "Faculty of Engineering",
      year: "2024",
      description: "Recognition for outstanding research contributions in electrical engineering"
    },
    {
      title: "Excellence in Teaching Award",
      organization: "University",
      year: "2023",
      description: "Awarded for innovative teaching methods and student mentorship"
    },
    {
      title: "Outstanding Paper Award",
      organization: "IEEE ICIT Conference",
      year: "2024",
      description: "Best paper presentation at international conference"
    }
  ];

  const visibleProjects = showAllProjects ? research : research.slice(0, 3);
  const visiblePublications = showAllPublications ? publications : publications.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Montserrat', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Crimson Text', serif; }
        html { scroll-behavior: smooth; }

        @keyframes fadeInUp { from {opacity:0;transform:translateY(40px);} to {opacity:1;transform:translateY(0);} }
        @keyframes slideInLeft { from {opacity:0;transform:translateX(-40px);} to {opacity:1;transform:translateX(0);} }
        @keyframes float { 0%,100% {transform:translateY(0)} 50% {transform:translateY(-10px)} }

        .animate-fadeInUp { animation: fadeInUp .8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft .8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }

        .fade-in-on-scroll { opacity:0; transform:translateY(30px); transition:all .8s cubic-bezier(.4,0,.2,1); }

        .glass { background:rgba(255,255,255,.95); backdrop-filter:blur(20px); border:1px solid rgba(128,0,32,.1); }
        .glass-maroon { background:rgba(128,0,32,.95); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,.2); }
        .shadow-elegant { box-shadow:0 20px 60px rgba(128,0,32,.1); }
        .shadow-deep { box-shadow:0 25px 80px rgba(128,0,32,.15); }
        .hover-lift { transition:all .4s cubic-bezier(.4,0,.2,1); }
        .hover-lift:hover { transform:translateY(-8px); box-shadow:0 30px 80px rgba(128,0,32,.2); }
        .hover-scale:hover { transform:scale(1.03); }

        .text-gradient { background:linear-gradient(135deg,#800020 0%,#a0002e 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .bg-gradient-custom { background:linear-gradient(135deg,#ffffff 0%,#f8f9fa 50%,#ffffff 100%); }
        .maroon-accent { border-left: 4px solid #800020; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'glass shadow-elegant py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-maroon-900 tracking-tight hover-scale transition-transform duration-300 cursor-pointer" style={{ color: '#800020' }}>
              ACADEMIC PORTFOLIO
            </div>

            <div className="hidden md:flex space-x-1">
              {['Home', 'Profile', 'Leadership', 'Education', 'Research', 'Publications', 'Contact'].map((item, idx) => {
                const sectionMap = {
                  'Home': 'home',
                  'Profile': 'about',
                  'Leadership': 'leadership',
                  'Education': 'education',
                  'Research': 'research',
                  'Publications': 'publications',
                  'Contact': 'contact'
                };
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionMap[item])}
                    className={`px-5 py-2.5 rounded-lg transition-all duration-300 text-sm font-semibold ${activeSection === sectionMap[item]
                        ? 'text-white shadow-lg scale-105'
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    style={activeSection === sectionMap[item] ? { backgroundColor: '#800020' } : {}}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass border-t animate-fadeInUp">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'Profile', 'Leadership', 'Education', 'Research', 'Publications', 'Contact'].map((item) => {
                const sectionMap = {
                  'Home': 'home',
                  'Profile': 'about',
                  'Leadership': 'leadership',
                  'Education': 'education',
                  'Research': 'research',
                  'Publications': 'publications',
                  'Contact': 'contact'
                };
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionMap[item])}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all font-medium"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 bg-gradient-custom relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 -mr-48 -mt-48 animate-float" style={{ backgroundColor: '#800020' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 -ml-40 -mb-40 animate-float" style={{ backgroundColor: '#800020', animationDelay: '3s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                Academic
                <br />
                <span className="text-gradient">Portfolio</span>
              </h1>

              <div className="text-xl md:text-2xl text-gray-600 mb-8 space-y-2">
                <p className="font-bold text-gray-800" style={{ fontSize: '1.75rem' }}>Dr. [Your Name], B.Eng., M.Eng.</p>
                <p className="font-semibold" style={{ color: '#800020' }}>Vice Dean, Faculty of Engineering</p>
                <p className="text-lg">Electrical Engineering • Control Systems • IoT</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('research')}
                  className="text-white px-8 py-4 rounded-lg font-semibold transition-all hover-lift inline-flex items-center gap-3 shadow-lg"
                  style={{ backgroundColor: '#800020' }}
                >
                  <BookOpen className="w-5 h-5" />
                  Research & Publications
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="glass px-8 py-4 rounded-lg font-semibold transition-all hover-lift border"
                  style={{ color: '#800020', borderColor: '#800020' }}
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* MODIFIED: Photo section with professional geometric ornaments */}
            <div className="flex justify-center lg:justify-end -mt-24">
              <div className="relative max-w-md w-full">
                {/* MAIN BACKGROUND: Maroon half-box with radius */}
                <div
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-11/12 h-3/4 rounded-3xl"
                  style={{
                    backgroundColor: '#800020',
                    zIndex: 0,
                    opacity: 1.15
                  }}
                ></div>
               
                {/* Foto Profil - Professional with subtle shadow */}
                <div className="relative transition-all duration-500" style={{ zIndex: 1 }}>
                  <img
                    src="profile/fp.png"
                    alt="Foto Profil"
                    className="w-full h-auto rounded-2xl object-cover"
                    style={{
                      maxHeight: '600px',
                    }}
                  />
                  {/* Subtle border accent */}
                  <div className="absolute inset-0 rounded-2xl" style={{ zIndex: 2 }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <ChevronDown
              size={32}
              className="mx-auto text-gray-400 cursor-pointer hover:text-maroon-900 transition-colors animate-bounce"
              onClick={() => scrollToSection('about')}
              style={{ color: '#666' }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Academic <span className="text-gradient">Profile</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#800020' }}></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-maroon p-10 rounded-2xl text-white shadow-deep hover-lift transition-all duration-500 fade-in-on-scroll">
              <h3 className="text-3xl font-bold mb-6">Dr. [Your Name], B.Eng., M.Eng.</h3>
              <div className="space-y-6 leading-relaxed text-lg">
                <p className="text-gray-100">
                  Lecturer and researcher in Electrical Engineering with a focus on control systems, industrial automation, and Internet of Things (IoT) technology. Over 15 years of experience in higher education and applied research.
                </p>
                <p className="text-gray-200">
                  Currently serving as Vice Dean of the Faculty of Engineering, responsible for academic development, research, and institutional collaboration. Actively engaged in various research and community service projects oriented towards technology application for sustainable development.
                </p>
                <p className="text-gray-200">
                  Strong commitment to improving the quality of engineering education and facilitating technological innovations beneficial to society and industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-gradient-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#800020' }}></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {leadership.map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl shadow-elegant hover-lift fade-in-on-scroll maroon-accent">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-6 h-6" style={{ color: '#800020' }} />
                      <h3 className="text-2xl font-bold text-gray-900">{item.role}</h3>
                    </div>
                    <p className="text-xl font-semibold mb-2" style={{ color: '#800020' }}>{item.org}</p>
                  </div>
                  <span className="inline-block px-4 py-2 rounded-lg text-white font-semibold text-sm mt-2 md:mt-0" style={{ backgroundColor: '#800020' }}>
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Educational <span className="text-gradient">Background</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#800020' }}></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl shadow-elegant hover-lift fade-in-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: '#800020' }}>
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{item.degree}</h3>
                      <span className="text-gray-600 font-semibold">{item.year}</span>
                    </div>
                    <p className="text-xl font-semibold mb-1" style={{ color: '#800020' }}>{item.field}</p>
                    <p className="text-gray-700 text-lg mb-2">{item.institution}</p>
                    <p className="text-gray-600 italic">Focus: {item.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & PKM */}
      <section id="research" className="py-24 bg-gradient-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research & <span className="text-gradient">Community Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contributions in research and community service for the development of science and technology
            </p>
            <div className="w-24 h-1.5 mx-auto rounded-full mt-6" style={{ backgroundColor: '#800020' }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((item, idx) => (
              <div key={idx} className="glass rounded-2xl shadow-elegant hover-lift cursor-pointer overflow-hidden group" onClick={() => setSelectedProject(item)}>
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full text-white text-sm font-bold backdrop-blur-sm" style={{ backgroundColor: item.type === 'Research' ? '#800020' : '#a0002e' }}>
                      {item.type}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 font-semibold text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-maroon-900 transition-colors" style={{ color: '#1a1a1a' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{item.description}</p>
                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Funding: {item.funding}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${item.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {item.status}
                      </span>
                    </div>
                    {item.collaborators && (
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">Collaborators:</span> {item.collaborators}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {!showAllProjects ? (
              <button
                onClick={() => setShowAllProjects(true)}
                className="text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift shadow-lg"
                style={{ backgroundColor: '#800020' }}
              >
                View All Research
              </button>
            ) : (
              <button
                onClick={() => { setShowAllProjects(false); scrollToSection('research'); }}
                className="border-2 px-8 py-3 rounded-lg font-semibold transition-all hover-lift"
                style={{ borderColor: '#800020', color: '#800020' }}
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeInUp" onClick={() => setSelectedProject(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10" onClick={() => setSelectedProject(null)}>
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full my-8" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Header */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-bold" style={{ color: '#800020' }}>
                      {selectedProject.type}
                    </span>
                    <span className="text-white font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">{selectedProject.year}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded ${selectedProject.status === 'Ongoing' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-xl mb-4 text-gray-900">Funding Information</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-lg">
                      <span className="font-semibold">Funding Source:</span> {selectedProject.funding}
                    </p>
                    {selectedProject.collaborators && (
                      <p className="text-gray-700 text-lg">
                        <span className="font-semibold">Collaborators:</span> {selectedProject.collaborators}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Scholarly contributions and recognitions in the field of electrical engineering
            </p>
            <div className="w-24 h-1.5 mx-auto rounded-full mt-6" style={{ backgroundColor: '#800020' }}></div>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8" style={{ color: '#800020' }} />
              Selected Publications
            </h3>
            <div className="space-y-6">
              {visiblePublications.map((pub, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl shadow-elegant hover-lift maroon-accent">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <span className="px-3 py-1.5 rounded-full text-white text-sm font-bold mb-2 md:mb-0 inline-block w-fit" style={{ backgroundColor: '#800020' }}>
                      {pub.type}
                    </span>
                    <span className="text-gray-600 font-semibold">{pub.year}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h4>
                  <p className="text-gray-700 mb-2">{pub.authors}</p>
                  {pub.journal && (
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">{pub.journal}</span>
                      {pub.impact && <span className="ml-2 text-sm" style={{ color: '#800020' }}>({pub.impact})</span>}
                    </p>
                  )}
                  {pub.conference && (
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">{pub.conference}</span>
                      {pub.location && <span className="ml-2">• {pub.location}</span>}
                    </p>
                  )}
                  {pub.publisher && (
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">{pub.publisher}</span>
                      {pub.isbn && <span className="ml-2 text-sm">ISBN: {pub.isbn}</span>}
                    </p>
                  )}
                  {pub.doi && (
                    <p className="text-sm text-gray-500 mt-2">DOI: {pub.doi}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              {!showAllPublications ? (
                <button
                  onClick={() => setShowAllPublications(true)}
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift shadow-lg"
                  style={{ backgroundColor: '#800020' }}
                >
                  View All Publications
                </button>
              ) : (
                <button
                  onClick={() => { setShowAllPublications(false); scrollToSection('publications'); }}
                  className="border-2 px-8 py-3 rounded-lg font-semibold transition-all hover-lift"
                  style={{ borderColor: '#800020', color: '#800020' }}
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 -mr-48 -mt-48" style={{ backgroundColor: '#800020' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 -ml-40 -mb-40" style={{ backgroundColor: '#800020' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Open for research collaboration, academic consultation, and institutional partnerships
            </p>
            <div className="w-24 h-1.5 mx-auto rounded-full mt-6" style={{ backgroundColor: '#800020' }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info Cards */}
            <div className="space-y-6 fade-in-on-scroll">
              <div className="glass-maroon p-8 rounded-2xl shadow-deep">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href="tel:0896-8424-5977" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Phone</p>
                      <p className="text-white text-lg font-bold">0896-8424-5977</p>
                    </div>
                  </a>

                  <a href="mailto:email@university.edu" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Email</p>
                      <p className="text-white text-lg font-bold">email@university.edu</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Office</p>
                      <p className="text-white text-lg font-bold">Faculty of Engineering, Room 301</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Profile */}
            <div className="space-y-6 fade-in-on-scroll">
              <div className="glass p-8 rounded-2xl shadow-elegant border" style={{ borderColor: '#80002020' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <a href="https://www.linkedin.com/in/risma-oktaviani-23052b30a/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 hover:shadow-lg transition-all group text-center" style={{ borderColor: '#800020' }}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#800020' }}>
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">LinkedIn</p>
                    <p className="text-xs text-gray-600 mt-1">Professional Network</p>
                  </a>

                  <a href="https://instagram.com/Ribloozy.ovnn" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 hover:shadow-lg transition-all group text-center" style={{ borderColor: '#800020' }}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#800020' }}>
                      <Instagram className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">Instagram</p>
                    <p className="text-xs text-gray-600 mt-1">Academic Updates</p>
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 hover:shadow-lg transition-all group text-center" style={{ borderColor: '#800020' }}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#800020' }}>
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">Google Scholar</p>
                    <p className="text-xs text-gray-600 mt-1">Publications</p>
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border-2 hover:shadow-lg transition-all group text-center" style={{ borderColor: '#800020' }}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#800020' }}>
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">ResearchGate</p>
                    <p className="text-xs text-gray-600 mt-1">Research Profile</p>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;