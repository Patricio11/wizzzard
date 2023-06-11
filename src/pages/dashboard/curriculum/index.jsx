import "./index.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import {demoCurriculum } from "../../../data";
import { useState } from "react";
import CurriculumItems from "../../../components/dashboard/curriculumItem";

const Curriculum = () => {
    const [showUpload, setShowUpload] = useState(false);

    useEffect(() => {
    }, []);

  return (
    <div className="curriculum-container">
        <div className="header-section">
            <span className="btn-wizzzard add-btn scale-animation">Add</span>
            {
                showUpload ? <span className="btn-wizzzard btn-export scale-animation">Upload</span> : null
                
            }
        </div>
        
        <CurriculumItems  
        showUpload ={showUpload}
        setShowUpload ={setShowUpload}
        />
    </div>
  )
}

export default Curriculum