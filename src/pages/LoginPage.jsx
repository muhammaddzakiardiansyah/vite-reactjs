import Button from "../components/Elements/Button/Index";
import FormControl from "../components/Elements/Input/Index";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  // id, labelName, type, placeholder, className, action, method, title, text
  const handleLogin = (e) => {
    e.preventDefault()
    const emailLogin = e.target.email.value
    const passwordLogin = e.target.password.value
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    if(emailLogin === email && passwordLogin === password) {
      alert('berhasil login');
      window.location.href = '/product'
    } else {
      alert('gagal login');
    }
  }
  return (
    <AuthLayouts title="Login" text="Login here" type="login" onSubmit={handleLogin}>
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
      <Button className='btn-success mx-auto block mt-10'>Login</Button>
    </AuthLayouts>
  );
};

export default LoginPage;
