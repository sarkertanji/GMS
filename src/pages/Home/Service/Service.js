import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;

  return (
    <div className="single-service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <Link to={`/booking/${id}`}>
        <Button variant="primary">Book {name.toLowerCase()}</Button>
      </Link>
    </div>
  );
};

export default Service;
