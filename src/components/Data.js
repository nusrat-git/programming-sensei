import { Card } from 'flowbite-react';
import React from 'react';

const Data = ({ data }) => {
    const { class_img, class_name, class_price } = data;
    return (
        <div>

            <div className="max-w-sm">
                <Card imgSrc={class_img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {class_name}
                    </h5>
                    <p className="font-semibold text-lg text-gray-700 dark:text-gray-400">
                        Price: {class_price}
                    </p>
                </Card>
            </div>

        </div>
    );
};

export default Data;