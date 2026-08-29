import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DashboardSideBar = () => {
    return (
        <div className='h-screen p-5 bg-blue-50 text-black'>
            {/* <Image src={''} alt=''/> */}
            <div className='flex flex-col gap-3 font-bold '>
                <Link  href={'/dashboard/chart'}> Chart</Link>
                <Link href={'/dashboard/my-bookings'}>My Bookings</Link>
            </div>
        </div>
    );
};

export default DashboardSideBar;