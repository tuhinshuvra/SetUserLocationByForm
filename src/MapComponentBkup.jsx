import { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponentBkup = ({ startPoint, endPoint }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            const bounds = [startPoint, endPoint];
            mapRef.current.fitBounds(bounds);
        }
    }, [startPoint, endPoint]);

    return (
        <div>
            <MapContainer
                center={[startPoint?.lat, startPoint?.lng]}
                zoom={10}
                style={{ height: '500px', width: '100%' }}
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={[startPoint?.lat, startPoint?.lng]}>
                    <Popup>Start Point</Popup>
                </Marker>

                <Marker position={[endPoint?.lat, endPoint?.lng]}>
                    <Popup>End Point</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponentBkup;