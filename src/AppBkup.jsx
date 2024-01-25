import MapComponent from './MapComponent';

function App() {
  const startPoint = { lat: 22.768211404952517, lng: 90.4231854666645 };
  const endPoint = { lat: 23.793812175060193, lng: 90.40111899375893 };

  return (
    <div>
      <MapComponent startPoint={startPoint} endPoint={endPoint} />
    </div>
  );
}

export default App;