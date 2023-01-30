import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 고기 맛집';
  // useState로 설정된 변수는 재렌더링을 한다. 
  // 자주 바뀌는 데이터는 useState로 설정한다.
  let [글제목, b] = useState(['남자 코트 추천', '여자 코트 추천', '제주 맛집 추천']);  

  return (
    
    <div className="App"> 
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize: '16px'}}>React 공부하기</h4>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      
      <h4 id>{post}</h4>
    </div>
  );
}

export default App;

// 1. JSX에서는 class 대신 className을 사용한다.
// 2. JSX에서는 중괄호를 사용하여 data binding을 한다.
// 3. style 넣을 때 style={{ 스타일명: 값 }}. font-size tage대신 fontSize로 쓴다.