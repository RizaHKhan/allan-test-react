import React from "react";

interface Props {
  title: string;
}

const Button = (props: Props) => {
  const handleClick = () => {
    console.log("handling click");
  };

  return (
    <button className="Button" onClick={handleClick}>
      {props.title}
    </button>
  );
};

export default Button;
