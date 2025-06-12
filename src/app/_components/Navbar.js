import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
const Navbar = () => {
    return (
        <>
            <div className='flex h-23 flex-col bg-white w-full'>

                <div className='h-[60%] px-5 bg-white py-2 flex items-center '>
                    <div className='justify-center flex  w-[50%]'>
                        <div className='w-[50%]'>Home</div>
                        <div className="search-container border-1 w-[50%] border-gray-200 rounded flex items-center text-center justify-between px-1">
                            <input type="text" placeholder="Search for products..." className='outline-none w-[80%]' />
                            <button className='w-[20%] flex items-center text-center justify-end cursor-pointer '><CiSearch className='hover:scale-1.5' /></button>
                        </div>

                    </div>

                    <div className='flex justify-evenly w-[50%]'>
<div className='flex items-center justify-center text-center gap-1 text-sm'><span><CiPhone/></span><h3>8767834050</h3></div><>|</>
<div className='flex items-center justify-center text-center gap-1 text-sm'><span><MdOutlineMailOutline/></span><h3>sic@sic.com</h3></div><>|</>
<div className='flex items-center justify-center text-center gap-1 text-sm'><span><CiCircleInfo className='text-lg'/></span><h3>info</h3><span><IoIosArrowDown/></span></div><>|</>
<div className='flex items-center justify-center text-center gap-1 text-sm'><span><MdAccountCircle className='text-lg'/></span><span><IoIosArrowDown/></span></div><>|</>
<div className='flex items-center justify-center text-center gap-1 text-lg'><span><CiHeart/></span></div><>|</>
<div className='flex items-center justify-center text-center gap-1 text-lg'><span><SlHandbag/></span></div>
                  
                   
                    </div>

                    

                </div>

                <div className='h-[40%] w-full bg-gray-100 items-center gap-5 justify-center flex '>
<div className='flex items-center justify-center text-center gap-1 text-sm font-semibold'><h1 className=''>MEN</h1><span><IoIosArrowDown/></span></div>
<div className='flex items-center justify-center text-center gap-1 text-sm font-semibold'><h1 className=''>KIDS</h1><span><IoIosArrowDown/></span></div>
<div className='flex items-center justify-center text-center gap-1 text-sm font-semibold'><h1 className=''>WOMEN</h1><span><IoIosArrowDown/></span></div>
<div className='flex items-center justify-center text-center gap-1 text-sm font-semibold'><h1 className=''>SPORT</h1><span><IoIosArrowDown/></span></div>
<div className='flex items-center justify-center text-center gap-1 text-sm font-semibold'><h1 className=''>BRANDS</h1><span><IoIosArrowDown/></span></div>
<div className='flex items-center justify-center text-center gap-1 text-sm font-semibold'><h1 className=''>SANDALS</h1><span><IoIosArrowDown/></span></div>

                </div>

            </div>
        </>
    )
}

export default Navbar