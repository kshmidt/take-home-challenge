import { StationCard } from "components/StationCard";
import { TagsList } from "components/TagsList";
import React, { useEffect, useState } from "react";
import { NowPlaying } from "../NowPlaying";
import * as s from "./styles";

const fetchStationsData = async () => {
  const res = await fetch(
    "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json"
  );
  const json = await res.json();

  return json.data;
};

const sortBy = (arr, key, direction) =>
  [...arr].sort((a, b) =>
    direction === "desc" ? b[key] - a[key] : a[key] - b[key]
  );

export const App = () => {
  const [stations, setStations] = useState([]);
  const [activeStation, setActiveStation] = useState();
  const [activeTag, setActiveTag] = useState("all");
  const [tags, setTags] = useState([]);

  const handleStationClick = (id) => {
    const selectedStation = stations.find((station) => station.id === id);

    if (selectedStation) {
      setActiveStation(selectedStation);
    }
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleSelectChange = (e) => {
    const [attr, direction] = e.target.value.split("-");
    setStations(sortBy(stations, attr, direction));
  };

  useEffect(() => {
    fetchStationsData().then((data) => {
      setStations(data);
      const tagsSet = new Set();
      data.forEach((station) =>
        station.tags.forEach((tag) => tagsSet.add(tag))
      );
      setTags(["all", ...Array.from(tagsSet)]);
    });
  }, []);

  const filteredStations =
    activeTag === "all"
      ? stations
      : stations.filter((station) =>
          station.tags.some((tag) => tag === activeTag)
        );

  return (
    <s.Container>
      <s.Heading>{activeTag} Radio Stations</s.Heading>
      <s.ToolPanel>
        <s.TagsListContainer>
          <TagsList tags={tags} onClick={handleTagClick} />
        </s.TagsListContainer>
        <s.SortPanel>
          <span>Sort by </span>
          <select onChange={handleSelectChange}>
            <option value="popularity-asc">Popularity A-Z</option>
            <option value="popularity-desc">Popularity Z-A</option>
            <option value="reliability-asc">Reliability A-Z</option>
            <option value="reliability-desc">Reliability Z-A</option>
          </select>
        </s.SortPanel>
      </s.ToolPanel>
      <s.StationsList>
        {filteredStations.map((station) => (
          <StationCard
            key={station.id}
            data={station}
            onClick={handleStationClick}
          />
        ))}
      </s.StationsList>
      {activeStation && (
        <s.NowPlayingContainer>
          <NowPlaying
            data={activeStation}
            onTagClick={handleTagClick}
          ></NowPlaying>
        </s.NowPlayingContainer>
      )}
    </s.Container>
  );
};
