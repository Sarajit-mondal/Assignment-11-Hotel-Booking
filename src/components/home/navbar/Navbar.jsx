import { FaUser, } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoHelpCircleSharp, IoMoon } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import profile from "../../../assets/profile.png"

import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../../providers/AuthProvider";




function Navbar() {
    const [isDropDown, setisDropDown] = useState(false)
    const { user, LogOutUser } = useContext(userContext)



    //drak mode on off
    //  const [darkMode, setDarkMode] = useState(getLoc);

    //   useEffect(() => {
    //     if (darkMode) {
    //       document.querySelector("#root").setAttribute('data-theme','light')
    //     } 
    //     else {
    //          document.querySelector("#root").setAttribute('data-theme','light')
    //      }
    // console.log(darkMode)
    //   }, [darkMode]);



    const handleThemeToggle = (e) => {
       
    
        if (e.target.checked) {
            document.querySelector("#root").setAttribute('data-theme', 'dark')
        } else {
            document.querySelector("#root").setAttribute('data-theme', 'light')
        }
    };
    //drak mode on off
    //drak mode on off


    // State to manage whether the dropdown is shown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown's visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Function to close the dropdown, useful when an item is clicked
    const closeDropdown = () => setIsDropdownOpen(false);


    // user log out
    const userLogOut = () => {
        LogOutUser()
            .then(result => {
                swal("LogOut Successfull", "You click the button! go your page", "success");
            })
            .catch(error => {
                toast.error(error.code, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });
            })
    }
    return (

        // responsive navbar
        // responsive navbar
        <div className="navbar bg-transparent w-11/12 mx-auto max-w-[1280px] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4">

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/rooms">Rooms</NavLink></li>
                        {
                            user &&  <li><NavLink to="/myBooking">My Booking</NavLink></li>
                        }
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Draw Print Dream</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">


                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/rooms">Rooms</NavLink></li>
                        {
                            user &&  <li><NavLink to="/myBooking">My Booking</NavLink></li>
                        }
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="flex space-x-5 items-center">
                    {
                        user ? <div className="flex space-x-5 items-center">
                            {/* profile detials */}
                            {/* profile detials */}
                            <div>
                                <div className="dropdown">

                                    <div tabIndex={0} role="button" className="tooltip  tooltip-left  rounded-full" data-tip={user && user.displayName}
                                        onClick={() => setisDropDown(!isDropDown)} ><img src={user && user.photoURL ? user.photoURL : profile} alt="" className="size-10 rounded-full" /> </div>

                                    {
                                        isDropDown && <ul className="tabIndex={0} shadow-xl menu dropdown-content bg-sky-200 rounded-box w-72 -left-32 top-16 p-2 z-20  animate__animated animate__bounceInDown">
                                            <li>
                                                <div className="mx-auto">
                                                    <img src={user && user.photoURL ? user.photoURL : profile} alt="" className="size-20 rounded-full" />

                                                </div>

                                                <h3 className="mx-auto">{user && user.displayName ? user.displayName : 'User name'}</h3>
                                            </li>



                                            <hr className="my-3" />
                                            {/* one  */}
                                            <li ><Link to="/profile" className="flex items-center justify-between">
                                                <span className="flex items-center space-x-5">
                                                    <FaUser className="size-9 p-2 bg-VibrantBlue rounded-full"></FaUser>
                                                    <h4 className=" font-bold">Eidt Profile</h4>
                                                </span>
                                                <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                            </Link></li>
                                            {/* Two  */}
                                            <li ><Link onClick={() => setisDropDown(false)} to="" className="flex items-center justify-between">
                                                <span className="flex items-center space-x-5">
                                                    <IoMdSettings className="size-9 p-2 bg-VibrantBlue rounded-full"></IoMdSettings>
                                                    <h4 className=" font-bold">Setting And Privacy</h4>
                                                </span>
                                                <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                            </Link></li>
                                            {/* Three  */}
                                            <li ><Link onClick={() => setisDropDown(false)} to="" className="flex items-center justify-between">
                                                <span className="flex items-center space-x-5">
                                                    <IoHelpCircleSharp className="
                     size-9 p-2 bg-VibrantBlue rounded-full"></IoHelpCircleSharp>
                                                    <h4 className=" font-bold">Help And Suport</h4>
                                                </span>
                                                <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                            </Link></li>
                                            {/* Four */}
                                            <li onClick={() => setisDropDown(false)} ><Link to="" className="flex items-center justify-between">
                                                <span className="flex items-center space-x-5">
                                                    <IoMoon className="size-9 p-2 bg-VibrantBlue rounded-full"></IoMoon>
                                                    <h4 className=" font-bold">Display & Accessibility</h4>
                                                </span>
                                                <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                            </Link></li>
                                            {/* Five */}
                                            <li onClick={() => setisDropDown(false)}><Link to="" className="flex items-center justify-between">
                                                <span className="flex items-center space-x-5">
                                                    <FiLogOut className="size-9 p-2 bg-VibrantBlue rounded-full"></FiLogOut>
                                                    <h4 onClick={userLogOut} className=" font-bold">LogOut</h4>
                                                </span>
                                                <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                            </Link></li>

                                        </ul>
                                    }
                                </div>

                            </div>
                            <Link onClick={userLogOut}>LogOut</Link>
                        </div> : <div className="space-x-5">
                            <Link to='/signUp'>SignUp</Link>
                            <Link to='/logIn'>LogIn</Link>
                        </div>
                    }
                </div>
                {/* dark monde on of  */}
                <label className="swap swap-rotate space-x-3" >

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={handleThemeToggle} className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                {/* dark monde on of  */}
                {/* dark monde on of  */}
            </div>
        </div>

    )
}

export default Navbar

