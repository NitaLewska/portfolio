import React from "react";
import "./Aside.css";
import CIcon from "@coreui/icons-react";
import { cibTwitter, cibLinkedin, cibTelegram } from "@coreui/icons";
import { Link } from "react-router-dom";

export default function Aside() {

  function scrollToTop() {
    let screen = document.querySelector("screen")
    screen.scrollTo({
      top: 0
  });
  }

  return (
    <aside>
      <div className="menu">
        <Link to="/about" onClick={scrollToTop}>About me</Link>
        <Link to="/portfolio" onClick={scrollToTop}>My portfolio</Link>
        <Link to="/work_history" onClick={scrollToTop}>Work history</Link>
      </div>
      <div className="links">
        <a
          href="https://twitter.com/nita_lewska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CIcon icon={cibTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/anna-muzalevskaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CIcon icon={cibLinkedin} />
        </a>
        <a
          href="http://t.me/Nitalewska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CIcon icon={cibTelegram} />
        </a>
      </div>
    </aside>
  );
}
