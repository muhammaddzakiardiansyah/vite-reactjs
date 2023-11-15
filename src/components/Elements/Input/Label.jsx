const Label = (props) => {

    const {htmlFor, children} = props;

  return (
    <label className="label font-bold" htmlFor={htmlFor}>
      <span className="label-text">{children}</span>
    </label>
  );
};

export default Label;