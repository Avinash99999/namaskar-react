import ResturantCard from "./ResturantCard"
import { apiData, apiData } from "../utils/mockdata";
import { useState } from "react";


const ResturantMenu = () => {
  const [topList, settopList] = useState(apiData)
  console.log("initial:", topList)

  function click() {
    const topfilter = apiData.filter(checkTop);
    settopList(topfilter);
    console.log("later:", topList)
  }

  function checkTop(apiData) {
    return apiData?.data?.info?.avgRating > 4;
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
        {topList.map((restaurant) => (
          <ResturantCard receData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
