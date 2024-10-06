import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10 h-full ">
      {/* Main Grid Layout */}
      <div className="container  mx-auto grid gap-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-10 lg:px-4">
        
        {/* About Us Section */}
        <div>
          <h2 className="font-bold text-xl mb-6 ">About Us</h2>
          <p className="leading-relaxed text-gray-300">
            We ensure to provide the best possible healthcare to all our patients! 
            Our services are always complemented with a customer-oriented approach. 
            Visiting a dentist shouldn't be stressful! We provide a comfortable experience 
            for both young and adult customers, offering various pain management and anesthesia options.
          </p>
        </div>
        
        {/* Recent Posts Section */}
        <div>
          <h2 className="font-bold text-xl mb-6">Recent Posts</h2>
          <div className="mb-6">
            <p className="leading-relaxed text-gray-300">
              Tooth problems are emergencies, no matter the severity. Knowing how to handle them can prevent long-term damage.
            </p>
            <a href="#" className="text-green-400 hover:text-green-300">Read more</a>
          </div>
          <div>
            <p className="leading-relaxed text-gray-300">
              While brushing and flossing are essential, there are additional steps you can take to prevent tooth decay.
            </p>
            <a href="#" className="text-green-400 hover:text-green-300">Read more</a>
          </div>
        </div>
        
        {/* Footer Menu Section */}
        <div>
          <h2 className="font-bold text-xl mb-6">Footer Menu</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Treatments</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Appointment</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="font-bold text-xl mb-6">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            Popular Colony, Warje, Pune, Maharashtra 411058, India
          </p>
          <p className="mt-2">Email: <a href="mailto:jeetusuthar2315@gmail.com" className="text-green-400 hover:text-green-300">jeetusuthar2315@gmail.com</a></p>
          <p className="mt-2">Phone: <a href="tel:+917261922208" className="text-green-400 hover:text-green-300">7261922208</a></p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4 mt-10">
        <div className="text-center text-sm text-gray-500">
          © 2023 Jeetu Dental Clinic. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
