import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GrDocumentPdf } from 'react-icons/gr';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetail = () => {
    const loadData = useLoaderData();

    return (
        <div className='md:m-0 m-4 md:pt-0 pt-9 md:mt-10 md:flex text-center'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='m-8 bg-slate-300 h-16 p-4 rounded-2xl'>
                <GrDocumentPdf className=' text-4xl' />
                </button>}
            </Pdf>

            <div className="max-w-sm" ref={ref}>
                <Card imgSrc={loadData.class_img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Class: {loadData.class_name}
                    </h5>
                    <p className="font-bold text-lg text-gray-700 dark:text-gray-400">
                        Catergory: {loadData.category_name}
                    </p>
                    <p className=' font-semibold text-xl'>{loadData.description}</p>
                    <p className='font-semibold'>Price: {loadData.class_price}</p>
                    <Button><Link to={`/checkout/${loadData.id}`}>Get premium access</Link></Button>
                </Card>
            </div>
        </div>
    );
};

export default CourseDetail;