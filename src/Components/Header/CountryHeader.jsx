import React from 'react'

export default function CountryHeader() {
  return (
    <div>
      <h1 className='fw-bolder'>Where in the world?</h1>
      <div>
        <div id='darkMode'>
        <i class="fa-solid fa-moon"></i>
        <span>Dark Mode</span>
        </div>
        <div id='lightMode' className='d-none'>
        <i class="fa-light fa-moon"></i>
        <span>Dark Mode</span>
        </div>
      </div>
    </div>
  )
}
