import React from 'react'

export default function CountryCard(props) {
  const {countryName,population,region,capital,image}=props;
  return (
    <div className="card rounded-0">
    <img src={image} className="card-img-top rounded-0 cardImage" alt={countryName}/>
    <div className="card-body py-4 ps-4">
      <h6 className="card-title mb-3">{countryName}</h6>
      <p className="card-text mb-1 info"><span>Population:</span><span >{population}</span></p>
      <p className="card-text mb-1 info"><span>Region:</span><span >{region}</span></p>
      <p className="card-text mb-2 info"><span>Capital:</span><span >{capital}</span></p>
    </div>
  </div>
  )
}
