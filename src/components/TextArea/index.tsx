import { TextArea } from "./styles";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextAreaComponent: React.FC<TextAreaProps> = ({ ...rest }) => {
  return <TextArea {...rest}></TextArea>;
};

export default TextAreaComponent;
