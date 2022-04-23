import React from "react";
import { Button, Input, Label, Divider } from "../../components/atom";
import { Box, Container } from "../../components/Register";

const Register = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const passwordConfirmRef = React.useRef(null);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <Container>
      <Box margin='1rem'>
        <Divider />
        <form onSubmit={handleForm}>
          <Label htmlFor='email'>Email Address</Label>
          <Input
            id='email'
            placeholder='email'
            mb='1rem'
            type='text'
            ref={emailRef}
          />
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            mb='1.2rem'
            placeholder='password'
            type='password'
            ref={passwordRef}
          />
          <Label htmlFor='passwordConfirmation'>Password Confirmation</Label>
          <Input
            id='passwordConfirmation'
            mb='1.2rem'
            placeholder='password confirmation'
            type='password'
            ref={passwordConfirmRef}
          />
          <Button type='submit'>Register</Button>
        </form>
        <Divider />
      </Box>
    </Container>
  );
};

export default Register;
