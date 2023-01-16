import { Component } from "react";

class MyComponent3 extends Component {

    //state는 생성자 안에서 초기화
    //state의 접근은 this.state를 이용
    //state는 반드시 객체 모형이어야 함
    //클래스형에서 생성자를 작성할 때에는 반드시 props를 받고 super를 통해 상위컴포넌트에 연결해야 함
    constructor(props) {
        super(props);
        this.state = {
            a: 1, //키 : 값
            b: props.name //super로부터 전달받은name
        }
    }

    //클래스형 컴포넌트 render 함수 안에서 return문 작성
    render() {
        let {name} = this.props;
        console.log(name);
        return (
            <>
                <hr/>
                <div>클래스형 컴포넌트</div>
                state 값 : {this.state.a}<br/>
                state 값 : {this.state.b}
            </>
        )
    }
}

export default MyComponent3;
