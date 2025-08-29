import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate developer with a love for creating beautiful, functional, and user-friendly websites and applications. 
              With several years of experience in web development, I've worked on various projects that have helped me develop a deep understanding of both front-end and back-end technologies.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career filled with continuous learning and growth. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Name:</p>
                <p className="font-semibold text-gray-900">Kissiedu Kelvin Agyei</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-semibold text-gray-900">kissiedukelvinagyei@gmail.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Location:</p>
                <p className="font-semibold text-gray-900">Accra, Ghana</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Experience:</p>
                <p className="font-semibold text-gray-900">3+ Years</p>
              </div>
            </div>
          </div>

          {/* Right - Image/Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/profile.png" 
                  alt="Kissiedu Kelvin Agyei" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-secondary-600">3+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

