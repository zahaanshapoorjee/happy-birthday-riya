import React from 'react';
import styled from 'styled-components';

const OvalContainer = styled.div`
  background-color: #D9D9D9;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 180px); /* Adjust based on your footer height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  background-color: transparent;
  text-align: center;
  width: 80%;
  z-index: 1;
`;

const Message = styled.p`
  font-family: 'Nova Script', cursive;
  font-size: 30px;
  font-style: italic;
  font-weight: 400;
  line-height: 36.21px;
  text-align: center;
  color: #333;
`;

const VideoSection = () => {
  return (
    <OvalContainer>
      <VideoContainer>
        <div>
        <iframe width="830" height="432" src="https://www.youtube.com/embed/iQ0wMALoumg?si=gcsHPyvHi6pU6P4x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <Message>
          Happy Birthday my riri. I hope the effort and love from all of us can make you not ick about the font. Lmao who am I kidding - Love U
        </Message>
      </VideoContainer>
    </OvalContainer>
  );
};

export default VideoSection;
