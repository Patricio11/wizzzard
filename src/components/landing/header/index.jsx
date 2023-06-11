import "./index.css"
import { Link, NavLink/*, useNavigate*/ } from "react-router-dom"
// import { menuData } from "../../configs/navBarMenu"
import { useState } from "react";
import { menuData } from "../../../data";


const Header = () => {

    const [phoneMenuOpen, setPhoneMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    // const logoBlack = "https://organictalentmanagement.co.za/static/media/organic-logo-bw.5b0c76ca583c75fa2250.jpg"
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null; // This is a cleanup funstion so it doesn't become a infinite loop
    }

  return (
    <div className={isScrolled ? "navBar scrolled" : "navBar"}>
            <div className="navContainer">
                <div className="logo">
                
                    <NavLink to="/">
                        <img src="images/landing/logo.png" alt="Wizzzard Logo" />
                    </NavLink>
                </div>
                <input type="checkbox" id="menu-bar" />
                <label htmlFor="menu-bar" className={phoneMenuOpen ? 'menu-btn open': 'menu-btn'} onClick={()=>setPhoneMenuOpen(!phoneMenuOpen)}>
                    <div  className={isScrolled ? "menu-btn_burger scrolledWhite" : "menu-btn_burger"}></div>
                </label>
                <nav id="main-nav" className={phoneMenuOpen ? 'adfNavbar open': 'adfNavbar'} >
                    <div className="nMenuItems">
                        { 
                            menuData.map((menuItem, index) => (

                                <Link to={menuItem.link} key={index} className={isScrolled ? "menuItem scrolled" : "menuItem"}>
                                    {menuItem.text}
                                </Link>
                            ))
                        } 
                    </div>
                </nav>
            </div>
        </div>
  )
}

export default Header