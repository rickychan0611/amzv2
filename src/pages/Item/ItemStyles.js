import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-flow: column wrap;

`;
export const Image = styled.img`
  max-width: 300px;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;
export const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #858585;
  line-height: normal;
  margin-bottom: 10px;
`;
export const Price = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #858585;
  line-height: 150%;
  color: red;
`;
