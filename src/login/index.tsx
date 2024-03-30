import "./index.css";

import { ChangeEvent, useState } from "react";
import Input from "../components/input";

const Login = () => {
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container">
      <Input className="wrapper" name="id" value={values.id}>
        <Input.Title title="아이디 입력" />
        <Input.Body onChange={onChange} />
      </Input>
      <Input className="wrapper" name="password" value={values.password}>
        <Input.Title title="비밀번호 입력" />
        <Input.Body onChange={onChange} />
      </Input>
    </div>
  );
};

export default Login;
