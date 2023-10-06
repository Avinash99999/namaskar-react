import { CDN_Link } from "../utils/constant";

const ResturantCard = (props) => {
  const { receData } = props;

  // const { name, costForTwo, cloudinaryImageId, cuisines, avgRating } = receData

  return (
    <div className="m-4 p-3 w-[250px] h-[400px] bg-violet-300">
      <img
        className="w-[250px] h-[150px]"
        src={
          receData.cloudinaryImageId
            ? CDN_Link + receData.cloudinaryImageId
            : "https://media.istockphoto.com/id/1400282493/photo/black-woman-photographing-her-plate-of-salad-with-her-smartphone-in-a-bar-in-a-coastal-area.jpg?s=1024x1024&w=is&k=20&c=d1mGHibUqRRD6ieOhkOVBAusIgyGZUHdHbKcvNSa1A4="
        }
      ></img>
      <h4 className="text-black font-bold">{receData?.name}</h4>
      <h4 className="text-black">
        {receData?.cuisines ? receData?.cuisines.join(", ") : "No Cusinies"}
      </h4>
      <h4 className="text-black">{receData?.costForTwo}</h4>
      <h4 className="text-black">{receData?.avgRating} stars</h4>
    </div>
  );
};


// Higher Order Component is withPromotedTagg which is taking input ResturantCard
export const withPromotedTagg = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white absolute m-4 p-2rounded-lg">Promoted</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
