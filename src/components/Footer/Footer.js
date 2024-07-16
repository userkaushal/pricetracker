import React from "react";
import "./Footer.css"; // Import the CSS file for styling

function Footer() {
  const currentYear = new Date().getFullYear();
  //scroll

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, adds smooth scrolling behavior
    });
  };

  return (
    <footer className="footer">
      <div style={{}}>
        <a
          href="#"
          id="topButton"
          className="circle-button"
          onClick={handleScrollToTop}
        >
          <span className="arrow">&#8593;</span>
        </a>
      </div>
      <div className="container">
        <p>&copy; {currentYear} PriceTracker. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
