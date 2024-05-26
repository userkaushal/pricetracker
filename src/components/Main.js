import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import "../components/Main.css";
import Search from "../../src/assets/search.svg";
import flipkartmini from "../assets/flipkartmini.jpg";
import amazonmin from "../assets/amazonmin.jpg";
import { useNavigate } from 'react-router-dom';
import Result from "./results/Result";

import { ReactTyped } from "react-typed";
import { json } from "react-router-dom";
import Loader from "./Loader/Loader";

function Main() {

  const navigate = useNavigate();

    // const history = useHistory();
    const [inputValue, setInputValue] = useState('');

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (data) {
        console.log(data);
      }
    }, [data]);

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        sendDataToServer(inputValue);
        console.log(inputValue);
        // navigate('/result'); // Navigate to another page

        // history.push({
        //   pathname: '/register',
        // });
      }
    };

    const sendDataToServer = async (product) => {

      setLoading(true);

      try {
      // Use fetch or any other method to send data to the server
      const response = await fetch('http://127.0.0.1:5000/product', {
        method: 'POST',
        body: JSON.stringify({ "product": product}),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json();
      // setData(data); // Set the data received from the server
      if (data && data.flipkartData) {
        console.log(data.flipkartData.flipPrice);
        setData(data);
      }

    setLoading(false);
    // navigate("/result");


    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
      console.log("sending data to backend", product);
      // console.log(data);
    };
    
  
  return (

    <div className="Main">
      

      {loading && <Loader/>}
      <h1>Price Tracker</h1>

      <h2 style={{ fontWeight: "normal" }}>
        Track prices of your favourite products on{" "}
        {/* <span className="typed-text">{typedText}</span> */}
         <ReactTyped style={{color:"rgba(255 109 31 /1)"}}
          strings={[
            "Gem",
            "Flipkart",
            "Amazon",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </h2>

      <div className="searchbar">
        <label>
          <img src={Search} alt="search" width="25px" />
          <input
            required
            type="text"
            name="product"
            placeholder="Paste product link"
            style={{ border: "none", outline: "none" }}
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </label>
      </div>

      <p
        style={{
          fontWeight: "normal",
          fontSize: "1.2rem",
          marginTop: "30px",
          color: "gray",
        }}
      >
        Supports all major e-commerce platforms in India
      </p>

      <div className="" style={{ filter: "grayscale(1)" }}>
        <img
          src={flipkartmini}
          alt="flipkart"
          style={{ paddingRight: "10px" }}
        />
        <img src={amazonmin} alt="amazon" />
        {/* <p style={{fontWeight:"normal", fontSize:"1.2rem", color:"gray"}}>& more</p> */}
      </div>

      {data && <Result data={data} />}
    </div>
  );
}

export default Main;
