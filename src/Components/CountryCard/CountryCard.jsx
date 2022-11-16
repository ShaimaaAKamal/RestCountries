import React from 'react';
import {useNavigate} from 'react-router-dom';



export default function CountryCard(props) {
  const {countryName,population,region,capital,image,country,countries}=props; 
  const navigate=useNavigate()
  const handleCountryClick=(e)=>{
    navigate('details',{state:{country,countries}})
  }
  return (
    <div className="card  border-0">
    <img src={image} className="card-img-top cardImage" alt={countryName}/>
    <div className="card-body bgNav rounded-2 rounded-bottom shadow-sm py-4 ps-4">
      <h6 className="card-title mb-3" onClick={(e)=>handleCountryClick(e)}>{countryName}</h6>
      <p className="card-text mb-1 info"><span>Population:</span><span >{population.toLocaleString({ minimumFractionDigits: 3 })}</span></p>
      <p className="card-text mb-1 info"><span>Region:</span><span >{region}</span></p>
      <p className="card-text mb-2 info"><span>Capital:</span><span >{capital}</span></p>
    </div>
  </div>
  )
}
