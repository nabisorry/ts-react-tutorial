import React, { useReducer } from "react";
import { useSampleState, useSampleDispatch } from "./SampleContext";

// useReducer 사용해서 구현한 코드
// type Color = "red" | "orange" | "yellow";

// type State = {
//   count: number;
//   text: string;
//   color: Color;
//   isGood: boolean;
// };

// type Action =
//   | { type: "SET_COUNT"; count: number }
//   | { type: "SET_TEXT"; text: string }
//   | { type: "SET_COLOR"; color: Color }
//   | { type: "TOGGLE_GOOD" };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case "SET_COUNT":
//       return {
//         ...state,
//         count: action.count,
//       };
//     case "SET_TEXT":
//       return {
//         ...state,
//         text: action.text,
//       };
//     case "SET_COLOR":
//       return {
//         ...state,
//         color: action.color,
//       };
//     case "TOGGLE_GOOD":
//       return {
//         ...state,
//         isGood: !state.isGood,
//       };
//     default:
//       throw new Error("오류");
//   }
// }

function ReducerSample() {
  // useReducer 사용 해서 구현한 코드
  //   const [state, dispatch] = useReducer(reducer, {
  //     count: 0,
  //     text: "hello",
  //     color: "red",
  //     isGood: true,
  //   });

  // context 사용 해서 구현한 코드
  const state = useSampleState();
  const dispatch = useSampleDispatch();
  const setCount = () => dispatch({ type: "SET_COUNT", count: 5 });
  const setText = () => dispatch({ type: "SET_TEXT", text: "bye" });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "yellow" });
  const toogleGood = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <h1>Reducer</h1>
      <p>
        <code>count : </code> {state.count}
      </p>
      <p>
        <code>text : </code>
        {state.text}
      </p>
      <p>
        <code>color : </code>
        {state.color}
      </p>
      <p>
        <code>isGood : </code>
        {`${state.isGood}`}
      </p>
      <button onClick={setCount}>SET_COUNT</button>
      <button onClick={setText}>SET_TEXT</button>
      <button onClick={setColor}>SET_COLOR</button>
      <button onClick={toogleGood}>TOGGLE_GOOD</button>
    </div>
  );
}

export default ReducerSample;
