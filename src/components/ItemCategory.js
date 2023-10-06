import { CDN_Link } from "../utils/constant";

const ItemCategory = ({ item }) => {
 
  checkWorking = () => {
    console.log('working')
  }
  return (
    <div>
      {item.map((item) => (
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">{item?.card?.info?.name}</h3>
            <h3 className="">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 10}
              /-
            </h3>
            <h3 className="mr-2 mb-2 w-96">{item?.card?.info?.description}</h3>
          </div>
          <div className="relative h-32 w-32">
            <img
              src={CDN_Link + item?.card?.info?.imageId}
              className="h-20 w-44 p-2 m-2n justify-end"
            ></img>
            <button
              className="absolute inset-x-0 bottom-5 shadow-xl bg-white text-red-600 rounded-md border border-solid border-black w-14"
              onClick={checkWorking}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCategory;
