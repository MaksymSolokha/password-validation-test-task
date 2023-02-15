import React, { useEffect, useState } from "react";

import "./InputPassword.scss";
import {
  digits,
  green,
  grey,
  letters,
  red,
  symbols,
  yellow,
} from "../../constants/constants";
import Input from "../Input/Input";

const InputPassword = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [passwordColor, setPasswordColor] = useState({
    easy: grey,
    medium: grey,
    strong: grey,
  });

  useEffect(() => {
    if (inputPassword === "") {
      setPasswordColor({
        easy: grey,
        medium: grey,
        strong: grey,
      });
    } else {
      if (inputPassword.length <= 8) {
        setPasswordColor({
          easy: red,
          medium: red,
          strong: red,
        });
      } else {
        if (
          letters.test(inputPassword) ||
          digits.test(inputPassword) ||
          symbols.test(inputPassword)
        ) {
          setPasswordColor({
            easy: red,
            medium: grey,
            strong: grey,
          });
        }
        if (
          (letters.test(inputPassword) && symbols.test(inputPassword)) ||
          (letters.test(inputPassword) && digits.test(inputPassword)) ||
          (digits.test(inputPassword) && symbols.test(inputPassword))
        ) {
          setPasswordColor({
            easy: yellow,
            medium: yellow,
            strong: grey,
          });
        }
        if (
          letters.test(inputPassword) &&
          digits.test(inputPassword) &&
          symbols.test(inputPassword)
        ) {
          setPasswordColor({
            easy: green,
            medium: green,
            strong: green,
          });
        }
      }
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
