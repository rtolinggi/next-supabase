import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: rgb(129, 230, 217);
  background: linear-gradient(
    90deg,
    rgba(129, 230, 217, 1) 0%,
    rgba(49, 151, 149, 1) 50%,
    rgba(44, 122, 123, 1) 100%
  );
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-weight: 400;
  font-size: medium;
  letter-spacing: 0.3px;
  width: 100%;
  margin-top: 10px;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(44, 122, 123, 1) 0%,
      rgba(49, 151, 149, 1) 50%,
      rgba(129, 230, 217, 1) 100%
    );
  }
  &:focus {
    outline: 4px solid #81e6d9;
  }
  @media (min-width: 770px) {
    width: fit-content;
  }
`;

export default Button;
