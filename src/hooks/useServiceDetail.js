import axios from "axios";
import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});
  //   console.log(service);
  useEffect(() => {
    axios
      .get(`https://car-service-backend.onrender.com/service/${serviceId}`)
      .then((res) => setService(res.data));
  }, [serviceId]);
  return [service];
};

export default useServiceDetail;
