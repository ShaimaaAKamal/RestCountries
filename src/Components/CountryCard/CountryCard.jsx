import React from 'react'

export default function CountryCard() {
  return (
    <div className="card rounded-0" style={{width: '18rem'}}>
    <img src="https://flagcdn.com/w320/pe.png" className="card-img-top rounded-0" alt="Flag Name"/>
    <div className="card-body py-4 ps-4">
      <h6 className="card-title mb-3">Country Name</h6>
      <p className="card-text mb-1 info"><span>Population:</span><span >81,770,900</span></p>
      <p className="card-text mb-1 info"><span>Region:</span><span >Europe</span></p>
      <p className="card-text mb-2 info"><span>Capital:</span><span >Berlin</span></p>
    </div>
  </div>
  )
}
