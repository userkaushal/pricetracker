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
        {/* <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is a Price Tracker?</Accordion.Header>
            <Accordion.Body>
              A price tracker is a helpful tool that lets shoppers easily check
              prices on different online stores. It provides the convenience of
              keeping track of price changes and fluctuations for specific items
              of interest. Price trackers also provide attractive charts and
              graphs, making it easy to see price changes over time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}

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
