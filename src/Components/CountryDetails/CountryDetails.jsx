import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';


export default function CountryDetails() {
  const location=useLocation();
  const {name,population,region,subregion,capital,flags,currencies,languages,tld,borders}=location.state.country;
  const curriencesKey=Object.keys(currencies);
  const languageKeys=Object.keys(languages);
  let [countryBorder,setBorders]=useState([]);
  const getCountryObjectData=(keyobj,obj,type)=>{    
  let elements=keyobj.map((key,index)=>{
      return <span className='me-1 spanColor' key={index}>{(type==='currency')?obj[key].name:obj[key]}
      {(index !== keyobj.length -1)?',':''}
     </span>
     })
     return elements;
  }
  const getCountryArrayData=(Arr)=>{
   let elements= Arr.map((key,index) => 
       <span className='me-1 spanColor' key={index}>{key}
      {(index !== Arr.length -1)?',':''}
     </span>)
    return elements;
  }

  const getBorderName=()=>{
     let borderNames=borders.map(border => {
      let borderName;
      const index =location.state.countries.findIndex(country => country.cca3===border);
        borderName=location.state.countries[index].name.common
      return borderName
     })
     return borderNames;
  }

  useEffect(()=>{
    async function getBorders(){
      try{
        const border=getBorderName()
        setBorders(border)
      }catch(e){
        setBorders([]);
      }  
    }
    getBorders();
  },[]);

  return (
    <div className='container details'>
    <div>
      <button className='rounded-1 bg-white shadow-lg textLight'>
      <i className="fa-solid fa-arrow-left me-2"></i><span>Back</span>
      </button>
    </div>
    <div className='row gy-4 my-5'>
     <div className="col-md-5">
        <div>
          <img src={flags['png']} alt={name.official}  className='w-100 CountryImage'/>
        </div>
     </div>
     <div className=" offset-md-1 col-md-6 align-self-md-center">
       <div>
        <h4 className='mb-4 fw-bold'>{name.official}</h4>
        <div className="row gy-4 flex-column flex-md-row">
          <div className="col-lg-6">
            <div>
            <p className="mb-1 info"><span>Native Name:</span><span >{name.common}</span></p>
            <p className="mb-1 info"><span>Population:</span><span >{population.toLocaleString({ minimumFractionDigits: 3 })}</span></p>
            <p className="mb-1 info"><span>Region:</span><span >{region}</span></p>
            <p className="mb-1 info"><span>Sub Region:</span><span >{subregion}</span></p>
            <p className="mb-1 info"><span>Capital:</span>{getCountryArrayData(capital)}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
            <p className="mb-1 info"><span>Top Level Domain:</span>{getCountryArrayData(tld)}</p>
            <p className="mb-1 info"><span>Currencies:</span>{getCountryObjectData(curriencesKey,currencies,'currency')}</p>
            <p className="mb-1 info"><span>Languages:</span>{ getCountryObjectData(languageKeys,languages,'languages') }</p>
            </div>
          </div>
        </div>
        {
          (countryBorder.length !== 0)?
           <div className="mb-1 borders d-flex align-items-center mt-5">
          <span className='me-2'>Border Countries:</span>
          <div>
            {
              countryBorder.map((bord,index)=>
              <span className='d-inline-block py-1 px-3 bgLight textLight shadow rounded-1 me-2' key={index}>{bord}</span> 
              )
            }
          </div>
          </div>:''
        }
       </div>
     </div>
    </div>
    </div>
  )
}
