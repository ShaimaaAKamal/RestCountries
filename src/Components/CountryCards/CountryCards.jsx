import axios from 'axios'
import React, { useEffect,useState} from 'react'
import CountryCard from '../CountryCard/CountryCard';

export default function CountryCards() {
    const [countries, setCountries] = useState([]);

  useEffect(()=>{
    async function getCountries(){
      let countries=await axios.get('https://restcountries.com/v3.1/all');
      setCountries(countries.data);
    }
    getCountries();
  });
  return (
    <div className='container  py-5'>
       <div className="row gy-4">
          {
            countries.map((country,index) => {
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
