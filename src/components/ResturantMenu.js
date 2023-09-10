import ResturantCard from "./Resturantcard";
import { apiData } from "../utils/mockdata";
import { useState } from "react";

function click(params) {}

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
      </div>
      <div className="res-container">
        {apiData.map((restaurant) => (
          <ResturantCard key={restaurant.id} receData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
