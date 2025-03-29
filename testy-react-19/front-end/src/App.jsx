import { useRef } from "react";
import "./index.css";

function Input({ placeholder, ref }) {
  return <input ref={ref} type="text" placeholder={placeholder} />;
}

export function App() {
  const inputRef = useRef();
  return (
    <>
      <button onClick={() => inputRef.current.focus()}>Focus input</button>
      <hr />
      <Input ref={inputRef} placeholder="wpisz coś" />
    </>
  );
}
