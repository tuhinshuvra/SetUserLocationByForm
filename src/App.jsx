import MapComponent from "./Components/MapComponent";
import UserCurrentGEOLocation from "./Components/UserCurrentGEOLocation";
import UserGEOLocationSetForm from "./Components/UserGEOLocationSetForm";

function App() {
  return (
    <div className="App">
      {/* <UserCurrentGEOLocation></UserCurrentGEOLocation> */}
      {/* <MapComponent></MapComponent> */}

      <UserGEOLocationSetForm></UserGEOLocationSetForm>
    </div>
  );
}

export default App;