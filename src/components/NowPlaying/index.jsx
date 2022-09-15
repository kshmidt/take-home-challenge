import { TagsList } from "components/TagsList";
import React, { useEffect } from "react";
import * as s from "./styles";

export const NowPlaying = ({ data, onTagClick }) => {
  const audioRef = React.createRef(null)

  const handleTagClick = (tag) => {
    onTagClick(tag);
  };

  useEffect(() => {
    audioRef.current.addEventListener("error", () => {
      alert("Oops! Someting went wrong. Please try again");
    })
  }, [])

  return (
    <s.Container>
      <s.Cover src={data.imgUrl}></s.Cover>
      <s.Info>
        <s.Name>{data.name}</s.Name>
        <TagsList tags={data.tags} onClick={handleTagClick} />
        <s.Text>Popularity: {data.popularity}</s.Text>
        <s.Text>Reliability: {data.reliability}</s.Text>
        <s.Text>{data.description}</s.Text>
        <s.Player ref={audioRef} autoPlay={true} controls={true} src={data.streamUrl}></s.Player>
      </s.Info>
    </s.Container>
  );
};
