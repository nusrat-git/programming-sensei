import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Classes = () => {
    const categories = useLoaderData();
    return (
        <div>
            {
                categories.map(category => <h1 key={category.id}><Link to={`/classes/${category.id}`}>{category.name}</Link ></h1>)
            }
        </div>
    );
};

export default Classes;