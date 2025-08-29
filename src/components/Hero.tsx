import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section-padding pt-32 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="text-primary-600">Kissiedu Kelvin Agyei</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              A passionate Full Stack Developer creating amazing digital experiences
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              I specialize in building modern web applications with cutting-edge technologies. 
              Let's turn your ideas into reality!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="btn-primary text-center">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary text-center">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Header Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/header.jpg" 
                  alt="Kelvin Kissiedu Agyei" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-200 rounded-full opacity-60 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

