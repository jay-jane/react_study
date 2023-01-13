import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  /*
  jsx문법
   주석 - alt + shift + a
   return은 하나만
  */

   const name = "이이이";
   const age = 20;
   const myStyle = {color: 'white', backgroundColor: 'black', fontSize: 20 /* '20px' */};
  return (
    <Fragment>
      <ul style={{listStyle: 'none'}}>
        <li>1. 주석 - alt + shift + a</li>
        <li>2. return 구문은 하나, 반드시 하나의 태그를 리턴해야 함</li>
        <li>3. div를 사용하고 싶지 않으면 Fragment 컴포넌트 사용</li>
        <li>4. 함수 안에서 변수를 만들고 사용하고 싶으면 {} 사용</li>
        <li>5. if 대신 3항연산자 사용</li>
        <li>6. 화면에 그리고 싶은 내용이 없다면 null 리턴</li>
        <li>7. undefined를 리턴하면 안 됨(렌더링은 가능)</li>
        <li>8. DOM에 직접 스타일을 적용하고 싶으면 속성은 카멜 표기법으로 작성하고 객체로 묶기</li>
        <li>9. class 속성 대신 className 사용</li>
        <li>10. 홀로 사용하는 태그는 반드시 닫는 태그 작성(ex/ {/* <input/>, <br/> */})</li>
      </ul>
      <div style={myStyle}>
        안녕<br/>
        name값 : {name}<br/>
        {name === '이이이' ? '이이이o' : '이이이x'}<br/>
        {name === '이이' ? <h3>이이이o</h3> : <h3>이이이x</h3>}
        {age === 30 ? <h3>30</h3> : null}
      </div>
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         ㅎㅇ
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트 알아보기
        </a>
      </header>
    </div> 
    </Fragment>



  );
}

export default App;
