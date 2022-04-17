import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="mx-auto my-auto w-50 d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
