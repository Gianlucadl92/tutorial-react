import MessaggioPagina from "./messaggioPagina/MessaggioPagina";
import DimensioneFinestra from "./dimensioneFinestra/DimensioneFinestra";
import FetchDati from "./fetchDati/FetchDati";

function App() {
  return (
    <div className="App">
      <MessaggioPagina />
      <DimensioneFinestra />
      <FetchDati />
    </div>
  );
}

export default App;
