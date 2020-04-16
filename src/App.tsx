import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import CounterReducer from "./CounterReducer";
import ReducerSample from "./RedecerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  const onSubmint = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <SampleProvider>
      <Greetings name="리액트" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmint} />
      <CounterReducer />
      <ReducerSample />
    </SampleProvider>
  );
}

export default App;
