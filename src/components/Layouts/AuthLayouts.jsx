import { Link } from "react-router-dom";
import FormInput from "../Fragments/FormInput";

const AuthLayouts = (props) => {
  const { children, action, method, title, text, type, onSubmit } = props;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      <p className="text-sm text-slate-900 mb-5">{text}</p>
      <FormInput action={action} method={method} onSubmit={onSubmit}>
        {children}
        <p className="text-center mt-2">{type === 'login' ? "Don't have a account? " : 'Have a accont? '} <Link to={type === 'login' ? '/register' : '/login'}>{type === 'login' ? 'Register' : 'Login'}</Link></p>
      </FormInput>
    </div>
  );
};

export default AuthLayouts;
