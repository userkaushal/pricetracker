import React, { useState, useEffect } from "react";
import "../components/Main.css";
import Search from "../../src/assets/search.svg";
import flipkartmini from "../assets/flipkartmini.jpg";
import amazonmin from "../assets/amazonmin.jpg";
import { Route, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Result from "./results/Result";
import { ReactTyped } from "react-typed";
import { json } from "react-router-dom";
import Loader from "./Loader/Loader";

function Main() {

  const navigate = useNavigate();
  
    const [inputValue, setInputValue] = useState('');

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (data) {
        console.log(data);
      }
    }, [data]);

    function validURL(str) {
      // var pattern = new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/); // fragment locator      
      // console.log(pattern.test(str));

      
      // let res = str.startsWith("https://mkp.gem.gov.in/", 1);
      let pattern = new RegExp(/^https:\/\/mkp\.gem\.gov\.in\/.*/);

      return !pattern.test(str);
      // return res;
      
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {

        if((inputValue === "" || inputValue == 0) || (validURL(inputValue))){
          alert("Enter a valid URL.")        
        }else{

          sendDataToServer(inputValue);
          console.log(inputValue);
        }
        // navigate('/result'); // Navigate to another page

      }
    };

    const sendDataToServer = async (product) => {

      setLoading(true);

      try {
      // Use fetch or any other method to send data to the server
      const response = await fetch('http://127.0.0.1:5000/product', {
        // mode: 'no-cors',
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
      
      navigate('/result',{state : {
        data
      }})
      // navigate('/result');
      setLoading(false);


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
            "Flipkart"
            // "Amazon",
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

      {/* {data && <Result data={data} />} */}
    </div>
  );
}

export default Main;
