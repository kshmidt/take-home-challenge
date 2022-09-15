import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Heading = styled.h1`
  text-transform: capitalize;
`;

export const TagsListContainer = styled.div`
  display: flex;
  width: 100%;
 justify-content: center;
`;

export const ToolPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SortPanel = styled.div`
  padding: 10px;
  margin-left: auto;
`;

export const StationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: auto;
`;

export const NowPlayingContainer = styled.div`
  align-self: flex-end;
  width: 100%;
`;
