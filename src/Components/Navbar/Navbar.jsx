import React from "react";
import './Navbar.css';
import { FaHome, FaSearch } from "react-icons/fa";
import { FaTable, FaCircleChevronRight,FaCircleChevronLeft } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { RiNotification2Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";

const Navbar = ({Hiddening, setHiddening}) => {
    // const [Hiddening , setHiddening] = useState('hidden');
    const [Hiddening2 , setHiddening2] = useState('');
    const [liShort , setliShort] = useState('nav-item');
    
    const [HiddenSearch , setHiddenSearch] = useState('search hidden');
    const [HiddenNotif , setHiddenNotif] = useState('search hidden');

    const HeddeningContent = () => {
        setHiddening('');
        setHiddening2('hidden');
        setliShort('nav-item li-short');
    }

    const ShowContent = () => {
        setHiddening('hidden');
        setHiddening2('');
        setliShort('nav-item')
        setHidden('search hidden')
    }

    const PresToHidden = () => {
        if(Hiddening === ''){
            ShowContent();
        }else{
            HeddeningContent();
        }
    }
    
    const SearchButton = () => {
        HeddeningContent()
        setHidden('search')
    }

    const NotifButton = () => {
        HeddeningContent()
    }

    return (
        <div className="navbar-content">
            <div className="navbar">
                <div className="logo">
                    <h1 className={Hiddening2}>SocialMedia</h1>
                    <h1 className={Hiddening}>SM</h1>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className={liShort}>
                            <Link to='/' className="link-class">
                                <FaHome className="icons" onClick={() => {PresToHidden()}}/>
                                <p className={Hiddening2}>Home</p>
                            </Link>
                        </li>
                        <li className={liShort} onClick={() => {SearchButton()}}>
                            <FaSearch className="icons" />
                            <p className={Hiddening2}>Search</p>
                        </li>
                        <li className={liShort}>
                            <FaTable className="icons" />
                            <p className={Hiddening2}>Reels</p>
                        </li>
                        <li className={liShort}>
                            <AiFillMessage className="icons" />
                            <p className={Hiddening2}>Message</p>
                        </li>
                        <li className={liShort} onClick={() => {SearchButton()}}>
                            <RiNotification2Fill className="icons" />
                            <p className={Hiddening2}>Notification</p>
                        </li>
                        <li className={liShort}>
                            <FaRegUserCircle className="icons" />
                            <p className={Hiddening2}>Profile</p>
                        </li>
                    </ul>
                    <div className="button-mini">
                        <FaCircleChevronRight onClick={() => {PresToHidden()}} className={Hiddening}/>
                        <FaCircleChevronLeft  onClick={() => {PresToHidden()}} className={Hiddening2}/>
                    </div>
                </div>
            </div>
            <Search clsName={HiddenSearch}/>
            {/* <Notification clsName={}/> */}
        </div>
        
    )
}

export default Navbar;