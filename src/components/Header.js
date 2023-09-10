import { Logo_Header } from "../utils/constant";

const Header = () => {
  return (
    <div id="headdiv">
      <img
        src= {Logo_Header}
        className="logo"
      ></img>
      <div className="nav-items">
        <ul>
          <li>order</li>
          <li>services</li>
          <li>resturants</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
