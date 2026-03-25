import React from "react";
import CV from "../../assets/mithuncv.pdf";
import { FiDownload, FiSend } from "react-icons/fi"; // Using Feather icons for a cleaner look

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn--primary" aria-label="Download Resume">
        <FiDownload className="btn-icon" />
        Download CV
      </a>
      <a href="#contact" className="btn btn--outline" aria-label="Navigate to contact section">
        <FiSend className="btn-icon" />
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;