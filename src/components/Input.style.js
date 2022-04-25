import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  font-size: small;
  font-weight: 500;
  width: 100%;
  padding: 0.7rem 0.5rem;
  color: ${(props) => props.theme.colors.gray700};
  letter-spacing: 0.5px;

  &:focus {
    outline-color: ${(props) => props.theme.colors.primary200};
    background-color: white;
  }
`;

export default Input;
