import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #111;
  color: #fff;
  padding: 60px 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export default function Gallery() {
  return (
    <Container>
      <h2>Showroom Gallery</h2>
      <Grid>
        <Image src="https://via.placeholder.com/400x300" alt="Gallery 1" />
        <Image src="https://via.placeholder.com/400x300" alt="Gallery 2" />
        <Image src="https://via.placeholder.com/400x300" alt="Gallery 3" />
        <Image src="https://via.placeholder.com/400x300" alt="Gallery 4" />
      </Grid>
    </Container>
  );
}