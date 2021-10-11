import React from "react";
import SearchIcon from "./icons/SearchIcon";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper__left">
        <div className="header-wrapper__logo">
          <p>Send freight</p>
        </div>
        <div className="header-wrapper__left__search">
          <input placeholder="Search" />
          <SearchIcon />
        </div>
      </div>

      <div className="header-wrapper__action-buttons">
        <button className="header-wrapper__action-buttons__quote">
          {" "}
          Request Quote
        </button>
        <button className="header-wrapper__action-buttons__book">
          Book Shipment
        </button>
      </div>
    </div>
  );
};

export default Header;
