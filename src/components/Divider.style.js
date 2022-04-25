import styled from "styled-components";

const Divider = styled.div`
  height: 1.2px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  margin: 1.5rem 0;
`;

export default Divider;
