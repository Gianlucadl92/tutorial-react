import "./App.css";
import Prodotto from "./Product";
import products from "./products";

function App() {
  return (
    <div className="App">
      <div className="card-section">
        {products.map((prodotto) => {
          return <Prodotto key={prodotto.id} {...prodotto} />;
        })}
      </div>
    </div>
  );
}

export default App;
