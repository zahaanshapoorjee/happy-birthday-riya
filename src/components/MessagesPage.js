import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard'; // Import the VideoCard component
import designImage from '../Photos/Rect.svg'; // Path to your design image

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #FFB6C1;
  padding: 20px;
`;

const videos = [
  {id: 'DNpMIuB1dtQ', name: 'Uday'},
  { id: '7KQtotiXSUk', name: 'Sanya' },
  { id: 'Q7iqAj2QxOE', name: 'Peehu' },
  { id: 'm0PsxPuosxA', name: 'Naisha' },
  { id: 'b5qCiIn6fcg', name: 'Khushi' },
  { id: 'GicnF6sM6lk', name: 'Soubhagya' },
  { id: 'fn0tget8Lnc', name: 'Saairah' },
  { id: 'DM0ltBFFvrw', name: 'Nitya' },
  { id: 'ytfLxBy2CYM', name: 'Meera' },
  { id: 'L7GRgq0tglw', name: 'Devasya' },
  { id: 'z6ajGamlbqU', name: 'Akhil' },
  { id: 'I6hqwQh_W10', name: 'Vanshika' },
];

const MessagesPage = () => {
  return (
    <Container>
      {videos.map((video, index) => (
        <VideoCard key={index} videoId={video.id} designSrc={designImage} />
      ))}
    </Container>
  );
};

export default MessagesPage;
