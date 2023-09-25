import ResturantCard from "./Resturantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [actualList, setActualList] = useState([]);
  const [topList, settopList] = useState([]);
  const [searchFlag, setsearchFlag] = useState(false);
  const [seachText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3702522&lng=72.8291995&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await result.json();
    //Optional Chaining
    const value =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    let allResturants = [];
    for (let i = 0; i < value.length; i++) {
      const data = value[i]?.info;
      allResturants.push(data);
    }
    setActualList(allResturants);
    settopList(allResturants);
  };

  // Conditional Rendering
  // if(topList.length === 0){
  //   return <Shimmer />
  // }

  return topList.length === 0 ? (
    <div>
      {searchFlag ? <h3>No such resturants or food items</h3> : ""}
      <Shimmer />
    </div>
  ) : (
    <div className="ResturantMenuContainer">
      {/* SEARCH RESTURANTS */}
      <div className="searchResturant">
        <input
          type="text"
          value={seachText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const searchList = actualList.filter(
              (res) =>
                res?.name.toLowerCase().includes(seachText.toLowerCase()) ||
                res?.cuisines
                  .join(", ")
                  .toLowerCase()
                  .includes(seachText.toLowerCase())
            );
            settopList(searchList);
            if (searchList.length === 0) setsearchFlag(true);
          }}
        >
          Search
        </button>
      </div>

      {/* TOP RESTURANTS */}
      <div className="topres">
        <h3>Top Resturants</h3>
        <button
          className="topB"
          onClick={() => {
            const filteredList = actualList.filter((res) => res?.avgRating > 4);
            settopList(filteredList);
          }}
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
