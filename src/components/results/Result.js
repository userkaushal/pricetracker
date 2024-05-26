import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../results/Result.css";
import flipkartmini from "../../assets/flipkartmini.jpg";
import amazonmin from "../../assets/amazonmin.jpg";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";

function Result({ data }) {
  // const [isload,setIsLoad] = useState(false);

  // function setIsLoad () {
  //   setIsLoad(true);
  // };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, ); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="containercls" style={{ marginTop: "50px" }}>
        <div className="flexbox">
          <Image src={data.gemData.gemImg} thumbnail width={200} height={200} />
          <div className="rightbox">
            <h2>{data.gemData.gemTitle}</h2>

            <div>
              <h3>₹{data.gemData.gemPrice}</h3>
            </div>
            {/* <Button style={{ marginTop: "20px", color:"white" }} variant="primary" > */}
            <a href={data.gemData.gemUrl} target="blank">
              View Details
            </a>
            {/* </Button> */}
          </div>
        </div>

        <div className="another">
          <h2>Found 1 item</h2>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Card style={{ width: "18rem", marginRight: "15px" }}>
              <Card.Body>
                <img src={flipkartmini} />
                <Card.Title>{data.flipkartData.flipTitle}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */}
                <Card.Text>at ₹{data.flipkartData.flipPrice}</Card.Text>
                <Card.Link target="blank" href={data.flipkartData.flipUrl}>
                  Flipkart
                </Card.Link>
              </Card.Body>
            </Card>

            {/* <Card style={{ width: "18rem" }}>
              <Card.Body>
                <img src={amazonmin} />
                <Card.Title>
                  PILOT V5 Pen (Pack of 2 )Blue Roller Ball Pen (Pack of 2)
                </Card.Title>

                <Card.Text>at ₹140.00</Card.Text>
                <Card.Link
                  href="https://www.amazon.in/Pilot-Pen-Liquid-Roller-Ball/dp/B00LOD6EWK?th=1
"
                >
                  Amazon
                </Card.Link>
              </Card.Body>
            </Card> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
