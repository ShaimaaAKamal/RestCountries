import React from 'react'

export default function Filter(props) {
  return (
        <div className='container'>
                <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-md-center'>
                    <div className="input-group input-group-lg search ">
                        <span className="input-group-text rounded-0" id="Search-Field"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control rounded-0" aria-label="Search-Field" aria-describedby="Search-Field" placeholder='Search For a Country...'/>
                     </div>

                    <select className="form-select form-select-lg filter rounded-0 " aria-label="RegionFilter"  onChange={ e => props.handleRegionSelect(e)}>
                        <option value='filterByRegion'>Filter By Region</option>
                        {
                             Array.from(props.regions).map((region,index)=>  
                            <option value={region} key={index}>{region}</option>

                            )
                        }
                    </select>      
            </div>
        </div>
  )
}
