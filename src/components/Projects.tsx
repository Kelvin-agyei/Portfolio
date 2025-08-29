import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.',
      image: '🌤️',
      category: 'frontend',
      technologies: ['React', 'JavaScript', 'CSS3', 'OpenWeatherMap API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, user roles, and SEO optimization.',
      image: '📝',
      category: 'fullstack',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies and best practices for performance and accessibility.',
      image: '🎨',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'API Service',
      description: 'A RESTful API service for managing user data with authentication, rate limiting, and comprehensive documentation.',
      image: '🔌',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'JWT', 'Redis', 'Swagger'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                project.featured ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {project.featured && (
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Featured
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-primary inline-block"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

