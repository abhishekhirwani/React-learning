import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(RESTAURANT_MENU_URL + resId);
      const data = await res.json();
      console.log(data);
      setResData(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (resData === null) <Shimmer />;
  return (
    <div>
      <h1>{resData?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>
        {resData?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}-{" "}
        {resData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => {
            return (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - {"Rs. "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
