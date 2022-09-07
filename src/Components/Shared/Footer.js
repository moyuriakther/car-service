import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary p-3 text-white">
      <p className="m-0" style={{ fontSize: "18px" }}>
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
