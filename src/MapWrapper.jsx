import { MapContainer, TileLayer } from 'react-leaflet';
import MapComponent from './MapComponent';

const MapWrapper = () => {
    return (
        <MapContainer
            center={[0, 0]}
            zoom={2}
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapComponent />
        </MapContainer>
    );
};

export default MapWrapper;