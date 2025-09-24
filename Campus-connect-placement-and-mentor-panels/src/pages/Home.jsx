import React from 'react'
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <Link to={'/admin/dashboard'}>  <button className='bg-black rounded-lg p-5 text-white' >click me i will send you to placement shell pannel</button></Link>
    
    </div>
  )
}

export default Home
