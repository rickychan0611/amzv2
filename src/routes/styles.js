import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

`;

export const View = styled.div`
  /* position: relative; */
  width: 450px;
  max-width: 500px;
  background-color: white;
`;

export const TopBarContainer = styled.div`
  position: sticky;
  top: 0;
  background-image: linear-gradient(90deg, #ffe259, #ffa751, #ff518c);
  padding: 25px;
  z-index: 1000
`;

export const Content = styled.div`
  padding: 20px;

`