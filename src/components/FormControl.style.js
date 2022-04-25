import styled from "styled-components";

const FormControl = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => props.mb || "0px"};
  border-radius: 5px;
  & input {
    border-radius: 5px;
  }
`;

export default FormControl;
