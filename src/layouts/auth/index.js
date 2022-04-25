import Box from "../../components/Box.style";
import Container from "../../components/Container.style";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Container>
        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default AuthLayout;
