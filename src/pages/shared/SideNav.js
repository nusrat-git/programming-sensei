import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-6 ml-7 grid grid-cols-3 md:block'>
            {
                categories.map(category => <h1 key={category.id} className='text-2xl p-2 md:p-5 font-bold'><Link to={`/classes/${category.id}`}>{category.name}</Link ></h1>)
            }
        </div>
    );
};

export default SideNav;