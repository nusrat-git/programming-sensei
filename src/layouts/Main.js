import React from 'react';
import { Outlet } from 'react-router-dom';
// import Classes from '../components/Classes';
import NaviBar from '../pages/NaviBar'
import SideNav from '../pages/shared/SideNav';

const Main = () => {
    return (
        <div>
            <NaviBar></NaviBar>
            <div className='flex justify-around'>
                <SideNav></SideNav>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;