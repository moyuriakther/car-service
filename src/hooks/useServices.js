import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://car-service-backend.onrender.com/service")
      .then((response) => {
        setServices(response.data);
      });
  }, []);
  return [services, setServices];
};

export default useServices;
