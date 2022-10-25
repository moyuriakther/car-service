import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import Service from "./Service";

const Services = () => {
  const [services] = useServices();
  return (
    <div id="services" className="my-5">
      <h2 className="text-center mb-5">Car Services: {services?.length}</h2>
      <Container>
        <Row className="g-4">
          {services?.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
