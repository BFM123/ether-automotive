import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.background};
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

export const GalleryItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;

  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 24px;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &.prev {
    left: -60px;
  }

  &.next {
    right: -60px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;