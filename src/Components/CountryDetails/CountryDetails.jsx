import React, { useEffect, useState } from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import handleModeChange from '../../js/script';


export default function CountryDetails(props) {
  let {mode,setMode}=props
  const location=useLocation();
  const navigate=useNavigate();
  const {country,countries}=(location.state)
  const {name,population,region,subregion,capital,flags,currencies,languages,tld,borders}=country;
  const curriencesKey=Object.keys(currencies);
  const languageKeys=Object.keys(languages);
  let [countryBorder,setBorders]=useState([]);
  const getCountryObjectData=(keyobj,obj,type)=>{    
   try{
    let elements=keyobj.map((key,index)=>{
      return <span className='me-1 spanColor' key={index}>{(type==='currency')?obj[key].name:obj[key]}
      {(index !== keyobj.length -1)?',':''}
     </span>
     })
     return elements;
   }
   catch(e){
    return [];
   }
  }
  const getCountryArrayData=(Arr)=>{
    try{
      let elements= Arr.map((key,index) => 
       <span className='me-1 spanColor' key={index}>{key}
      {(index !== Arr.length -1)?',':''}
     </span>)
    return elements;
    }
    catch(e){
      return [];
    }
  }

  const getBorderName=()=>{
   
     let borderNames=borders.map(border => {
      let borderName;
      const index =countries.findIndex(country => {
        return country.cca3 === border});
        borderName=countries[index].name.common;
      return borderName
     })
     return borderNames;
  }

  const handleBack=()=>{
    navigate(-1);
  }
  
  const goToBorder=(border)=>{
    const index=countries.findIndex(country => country.name.common===border);
    const borderCountry=countries[index];
    navigate('/details',{state:{country:borderCountry,countries}})
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
    // if(localStorage.getItem('page')){
    //   getBorders();
    // (handleModeChange(mode,setMode))
    // }
    // else{
    //   navigate('');
    // }
    getBorders();
    (handleModeChange(mode,setMode));
  },[]);
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
  },[borders]);
  useEffect(()=>{ 
    (handleModeChange(mode,setMode));
  },[mode,countryBorder]);

  return (
    <div className='container details'>
    <div>
      <button className='rounded-1 bgNav changeBack shadow-lg' onClick={handleBack}>
      <i className="fa-solid fa-arrow-left me-2"></i><span>Back</span>
      </button>
    </div>
     {
      (country !== undefined)?
      <div className='row gy-4 my-5'>
     <div className="col-lg-5">
        <div>
          <img src={flags['png']} alt={name.official}  className='w-100 CountryImage shadow'/>
        </div>
     </div>
     <div className=" offset-lg-1 col-lg-6 align-self-md-center">
       <div>
        <h4 className='mb-4 fw-bold'>{name.official}</h4>
        <div className="row gy-4 flex-column flex-md-row">
          <div className="col-md-6">
            <div>
            <p className="mb-1 info"><span>Native Name:</span><span >{name.common}</span></p>
            <p className="mb-1 info"><span>Population:</span><span >{population.toLocaleString({ minimumFractionDigits: 3 })}</span></p>
            <p className="mb-1 info"><span>Region:</span><span >{region}</span></p>
            <p className="mb-1 info"><span>Sub Region:</span><span >{subregion}</span></p>
            {(capital !== undefined)?<p className="mb-1 info"><span>Capital:</span>{getCountryArrayData(capital)}</p>:''}
            </div>
          </div>
          <div className="col-md-6">
            <div>
            {(tld !== undefined)?<p className="mb-1 info"><span>Top Level Domain:</span>{getCountryArrayData(tld)}</p>:''}
            <p className="mb-1 info"><span>Currencies:</span>{getCountryObjectData(curriencesKey,currencies,'currency')}</p>
            <p className="mb-1 info"><span>Languages:</span>{ getCountryObjectData(languageKeys,languages,'languages') }</p>
            </div>
          </div>
        </div>
        {
          (countryBorder.length !== 0)?
           <div className="mb-1 borders d-flex align-items-md-center flex-column flex-md-row mt-5">
          <span className='me-2 mb-2 mb-md-0 fw-medium'>Border Countries:</span>
          <div>
            {
              countryBorder.map((bord,index)=>
              <span className='d-inline-block py-1 px-3 bgNav changeBack fs-medium  shadow-sm rounded-1 me-2 mb-1' key={index} onClick={() => goToBorder(bord)}>{bord}</span> 
              )
            }
          </div>
          </div>:''
        }
       </div>
     </div>
    </div>
    :''
     }
    </div>
  )
}
