import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const MapComponent = () => {

    const userOneLocation = JSON.parse(localStorage.getItem('locationOne'));
    console.log("UserOneLocation :", userOneLocation);

    const userTwoLocation = JSON.parse(localStorage.getItem('locationTwo'));
    console.log("UserTwoLocation :", userTwoLocation);

    const userOneLat = userOneLocation?.coordinates?.lat;
    const userOneLan = userOneLocation?.coordinates?.lng;

    const userTwoLat = userTwoLocation?.coordinates?.lat;
    const userTwoLan = userTwoLocation?.coordinates?.lng;

    console.log("User One Lati and Langi", userOneLat, userOneLan)
    console.log("User Two Lati and Langi", userTwoLat, userTwoLan)

    useEffect(() => {
        const map = L.map('map').setView([28.2380, 83.9956], 11);
        const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
            maxZoom: 18
        }).addTo(map);

        // const firstPoint = [55.745, 11.945];
        // const secondPoint = [userTwoLat, userTwoLan]

        const firstPoint = [userOneLat, userOneLan];
        const secondPoint = [23.7682801369032, 90.42319619550057]

        L.Routing.control({
            waypoints: [
                L.latLng(firstPoint),
                L.latLng(secondPoint)
            ]
        }).addTo(map);

        return () => {
            // Clean up code, remove event listeners, etc. if needed
        };
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '100vh' }}>
            <MapContainer style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='Leaflet &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, contribution'
                    maxZoom={18}
                />
            </MapContainer>
        </div>
    );
};

export default MapComponent;
