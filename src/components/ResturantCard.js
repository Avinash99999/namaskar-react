import { CDN_Link } from "../utils/constant";

const ResturantCard = (props) => {
  const { receData } = props;

  // const { name, costForTwo, cloudinaryImageId, cuisines, avgRating } = receData

  return (
    <div className="card">
      <img
        src={
          receData.cloudinaryImageId
            ? CDN_Link + receData.cloudinaryImageId
            : "https://media.istockphoto.com/id/1400282493/photo/black-woman-photographing-her-plate-of-salad-with-her-smartphone-in-a-bar-in-a-coastal-area.jpg?s=1024x1024&w=is&k=20&c=d1mGHibUqRRD6ieOhkOVBAusIgyGZUHdHbKcvNSa1A4="
        }
        className="resimg"
      ></img>
      <h4>{receData?.name}</h4>
      <h4>
        {receData?.cuisines ? receData?.cuisines.join(", ") : "No Cusinies"}
      </h4>
      <h4>{receData?.costForTwo}</h4>
      <h4>{receData?.avgRating} stars</h4>
    </div>
  );
};

export default ResturantCard;
