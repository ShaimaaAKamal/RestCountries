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
              const countryName=(name.official.split(' ').length >4)? name.official.split(' ').slice(0,4).join(' '): name.official;
              return(
                <div className="col-lg-4 col-xxl-3 col-md-6" key={index}>
                  <CountryCard countries={props.countries} countryName={countryName} population={population} region={region} capital={capital} country={country} image={flags['png']}/>
                </div>
              )
            })
          }
       </div>:<div className="alert bgDk text-center textDk rounded-0 shadow-sm">There is no Countries related to your Search</div>

      }
    </div>
  )
}
