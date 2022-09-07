import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>service detail : {serviceId}</h1>
      <div className="text-center my-3">
        <Link to="/checkout">
          <Button>Proceed Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
