import { useEffect, useRef, useState } from "react"
import { Link, NavLink/*, useNavigate*/ } from "react-router-dom";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import {dashboardMenu} from '../../data/index.jsx';

import "./index.css"

const Header = () => {
    const [pageTile, setPateTitle] = useState('My Class');
    const [pageTileImage, setPateTitleImage] = useState('/images/dashboard/home.png');
    const [showProfileDialog, setShowProfileDialog] = useState(false);
    const handlePateTitle = (title,titleimage) =>{
        setPateTitle(title);
        setPateTitleImage(titleimage);
    }
    const profileOptionsRef = useRef(null);

    const handleUrl = () => {
        // const match = useRouteMatch("/forms");
        const pathElements = window.location.pathname.split('/');
        const firstPathElement = pathElements[1];
        console.log(firstPathElement);
    }
    useEffect(()=>{
        handleUrl();
    },[])
    const handleDialog = () =>{
        setShowProfileDialog(!showProfileDialog);
        if(showProfileDialog){
            console.log("it's open");
            profileOptionsRef.current ? profileOptionsRef.current.show() : null;
        }else{
            profileOptionsRef.current ? profileOptionsRef.current.close() : null;
        }
    }

    const school = false;
  return (
    <div className="header-wrapper">
        <nav className="nav-top">
            <div className="logo">
                <NavLink to="my-class">
                    <img src="/images/dashboard/dashboard_logo.png" alt="" />
                </NavLink>
            </div>
            <div className="header-title-containder">
                <span id="header-title " className="header-titles" >{pageTile}
                <img src={pageTileImage} alt="" />
                </span>
            </div>
            <div className="seach-container">
                <div className="input-container">
                    <input type="text"  placeholder="Search..." className="search-input"/>
                    <FaSearch />
                </div>
                <div id="search-dropdown">
                    <ul id="search-list">
                    </ul>
                </div>
            </div>

            <div className="action-icons-contaner">
                <div className="sun-moon-container">
                    {/* <FaSun className="day-light" id="day-theme"/>
                    <FaMoon className="night" id="night-theme"/> */}

                    <svg className="day-light hide" id="day-theme" style={{width:"50px",height:"50px"}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />
                    </svg>
                    <svg className="night" id="night-theme" style={{width:"50px",height:"50px"}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" />
                    </svg>
                </div> 
                <div className="motification-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45.621" height="45.186" viewBox="0 0 45.621 45.186">
                        <path fill="currentColor" d="M1580.249,65.795a16.486,16.486,0,0,0-.227-2.607,16.666,16.666,0,0,0-13.468-13.832,3.446,3.446,0,0,0-6.066,0,16.906,16.906,0,0,0-13.7,16.439l-.036.869V86.392h-4.308a1.738,1.738,0,1,0,0,3.475h17.659a3.467,3.467,0,0,0,6.828,0h17.658a1.738,1.738,0,1,0,0-3.475h-4.308V66.664Zm-3.439.869V85.942h-26.576V66.664l.036-.869a12.954,12.954,0,0,1,.274-2.607,13.546,13.546,0,0,1,.588-2.054,13.241,13.241,0,0,1,24.78,0,13.545,13.545,0,0,1,.588,2.054,12.858,12.858,0,0,1,.275,2.607Z" transform="translate(-1540.711 -47.546)"/>
                    </svg>
                    <div className="notification-dropdown hide">

                    </div>
                </div>

                <div className="profile-container">
                    <span data-open-modal className="profile-initial" id="initial" onClick={handleDialog}>
                        P
                    </span>
                    <dialog data-modal ref={profileOptionsRef} className="profileDialog">
                        <div className="profile-dropdown">
                            <ul>
                                <li>Profile</li>
                                <li>Logout</li>
                            </ul>
                        </div>
                    </dialog>
                </div>

                <div className="header-calender">
                    <div className="grade_class">
                    
                        {
                            school ?
                                <select id="gShool" className="grade-and-class-list" >
                                    <option value="" disabled selected>Grades</option>
                            
                                </select>
                            :
                            <span className="grade">
                                6A
                            </span>
                        }
                    
                    </div>

                    <div className="term_week">
                        <span id="cWeek" > 
                            Wk 1+2
                        </span>
                        <span className="term_of_week">
                            Term 2
                        </span>
                    </div>
                    
                </div>

            </div>

        </nav>
        <nav className="nav-bottom">
            <ul>
                {
                    dashboardMenu.map((item, index) => (
                        <li key={index}
                            className={pageTile == item.title ? item.link+" nav-item active":'nav-item '+item.link} 
                            onClick={()=>handlePateTitle(item.title,item.headerTitleImage)}
                        >
                            <NavLink to={item.link}><span>{item.icon}</span>{item.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
        
    </div>
  )
}

export default Header