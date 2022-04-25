import styled from "styled-components";

const Divider = styled.hr`
  border-top: 0.5px solid #e2e8f0;
  margin: ${({ margin }) => margin || "1.5rem 0"};
  box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.3);
`;

export default Divider;
