import React, { useEffect } from "react";
import "../components/Steps.css";
import Button from "react-bootstrap/Button";
import Main from "../components/Main";

function Steps() {
  useEffect(() => {
    const loadingBar = document.querySelector(".loading-bar");
    setTimeout(() => {
      //   loadingBar.style.animation = 'none';
      loadingBar.style.height = "7%";
    }, 3000);
  }, []);

  //scroll
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, adds smooth scrolling behavior
    });
  };

  return (
    <div className="steps">
      <div className="loading-container">
        <div className="loading-bar"></div>
      </div>

      <b>
        <h2 style={{ fontWeight: "lighter" }}>Step by Step Process to </h2>
      </b>
      <b>
        <h2 style={{ fontWeight: "lighter" }}>Check Price History</h2>
      </b>

      <br />

      <h2 style={{ fontWeight: "lighter" }}>
        Find the right price of any product
      </h2>
      <h2 style={{ fontWeight: "lighter" }}>using just 2 simple steps</h2>

      <div className="grid md:grid-cols-2 items-center md:gap-4 box">
        <div className="flex my-6 md:mb-auto gap-2 outbox">
          <img
            src="https://buyhatke.com/_app/immutable/assets/ic_bag.f9a28d7f.svg"
            alt="left image"
            width={80}
            height={80}
          />

          <div className="text-xs md:text-lg">
            <span>Step 1</span>
            <p>
              Just copy and paste the link of any product from online stores
              like Flipkart or Amazon in the search bar above.
            </p>
          </div>
        </div>

        <div className="flex my-6 md:mb-auto gap-2 outbox">
          <img
            src="https://buyhatke.com/_app/immutable/assets/ic_graph.aba77b1e.svg"
            alt="left image"
            width={80}
            height={80}
          />

          <div className="text-xs md:text-lg">
            <span>Step 2</span>
            <p>
              Discover its price history, find the lowest price, and set up
              alerts for price drops.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <Button
          style={{
            backgroundColor: "rgba(255 109 31 /0.2)",
            color: "rgba(255 109 31 /1)",
            border: "1px solid rgba(255 109 31 /1)",
          }}
          onClick={handleScrollToTop}
        >
          Try Now
          <span className="arrow-container">
            <span className="arrow"></span>
          </span>
        </Button>
        {""}
      </div>
    </div>
  );
}

export default Steps;
