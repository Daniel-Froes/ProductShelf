import { useState } from "react";
import "./FavButton.css";
const FavButton = ({ isFavorite }) => {
  const [fav, setFav] = useState(isFavorite);

  const toggleFav = (fav) => {
    setFav(fav);
  };
  return (
    <>
      <button
        className={"productFavBtn" + (fav ? "--active" : "")}
        onClick={() => toggleFav(!fav)}
      />
    </>
  );
};
export default FavButton;
