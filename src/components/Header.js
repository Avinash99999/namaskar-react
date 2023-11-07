import { Logo_Header, issac_img } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useContextExample from "../utils/useContextExample";

const Header = () => {
  let [btnValue, setbtnValue] = useState("Login");
  const checkUserStatus = useOnlineStatus();
  
  //useContext Hook Use - it is used to reduce prop drilling
  const data = useContext(useContextExample)
  // console.log("user:", data.username)

  return (
    <div className="flex justify-between bg-pink-200 h-24 shadow-sm">
      <Link to={"/"}>
        <img src={Logo_Header} className="h-24"></img>
      </Link>
      <div>
        <ul className="flex p-5 m-5">
          <li className="m-1 px-10">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-1 px-10">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="m-1 px-10">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="m-1 px-10">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="m-1 px-10">Online Status: {checkUserStatus === true ? "😎" : "🤬"}</li>
          <li className="m-1 px-10 font-mono">User: {data.username}</li>
          {/* <button
            className="loginbtn"
            onClick={() =>
              btnValue === "Login"
                ? setbtnValue("Logout")
                : setbtnValue("Login")
            }
          >
            {btnValue}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
