import React from "react";
import styled, { css } from "styled-components";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import nuuksioData from "../../assets/data/nuuksio.json";

const Mapbox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledMarker = styled(Marker)`
  color: ${props => (props.hike ? "red" : "blue")};
`;

const renderMarker = (id, location, categories) => {
  return (
    <StyledMarker
      key={id}
      coordinates={location}
      hike={categories[0] === "hike"}
    >
      Icon here
    </StyledMarker>
  );
};

const Map = props => {
  return (
    <MapWrapper {...props}>
      <Mapbox
        style="mapbox://styles/xheory/ck31eegwo0mfp1co4kxr8nmd8?fresh=true"
        containerStyle={{ height: "100%", width: "100%" }}
        center={[24.508737, 60.312675]}
        zoom={[11]}
        ref={e => props.mapRefPass(e)}
      >
        {nuuksioData.map(poi =>
          renderMarker(poi.id, poi.location, poi.categories)
        )}
      </Mapbox>
    </MapWrapper>
  );
};

Map.defaultProps = {
  mapRefPass: () => {
    console.error("MAP REF PASS NOT IMPLEMENTED!");
  }
};

export default Map;
