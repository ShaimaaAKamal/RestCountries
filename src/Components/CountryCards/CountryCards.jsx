import React from 'react'
import CountryCard from '../CountryCard/CountryCard';

export default function CountryCards(props) {
  
  return (
    <div className='container  py-5'>
       <div className="row gy-4">
          {
            props.countries.map((country,index) => {
              const {name,population,region,capital,flags}=country
              name.official=(name.official.split(' ').length >4)? name.official.split(' ').slice(0,4).join(' '): name.official;
              return(
                <div className="col-lg-3 col-md-6" key={index}>
                  <CountryCard countryName={name.official} population={population} region={region} capital={capital} image={flags['png']}/>
                </div>
              )
            })
          }
       </div>
    </div>
  )
}
