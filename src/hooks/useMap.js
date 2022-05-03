import { useState, useEffect } from "react";
import axios from "axios";

const useMap = ({ address, country, city }) => {
  const [position, setPosition] = useState({});
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY_POSITION;
  const apiURL = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${address}`;

  const locationByIp = "https://ipapi.co/json";

  useEffect(() => {
    async function fetchCoor() {
      const { data } = await axios(locationByIp);
      const coords = { lat: data.latitude, lng: data.longitude };
      setPosition(coords);
      setLoading(false);
    }

    fetchCoor();
  }, []);

  return { position, loading };
};

export default useMap;
