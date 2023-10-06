import ResturantCard, { withPromotedTagg } from "./Resturantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const ResturantMenu = () => {
  const [actualList, setActualList] = useState([]);
  const [topList, settopList] = useState([]);
  const [searchFlag, setsearchFlag] = useState(false);
  const [seachText, setsearchText] = useState("");
  const ResturantwithPromoted = withPromotedTagg(ResturantCard);

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

    // console.log("vales:", value);
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
    <div className="">
      <div className="flex p-10">
        {/* SEARCH RESTURANTS */}
        <div>
          <input
            className="border border-solid border-black rounded py-1"
            type="text"
            value={seachText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-sky-600 hover:bg-blue-700 text-white font-bold py-1  px-4 rounded ml-4"
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
        <div>
          <button
            // className="bg-pink-200 ml-12"
            className="bg-sky-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ml-10"
            onClick={() => {
              const filteredList = actualList.filter(
                (res) => res?.avgRating > 4
              );
              settopList(filteredList);
            }}
          >
            Top Resturants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {topList.map((restaurant) => (
          <Link to={"/resturant/" + restaurant.id}>
            {restaurant.avgRating < 4.5 ? (
              <ResturantwithPromoted receData={restaurant} />
            ) : (
              <ResturantCard receData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
