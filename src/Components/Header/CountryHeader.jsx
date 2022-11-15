import React from 'react'

export default function CountryHeader() {
  return (
     <div className='py-3 header shadow-sm bgLight position-fixed w-100'>
        <div className="container textLight">
        <div className='d-flex justify-content-between align-items-center'>
            <h5 className='mb-0'>Where in the world?</h5>
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
