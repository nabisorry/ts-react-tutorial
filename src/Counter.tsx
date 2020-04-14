import React, { useState } from "react";

// 컴포넌트를 tsx 로 만들어도 크게 달라지는 점이 없다
function Counter() {
  const [count, setCount] = useState<number>(0); //generics 생략 가능
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
