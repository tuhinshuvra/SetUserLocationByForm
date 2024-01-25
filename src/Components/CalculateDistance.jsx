import useGeoLocation from './useGeoLocation';

const CalculateDistance = () => {
    const location = useGeoLocation();
    const latitude = location.coordinates.lat;
    const langitude = location.coordinates.lan;

    console.log("Geo Location:", location);

    return (
        <div>
            {location.loaded ? JSON.stringify(location) : "Locaton data not available not yet."}
            {
                location.loaded ? <h2>Latitude: {latitude}, Langitude: {langitude}</h2> : "Locaton data not available not yet."
            }
        </div>
    );
};

export default CalculateDistance;