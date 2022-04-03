import React from 'react';
import { FaBeer} from "@react-icons/all-files/fa/FaBeer";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div >
       <div className='flex  md:justify-center md:items-center'>
       <h1 className='text-6xl pt-40'>Welcome our crypto cafe </h1>
          <span className='text-5xl pt-40 px-5 text-sky-700'><FaBeer /></span>
       </div>
       <div className='flex justify-center  mt-5'>
       <Link to='/coin' className='bg-sky-700 px-8 py-2 text-2xl  text-white rounded-lg'>Explore Coins</Link> 
       </div>
         
        </div>
    );
};

export default HomePage;