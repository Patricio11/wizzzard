import "./index.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { dashboardForms } from "../../../data";

const Forms = () => {

    useEffect(() => {
    }, []);

  return (
    <div className="forms-container">
        <div className="form_items">

            {
                dashboardForms.map((form, index)=>(
                    <div className="form_item_wrapper" key={index}>
                        <NavLink to={form.linkTo} className="home_item">
                            <img src={form.img} alt="wizzzard forms" />
                        </NavLink>
                    </div>
                ))
            }
            
           
        </div>


    </div>
  )
}

export default Forms