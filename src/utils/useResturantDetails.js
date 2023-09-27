import { Resturant_API } from "./constant";

const useResturantDetails = async (resid) => {

    const URL = Resturant_API + resid;
    const result = await fetch(URL);
    const json = await result.json();

    //console.log("JSON", json);
    return json;
}

export default useResturantDetails;