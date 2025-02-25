import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const RelatedTechnician = ({ speciality, docId }) => {
  const { Technician } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (Technician && Technician.length > 0 && speciality) {
      const TechnicianData = Technician.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(TechnicianData);
    }
  }, [Technician, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-8 py-16 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <h1 className="text-4xl font-bold tracking-wide">Meet Our Technicians</h1>
      <p className="sm:w-2/3 md:w-1/2 text-center text-gray-700">
        Explore our trusted and skilled technicians. Start by discovering a few, or view more as needed.
      </p>
      <div className="w-full grid gap-8 px-4 sm:px-8 md:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="group border border-gray-200 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-white overflow-hidden"
          >
            <div className="flex items-center justify-center w-full h-48 bg-gray-100">
              <img
                className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full border border-gray-300 shadow-sm"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
              <div className="mt-3 flex items-center justify-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-green-500">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {Technician && Technician.length > 5 && (
        <button
          onClick={() => {
            navigate('/Technician');
            scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white font-semibold px-10 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default RelatedTechnician;
