import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  background-color: #edf2f7;
  color: #1a202c;
  border-radius: 6px;
  padding: 12px 15px;
  font-family: Medium 500;
  font-size: normal;
  font-weight: normal;
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-top: 5px;
  &:focus {
    background-color: white;
    outline: 2px solid #81e6d9;
    transform: scaleY(1.1);
    transition-duration: 0.15s;
    border-width: 0px;
    border-color: #81e6d9;
  }
`;

const Label = styled.label`
  font-family: Medium 500;
  font-size: smaller;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 1rem;
`;

export { Input, Label };
