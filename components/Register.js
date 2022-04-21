import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 1rem;
  margin-top: ${({ margin }) => margin || "0px"};
`;
export { Container, Box };
