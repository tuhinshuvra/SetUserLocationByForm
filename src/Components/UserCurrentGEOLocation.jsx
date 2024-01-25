import useGeoLocation from './useGeoLocation';

const UserCurrentGEOLocation = () => {
    // const storedLocation = JSON.parse(localStorage.getItem('locationOne'));
    // console.log("storedLocation :", storedLocation);

    const location = useGeoLocation();
    const latitude = location.coordinates.lat;
    const langitude = location.coordinates.lan;


    return (
        <div className=''>
            {/* {location.loaded ? JSON.stringify(location) : "Locaton data not available not yet."}     */}
            {
                location.loaded ? <h2 >Latitude: {latitude}, Langitude: {langitude}</h2> : "Locaton data not available not yet."
            }
        </div>
    );
};

export default UserCurrentGEOLocation;