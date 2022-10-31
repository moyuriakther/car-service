import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className="d-flex justify-content-center my-3">
      <div>
        <PageTitle title={"service detail"} />
        <h1>Service Detail : {service.name}</h1>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={service.img} alt="" />
          <Card.Body>
            <Card.Text>{service.name}</Card.Text>
            <Card.Text>
              <strong>$ {service.price}</strong>
            </Card.Text>
            <p>{service.description}</p>
          </Card.Body>
          <div className="text-center my-3">
            <Link to={`/checkout/${serviceId}`}>
              <Button>Proceed Checkout</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetails;
