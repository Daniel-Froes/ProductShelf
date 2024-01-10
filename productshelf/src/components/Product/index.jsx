import AddCartButton from "../AddCartButton";
import FavButton from "../FavButton";
import "./Product.css";
const Product = ({
  productName,
  productImage,
  productBasePrice,
  productBestPrice,
  isFavorite,
  installments,
}) => {
  return (
    <div className="productContainer">
      <div className="productFav">
        <FavButton isFavorite={isFavorite} />
      </div>
      <img className="productImage" src={productImage} alt={productName} />
      <div className="productContent">
        <p className="productName">{productName}</p>
        <div className="productPrice">
          <p className="productBasePrice">
            R${" "}
            {productBasePrice.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="productBestPrice">
            R${" "}
            {productBestPrice.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="installments">
            em até{" "}
            <span>
              {installments}x de R${" "}
              {(productBestPrice / installments).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
            </span>
            sem juros
          </p>
        </div>
      </div>

      <AddCartButton />
    </div>
  );
};

export default Product;
