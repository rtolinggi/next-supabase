import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  background-color: #f7fafc;
  color: #2d3748;
  border-radius: 6px;
  border: 0;
  padding: 0.8rem 0.5rem;
  outline: none;
  font-family: Medium 500;
  font-size: medium;
  font-weight: normal;
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-top: 5px;
  &:focus {
    background-color: white;
    outline-style: solid;
    outline-color: #81e6d9;
    outline-width: 2px;
  }
`;

const Label = styled.label`
  font-family: Medium 500;
  font-size: small;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 1rem;
`;

export { Input, Label };
