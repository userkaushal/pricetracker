import React from "react";
import Header from "./Header";
import Main from "./Main";
import Trending from "./Trending";
import Steps from "./Steps";
import Accordian from "./Accordian";
import Footer from "./Footer/Footer";

function Home() {
  let title1 = "What is a Price Tracker?";
  let content1 =
    "A price tracker is a helpful tool that lets shoppers easily check prices on different online stores. It provides the convenience of keeping track of price changes and fluctuations for specific items of interest. Price trackers also provide attractive charts and graphs, making it easy to see price changes over time.";

  let title2 = "Benefits of Price Tracking";
  let content2 =
    "Price tracking tool offers various advantages, like saving your money & sticking to your budget plans. Information about the best product deals helps to make better purchase decisions and avoid unnecessary purchase of products when you do shopping.";

  return (
    <>
      <Header />
      <Main />
      <Trending />
      <Steps />
      <Accordian title={title1} content={content1} />
      <Accordian title={title2} content={content2} />
      <Footer/>                              
    </>
  );
}

export default Home;
