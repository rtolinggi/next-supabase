import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background: rgb(129, 230, 217);
  background: radial-gradient(
    circle,
    rgba(129, 230, 217, 1) 0%,
    rgba(49, 151, 149, 1) 50%,
    rgba(44, 122, 123, 1) 100%
  );
`;

const Box = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2rem;
  margin-top: ${({ margin }) => margin || "0px"};
`;
export { Container, Box };
