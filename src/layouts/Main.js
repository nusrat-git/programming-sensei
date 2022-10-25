import React from 'react';
import { Outlet } from 'react-router-dom';
import NaviBar from '../components/NaviBar'

const Main = () => {
    return (
        <div>
            <NaviBar></NaviBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;