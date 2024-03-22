import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  const [res, setRes] = useState(resList);
  return (
    <div className="body-container">
      <div className="restaurant-btn">
        <button
          onClick={() => {
            const filterRest = resList.filter(
              (item) => item.info.avgRating > 4.5
            );
            setRes(filterRest);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {res.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
