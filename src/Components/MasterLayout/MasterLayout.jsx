import React from 'react';
import { Outlet } from 'react-router-dom';
import CountryHeader from '../Header/CountryHeader';

export default function MasterLayout() {
  return (
    <>
       <CountryHeader/>
       <div className='parent'>
       <Outlet></Outlet>
       </div>
    </>
  )
}
