import React, { useState } from 'react';
import {
  GalleryContainer,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  Modal,
  ModalContent,
  CloseButton,
  NavButton
} from '../styles/components/GalleryStyles';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: '/src/assets/images/gallery-1.jpg', alt: 'Car Detailing' },
    { id: 2, src: '/src/assets/images/gallery-2.jpg', alt: 'Paint Protection' },
    { id: 3, src: '/src/assets/images/gallery-3.jpg', alt: 'Ceramic Coating' },
    // Add more images as needed
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <GalleryContainer>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem
            key={image.id}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
          >
            <GalleryImage src={image.src} alt={image.alt} />
          </GalleryItem>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedImage(null)}>
              <span className="material-symbols-rounded">close</span>
            </CloseButton>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <NavButton className="prev" onClick={handlePrev}>
              <span className="material-symbols-rounded">arrow_back</span>
            </NavButton>
            <NavButton className="next" onClick={handleNext}>
              <span className="material-symbols-rounded">arrow_forward</span>
            </NavButton>
          </ModalContent>
        </Modal>
      )}
    </GalleryContainer>
  );
};

export default Gallery;