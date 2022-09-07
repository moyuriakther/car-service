import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("services.json").then((response) => {
      setServices(response.data);
    });
  }, []);
  return (
    <div id="services" className="my-5">
      <h2 className="text-center mb-5">Car Services: {services?.length}</h2>
      {/* <div className="services-container">
        {services?.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div> */}
      <Container>
        <Row className="g-4">
          {services?.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
