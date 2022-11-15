import React from 'react'

export default function Filter() {
  return (
        <div className='container'>
                <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-md-center'>
                    <div className="input-group input-group-lg search">
                        <span className="input-group-text" id="Search-Field"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control" aria-label="Search-Field" aria-describedby="Search-Field" placeholder='Search For a Country...'/>
                     </div>

                    <select className="form-select form-select-lg filter " aria-label="RegionFilter">
                        <option >Filter By Region</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>      
            </div>
        </div>
  )
}
