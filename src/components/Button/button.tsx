import './button.css'

type ButtonProps = {
  handleClick: () => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button  className="button" onClick={() => handleClick()}>Submit</button>;
};

export default Button;
