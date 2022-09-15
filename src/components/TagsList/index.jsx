import React from "react";
import * as s from "./styles";

export const TagsList = ({ tags, onClick }) => {
  const handleClick = (tag) => () => {
    onClick(tag);
  };

  return (
    <s.TagsList>
      {tags.map((tag) => (
        <s.TagLink href="#" key={tag} onClick={handleClick(tag)}>
          {tag}
        </s.TagLink>
      ))}
    </s.TagsList>
  );
};
