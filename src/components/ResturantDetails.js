import { useState, useEffect } from "react";
import { Menu_Image, Resturant_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const ResturantDetails = () => {
  const [ResturantData, setResturantData] = useState([]);
  const [ResturantMenu, setResturantMenu] = useState([]);

  const params = useParams();
  useEffect(() => {
    fetchDetails();
  }, []);

  console.log("Resturants Menu:", ResturantMenu);
  console.log("Resturant Details:", ResturantData);
  const fetchDetails = async () => {
    const URL = Resturant_API + params.resid;
    console.log("URL:", URL)
    const result = await fetch(URL);

    console.log("result:", result)
    const json = await result.json();

    //Optional Chaining
    const menuData =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

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
  return (
    <div>
      <div className="ResturantDetailsbox">
        <table>
          <tr>
            <h1>{ResturantData.name}</h1>
          </tr>
          <tr>
            <th>{ResturantData.city}</th>
            <th>{ResturantData.areaName}</th>
            <th>{ResturantData.locality}</th>
          </tr>
          <tr>
            <th>{"Open till 12am"}</th>
            <th>
              {ResturantData?.availability?.opened === "true"
                ? "Closed"
                : "Open"}
            </th>
          </tr>
          <tr>
            <th>Cuisines: {ResturantData?.cuisines?.toString()}</th>
          </tr>
          <tr>
            <th>Delivery : {ResturantData?.feeDetails?.message}</th>
          </tr>
          <tr>
            <th>DeliveryTime : {ResturantData?.sla?.deliveryTime} mins</th>
          </tr>
          <tr>
            {ResturantData?.aggregatedDiscountInfo?.descriptionList.map(
              (data) => (
                <th>Offers: {data.meta}</th>
              )
            )}
          </tr>
          <tr>
            <th>Ratings : {ResturantData?.totalRatings}</th>
            <th>{ResturantData?.totalRatingsString}</th>
          </tr>
        </table>
      </div>
      <h3>Menu</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Meal</th>
        </tr>
        {ResturantMenu.map((restaurant) => (
          <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>{restaurant.description}</td>
            <td>Rs.{restaurant.price / 100}</td>
            <td>
              <img src={Menu_Image + restaurant.imageId}></img>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ResturantDetails;
