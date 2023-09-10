import { CDN_Link } from "../utils/constant";

const ResturantCard = (props) => {
  const { receData } = props;
  console.log("imgg:", receData);

  const {name, cuisines, costForTwo, cloudinaryImageId} = receData?.info

  return (
    <div className="card">
      <img
        src={CDN_Link + receData.info.cloudinaryImageId}
        className="resimg"
      ></img>
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
