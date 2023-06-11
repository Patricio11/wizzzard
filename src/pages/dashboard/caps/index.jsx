import "./index.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import {demoCaps } from "../../../data";

const Caps = () => {

    useEffect(() => {
    }, []);

  return (
    <div className="caps-container">
        <div className="caps_items">

            {
                demoCaps.map((cap, index)=>(
                    <div className="caps_item_wrapper" key={index}>
                        <NavLink to={cap.linkTo} className="cpas_item">
                            <img src={cap.img} alt="wizzzard caps" />
                            <span>{cap.title}</span>
                        </NavLink>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Caps