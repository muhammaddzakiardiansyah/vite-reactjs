const Button = (props) => {
  const { className, children, onClick = () => {} } = props;
  return <button className={`btn btn-outline ${className}`} onClick={onClick}>{children}</button>;
};

export default Button;