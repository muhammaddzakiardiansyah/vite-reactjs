import Input from "./Input";
import Label from "./Label";

const FormControl = (props) => {
  const { id, labelName, type, placeholder, className, name } = props;

  return (
    <div className="form-control w-full max-w-xs mb-2">
       <Label htmlFor={id}>{labelName}</Label>
       <Input type={type} placeholder={placeholder} className={className} id={id} name={name} />
    </div>
  );
};

export default FormControl;
