import "./index.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import Calendar from "../../../components/dashboard/calendar";

const MyClass = () => {

    const evoCalendarRef = useRef(null);

    useEffect(() => {
        // if (evoCalendarRef.current) {
        // new window.EvoCalendar(evoCalendarRef.current, {
        //     format: "yyyy/MM/dd",
        //     titleFormat: "MM yyyy",
        //     eventHeaderFormat: "MM/dd/yyyy",
        //     calendarEvents: [
        //     {
        //         id: "event-1",
        //         name: "My Event 1",
        //         date: "2023/05/10"
        //     },
        //     {
        //         id: "event-2",
        //         name: "My Event 2",
        //         date: "2023/05/15"
        //     }
        //     ]
        // });
        // }
    }, []);



  return (
    <div className="myClass-container">
        <div className="myClass_action_items">

            <div className="myClass_items_wrapper">
                <NavLink to="/forms" className="myClass_item">
                    <img src="/images/dashboard/myClass_forms.png" alt="wizzzard forms" />
                    <span>Forms</span>
                </NavLink>
            </div>
            <div className="myClass_items_wrapper">
                <NavLink to="/inventory" className="myClass_item">
                    <img src="/images/dashboard/myClass_caps.png" alt="wizzzard caps" />
                    <span>Inventory</span>
                </NavLink>
            </div>
            <div className="myClass_items_wrapper">
               
                <NavLink to="/curriculum" className="myClass_item">
                    
                    <img src="/images/dashboard/myClass_resources.png" alt="wizzzard caps" />
                    <span>Curriculum</span>
                </NavLink>
            </div>
            <div className="myClass_items_wrapper">
                <NavLink to="/demerit_and_merit" className="myClass_item">
                    <img src="/images/dashboard/myClass_parents.png" alt="wizzzard forms" />
                    <span>Demerit and Merit</span>
                </NavLink>
            </div>
            <div className="myClass_items_wrapper">
                <NavLink to="/communication" className="myClass_item">
                    <img src="/images/dashboard/myClass_minutes.png" alt="wizzzard caps" />
                    <span>Communication</span>
                </NavLink>
            </div>
            <div className="myClass_items_wrapper">
                <NavLink to="/learners" className="myClass_item">
                    <img src="/images/dashboard/myClass_learners.png" alt="wizzzard forms" />
                    <span>Learners</span>
                </NavLink>
            </div>
        </div>

        <div className="myClass-calender">
            <Calendar />
        </div>

    </div>
  )
}

export default MyClass