import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Manipal University,</p>
          <p>Jaipur, Rajasthan, India</p>
          <p>PIN-302031</p>
          <a href="mailto:krishnakhandelwal1231999@gmail.com" className="block mt-4 text-green-400 hover:underline">
            krishnakhandelwal1231999@gmail.com
          </a>
        </div>

        {/* Quote Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">"Innovate, Build, Scale"</h3>
          <p className="italic">— Krishna Khandelwal, Full Stack Developer</p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Full Stack Development</li>
            <li>AI & Machine Learning Solutions</li>
            <li>IoT Integration</li>
            <li>Responsive Web Design</li>
            <li>Data Analytics & Insights</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2025 Krishna Khandelwal - Creative Developer & Innovator
      </div>
    </footer>
  );
};

export default Footer;
