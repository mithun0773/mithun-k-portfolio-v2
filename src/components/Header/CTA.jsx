import CV from "../../assets/mithuncv.pdf";
import React from 'react'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
-    </div>
  )
}

export default CTA
