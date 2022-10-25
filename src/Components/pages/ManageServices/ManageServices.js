import axios from "axios";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleServiceDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      axios
        .delete(`http://localhost:8080/service/${id}`, id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "JWT fefege...",
          },
        })
        .then((res) => {
          console.log(res.data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="w-50 mx-auto">
      {services.map((service) => (
        <div key={service._id}>
          <Table striped bordered hover>
            <tbody>
              <tr>
                {/* <td>${+1}</td> */}
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td>
                  <img style={{ height: "60px" }} src={service.img} alt="" />
                </td>
                <td>
                  <Button
                    onClick={() => handleServiceDelete(service._id)}
                    className="bg-danger text-bold"
                  >
                    DELETE
                  </Button>
                </td>
                <td>
                  <Link to={`/update/${service._id}`}>
                    <Button className="bg-info text-bold">EDIT</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
