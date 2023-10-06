import { useState, useEffect } from "react";
import { Menu_Image, Resturant_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";

const ResturantDetails = () => {
  const [ResturantData, setResturantData] = useState([]);
  const [ResturantMenu, setResturantMenu] = useState([]);
  const [CategoryapiData, setCategoryapiData] = useState([]);

  const params = useParams();
  useEffect(() => {
    fetchDetails();
  }, []);

  // console.log("Resturants Menu:", ResturantMenu);
  // console.log("Resturant Details:", ResturantData);
  const fetchDetails = async () => {
    const URL = Resturant_API + params.resid;

    const result = await fetch(URL);

    const json = await result.json();

    // console.log(json);

    //Optional Chaining
    const menuData =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    //Fetching Data Acc to Category
    const foodCategory =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    setCategoryapiData(foodCategory);

    const ResturantData = json?.data?.cards[0].card?.card?.info;
    //Fetching Resturant Details from json
    setResturantData(ResturantData);

    let allResturantsMenu = [];
    for (let i = 0; i < menuData.length; i++) {
      const data = menuData[i]?.card?.info;
      allResturantsMenu.push(data);
    }
    //Fetching Menu of Resturants from json
    setResturantMenu(allResturantsMenu);
  };
  // console.log("data:", ResturantData);
  return (
    <div className="bg-teal-500">
      <h3 className="text-lg font-bold m-4 shadow-lg text-center">
        {ResturantData?.name}
      </h3>
      <h3 className="text-m font-bold m-4 text-center">
        {ResturantData?.areaName} | {ResturantData?.cuisines?.join(", ")} |{" "}
        {ResturantData?.avgRating} ⭐
      </h3>
      {ResturantData?.aggregatedDiscountInfo?.descriptionList.map((item) => (
        <h3 className="text-m font-bold m-4 text-center">🎉 {item.meta}</h3>
      ))}

      {CategoryapiData.map((category) =>
        <CategoryDetails data={category?.card?.card} />
      )}
    </div>
  );
};

export default ResturantDetails;
