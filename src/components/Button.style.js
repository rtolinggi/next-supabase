import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(props) => props.theme.colors.gardientColor};
  background: ${(props) => props.theme.colors.gardientLinear};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:focus {
    outline-color: ${(props) => props.theme.colors.primary200};
  }
  &:hover {
    background: ${(props) => props.theme.colors.gardientColor};
    background: ${(props) => props.theme.colors.gardientLinearHover};
  }
`;

export default Button;
