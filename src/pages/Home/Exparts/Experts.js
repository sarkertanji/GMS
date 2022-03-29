import React, { useEffect, useState } from "react";
import Expert from "../Expert/Expert";
import "./Experts.css";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("./Experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div id="experts">
      <h1>Our Experts</h1>
      <div className="experts">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
