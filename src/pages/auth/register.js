import Button from "../../components/Button.style";
import Divider from "../../components/Divider.style";
import FormControl from "../../components/FormControl.style";
import Input from "../../components/Input.style";
import AuthLayout from "../../layouts/auth";

const Register = () => {
  return (
    <>
      <Divider />
      <form>
        <FormControl mb='1rem'>
          <Input placeholder='email' type='text' />
        </FormControl>
        <FormControl mb='1rem'>
          <Input placeholder='password' type='password' />
        </FormControl>
        <FormControl mb='1rem'>
          <Input placeholder='repeat password' type='password' />
        </FormControl>
        <Button type='submit'>Register</Button>
      </form>
      <Divider />
    </>
  );
};

Register.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
