import React from 'react';

const ClinicInfo = () => {
  const clinic_data = [
    { id: 1, c_day: 'Monday', c_time: '11:00 AM - 9:00 PM' },
    { id: 2, c_day: 'Tuesday', c_time: '11:00 AM - 9:00 PM' },
    { id: 3, c_day: 'Wednesday', c_time: '11:00 AM - 9:00 PM' },
    { id: 4, c_day: 'Thursday', c_time: '11:00 AM - 9:00 PM' },
    { id: 5, c_day: 'Friday', c_time: '11:00 AM - 9:00 PM' },
    { id: 6, c_day: 'Saturday', c_time: '11:00 AM - 9:00 PM' },
    { id: 7, c_day: 'Sunday', c_time: '5:00 PM - 9:00 PM' },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white py-8" id="clinic-info">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-11/12 lg:w-10/12 p-4 my-12">

        {/* Google Map Section */}
        <div className="w-full lg:w-5/5 flex justify-center mb-8 lg:mb-0">
          <div className="w-full h-64 sm:h-80 lg:h-[518px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="clinic_location"
              className="w-full h-full"
              
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.2627973069552!2d73.81217097882457!3d18.490447625244617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe79aaaaaab%3A0x6af3cf2bec34e2c2!2sDental%20Clinic!5e1!3m2!1sen!2sin!4v1728150842312!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Clinic Info Section */}
        <div className="w-full lg:w-2/5 bg-white p-3 lg:ml-2 lg:p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <span className="text-blue-500 mr-2">
              <i className="fa-solid fa-angles-right"></i>
            </span>
            OPD Hours
          </h2>

          {/* Clinic Timing Table */}
          <div>
            {clinic_data.map((e) => (
              <div key={e.id} className="flex justify-between py-2 border-b border-gray-200">
                <p className="font-medium text-gray-700">{e.c_day}</p>
                <p className="text-gray-600">{e.c_time}</p>
              </div>
            ))}
          </div>

          {/* Clinic Direction and Call */}
          <div className="flex justify-between mt-6">
            <a
              href="https://www.google.com/maps?ll=18.978293,73.030934&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=2928691504663646078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Clinic Direction
            </a>
            <a href="tel:8698069429" className="text-blue-600 hover:underline">
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicInfo;
