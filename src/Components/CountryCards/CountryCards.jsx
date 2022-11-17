import React from 'react'
import CountryCard from '../CountryCard/CountryCard';

export default function CountryCards(props) {
  return (
    <div className='container  py-5'>
      {(props.countries.length !== 0 )?
          <div className="row gy-4">
          {
            props.countries.map((country,index) => {
              const {name,population,region,capital,flags}=country
              return(
                <div className="col-lg-4 col-xxl-3 col-md-6" key={index}>
                  <CountryCard countries={props.totalCountries} countryName={name.common} population={population} region={region} capital={capital} country={country} image={flags['png']}/>
                </div>
              )
            })
          }
       </div>:<div className="alert alert-secondary text-center textDk rounded-0 shadow-sm">There is no Countries related to your Search</div>

      }
    </div>
  )
}
