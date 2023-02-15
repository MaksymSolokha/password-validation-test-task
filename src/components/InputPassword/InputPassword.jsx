import React, { useEffect, useState } from "react";

import { green, grey, red, yellow } from "../../constants/colors";
import { digits, letters, symbols } from "../../constants/regExp";

import "./InputPassword.scss";
import Input from "../Input/Input";

const InputPassword = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [passwordColor, setPasswordColor] = useState({
    easy: grey,
    medium: grey,
    strong: grey,
  });

  const emptyPassword = inputPassword.length === 0;
  const shortPassword = inputPassword.length <= 8;
  const easyPassword =
    letters.test(inputPassword) ||
    digits.test(inputPassword) ||
    symbols.test(inputPassword);
  const mediumPassword =
    (letters.test(inputPassword) && symbols.test(inputPassword)) ||
    (letters.test(inputPassword) && digits.test(inputPassword)) ||
    (digits.test(inputPassword) && symbols.test(inputPassword));
  const strongPassword =
    letters.test(inputPassword) &&
    digits.test(inputPassword) &&
    symbols.test(inputPassword);

  useEffect(() => {
    if (emptyPassword) {
      setPasswordColor({
        easy: grey,
        medium: grey,
        strong: grey,
      });
      return;
    }
    if (shortPassword) {
      setPasswordColor({
        easy: red,
        medium: red,
        strong: red,
      });
      return;
    }
    if (easyPassword) {
      setPasswordColor({
        easy: red,
        medium: grey,
        strong: grey,
      });
    }
    if (mediumPassword) {
      setPasswordColor({
        easy: yellow,
        medium: yellow,
        strong: grey,
      });
    }
    if (strongPassword) {
      setPasswordColor({
        easy: green,
        medium: green,
        strong: green,
      });
    }
  }, [inputPassword]);

  const onChange = (password) => {
    setInputPassword(password);
  };

  return (
    <div className={"input__password"}>
      <Input onChange={onChange} value={inputPassword} />
      <div className="input__password__container">
        <div className={`input__password__validation ${passwordColor.easy}`}>
          Easy
        </div>
        <div className={`input__password__validation ${passwordColor.medium}`}>
          Medium
        </div>
        <div className={`input__password__validation ${passwordColor.strong}`}>
          Strong
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
