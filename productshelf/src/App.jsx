import Product from "./components/Product";
import mockProducts from "./data/mockCards.json";

function App() {
  return (
    <div className="App">
      {mockProducts.map(
        ({
          productSku,
          productName,
          productImage,
          productBasePrice,
          productBestPrice,
          isFavorite,
          installments,
        }) => (
          <Product
            key={productSku}
            productName={productName}
            productImage={productImage}
            productBasePrice={productBasePrice}
            productBestPrice={productBestPrice}
            isFavorite={isFavorite}
            installments={installments}
          />
        )
      )}
    </div>
  );
}

export default App;
