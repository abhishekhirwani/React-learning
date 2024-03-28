import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="head">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login")
            }
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
