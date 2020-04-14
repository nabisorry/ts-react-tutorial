import React from "react";

// props 타입지정
type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
};

//FC 사용해서 얻는 이점
// children 사용가능
// Greetings. 해서 자도완성 기능을 지원한다.

// 단점
// defaultProps 가 정상 적으로 작동하지 않는다.
// 사용하려면 type props 에서 ?로 지정해주고  default prameter 로 작성한다.
// name? : string
// const Greetings: React.FC<GreetingsProps> = ({ name = '!' }) =>

// FC사용
// const Greetings: React.FC<GreetingsProps> = ({ name }) => {
//   return <div>{name}</div>;
// };

// 기본 function 사용
function Greetings({ name, optional, onClick, children }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>클릭</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  name: "다빈",
};

export default Greetings;
