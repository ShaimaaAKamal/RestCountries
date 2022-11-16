import React from 'react'
import {useNavigate} from 'react-router-dom';


export default function CountryHeader() {
  const navigate=useNavigate();

  const GoHome=()=>{navigate('/')}
  return (
     <div className='py-3 header shadow-sm bgNav position-fixed w-100'>
        <div className="container textLight">
        <div className='d-flex justify-content-between align-items-center'>
            <h5 className='mb-0' onClick={GoHome}>Where in the world?</h5>
            <div>
              <div id='darkMode' className='d-flex align-items-center'>
              <i className="fa-regular fa-moon me-1"></i>
              <span>Dark Mode</span>
              </div>
              <div id='lightMode' className='d-none d-flex align-items-center'>
              <i className="fa-solid fa-moon me-1"></i>
              <span>Dark Mode</span>
              </div>
            </div>
          </div>
        </div>
     </div>
  )
}
