
/*
수업 교재 p.87
 컴포넌트 선언 방법은 크게 2가지(함수형, 클래스)
 컴포넌트는 여러 개일 수 있음
 모듈 내보내기 - export default
 모듈 가져오기 - import ~ from 경로

수업 교재 p.96
 props - 상위 컴포넌트에서 하위 컴포넌트로 전달하는 매개변수
 객체 형태로 전달되기 때문에 {}로 값을 받음
 props는 읽기 전용(값은 부모에서 바꿔서 전달함)
*/
import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";

const App = () => {
    return (
        <Fragment>
            <h3>my App.js</h3>
            {/* props */}
            <MyComponent name={"이이이"} age={20} email={"dldl@dldl"}/><br/>
            <MyComponent2 name={"김김"}/><br/>

            {/* 클래스형 props */}
            <MyComponent3 name={"박박"}/>

        </Fragment>
    )
}

export default App; //내보내기