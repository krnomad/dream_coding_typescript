import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 고기 맛집";
  // useState로 설정된 변수는 재렌더링을 한다.
  // 자주 바뀌는 데이터는 useState로 설정한다.
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "제주 맛집 추천",
  ]);
  let [따봉, 따봉변경] = useState(0); // 따봉변경은 state 변경 함수 이다.

  // function 함수(){
  //   console.log(1);
  //   따봉++;
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>React 공부하기</h4>
      </div>
      <div className="list">
        {/* onCLick event handler남 인자로 함수만 받는다 */}
        {/* state 변경 함수는 변경할 값을 널는다 */}
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div>
        <button onClick={()=>{글제목변경(["여자 코드 추천", 글제목[1], 글제목[2]])}}>버튼</button>
      </div>

      <h4 id>{post}</h4>
    </div>
  );
}

export default App;

// 1. JSX에서는 class 대신 className을 사용한다.
// 2. JSX에서는 중괄호를 사용하여 data binding을 한다.
// 3. style 넣을 때 style={{ 스타일명: 값 }}. font-size tage대신 fontSize로 쓴다.
