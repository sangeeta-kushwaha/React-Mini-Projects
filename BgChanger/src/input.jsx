import { useState } from "react";

function Input() {
  const [val, setVal] = useState("");
  return (
    <>
      <h1>input field value </h1>
      <input
        type="text"
        value={val}
        onChange={(event) => {
          setVal(event.target.value);
        }}
      />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}> clear</button>
    </>
  );
}

export default Input;
