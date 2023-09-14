import ResturantCard from "./ResturantCard"
import { apiData } from "../utils/mockdata";
import { useState } from "react";

function click() {
  console.log("button is working")
 }

const ResturantMenu = () => {
  const [topList, settopList] = useState([apiData])
  return (
    <div>
      <div className="topres">
        <h3>Top Resturants</h3>
        <button
          className="topB"
          onClick={() => {
            console.log("aviiiiiiii");
          }}
        >
          Top Resturants
        </button>
        <button onClick={click}>
          click here
        </button>
      </div>
      <div className="res-container">
        {apiData.map((restaurant) => (
          <ResturantCard receData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
