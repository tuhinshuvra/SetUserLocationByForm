import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import './Address/Address.css';

const UserGEOLocationSetForm = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


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
        <div className=' col-md-12 d-md-flex justify-content-between '>
            <div className=' col-md-6'>
                <div className=' mb-5 addreddBG p-3'>
                    <form>
                        <div className='row g-3 mb-3'>
                            <div className='col'>
                                <label htmlFor="division" className="form-label">Division:*</label>
                                <input type="text" className="form-control" id="division" aria-describedby="division" />
                            </div>
                            <div className='col'>
                                <label htmlFor="district" className="form-label">District:*</label>
                                <input type="text" className="form-control" id="district" aria-describedby="district" />
                            </div>
                        </div>
                        <div className='row g-3 mb-3'>
                            <div className='col'>
                                <label htmlFor="thana" className="form-label">SubDistrict/Thana:*</label>
                                <input type="text" className="form-control" id="thana" aria-describedby="thana" />
                            </div>
                            <div className='col'>
                                <label htmlFor="union" className="form-label">City Corporation / Union / Municipality:*</label>
                                <input type="text" className="form-control" id="union" aria-describedby="union" />
                            </div>
                        </div>

                        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                    </form>

                </div>
            </div>
            <div className=' col-md-6' id="map" />
        </div>

    );
};

export default UserGEOLocationSetForm;