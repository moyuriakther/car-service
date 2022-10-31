import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.email;
  console.log(user?.email);
  useEffect(() => {
    const getToken = async () => {
      if (email) {
        const { data } = await axios.post(
          "https://car-service-backend.onrender.com/login",
          {
            email,
          }
        );
        localStorage.setItem("accessToken", data.accessToken);
        setToken(data.accessToken);
      }
    };
    getToken();
  }, [email]);

  return [token];
};

export default useToken;
