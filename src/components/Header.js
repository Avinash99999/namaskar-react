import { Logo_Header } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  let [btnValue, setbtnValue] = useState("Login");
  return (
    <div id="headdiv">
      <img src={Logo_Header} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li>order</li>
          <li>services</li>
          <li>resturants</li>
          <li>cart</li>
          <button
            className="loginbtn"
            onClick={() =>
              btnValue === "Login"
                ? setbtnValue("Logout")
                : setbtnValue("Login")
            }
          >
            {btnValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
