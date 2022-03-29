import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { BookId } = useParams();
  return (
    <div>
      <h1>this is booking page {BookId}</h1>
    </div>
  );
};

export default Booking;
