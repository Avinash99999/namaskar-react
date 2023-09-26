import { Logo_Header } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnValue, setbtnValue] = useState("Login");
  return (
    <div id="headdiv">
      <Link to={"/"}><img src={Logo_Header} className="logo"></img></Link>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/resturants"}>Resturants</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
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
