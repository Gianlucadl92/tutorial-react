import "./App.css";
import Product from "./Product";

const primaCard = {
  nome: "10€ Amazon",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11895.jpg",
  prezzo: 2.16,
  costoFinale: 5,
};

const secondaCard = {
  nome: "Buono Carburante",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f7190.jpg",
  prezzo: 8,
  costoFinale: 9,
};

function App() {
  return (
    <div className="App">
      <div className="card-section">
        <Product {...primaCard}>
          <p>Riapre domani</p>
        </Product>
        <Product {...secondaCard} />
      </div>
    </div>
  );
}

export default App;
