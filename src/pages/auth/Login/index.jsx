import { useState } from "react"
import "./index.css"
import {FaEye, FaEyeSlash} from "react-icons/fa"

function Login() {
  const [loginOption, setLoginOption] = useState('school');
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <div className='login-container'>
      <div className="auth-header">
        <h1 className="">SIGN IN</h1>
        <ul className="login-options">
            <li className={loginOption==='school' ? 'login-nav-link active':'login-nav-link'} onClick={()=>setLoginOption('school')}>
              SCHOOL
            </li>
            <li className={loginOption==='teacher' ? 'login-nav-link active':'login-nav-link'} onClick={()=>setLoginOption('teacher')}>
              TEACHER
            </li>
        </ul>
      </div> 
      <div className="forms-container">

        <form className={loginOption==='school' ? 'login active':'login'} >
          <fieldset>
            <legend>Emis number</legend>
            <input type="text" name="emis_number" id="schl-emis" />
          </fieldset>

          <fieldset>
            <legend>Unique code</legend>
            <div className="password-field-wrapper">
              <input type={viewPassword ? 'text':'password'}  name="password" id="schl-code" />
              <span className="field-icon toggle-password" onClick={()=>setViewPassword(!viewPassword)}>
                {viewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </fieldset>
          
          <div className="form-check clearfix">
            <label className="form-check-label float-left" htmlFor="exampleCheck1">
              
              <input type="checkbox" name="" className="form-check-input" id="sch-remember-me" /> Remember me
            </label>
            <a href="#" className="float-right">Forgot code?</a>
          </div>
          <button type="submit" className="auth-btn signin-btn ">SIGN IN</button>
            
        </form>
        <form className={loginOption==='teacher' ? 'login active':'login'}>
          <fieldset className="form-group">
            <legend>
              <label htmlFor="schl-persal">Persal</label>
            </legend>
            <input type="text" name="persal" id="" />
          </fieldset>
          <fieldset className="form-group">
            <legend>
              <label htmlFor="schl-passwords">Password</label>
            </legend>
            
            <div className="password-field-wrapper">
            <input type={viewPassword ? 'text':'password'}  name="password" id="teacher-pass" />
              <span className="field-icon toggle-password" onClick={()=>setViewPassword(!viewPassword)}>
                {viewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </fieldset>

          <div className="form-check clearfix">
            <label className="form-check-label float-left" htmlFor="teach-remember-me">
              <input type="checkbox" name="teach-remember-me" id="teach-remember-me" />Remember me
            </label>
            <a href="#" className="float-right">Forgot password?</a>
          </div>
          <button type="submit" className="auth-btn signin-btn">SIGN IN</button>
        </form>
      </div>

    </div>
  )
}

export default Login