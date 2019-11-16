import React from "react";
import styled from "styled-components";
import ReactMapboxGl from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const MapWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export default props => (
  <MapWrapper>
    <Map
      style="mapbox://styles/xheory/ck31eegwo0mfp1co4kxr8nmd8?fresh=true"
      containerStyle={{ height: "100%", width: "100%" }}
      center={[24.2957, 60.1827]}
    ></Map>
  </MapWrapper>
);
