import React from 'react';

const LeftSide = () => {
    return (
        <div className='mx-24 flex-[50%] '>
            <div className="mt-2 mx-4 mb-10 text-red-400 mb- font-bold text-xl">
DISSCUSSION FOURM
            </div>
            <div>
                <div className='flex bg-white p-[25px] mx-4 gap-x-5 rounded-lg shadow-2xl'>
                    <p className=' shadow-md px-[30px] py-2 font-bold text-white bg-red-700 rounded-3xl cursor-pointer'>Sector 1</p>
                    <p className='shadow-md px-[30px] py-2 font-bold text-white bg-blue-600 rounded-3xl cursor-pointer'>Sector 2</p>
                    <p className='shadow-md px-[30px] py-2 font-bold text-white bg-yellow-400 rounded-3xl cursor-pointer'>Sector 3</p>
                    <input className='px-[30px] py-2 text-white bg-gray-100 shadow-inner rounded-3xl cursor-pointer' type="text" placeholder='Search here............'/>
                </div>

                <div className=' flex-col mt-4 flex bg-white p-[25px] mx-4 gap-x-5 rounded-lg shadow-2xl'>
                    <div>
                        <p className='text-blue-500 font-bold'>2 min ago</p>
                    </div>
                    <div>
                        <img src="https://www.equitybulls.com/equitybullsadmin/uploads/Infibeam%20Avenues%20Limited%20-%20New%20Logo%202.jpg" className='h-56 mx-40' alt="" />
                    </div>
                    <div className='flex'>
                        <img src="https://w7.pngwing.com/pngs/577/307/png-transparent-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company-logo.png" alt="" className='rounded-full h-14'/>
                        <div className="flex">
                       <span className='mx-4 font-bold text-xl mt-6'>Lorem Iosum</span>
                        <p className=' shadow-md py-1 px-6 bg-red-700 rounded-3xl mt-4
                         text-white'>Sector 1</p>
                        </div>
                    </div>
                        <p className='mx-20 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque asperiores laboriosam corrupti vel molestias sed quisquam praesentium</p>
                        <div className='flex mx-20 gap-x-20'>
                            <h1 className='gap-x-2'><i className="fa-regular fa-heart"></i>2k</h1>
                            <h1><i className="fa-regular fa-eye"></i> 2k</h1>
                            <h1><i className="fa-regular fa-message"></i> 2k Comments</h1>
                            <h1><i className="fa-regular fa-share-from-square"></i> Share</h1>
                        </div>
                </div>
                <div className=' flex-col mt-4 flex bg-white p-[25px] mx-4 gap-x-5 rounded-lg shadow-2xl'>
                    <div>
                        <p className='text-blue-500 font-bold'>2 min ago</p>
                    </div>
                   
                    <div className='flex'>
                        <img src="https://w7.pngwing.com/pngs/577/307/png-transparent-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company-logo.png" alt="" className='rounded-full h-14'/>
                        <div className="flex">
                       <span className='mx-4 font-bold text-xl mt-6'>Lorem Iosum</span>
                        <p className=' shadow-md py-1 px-6 bg-blue-500 rounded-3xl mt-4
                         text-white'>Sector 1</p>
                        </div>
                    </div>
                        <p className='mx-20 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque asperiores laboriosam corrupti vel molestias sed quisquam praesentium</p>
                        <div className='flex mx-20 gap-x-20'>
                            <h1 className='gap-x-2'><i className="fa-regular fa-heart"></i>2k</h1>
                            <h1><i className="fa-regular fa-eye"></i> 2k</h1>
                            <h1><i className="fa-regular fa-message"></i> 2k Comments</h1>
                            <h1><i className="fa-regular fa-share-from-square"></i> Share</h1>
                        </div>
                </div>
                <div className=' flex-col mt-4 flex bg-white p-[25px] mx-4 gap-x-5 rounded-lg shadow-2xl'>
                    <div>
                        <p className='text-blue-500 font-bold'>2 min ago</p>
                    </div>
            
                   
                    <div className='flex'>
                        <img src="https://w7.pngwing.com/pngs/577/307/png-transparent-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company-logo.png" alt="" className='rounded-full h-14'/>
                        <div className="flex">
                       <span className='mx-4 font-bold text-xl mt-6'>Lorem Iosum</span>
                        <p className=' shadow-md py-1 px-6 bg-yellow-400 rounded-3xl mt-4
                         text-white'>Sector 1</p>
                        </div>
                    </div>
                        <p className='mx-20 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque asperiores laboriosam corrupti vel molestias sed quisquam praesentium</p>
                        <div className='flex mx-20 gap-x-20'>
                            <h1 className='gap-x-2'><i className="fa-regular fa-heart"></i>2k</h1>
                            <h1><i className="fa-regular fa-eye"></i> 2k</h1>
                            <h1><i className="fa-regular fa-message"></i> 2k Comments</h1>
                            <h1><i className="fa-regular fa-share-from-square"></i> Share</h1>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
