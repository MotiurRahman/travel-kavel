import React from "react";
import "./VisitingPlace.css";

const VisitingPlace = ({ place }) => {
  const { id, name, imgPath } = place;
  console.log(id, name, imgPath);
  return (
    <div
      className="placess"
      style={{
        backgroundImage: `url(../../../../../images/${imgPath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="placeText">{name}</h3>
    </div>
  );
};

export default VisitingPlace;
