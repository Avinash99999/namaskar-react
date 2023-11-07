import { useState } from "react";
import ItemCategory from "./ItemCategory";

const CategoryDetails = ({ data, index, acceptIndex, showItemCategory}) => {

  const [showitem, setShowitem] = useState(false)

  const showItems = () => {
    acceptIndex()
  }

  const showItemsfunc = () =>{
    setShowitem(!showitem)
  }
  
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between" onClick={showItems}>
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItemCategory ? <ItemCategory item={data?.itemCards} key={data?.itemCards?.card?.info?.id}/> : ""}
    </div>
  );
};

export default CategoryDetails;
