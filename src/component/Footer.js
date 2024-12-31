import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "20px", background: "#282c34", color: "#fff" }}>
      <div className="social-icons" style={{ fontSize: "24px", marginBottom: "10px" }}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.skype.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <i className="fab fa-skype"></i>
        </a>
      </div>
      <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
