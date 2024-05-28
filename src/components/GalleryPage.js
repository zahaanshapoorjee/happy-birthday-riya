import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #D9D9D9;
  padding: 20px;
`;

const GalleryImage = styled.img`
  width: 325px;
  height: 325px;
  margin: 20px;
  border-radius: 10px;
  object-fit: cover; /* Ensure images are uniformly sized */
`;

const GalleryPage = ({ images }) => {
  return (
    <Container>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image}
          alt={`Gallery Image ${index + 1}`}
        />
      ))}
    </Container>
  );
};

export default GalleryPage;
