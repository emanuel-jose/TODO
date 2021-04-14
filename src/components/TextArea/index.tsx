import { TextArea } from "./styles";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextAreaComponent: React.FC<TextAreaProps> = ({ ...rest }) => {
  return <TextArea rows={5} cols={30} {...rest}></TextArea>;
};

export default TextAreaComponent;
