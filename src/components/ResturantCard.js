import { CDN_Link } from "../utils/constant";

const ResturantCard = (props) => {
  const { receData } = props;

  const { name, cuisines, costForTwo, cloudinaryImageId } = receData?.info

  return (
    <div className="card">
      <img
        //src={CDN_Link + receData?.info?.cloudinaryImageId}
        src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        className="resimg"
      ></img>
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
