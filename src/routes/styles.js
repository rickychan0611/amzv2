import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  min-width: 400px;

`;

export const View = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: white;
  display: flex;
  /* flex-wrap: nowrap; */
  justify-content: center;

`;

export const TopBarContainer = styled.div`
  position: fixed;
  min-width: 400px;
  width: 100vw;
  height: 80px;
  top: 0;
  background-image: linear-gradient(90deg, #ffe259, #ffa751, #ff518c);
  padding: 25px;
  z-index: 4000
`;

export const Content = styled.div`
/* position: absolute; */
  padding: 20px;
  margin-top: 80px;
  max-width: 800px;
`