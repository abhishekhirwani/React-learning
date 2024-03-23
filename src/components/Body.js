import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9666993&lng=73.7832206&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    setListOfRes(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="restaurant-btn">
        <input
          type="text"
          onChange={(e) => setSearchRes(e.target.value)}
          className="search-box"
          value={searchRes}
        />
        <button
          onClick={() => {
            const searchRestaurant = listOfRes.filter((item) =>
              item.info.name.toLowerCase().includes(searchRes.toLowerCase())
            );
            setFilteredRestaurant(searchRestaurant);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filterRest = resList.filter(
              (item) => item.info.avgRating > 4.5
            );
            setFilteredRestaurant(filterRest);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
