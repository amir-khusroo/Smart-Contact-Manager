import React, { useState } from 'react'
import logo from '../assets/react.svg'

// icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';

const menuItems = [
    {
        icons: <IoHomeOutline size={30} />,
        label: 'Home',
        path: 'home'
    },
    {
        icons: <i className="fa-solid fa-plus fa-2x"></i>,
        label: 'Add Contact',
        path: 'add-contact'
    },
    {
        icons: <i className="fa-solid fa-eye fa-xl"></i>,
        label: 'View Contacts',
        path: 'view-contacts'
    },
    {
        icons: <IoLogoBuffer size={30} />,
        label: 'Log',
        path: 'log'
    },
    {
        icons: <TbReportSearch size={30} />,
        label: 'Report',
        path: 'report'
    }
]

export default function Sidebar() {

    const [open, setOpen] = useState(true);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 960) setOpen(false);
            else setOpen(true);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className='flex'>
            <nav className={`shadow-md h-[calc(100vh-70px)] sticky top-12  p-2 flex flex-col duration-500 bg-slate-800 text-white ${open ? 'w-60' : 'w-16'}`}>

                {/* Header */}
                <div className=' px-3 py-2 h-20 flex justify-between items-center'>
                    <img src={logo} alt="Logo" className={`${open ? 'w-10' : 'w-0'} rounded-md`} />
                    <div><MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`} onClick={() => setOpen(!open)} /></div>
                </div>

                {/* Body */}

                <ul className='flex-1 '>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <NavLink to={item.path} key={index}>
                                    <li className='px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>

                                        <div>{item.icons}</div>
                                        <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                                        <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}>{item.label}</p>

                                    </li>
                                </NavLink>
                            )
                        })
                    }
                </ul>
                {/* footer */}
                <div className='flex items-center gap-2 px-3 py-2'>
                    <div><FaUserCircle size={30} /></div>
                    <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
                        <p>Amir</p>
                        <span className='text-xs'>amirkhusroo@gmail.com</span>

                    </div>
                </div>


            </nav>
            <div className="flex-1 p-4 bg-gray-100 overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}
