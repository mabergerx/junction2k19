import React from "react";
import styled from "styled-components";
import ReactMapboxGl from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default props => (
  <MapWrapper {...props}>
    <Map
      style="mapbox://styles/xheory/ck31eegwo0mfp1co4kxr8nmd8?fresh=true"
      containerStyle={{ height: "100%", width: "100%" }}
      center={[24.508737, 60.312675]}
      zoom={[11]}
    ></Map>
  </MapWrapper>
);
