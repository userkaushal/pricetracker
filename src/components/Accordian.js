import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import "../components/Accordian.css";


const Accordian = ({title,content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="container mb-5">        
        <div className="accordion">
          <div className="accordion-header" onClick={toggleAccordion}>
            <h2 className="accordion-title">{title}</h2>
            <span
              className={`accordion-icon ${isOpen ? "minus" : "plus"}`}
            ></span>
          </div>
          {isOpen && (
            <div className="accordion-content">
              <p>
                {content}
              </p>
            </div>
          )}
        </div>                
      </div>
    </>
  );
}

export default Accordian;
