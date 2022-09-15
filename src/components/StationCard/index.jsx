import React from "react";
import * as s from "./styles";

export const StationCard = ({ data, onClick }) => {
  const handleClick = (e) => {
    onClick(data.id);
  };

  return (
    <s.Container onClick={handleClick}>
      <s.Cover src={data.imgUrl}></s.Cover>
      <s.Name>{data.name}</s.Name>
    </s.Container>
  );
};
