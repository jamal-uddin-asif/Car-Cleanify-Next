import React from 'react';
import ServiceCardSkeleton from './_components/ServiceSkalaton';

const loading = () => {
    return (
        <div className="grid my-5 grid-cols-3 gap-4">
            {
               [...Array(12).keys()].map(i=> <ServiceCardSkeleton key={i}/>)
            }
        </div>
    );
};

export default loading;