import React , { useEffect,useState}  from 'react'
import axios from 'axios'
import CountryCards from '../CountryCards/CountryCards'
import Filter from '../Filter/Filter'

export default  function Home() {
  let [countries, setCountries] = useState([]);
  let [totalCountries, setTotalCountries] = useState([]);
  let [regions, setRegions] = useState(new Set());

  const handleRegionSelect= async (e)=>{
   try{
    countries=(e.target.value !== 'filterByRegion')?
    await axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`)
    :await axios.get('https://restcountries.com/v3.1/all');
    setCountries(countries.data);
   } catch(e){
    setCountries([]);
  }
  }

  const handleCountrySearch=async (e) =>{
    try{
      countries=(e.target.value !== '')?
     await axios.get(`https://restcountries.com/v3.1/name/${e.target.value}?fullText=false`)
     :await axios.get('https://restcountries.com/v3.1/all');
       setCountries(countries.data);
    }
    catch(e){
      setCountries([]);
    }
    
  }

  useEffect(()=>{
    async function getCountries(){
      try{
        countries=await axios.get('https://restcountries.com/v3.1/all');
        setTotalCountries(countries.data);
        setCountries(countries.data);
        countries.data.forEach(country => {
          if(!regions.has(country.region))regions.add(country.region)
        })
        setRegions(regions);
      }catch(e){
        setCountries([]);
      }  
    }
    getCountries();
  },[]);

  return (
    <>
        <Filter regions={regions} handleRegionSelect={handleRegionSelect} handleCountrySearch={handleCountrySearch}/>
        <CountryCards countries={countries} totalCountries={totalCountries}/> 
    </>
  )
}
