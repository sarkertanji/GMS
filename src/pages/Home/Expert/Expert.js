import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { img, name, expertize } = expert;

  return (
    <div className="expert">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{expertize}</h4>
    </div>
  );
};

export default Expert;
