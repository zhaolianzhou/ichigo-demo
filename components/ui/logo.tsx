import React from "react";
import NinjaLogo from './../../public/favicons/ninja_logo.svg';

const Logo = () => {
  return (
      <div>
        {/* Inline SVG rendering */}
        <NinjaLogo />
        <img src={NinjaLogo} alt="NinjaTech" style={{width: '100px', height: '100px'}}/>
      </div>
  );
};

export default Logo;
