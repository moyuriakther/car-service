import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";

const NotFound = () => {
  return (
    <div
      className="text-danger d-flex align-items-center justify-content-center"
      style={{ height: "79vh" }}
    >
      <div>
        <PageTitle title={"not found"} />
        <h1>Page Not Found</h1>
        <h2>404 !! Bad Request</h2>
      </div>
    </div>
  );
};

export default NotFound;
