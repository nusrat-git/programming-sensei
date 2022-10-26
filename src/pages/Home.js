import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header.png';

const Home = () => {
    return (
        <div className='m-8'>
            <div>
                <img src={Header} alt="" className='mt-9' />
            </div>
            <div>
                <Link to='/classes'>
                    <button className=' bg-gray-200 px-10 py-5 rounded-2xl font-bold text-lg'>Explore Classes</button> 
                </Link>
            </div>
        </div>
    );
};

export default Home;