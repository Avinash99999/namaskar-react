import { useState } from "react";
import ItemCategory from "./ItemCategory";

const CategoryDetails = ({ data }) => {
const [itemFlag, setitemFlag] = useState(false);

changeFlag = () => {
    setitemFlag(!itemFlag)
}
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4" >
      <div className="flex justify-between" onClick={changeFlag}>
        <span className="font-bold text-lg shadow-lg">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>

      {itemFlag === true ? <ItemCategory item={data?.itemCards} /> : ''}
    </div>
  );
};

export default CategoryDetails;
