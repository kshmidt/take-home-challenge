import { TagsList } from "components/TagsList";
import React from "react";
import * as s from "./styles";

export const NowPlaying = ({ data, onTagClick }) => {
  const handleTagClick = (tag) => {
    onTagClick(tag);
  };

  return (
    <s.Container>
      <s.Cover src={data.imgUrl}></s.Cover>
      <s.Info>
        <s.Name>{data.name}</s.Name>
        <TagsList tags={data.tags} onClick={handleTagClick} />
        <s.Text>Popularity: {data.popularity}</s.Text>
        <s.Text>Reliability: {data.reliability}</s.Text>
        <s.Text>{data.description}</s.Text>
        <s.Player autoPlay={true} controls={true} src={data.streamUrl}></s.Player>
      </s.Info>
    </s.Container>
  );
};
