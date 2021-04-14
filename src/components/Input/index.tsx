import React, { InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputComponent: React.FC<InputProps> = ({ ...rest }) => {
  return <Input {...rest}></Input>;
};

export default InputComponent;
