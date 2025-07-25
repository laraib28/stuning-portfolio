import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      {/* Centered H1 */}
      <div className="text-white font-extrabold text-4xl text-center">
        <h1>Laraib</h1>
      </div>
      {/* Navigation Links */}
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold mt-4">
        <div>Home</div>
        <div>Services</div>
        <div>Project</div>
        <div>Contact</div>
      </div>
      {/* Footer Text */}
      <p className="text-white text-opacity-60 mt-6 text-center">
        @ 2024 All rights Reserved by Laraib Warriors
      </p>
    </div>
  );
};

export default Footer;
