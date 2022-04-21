import styled from "styled-components";
import { productionBrowserSourceMaps } from "../../next.config";

const Button = styled.button`
  color: white;
  background-color: #319795;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: medium;
  letter-spacing: normal;
  width: ${({ width }) => width || "fit-content"};
  margin: 10px 0px;
  &:hover {
    background-color: #2c7a7b;
  }
`;

export default Button;
