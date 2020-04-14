import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };
  const onSubmint = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="리액트" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmint} />
    </>
  );
}

export default App;
