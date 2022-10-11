import CambiaTitolo from "./cambiaTitolo/CambiaTitolo";
import EliminoElementi from "./eliminoElementi/EliminoElementi";
import Oggetti from "./oggetto/Oggetti";
import Contatore from "./contatore/Contatore";

function App() {
  return (
    <div className="App">
      <CambiaTitolo />
      <EliminoElementi />
      <Oggetti />
      <Contatore />
    </div>
  );
}

export default App;
