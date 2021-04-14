import { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface Props extends ButtonProps {
  circular?: boolean;
  colorBase?: string;
}

const ButtonComponent: React.FC<Props> = ({
  children,
  circular,
  colorBase,
  ...rest
}) => {
  return <Button {...rest}>{children}</Button>;
};
export default ButtonComponent;
