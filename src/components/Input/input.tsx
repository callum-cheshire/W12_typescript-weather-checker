import Button from "../Button/button";

type Inputprops = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

const Input = ({ handleChange, handleClick }: Inputprops) => {
  return (
    <div>
      <input onChange={handleChange}></input>
      <Button handleClick={handleClick}/>
    </div>
  );
};

export default Input;
