import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';


const UserGEOLocationSetForm = () => {
    useEffect(() => {
        // const map = L.map('map').setView([28.2380, 83.9956], 11);
        const map = L.map('map').setView([23.7984463, 90.4031033], 15);

        const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
            maxZoom: 18
        }).addTo(map);


        const geocoder = L.Control.geocoder({
            defaultMarkGeocode: false
        })
            .on('markgeocode', function (e) {
                const bbox = e.geocode.bbox;
                const poly = L.polygon([
                    bbox.getSouthEast(),
                    bbox.getNorthEast(),
                    bbox.getNorthWest(),
                    bbox.getSouthWest()
                ]).addTo(map);
                map.fitBounds(poly.getBounds());
            })
            .addTo(map);

        // Additional styles for the geocoder control to ensure visibility
        const geocoderContainer = geocoder.getContainer();
        geocoderContainer.style.position = 'absolute';
        geocoderContainer.style.top = '10px';
        geocoderContainer.style.right = '10px';
        geocoderContainer.style.zIndex = '1000'; // Adjust the z-index if needed

        return () => {
            map.remove();
        };
    }, []); // Empty dependency array ensures the useEffect runs only once

    return (
        <div id="map" style={{ width: '100%', height: '60vh' }}></div>

    );
};

export default UserGEOLocationSetForm;