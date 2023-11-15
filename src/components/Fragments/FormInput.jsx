const FormInput = (props) => {
  const { children, action, method, onSubmit } = props;

  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormInput;
