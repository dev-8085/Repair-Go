import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Technician = () => {

  const {speciality} = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate()
  const { Technician } = useContext(AppContext);


 const applyFilter = () => {
  if (speciality) {
    setFilterDoc(Technician.filter(doc => doc.speciality === speciality))
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
      <p className='text-gray-600'>Browse through the Technician specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality === 'Software Glitches' ? navigate('/Technician') : navigate('/Technician/Software Glitches')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Software Glitches</p>
          <p onClick={()=>speciality === 'Screen Issues' ? navigate('/Technician') : navigate('/Technician/Screen Issues')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Screen Issues</p> 
          <p onClick={()=>speciality === 'Battery Problems' ? navigate('/Technician') : navigate('/Technician/Battery Problems')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Battery Problems</p>
          <p onClick={()=>speciality === 'Overheating' ?   navigate('/Technician') : navigate('/Technician/Overheating')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Overheating</p>
          <p onClick={()=>speciality === 'Sound Problems' ? navigate('/Technician') : navigate('/Technician/Sound Problems')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Sound Problems</p>
          <p onClick={()=>speciality === 'Storage Problems' ? navigate('/Technician') : navigate('/Technician/Storage Problems')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Storage Problems</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
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
