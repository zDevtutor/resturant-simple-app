import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="jumbotron text-center">
      <div className="container">
        <h1 className="display-2">Ops!</h1>
        <h1 className="display-4">Error 404 Not Found</h1>
        <p>Sorry, an error occured. The requested Page was not found</p>
        <p>
          <Link className="btn btn-dark btn-lg" to="/" role="button">
            <i className="fas fa-home"></i> Back To Main
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
