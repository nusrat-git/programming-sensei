import React from 'react';
import { Outlet } from 'react-router-dom';
import NaviBar from '../pages/shared/NaviBar'
import SideNav from '../pages/shared/SideNav';

const Main = () => {
    return (
        <div>
            <NaviBar></NaviBar>

            <div className='md:flex justify-evenly'>
                <div className=' col-span-3'>
                    <SideNav></SideNav>
                </div>
                <div className=' col-span-9'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Main;