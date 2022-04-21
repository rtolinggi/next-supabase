import React from "react";
import { Button, Input, Label } from "../../components/atom";
import { Box, Container } from "../../components/Register";

const Register = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <Container>
      <h1>Register Page</h1>
      <Box margin='1rem'>
        <form onSubmit={handleForm}>
          <Label>Email Address</Label>
          <Input placeholder='Email' mb='1rem' type='text' ref={emailRef} />
          <Label>Password</Label>
          <Input
            mb='1.2rem'
            placeholder='password'
            type='password'
            ref={passwordRef}
          />
          <Button type='submit'>Signup</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
