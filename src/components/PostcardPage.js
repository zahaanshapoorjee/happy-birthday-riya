import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #D9D9D9;
  padding: 20px;
`;

const PersonImage = styled.img`
  width: 325px;
  height: 325px;
  margin: 20px;
  cursor: pointer;
  border-radius: 10px;
  object-fit: cover; /* Ensure images are uniformly sized */
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFB6C1;
  padding: 20px;
  border-radius: 10px;
  max-height: 70vh; /* Adjust to ensure the modal content fits within the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const Message = styled.p`
  font-family: 'Nova Script', cursive;
  font-size: 20px;
  font-style: italic;
  text-align: center;
  color: black;
  margin-top: 20px;
  white-space: pre-wrap; /* Ensure text wraps properly */
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Nova Script', cursive;
  background-color: #0695FC;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #027bce;
  }
`;

Modal.setAppElement('#root');

const PostcardPage = ({ postcards }) => {
  const [selectedPostcard, setSelectedPostcard] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (postcard) => {
    setSelectedPostcard(postcard);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPostcard(null);
  };

  return (
    <Container>
      {postcards.map((postcard, index) => (
        <PersonImage
          key={index}
          src={postcard.image}
          alt={postcard.name}
          onClick={() => openModal(postcard)}
        />
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFB6C1',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '500px',
            width: '80%',
            maxHeight: '80vh', /* Ensure the modal content fits within the viewport */
            overflow: 'hidden' /* Hide overflow for the modal content */
          },
        }}
      >
        {selectedPostcard && (
          <ModalContent>
            <img
              src={selectedPostcard.image}
              alt={selectedPostcard.name}
              style={{ maxWidth: '100%', borderRadius: '10px' }}
            />
            <Message>{selectedPostcard.text}</Message>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        )}
      </Modal>
    </Container>
  );
};

export default PostcardPage;
