import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 415px;
  margin: 20px;
`;

const DesignOverlay = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  pointer-events: none; /* Ensures the overlay is not interactive */
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 315px;
  border-radius: 10px;
  z-index: 0;
  position: relative;
`;

const VideoCard = ({ videoId, designSrc }) => {
  return (
    <Card>
      <DesignOverlay src={designSrc} alt="Design Overlay" />
      <Iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube video player"
      ></Iframe>
    </Card>
  );
};

export default VideoCard;
