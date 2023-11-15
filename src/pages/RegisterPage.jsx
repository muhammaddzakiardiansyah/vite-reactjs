import Button from "../components/Elements/Button/Index";
import FormControl from "../components/Elements/Input/Index";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link, redirect } from "react-router-dom";

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('name', e.target.name.value);
    localStorage.setItem('no_hp', e.target.no_hp.value);
    localStorage.setItem('email', e.target.email.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = '/login'
  }
  return (
    <>
    <AuthLayouts title='Register' text='Register here' onSubmit={handleRegister} type="register">
      <FormControl
        labelName="Full Name"
        type="text"
        placeholder="input your full name"
        className="input-info"
        id="name"
        name="name"
      />
      <FormControl
        labelName="No Hp"
        type="text"
        placeholder="input your number phone"
        className="input-info"
        id="no_hp"
        name="no_hp"
      />
      <FormControl
        labelName="Email"
        type="email"
        placeholder="input your email"
        className="input-info"
        id="email"
        name="email"
      />
      <FormControl
        labelName="Password"
        type="password"
        placeholder="input your password"
        className="input-info"
        id="password"
        name="password"
      />
      <Button className='btn-success block mx-auto mt-10'>Register</Button>
    </AuthLayouts>
    </>
  );
};

export default RegisterPage;