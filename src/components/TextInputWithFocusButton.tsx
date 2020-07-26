import React, { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef<null | HTMLInputElement>(null);

  const onButtonClick = () => {
    (inputEl.current as HTMLInputElement).focus();
  };

  return (
    <>
      <input type="text" ref={inputEl} />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;
