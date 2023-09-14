import ResturantCard from "./ResturantCard"
import { apiData } from "../utils/mockdata";
import { useState } from "react";


const ResturantMenu = () => {
  const [topList, settopList] = useState([apiData])
  const [topFlag, settopFlag] = useState(false);

  function click() {
    settopFlag(true);
  }


  return (
    <div>
      <div className="topres">
        <h3>Top Resturants</h3>
        <button
          className="topB"
          onClick={click()}
        >
          Top Resturants
        </button>
      </div>
      <div className="res-container">
        { topFlag === true ? alert("logig working") : apiData.map((restaurant) => (
          <ResturantCard receData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
