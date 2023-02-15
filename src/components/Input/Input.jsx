import React from "react";

import "./input.scss";

const Input = ({ onChange, value }) => {
  return (
    <div>
      <input
        value={value}
        className={"input"}
        type="password"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
