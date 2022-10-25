import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <Col sm={12} md={6} lg={4} className="rounded shadow g-4">
      <img className="card-img-top" src={img} alt="" />
      <div className="service-detail">
        <h2>{name}</h2>
        <p>
          <strong>$ {price}</strong>
        </p>
        <p>{description}</p>
        <Button
          className="btn btn-primary"
          onClick={() => handleDetail(service._id)}
        >
          Add Service
        </Button>
      </div>
    </Col>
  );
};

export default Service;
