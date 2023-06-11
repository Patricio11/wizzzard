import "./index.css";
import { NavLink, Outlet } from "react-router-dom";

 

const Auth = () => {
    return (
        <div className="content">
            <div className="logo-container">
                <a href="/">
                    <img src="../../../../images/global/logo_2.png" alt="Wizzzard Logo" />
                </a>
            </div>
            <div className="auth-container">
                <Outlet />
            </div>
            <div className="btn-nav-container">
                <div className="buttons-container">
                    <NavLink to="login" className='auth-nav-btn' title={"SIGN IN"}>SIGN IN</NavLink>
                    <NavLink to="register" className='auth-nav-btn' title={"REGISTER"}>REGISTER</NavLink>
                </div>
                <img src="../../../../images/auth/login_banner.png" alt="wizzzard quote" />
            </div>

            
        </div>
    )
}

export default Auth;