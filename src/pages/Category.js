import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Data from './Data';

const Category = () => {

    const datas = useLoaderData();

    return (

        <div className='grid grid-cols-2 gap-9 m-9'>
            {
                datas.map(data => <Data key={data.id} data={data}></Data>)
            }
        </div>
    );
};

export default Category;