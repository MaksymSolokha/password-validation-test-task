import React, { useState } from "react";

import "./input.scss";

const Input = () => {
  const [value, setValue] = useState("");
  const letters = new RegExp(/[a-z]/);
  const digits = new RegExp(/\d/);
  const symbols = new RegExp(/[!"№;%:?*()_+=-]/);
  const passValid = {
    easy: {
      color: "grey",
    },
    medium: {
      color: "grey",
    },
    strong: {
      color: "grey",
    },
  };

  if (value.length === 0) {
    passValid.easy.color = "grey";
    passValid.medium.color = "grey";
    passValid.strong.color = "grey";
  } else {
    if (value.length <= 8) {
      console.log("short");
      passValid.easy.color = "red";
      passValid.medium.color = "red";
      passValid.strong.color = "red";
    } else {
      if (letters.test(value) || digits.test(value) || symbols.test(value)) {
        passValid.easy.color = "red";
        passValid.medium.color = "grey";
        passValid.strong.color = "grey";
      }
      if (
        (letters.test(value) && symbols.test(value)) ||
        (letters.test(value) && digits.test(value)) ||
        (digits.test(value) && symbols.test(value))
      ) {
        passValid.easy.color = "yellow";
        passValid.medium.color = "yellow";
        passValid.strong.color = "grey";
      }
      if (letters.test(value) && digits.test(value) && symbols.test(value)) {
        passValid.easy.color = "green";
        passValid.medium.color = "green";
        passValid.strong.color = "green";
      }
    }
  }

  return (
    <div className={"container"}>
      <input
        className={"input"}
        type="password"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="password">
        <div className={passValid.easy.color}>Easy</div>
        <div className={passValid.medium.color}>Medium</div>
        <div className={passValid.strong.color}>Strong</div>
      </div>
    </div>
  );
};

export default Input;
