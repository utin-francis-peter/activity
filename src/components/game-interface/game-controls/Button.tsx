import { TButton } from "../../../types/types";

const Button = ({ children, onClick }: TButton) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
