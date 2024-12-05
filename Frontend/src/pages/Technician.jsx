import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import React, { useContext } from 'react'

const Technician = () => {


const {speciality} = useparams()
 
const {Technician} = useContext(AppRouterContext)

  return (
    <div>
      <p>Browse through the Tecgnician specialist.</p>
      <div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>  
        </div>
      </div>
  )
}

export default Technician