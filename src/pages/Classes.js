import { Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Classes = () => {
    const categories = useLoaderData();
    return (
        <div className='grid grid-cols-2 gap-9 p-11'>
            {
                categories.map(category =>
                    <div key={category.id}>
                        <Link to={`/classes/${category.id}`}>
                            <div className="max-w-sm">
                                <Card imgSrc={category.img} className=' w-72 p-7' >
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {category.name}
                                    </h5>
                                </Card>
                            </div>
                        </Link>
                    </div>

                )
            }
        </div>
    );
};

export default Classes;