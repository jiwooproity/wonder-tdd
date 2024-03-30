import { ChangeEvent, useContext, useState } from "react";
import { createContext } from "react";

interface Props {
  value: string;
  name: string;
  className: string;
  children: JSX.Element[];
}

interface TitleProps {
  title: string;
}

interface BodyProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputContext = createContext({
  name: "",
  value: "",
});

const Input = (props: Props) => {
  return (
    <InputContext.Provider value={{ name: props.name, value: props.value }}>
      <div className={props.className}>{props.children}</div>
    </InputContext.Provider>
  );
};

const Title = (props: TitleProps) => {
  return <h1 className="title">{props.title}</h1>;
};

const Body = (props: BodyProps) => {
  const context = useContext(InputContext);
  return (
    <input
      name={context.name}
      value={context.value}
      onChange={props.onChange}
      placeholder={context.name}
    />
  );
};

Input.Title = Title;
Input.Body = Body;

export default Input;
