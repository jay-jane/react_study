import { useState } from "react";

const EventComponent = () => {

    //name을 저장할 useState
    const [name, setName] = useState('');
    //이벤트 함수의 첫 번째 매개변수에 이벤트에 대한 정보를 넣어줌
    const handleName = (e) => {
        // console.log(e.target.value); //input창에 입력된 값
        setName(e.target.value); //state값 세팅
    }
    //topic 저장, 이벤트
    const [topic, setTopic] = useState('');
    const handleTopic = (e) => {
        setTopic(e.target.value);
    }
    //클릭 이벤트
    const handleClick = () => {
        alert(`${name}님의 topic - ${topic} 입니다`); //state값
        setName(''); //인풋 데이터 초기화
        setTopic(''); //인풋 데이터 초기화
    }
    //엔터 키 처리
    const handlePress = (e) => {
        // console.log(e.keyCode); //엔터의 키 코드 값 13
        if(e.keyCode === 13) { //누른 키가 엔터일 경우
            handleClick(); //클릭이벤트 호출
        }
    }

    return (
        <>
            <h3>리액트 이벤트 핸들링(인풋 데이터)</h3>
            <input type="text" name="name" onChange={handleName} value={name}/>
            <div>결과 : {name}</div>

            <input type="text" name="topic" onChange={handleTopic} onKeyUp={handlePress} value={topic} />
            <div>결과 : {topic}</div> {/* keyUp - 키를 눌렀다 뗄 때 발생 */}
            
            <button type="button" onClick={handleClick}>변경</button>
        </>
    )
}

export default EventComponent;