import React , { useEffect,useState}  from 'react'
import axios from 'axios'
import CountryCards from '../CountryCards/CountryCards'
import Filter from '../Filter/Filter'

export default  function Home() {
  let [countries, setCountries] = useState([]);
  let [regions, setRegions] = useState(new Set());

  const handleRegionSelect= async (e)=>{
    if(e.target.value !== 'filterByRegion')
      countries=await axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`);
    else 
      countries=await axios.get('https://restcountries.com/v3.1/all');
    setCountries(countries.data);
  }

  useEffect(()=>{
    console.log('didMount')
    async function getCountries(){
        countries=await axios.get('https://restcountries.com/v3.1/all');
      setCountries(countries.data);
      countries.data.forEach(country => {
        if(!regions.has(country.region))regions.add(country.region)
      })
      setRegions(regions);
    }
    getCountries();
  },[]);
  return (
    <>
        <Filter regions={regions} handleRegionSelect={handleRegionSelect}/>
        <CountryCards countries={countries}/> 
    </>
  )
}
