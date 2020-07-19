import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  background-image: linear-gradient(90deg, #ffe259, #ffa751, #ff518c);
  padding: 25px;
`;