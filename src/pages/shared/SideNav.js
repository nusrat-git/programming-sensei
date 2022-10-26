import { Sidebar } from 'flowbite-react';
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
        <div className='mt-8 md:ml-0 ml-14 md:block'>
            <div className="w-fit">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            {
                                categories.map(category => <h1 key={category.id} className='text-2xl p-2 md:p-5 font-bold'><Sidebar.Item
                                    href="#"
                                    className=' bg-gray-300'

                                >
                                    <Link to={`/classes/${category.id}`}>{category.name}</Link >
                                </Sidebar.Item></h1>)
                            }
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>

    );
};

export default SideNav;