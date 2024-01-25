import { useState, useEffect } from 'react';

const useGeoLocation = () => {
    const storedLocation = JSON.parse(localStorage.getItem('locationOne'));
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location) => {
        const newLocation = {
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        };
        setLocation(newLocation);
        localStorage.setItem('locationOne', JSON.stringify(newLocation));
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        if (storedLocation) {
            setLocation(storedLocation);
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

    }, [storedLocation]);

    return location;
};

export default useGeoLocation;