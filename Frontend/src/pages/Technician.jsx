import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Technician = () => {

  const {speciality} = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { Technician } = useContext(AppContext);
 const applyFilter = () => {
  if (speciality) {
    setFilterDoc(Technician.filter(doc => doc.speciality == speciality))
  } else {
    setFilterDoc(Technician)
  }
 }
 useEffect(()=>{
  applyFilter()
 },
[Technician,speciality])
  return (
    <div>
      <p>Browse through the Technician specialist.</p>
      <div>
        <div>
          <p>Software Glitches</p>
          <p>Screen Issues</p>
          <p>Battery Problems</p>
          <p>Overheating</p>
          <p>Sound Problems</p>
          <p>Storage Problems</p>
        </div>
        <div>
          {
          filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
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
      </div>
    </div>
  );
};

export default Technician;
