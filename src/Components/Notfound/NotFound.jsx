import React from 'react'
import Image from '../../images/Notfound.jpg'

export default function NotFound() {
  return (
    <div>
      <img src={Image} alt="Not Found Image" className='w-100 vh-100' />
    </div>
  )
}
