import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { demoCurriculum } from '../../../data';

const CurriculumItems = ({showUpload, setShowUpload}) => {

  return (
    <div className="curriculum_items">

      {
        demoCurriculum.map((curriculum, index)=>(
            <div className="curriculum_item_wrapper" key={index} onClick={()=>setShowUpload(true)}>
                <NavLink to={curriculum.linkTo} className="cpas_item">
                  <img src={curriculum.img} alt="wizzzard curriculum" />
                  <span>{curriculum.title}</span>
                </NavLink>
            </div>
        ))
      }
        
    </div>
  );
};

export default CurriculumItems;