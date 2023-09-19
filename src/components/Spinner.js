import React from 'react'
import loading from './loading.gif';
export default function Spinner() {
  return (
    <div>
     <img className='text-center' src={loading} alt="loading spinner gif" />
    </div>
  )
}
